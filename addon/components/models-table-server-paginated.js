import Ember from 'ember';
import ModelsTable from './models-table';
import layout from '../templates/components/models-table';

const {
  get,
  set,
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
    let sort = sortProperties && get(sortProperties, 'firstObject');
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
    columns.forEach(column => {
      let filter = get(column, 'filterString');
      let filterTitle = this.getCustomFilterTitle(column);

      if (filter) {
        query[filterTitle] = filter;
      } else {
        delete query[filterTitle];
      }
    });

    setProperties(this, {isLoading: true, isError: false});

    let promise = store.query(modelName, query);
    promise.then(newData => setProperties(this, {isLoading: false, isError: false, filteredContent: newData}))
      .catch(() => setProperties(this, {isLoading: false, isError: true}));
    return promise;
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
      }
    },

    gotoLast () {
      if (!get(this, 'gotoForwardEnabled')) {
        return;
      }
      let pagesCount = get(this, 'pagesCount');
      set(this, 'currentPageNumber', pagesCount);
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

  didReceiveAttrs() {
    set(this, 'filteredContent', get(this, 'data'));
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
