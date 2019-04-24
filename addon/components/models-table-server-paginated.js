import Ember from 'ember';
import ModelsTable from './models-table';
import layout from '../templates/components/models-table';

const {
  get,
  set,
  isBlank,
  setProperties,
  computed,
  typeOf,
  run,
  $: {extend},
  Logger: {warn}
} = Ember;

export default ModelsTable.extend({

  layout,

  /**
   * True if data is currently being loaded from the server.
   * Can be used in the template to e.g. display a loading spinner.
   *
   * @type {boolean}
   * @name isLoading
   */
  isLoading: false,

  /**
   * True if last data query promise has been rejected.
   * Can be used in the template to e.g. indicate stale data or to e.g. show error state.
   *
   * @type {boolean}
   * @name isError
   */
  isError: false,

  /**
   * The property on meta to load the pages count from.
   *
   * @type {string}
   * @name metaPagesCountProperty
   */
  metaPagesCountProperty: 'pagesCount',
  /**
   * The property on meta to load the total item count from.
   *
   * @type {string}
   * @name metaItemsCountProperty
   */
  metaItemsCountProperty: 'itemsCount',

  /**
   * The time to wait until new data is actually loaded.
   * This can be tweaked to avoid making too many server requests.
   *
   * @type {number}
   * @name {debounceDataLoadTime}
   */
  debounceDataLoadTime: 500,

  /**
   * The query parameters to use for server side filtering / querying.
   *
   * @type {object}
   * @name filterQueryParameters
   */
  filterQueryParameters: {
    globalFilter: 'search',
    sort: 'sort',
    sortDirection: 'sortDirection',
    page: 'page',
    pageSize: 'pageSize'
  },

  observedProperties: ['currentPageNumber', 'sortProperties.[]', 'pageSize', 'filterString', 'processedColumns.@each.filterString'],

  /**
   * This is set during didReceiveAttr and whenever the page/filters change.
   */
  filteredContent: [],

  /**
   * For server side filtering, these two properties are the same as the filtered content.
   */
  visibleContent: computed.alias('arrangedContent'),
  arrangedContent: computed.alias('filteredContent'),

  /**
   * The total content length is get from the meta information.
   * Set metaItemsCountProperty to change from which meta property this is loaded.
   *
   * @type {number}
   * @name arrangedContentLength
   */
  arrangedContentLength: computed('filteredContent.meta', function () {
    let itemsCountProperty = get(this, 'metaItemsCountProperty');
    let meta = get(this, 'filteredContent.meta') || {};
    return get(meta, itemsCountProperty) || 0;
  }),

  /**
   * The pages count is get from the meta information.
   * Set metaPagesCountProperty to change from which meta property this is loaded.
   *
   * @type {number}
   * @name pagesCount
   */
  pagesCount: computed('filteredContent.meta', function () {
    let pagesCountProperty = get(this, 'metaPagesCountProperty');
    let meta = get(this, 'filteredContent.meta') || {};
    return get(meta, pagesCountProperty) || 1;
  }),

  /**
   * The index of the last item that is currently being shown.
   *
   * @type {number}
   * @name lastIndex
   */
  lastIndex: computed('pageSize', 'currentPageNumber', 'arrangedContentLength', function () {
    let pageMax = get(this, 'pageSize') * get(this, 'currentPageNumber');
    let itemsCount = get(this, 'arrangedContentLength');
    return Math.min(pageMax, itemsCount);
  }),

  pageSizeInit: computed('pageSizeOnInit', function() {
    return get(this, 'pageSizeOnInit') || 10;
  }),

  currentPageNumberInit:  computed('currentPageNumberOnInit', function() {
    return get(this, 'currentPageNumberOnInit') || 1;
  }),

  /**
   * This function actually loads the data from the server.
   * It takes the store, modelName and query from the passed in data-object and adds page, sorting & filtering to it.
   */
  _loadData: function () {
    let data = get(this, 'data');
    let currentPageNumber = get(this, 'currentPageNumber');
    let pageSize = get(this, 'pageSize');
    let columns = get(this, 'processedColumns');
    let sortProperties = get(this, 'sortProperties');
    let filterString = get(this, 'filterString');

    if (!get(data, 'query')) {
      warn('You must use http://emberjs.com/api/data/classes/DS.Store.html#method_query for loading data');
      return;
    }
    let query = extend({}, get(data, 'query'));
    let store = get(data, 'store');
    let modelName = get(data, 'type.modelName');

    // Add pagination information
    query[get(this, 'filterQueryParameters.page')] = currentPageNumber;
    query[get(this, 'filterQueryParameters.pageSize')] = pageSize;

    // Add sorting information
    let sort = sortProperties && get(sortProperties, 'length') ? sortProperties[0] : null;
    if (sort) {
      let [sortBy, sortDirection] = sort.split(':');
      query = this.sortingWrapper(query, sortBy, sortDirection.toUpperCase());
    } else {
      delete query[[get(this, 'filterQueryParameters.sort')]];
      delete query[[get(this, 'filterQueryParameters.sortDirection')]];
    }

    // Add global filter
    let globalFilter = get(this, 'filterQueryParameters.globalFilter');
    if (filterString) {
      query[globalFilter] = filterString;
    } else {
      delete query[globalFilter];
    }

    // Add per-column filter
    if (get(this, 'useFilteringByColumns')) {
      columns.forEach(column => {
        let filter = get(column, 'filterString');
        let filterTitle = this.getCustomFilterTitle(column);
        this._setQueryFilter(query, column, filterTitle, filter);
      });
    }

    setProperties(this, {isLoading: true, isError: false});

    let promise = store.query(modelName, query);
    promise.then(newData => setProperties(this, {isLoading: false, isError: false, filteredContent: newData}))
      .catch(() => setProperties(this, {isLoading: false, isError: true}));
    return promise;
  },

  /**
   * Actually set the filter on a query.
   * This can be overwritten for special case handling.
   * Note that this will mutate the given query object!
   *
   * @param {object} query the query to mutate
   * @param {object} column the column that is filtering
   * @param {string} filterTitle the query param name for filtering
   * @param {mixed} filter the actual filter value
   * @private
   */
  _setQueryFilter(query, column, filterTitle, filter) {
    if (!isBlank(filter)) {
      query[filterTitle] = filter;
    } else {
      delete query[filterTitle];
    }
  },

  /**
   * Wrapper for sorting query
   *
   * @param {object} query parameters
   * @param {string} sortBy
   * @param {string} sortDirection
   * @return {object} query parameters
   */
  sortingWrapper(query, sortBy, sortDirection) {
    query[get(this, 'filterQueryParameters.sort')] = sortBy;
    query[get(this, 'filterQueryParameters.sortDirection')] = sortDirection;

    return query;
  },

  /**
   * Customize filter title
   *
   * @param {object} column
   * @return {string} title
   */
  getCustomFilterTitle(column) {
    return get(column, 'filteredBy') || get(column, 'propertyName');
  },

  actions: {

    gotoNext () {
      if (!get(this, 'gotoForwardEnabled')) {
        return;
      }
      let pagesCount = get(this, 'pagesCount');
      let currentPageNumber = get(this, 'currentPageNumber');
      if (pagesCount > currentPageNumber) {
        this.incrementProperty('currentPageNumber');
        this.userInteractionObserver();
      }
    },

    gotoLast () {
      if (!get(this, 'gotoForwardEnabled')) {
        return;
      }
      let pagesCount = get(this, 'pagesCount');
      set(this, 'currentPageNumber', pagesCount);
      this.userInteractionObserver();
    },

    sort (column) {
      const sortMap = {
        none: 'asc',
        asc: 'desc',
        desc: 'none'
      };
      let sortedBy = get(column, 'sortedBy');
      if (typeOf(sortedBy) === 'undefined') {
        sortedBy = get(column, 'propertyName');
      }
      if (!sortedBy) {
        return;
      }

      let currentSorting = get(column, 'sorting');
      let newSorting = sortMap[currentSorting.toLowerCase()];
      let sortingArgs = [column, sortedBy, newSorting];
      this._singleColumnSorting(...sortingArgs);
      this.userInteractionObserver();
    }

  },

  init() {
    this._super(...arguments);
    set(this, 'pageSize', parseInt(get(this, 'pageSizeInit'), 10));
    set(this, 'currentPageNumber',  parseInt(get(this, 'currentPageNumberInit'),10));
  },

  didReceiveAttrs() {
    set(this, 'filteredContent', get(this, 'data'));

    let currentPageNumber = get(this, 'currentPageNumber');
    let pageSize = get(this, 'pageSize');
    if(currentPageNumber !== 1){
      //if content is less or eq pageSize then there is no need to store setted on init currentPageNumber
      if (get(this, 'arrangedContentLength') <= pageSize) {
        set(this, 'currentPageNumber', 1);
        this.userInteractionObserver();
      } else {
        //If currentPageNumber is out of range for new content, we will set pageNumber as max possible for new content
        if (currentPageNumber  > get(this, 'pagesCount')) {
          let newPageNumber = get(this, 'pagesCount');
          set(this, 'currentPageNumber', newPageNumber);
          this.userInteractionObserver();
        }
      }
    }
  },

  _addPropertyObserver() {
    run.debounce(this, this._loadData, get(this, 'debounceDataLoadTime'));
  },

  willInsertElement() {
    this._super(...arguments);

    let observedProperties = get(this, 'observedProperties');
    observedProperties.forEach(propertyName => this.addObserver(propertyName, this._addPropertyObserver));
  },

  willDestroyElement() {
    this._super(...arguments);

    let observedProperties = get(this, 'observedProperties');
    observedProperties.forEach(propertyName => this.removeObserver(propertyName));
  }
});
