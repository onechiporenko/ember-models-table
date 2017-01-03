import Ember from 'ember';
import ModelsTable from './models-table';
import layout from '../templates/components/models-table';

var { get, set, computed, typeOf, run } = Ember;

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
    var itemsCountProperty = get(this, 'metaItemsCountProperty');
    var meta = get(this, 'filteredContent.meta') || {};
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
    var meta = get(this, 'filteredContent.meta') || {};
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
  lastIndex: computed('pageSize', 'currentPageNumber', 'arrangedContentLength', function () {
    var pageMax = get(this, 'pageSize') * get(this, 'currentPageNumber');
    var itemsCount = get(this, 'arrangedContentLength');
    return Math.min(pageMax, itemsCount);
  }),

  _buildColumnMap() {
    const attrs = this.get('data.type.attributes');
    let columnMap = {};

    if (Ember.typeOf(attrs) !== 'undefined') {
      attrs.forEach(attr => {
        columnMap[attr.name] = this._buildColumn(attr);
      });
    }

    return columnMap;
  },

  /**
   * Builds a column configuration from a model's attributes.
   * Used to create configurations for ```this.defaultColumns``` and overrides the default method
   * to enable configuration of a model-table's propertyName through model.attr options.
   *
   * @param modelAttr
   * @returns {{propertyName}}
   * @private
   */
  _buildColumn(modelAttr) {
    const data = this.get('data');
    const options = Ember.get(modelAttr, 'options');
    let colOptions = {
      propertyName: modelAttr.name
    };

    if (data.get(`query.${modelAttr.name}`)) {
      colOptions.filterString = data.get(`query.${modelAttr.name}`);
    }

    if (modelAttr && options) {
      if (options.cellTemplate) {
        colOptions.template = cellTemplate;
      }
    }

    return colOptions;
  },

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
      Ember.Logger.warn('You must use http://emberjs.com/api/data/classes/DS.Store.html#method_query for loading data');
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

      query = this.sortingWrapper(query, sortBy, sortDirection);
    } else {
      delete query[[get(this, 'filterQueryParameters.sort')]];
      delete query[[get(this, 'filterQueryParameters.sortDirection')]];
    }

    // Add global filter
    const filterParam = get(this, 'filterQueryParameters.globalFilter');
    let searchableItems = this.get('visibleProcessedColumns') || [];
    if (this.get('doFilteringByHiddenColumns')) {
      searchableItems = this.get('columns') || [];
    }
    if (filterString) {
      query[filterParam] = filterString;
      query[filterParam+'Keys'] = searchableItems.map(col=>{ return col.propertyName });
    } else {
      delete query[filterParam];
      delete query[filterParam+'Keys'];
    }

    // Add per-column filter
    columns.forEach((column) => {
      var filter = get(column, 'filterString');
      let filterTitle = this.getCustomFilterTitle(column);

      if (filter) {
        query[filterTitle] = filter;
      } else {
        delete query[filterTitle];
      }
    });

    set(this, 'isLoading', true);
    set(this, 'isError', false);
    store.query(modelName, query).then((newData) => {
      set(this, 'filteredContent', newData);
      set(this, 'isLoading', false);
      set(this, 'isError', false);
    }).catch(() => {
      set(this, 'isLoading', false);
      set(this, 'isError', true);
    });
  },

  /**
   * Wrapper for sorting query
   *
   * @param {object} query parameters
   * @param {string} sorting field
   * @param {string} sorting type
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
    observedProperties.forEach((propertyName) => {
      this.addObserver(propertyName, this._addPropertyObserver);
    });
  },

  willDestroyElement() {
    this._super(...arguments);

    let observedProperties = get(this, 'observedProperties');
    observedProperties.forEach((propertyName) => {
      this.removeObserver(propertyName);
    });
  }
});
