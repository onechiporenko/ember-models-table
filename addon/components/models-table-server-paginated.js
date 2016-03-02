import Ember from 'ember';
import ModelsTable from './models-table';
import layout from 'templates/components/models-table';

var { get, set, computed, observer, typeOf, run } = Ember;

export default ModelsTable.extend({
  layout: layout,

  /**
   * True if data is currently being loaded from the server.
   * Can be used in the template to e.g. display a loading spinner.
   *
   * @type {boolean}
   * @name isLoading
   */
  isLoading: false,

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
    var itemsCountProperty = get(this, 'metaItemsCountProperty');
    var meta = get(this, 'filteredContent.meta');
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
    var pagesCountProperty = get(this, 'metaPagesCountProperty');
    var meta = get(this, 'filteredContent.meta');
    return get(meta, pagesCountProperty) || 1;
  }),

  /**
   * The index of the first item that is currently being shown.
   *
   * @type {number}
   * @name firstIndex
   */
  firstIndex: computed('pageSize', 'currentPageNumber', function () {
    return get(this, 'pageSize') * (get(this, 'currentPageNumber') - 1) + 1;
  }),

  /**
   * The index of the last item that is currently being shown.
   *
   * @type {number}
   * @name lastIndex
   */
  lastIndex: computed('pageSize', 'currentPageNumber', function () {
    var pageMax = get(this, 'pageSize') * get(this, 'currentPageNumber');
    var itemsCount = get(this, 'arrangedContentLength');
    return Math.min(pageMax, itemsCount);
  }),

  /**
   * Whenever the current page, sort direction, page size, global filtering or column filtering change,
   * The actual loading of data is debounced in order to avoid making too many requests to the server.
   */
  _loadDataObserver: observer('currentPageNumber', 'sortProperties.[]', 'pageSize', 'filterString', 'processedColumns.@each.filterString', function () {
    run.debounce(this, this._loadData, get(this, 'debounceDataLoadTime'));
  }),

  /**
   * This function actually loads the data from the server.
   * It takes the store, modelName and query from the passed in data-object and adds page, sorting & filtering to it.
   */
  _loadData: function () {
    var data = get(this, 'data');
    var currentPageNumber = get(this, 'currentPageNumber');
    var pageSize = get(this, 'pageSize');
    var columns = get(this, 'processedColumns');

    var sortProperties = get(this, 'sortProperties');
    var filterString = get(this, 'filterString');

    if (!get(data, 'query')) {
      return;
    }
    var query = Ember.$.extend({}, get(data, 'query'));
    var store = get(data, 'store');
    var modelName = get(data, 'type.modelName');

    // Add pagination information
    query[get(this, 'filterQueryParameters.page')] = currentPageNumber;
    query[get(this, 'filterQueryParameters.pageSize')] = pageSize;

    // Add sorting information
    var sort = sortProperties && get(sortProperties, 'length') ? sortProperties[0] : null;
    if (sort) {
      var sortBy = sort.split(':')[0];
      var sortDirection = sort.split(':')[1].toUpperCase();

      query[get(this, 'filterQueryParameters.sort')] = sortBy;
      query[get(this, 'filterQueryParameters.sortDirection')] = sortDirection;
    } else {
      delete query[[get(this, 'filterQueryParameters.sort')]];
      delete query[[get(this, 'filterQueryParameters.sortDirection')]];
    }

    // Add global filter
    if (filterString) {
      query[get(this, 'filterQueryParameters.globalFilter')] = filterString;
    } else {
      delete query[get(this, 'filterQueryParameters.globalFilter')];
    }

    // Add per-column filter
    columns.forEach((column) => {
      var filter = get(column, 'filterString');
      if (filter) {
        query[get(column, 'filteredBy') || get(column, 'propertyName')] = filter;
      } else {
        delete query[get(column, 'filteredBy') || get(column, 'propertyName')];
      }
    });

    set(this, 'isLoading', true);
    store.query(modelName, query).then((newData) => {
      set(this, 'filteredContent', newData);
      set(this, 'isLoading', false);
    });
  },

  actions: {

    gotoNext () {
      if (!get(this, 'gotoForwardEnabled')) {
        return;
      }
      var pagesCount = get(this, 'pagesCount');
      var currentPageNumber = get(this, 'currentPageNumber');
      if (pagesCount > currentPageNumber) {
        this.incrementProperty('currentPageNumber');
      }
    },

    gotoLast () {
      if (!get(this, 'gotoForwardEnabled')) {
        return;
      }
      var pagesCount = get(this, 'pagesCount');
      set(this, 'currentPageNumber', pagesCount);
    },

    sort (column) {
      const sortMap = {
        none: 'asc',
        asc: 'desc',
        desc: 'none'
      };
      var sortedBy = get(column, 'sortedBy');
      if (typeOf(sortedBy) === 'undefined') {
        sortedBy = get(column, 'propertyName');
      }
      if (!sortedBy) {
        return;
      }

      var currentSorting = get(column, 'sorting');
      var newSorting = sortMap[currentSorting.toLowerCase()];
      var sortingArgs = [column, sortedBy, newSorting];
      this._singleColumnSorting(...sortingArgs);
    },

  },

  didReceiveAttrs: function () {
    set(this, 'filteredContent', get(this, 'data'));
  },
});
