import {layout as templateLayout} from '@ember-decorators/component';
import {action, computed, setProperties, set, get} from '@ember/object';
import {alias} from '@ember/object/computed';
import {isBlank, isNone} from '@ember/utils';
import {run} from '@ember/runloop';
import {warn} from '@ember/debug';
import ModelsTable from './models-table';
import layout from '../templates/components/models-table';

/**
 * Table-component with pagination, sorting and filtering.
 *
 * It should be used when pagination, filtering and sorting are done on the server-side. Otherwise [models-table](Components.ModelsTable.html) should be used.
 *
 * This component extends the base models-table component. For the end user, it can be used (nearly) the same:
 *
 * ```hbs
 * <ModelsTableServerPaginated @data={{data}} @columns={{columns}} />
 * ```
 *
 * Usage with block context:
 *
 * ```hbs
 * <ModelsTableServerPaginated @data={{data}} @columns={{columns}} as |MT|>
 *   <MT.GlobalFilter />
 *   <MT.DataGroupBySelect />
 *   <MT.ColumnsDropdown />
 *   <MT.Table />
 *   <MT.Footer />
 * </ModelsTable>
 * ```
 *
 * ModelsTableServerPaginated yields references to the following contextual components:
 *
 * * [models-table/global-filter](Components.ModelsTableGlobalFilter.html) - global filter used for table data
 * * [models-table/data-group-by-select](Components.ModelsTableDataGroupBySelect.html) - dropdown to select property for table-rows grouping
 * * [models-table/columns-dropdown](Components.ModelsTableColumnsDropdown.html) - dropdown with list of options to toggle columns and column-sets visibility
 * * [models-table/table](Components.ModelsTableTable.html) - table with a data
 * * [models-table/footer](Components.ModelsTableFooter.html) - summary and pagination
 *
 * Check own docs for each component to get detailed info.
 *
 * ModelsTableServerPaginated has a lot of options you may configure, but there are two required properties called `data` and `columns`. First one contains data-query:
 *
 * ```js
 * model() {
 *  return this.store.query('my-model', {});
 * }
 * ```
 *
 * It will then take this query and extend it with pagination, sorting and filtering information. All other query parameters added in will remain untouched. Everything else works exactly the same - global filters, column filters etc. still use the same properties to control them. A few things to notice:
 *
 * - When using `filterWithSelect` for a column, you must use `predefinedFilterOptions`, because the automatic loading of possible filter values cannot work here.
 * - There is a new optional field `filteredBy` for columns, which works much like `sortedBy`: if set, this field will be used as query parameter, otherwise it will use the `propertyName`.
 * - Sorting will not use multipleColumnSorting, it will only sort by one column.
 * - If you set `sortedBy: false` on a column, sorting will be disabled for this column.
 *
 * There are a couple of things which can be configured to adapt to your API:
 *
 * ``` js
 * // The property on meta to load the pages count from.
 * metaPagesCountProperty: 'pagesCount',
 *
 * // The property on meta to load the total item count from.
 * metaItemsCountProperty: 'itemsCount',
 *
 * // The time to wait until new data is actually loaded.
 * // This can be tweaked to avoid making too many server requests.
 * debounceDataLoadTime: 500,
 *
 * // The query parameters to use for server side filtering / querying.
 * filterQueryParameters: {
 *   globalFilter: 'search',
 *   sort: 'sort',
 *   sortDirection: 'sortDirection',
 *   page: 'page',
 *   pageSize: 'pageSize'
 * },
 ```
 *
 * This default configuration would try to get the total page count from `model.get('meta.pagesCount')` and the total item count from `model.get('meta.itemsCount')`, and would then go on to build the following query:
 *
 * ``` js
 * columns: [
 *   {
 *     propertyName: 'name',
 *     filteredBy: 'model_name'
 *   }
 * ]
 *
 * // after searching globally for "searchtexthere"
 * // and in the name column for "filterforname",
 * // and going to page 2,
 * // the following query would be built:
 * ?page=2&pageSize=50&search=searchtexthere&sort=name&sortDirection=ASC&model_name=filterforname
 * ```
 *
 * @class ModelsTableServerPaginated
 * @namespace Components
 * @extends Components.ModelsTable
 */
export default
@templateLayout(layout)
class ModelsTableServerPaginated extends ModelsTable {

  /**
   * True if data is currently being loaded from the server.
   * Can be used in the template to e.g. display a loading spinner.
   *
   * @protected
   * @property isLoading
   * @type boolean
   * @default false
   */
  isLoading = false;

  /**
   * True if last data query promise has been rejected.
   * Can be used in the template to e.g. indicate stale data or to e.g. show error state.
   *
   * @protected
   * @property isError
   * @type boolean
   * @default false
   */
  isError = false;

  /**
   * The property on meta to load the pages count from.
   *
   * @property metaPagesCountProperty
   * @type string
   * @default 'pagesCount'
   */
  metaPagesCountProperty = 'pagesCount';

  /**
   * The property on meta to load the total item count from.
   *
   * @property metaItemsCountProperty
   * @type string
   * @default 'itemsCount'
   */
  metaItemsCountProperty = 'itemsCount';

  /**
   * The time to wait until new data is actually loaded.
   * This can be tweaked to avoid making too many server requests.
   *
   * @property debounceDataLoadTime
   * @type number
   * @default 500
   */
  debounceDataLoadTime = 500;

  /**
   * Determines if multi-columns sorting should be used
   *
   * @property multipleColumnsSorting
   * @type boolean
   * @default false
   */
  multipleColumnsSorting = false;

  /**
   * The query parameters to use for server side filtering / querying.
   *
   * @property filterQueryParameters
   * @type object
   */
  filterQueryParameters = {
    globalFilter: 'search',
    sort: 'sort',
    sortDirection: 'sortDirection',
    page: 'page',
    pageSize: 'pageSize'
  };

  /**
   * @property observedProperties
   * @type string[]
   * @default ['currentPageNumber', 'sortProperties.[]', 'pageSize', 'filterString', 'processedColumns.@each.filterString']
   * @protected
   */

  observedProperties = ['currentPageNumber', 'sortProperties.[]', 'pageSize', 'filterString', 'processedColumns.@each.filterString'];

  /**
   * This is set during didReceiveAttr and whenever the page/filters change.
   *
   * @property filteredContent
   * @override
   * @default null
   * @protected
   * @type object[]
   */
  filteredContent = null;

  /**
   * For server side filtering, visibleContent is same as the filtered content
   *
   * @property visibleContent
   * @override
   * @protected
   * @type object[]
   */
  @alias('arrangedContent') visibleContent;

  /**
   * For server side filtering, arrangedContent is same as the filtered content
   *
   * @property arrangedContent
   * @override
   * @protected
   * @type object[]
   */
  @alias('filteredContent') arrangedContent;

  /**
   * The total content length is get from the meta information.
   * Set metaItemsCountProperty to change from which meta property this is loaded.
   *
   * @property arrangedContentLength
   * @override
   * @type number
   * @protected
   */
  @computed('filteredContent.meta')
  get arrangedContentLength() {
    let meta = get(this, 'filteredContent.meta') || {};
    return get(meta, this.metaItemsCountProperty) || 0;
  }

  /**
   * The pages count is get from the meta information.
   * Set metaPagesCountProperty to change from which meta property this is loaded.
   *
   * @property pagesCount
   * @type number
   * @override
   * @protected
   */
  @computed('filteredContent.meta')
  get pagesCount() {
    let meta = get(this, 'filteredContent.meta') || {};
    return get(meta, this.metaPagesCountProperty) || 1;
  }

  /**
   * The index of the last item that is currently being shown.
   *
   * @property lastIndex
   * @type number
   * @override
   * @protected
   */
  @computed('pageSize', 'currentPageNumber', 'arrangedContentLength')
  get lastIndex() {
    let pageMax = parseInt(this.pageSize, 10) * this.currentPageNumber;
    return Math.min(pageMax, this.arrangedContentLength);
  }

  /**
   * This function actually loads the data from the server.
   * It takes the store, modelName and query from the passed in data-object and adds page, sorting & filtering to it.
   *
   * @returns {Promise}
   * @method _loadData
   * @private
   */
  _loadData() {
    const {data, currentPageNumber, pageSize, processedColumns: columns, sortProperties, filterString} = this;
    if (!get(data, 'query')) {
      warn('You must use http://emberjs.com/api/data/classes/DS.Store.html#method_query for loading data', false, {id: '#emt-query-usage'});
      return;
    }
    let query = Object.assign({}, get(data, 'query'));
    let store = get(data, 'store');
    let modelName = get(data, 'type.modelName');

    // Add pagination information
    query[get(this, 'filterQueryParameters.page')] = currentPageNumber;
    query[get(this, 'filterQueryParameters.pageSize')] = pageSize;
    // Add sorting information
    if (sortProperties && get(sortProperties, 'length')) {
      if (this.multipleColumnsSorting) {
        query = this.multipleColumnsSortingWrapper(query, sortProperties);
      }
      else {
        if (sortProperties[0]) {
          let [sortBy, sortDirection] = sortProperties[0].split(':');
          query = this.singleColumnSortingWrapper(query, sortBy, sortDirection.toUpperCase());
        }
      }
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
    if (this.useFilteringByColumns) {
      columns.forEach(column => {
        let filter = get(column, 'filterString');
        let filterTitle = this.getCustomFilterTitle(column);
        this.setQueryFilter(query, column, filterTitle, filter);
      });
    }

    setProperties(this, {isLoading: true, isError: false});
    return this.doQuery(store, modelName, query)
      .then(() => setProperties(this, {isLoading: false, isError: false}))
      .catch(() => setProperties(this, {isLoading: false, isError: true}));
  }

  /**
   * Do query-request to load new data
   *
   * You may override this method to add some extra behavior or even additional requests
   *
   * @method doQuery
   * @param {object} store
   * @param {string} modelName
   * @param {object} query
   * @returns {Promise}
   */
  doQuery(store, modelName, query) {
    return store.query(modelName, query).then(newData => set(this, 'filteredContent', newData));
  }

  /**
   * Actually set the filter on a query.
   * This can be overwritten for special case handling.
   * Note that this will mutate the given query object!
   *
   * @param {object} query the query to mutate
   * @param {object} column the column that is filtering
   * @param {string} filterTitle the query param name for filtering
   * @param {*} filter the actual filter value
   * @method setQueryFilter
   */
  setQueryFilter(query, column, filterTitle, filter) {
    if (!isBlank(filter)) {
      query[filterTitle] = filter;
    } else {
      delete query[filterTitle];
    }
  }

  /**
   * Wrapper for sorting query when single column sorting is used
   *
   * @param {object} query parameters
   * @param {string} sortBy
   * @param {string} sortDirection
   * @returns {object} query parameters
   * @method singleColumnSortingWrapper
   */
  singleColumnSortingWrapper(query, sortBy, sortDirection) {
    query[get(this, 'filterQueryParameters.sort')] = sortBy;
    query[get(this, 'filterQueryParameters.sortDirection')] = sortDirection;

    return query;
  }

  /**
   * Wrapper for sorting query when multi columns sorting is used
   *
   * @param {object} query
   * @param {object} sortProperties
   * @returns {object} query parameters
   * @method multipleColumnsSortingWrapper
   */
  multipleColumnsSortingWrapper(query, sortProperties) {
    query[get(this, 'filterQueryParameters.sort')] = sortProperties.map(sortProp => {
      const [prop, direction] = sortProp.split(':');
      const sign = direction.toLowerCase() === 'desc' ? '-' : '';
      return `${sign}${prop}`;
    }).join(',');

    return query;
  }

  /**
   * Customize filter title
   *
   * @method getCustomFilterTitle
   * @param {object} column
   * @returns {string} title
   */
  getCustomFilterTitle(column) {
    return get(column, 'filteredBy') || get(column, 'propertyName');
  }

  /**
   * @override
   * @event sort
   * @param {ModelsTableColumn} column
   */
  @action
  sort(column) {
    let sortedBy = get(column, 'sortedBy') || get(column, 'propertyName');
    if (isNone(sortedBy)) {
      return;
    }
    let currentSorting = get(column, 'sorting');
    let newSorting = this.sortMap[currentSorting.toLowerCase()];
    let sortingArgs = [column, sortedBy, newSorting];
    if (this.multipleColumnsSorting) {
      this._multiColumnsSorting(...sortingArgs);
    }
    else {
      this._singleColumnSorting(...sortingArgs);
    }
    this.userInteractionObserver();
  }

  didReceiveAttrs() {
    set(this, 'filteredContent', this.data);
  }

  _addPropertyObserver() {
    run.debounce(this, this._loadData, this.debounceDataLoadTime);
  }

  willInsertElement() {
    super.willInsertElement(...arguments);
    this.observedProperties.forEach(propertyName => this.addObserver(propertyName, this, '_addPropertyObserver'));
  }

  willDestroyElement() {
    super.willDestroyElement(...arguments);
    this.observedProperties.forEach(propertyName => this.removeObserver(propertyName, this, '_addPropertyObserver'));
  }
}
