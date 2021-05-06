import { tracked } from '@glimmer/tracking';
import { action, setProperties, get } from '@ember/object';
import { isBlank, isNone } from '@ember/utils';
import { run } from '@ember/runloop';
import { warn } from '@ember/debug';
import ModelsTable from './models-table';

/**
 * Table-component with pagination, sorting and filtering.
 *
 * It should be used when pagination, filtering and sorting are done on the server-side. Otherwise [models-table](Components.ModelsTable.html) should be used.
 *
 * This component extends the base models-table component. For the end user, it can be used (nearly) the same:
 *
 * ```hbs
 * <ModelsTableServerPaginated @data={{this.data}} @columns={{this.columns}} />
 * ```
 *
 * Usage with block context:
 *
 * ```hbs
 * <ModelsTableServerPaginated @data={{this.data}} @columns={{this.columns}} as |MT|>
 *   <MT.GlobalFilter />
 *   <MT.DataGroupBySelect />
 *   <MT.ColumnsDropdown />
 *   <MT.Table />
 *   <MT.Footer />
 * </ModelsTable>
 * ```
 *
 * ModelsTableServerPaginated yields same components, actions and properties as a ModelsTable does. Check its docs for more info.
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
 * ```js
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
 * ```
 *
 * This default configuration would try to get the total page count from `model.get('meta.pagesCount')` and the total item count from `model.get('meta.itemsCount')`, and would then go on to build the following query:
 *
 * ```js
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
export default class ModelsTableServerPaginated extends ModelsTable {
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
  @tracked
  metaPagesCountProperty = 'pagesCount';

  /**
   * The property on meta to load the total item count from.
   *
   * @property metaItemsCountProperty
   * @type string
   * @default 'itemsCount'
   */
  @tracked
  metaItemsCountProperty = 'itemsCount';

  /**
   * The time to wait until new data is actually loaded.
   * This can be tweaked to avoid making too many server requests.
   *
   * @property debounceDataLoadTime
   * @type number
   * @default 500
   */
  get debounceDataLoadTime() {
    return this.args.debounceDataLoadTime ?? 500;
  }

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
    pageSize: 'pageSize',
  };

  @tracked
  _filteredContent = null;
  /**
   * @property filteredContent
   * @default null
   * @protected
   * @type object[]
   */
  get filteredContent() {
    return this._filteredContent ?? this.args.data;
  }

  /**
   * For server side filtering, arrangedContent is same as the filtered content
   *
   * @property arrangedContent
   * @protected
   * @type object[]
   */
  get arrangedContent() {
    return this.filteredContent;
  }

  /**
   * For server side filtering, visibleContent is same as the filtered content
   *
   * @property visibleContent
   * @protected
   * @type object[]
   */
  get visibleContent() {
    return this.arrangedContent;
  }

  /**
   * The total content length is get from the meta information.
   * Set metaItemsCountProperty to change from which meta property this is loaded.
   *
   * @property arrangedContentLength
   * @type number
   * @protected
   */
  get arrangedContentLength() {
    const meta =
      this.filteredContent && this.filteredContent.meta
        ? this.filteredContent.meta
        : {};
    return get(meta, this.metaItemsCountProperty) || 0;
  }

  /**
   * The pages count is get from the meta information.
   * Set metaPagesCountProperty to change from which meta property this is loaded.
   *
   * @property pagesCount
   * @type number
   * @protected
   */
  get pagesCount() {
    const meta =
      this.filteredContent && this.filteredContent.meta
        ? this.filteredContent.meta
        : {};
    return get(meta, this.metaPagesCountProperty) || 1;
  }

  /**
   * The index of the last item that is currently being shown.
   *
   * @property lastIndex
   * @type number
   * @protected
   */
  get lastIndex() {
    let pageMax = parseInt(this.pageSize, 10) * this.currentPageNumber;
    return Math.min(pageMax, this.arrangedContentLength);
  }

  /**
   * This function actually loads the data from the server.
   * It takes the store, modelName and query from the passed in data-object and adds page, sorting & filtering to it.
   *
   * @return Promise
   * @method _loadData
   * @private
   */
  _loadData() {
    const {
      data,
      currentPageNumber,
      pageSize,
      processedColumns: columns,
      sortProperties,
      filterString,
    } = this;
    if (!data.query) {
      warn(
        'You must use http://emberjs.com/api/data/classes/DS.Store.html#method_query for loading data',
        false,
        { id: '#emt-query-usage' }
      );
      return;
    }
    let query = Object.assign({}, data.query);
    let store = data.store;
    let modelName = data.type.modelName;

    // Add pagination information
    query[this.filterQueryParameters.page] = currentPageNumber;
    query[this.filterQueryParameters.pageSize] = pageSize;
    // Add sorting information
    if (sortProperties && sortProperties.length) {
      if (this.multipleColumnsSorting) {
        query = this.multipleColumnsSortingWrapper(query, sortProperties);
      } else {
        if (sortProperties[0]) {
          let [sortBy, sortDirection] = sortProperties[0].split(':');
          query = this.singleColumnSortingWrapper(
            query,
            sortBy,
            sortDirection.toUpperCase()
          );
        }
      }
    } else {
      delete query[[this.filterQueryParameters.sort]];
      delete query[[this.filterQueryParameters.sortDirection]];
    }

    // Add global filter
    let globalFilter = this.filterQueryParameters.globalFilter;
    if (filterString) {
      query[globalFilter] = filterString;
    } else {
      delete query[globalFilter];
    }

    // Add per-column filter
    if (this.useFilteringByColumns) {
      columns.forEach((column) => {
        let filter = column.filterString;
        this.setQueryFilter(query, column, column.filterField, filter);
      });
    }

    setProperties(this, { isLoading: true, isError: false });
    return this.doQuery(store, modelName, query)
      .then(() => setProperties(this, { isLoading: false, isError: false }))
      .catch(() => setProperties(this, { isLoading: false, isError: true }));
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
   * @return Promise
   */
  doQuery(store, modelName, query) {
    return store
      .query(modelName, query)
      .then((newData) => (this._filteredContent = newData));
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
   * @return object query parameters
   * @method singleColumnSortingWrapper
   */
  singleColumnSortingWrapper(query, sortBy, sortDirection) {
    query[this.filterQueryParameters.sort] = sortBy;
    query[this.filterQueryParameters.sortDirection] = sortDirection;

    return query;
  }

  /**
   * Wrapper for sorting query when multi columns sorting is used
   *
   * @param {object} query
   * @param {object} sortProperties
   * @return object query parameters
   * @method multipleColumnsSortingWrapper
   */
  multipleColumnsSortingWrapper(query, sortProperties) {
    query[this.filterQueryParameters.sort] = sortProperties
      .map((sortProp) => {
        const [prop, direction] = sortProp.split(':');
        const sign = direction.toLowerCase() === 'desc' ? '-' : '';
        return `${sign}${prop}`;
      })
      .join(',');

    return query;
  }

  /**
   * @protected
   * @event sort
   * @param {Utils.ModelsTableColumn} column
   */
  @action
  sort(column) {
    let sortedBy = column.sortedBy || column.propertyName;
    if (isNone(sortedBy)) {
      return;
    }
    let currentSorting = column.sorting;
    let newSorting = this.sortMap[currentSorting.toLowerCase()];
    let sortingArgs = [column, sortedBy, newSorting];
    if (this.multipleColumnsSorting) {
      this._multiColumnsSorting(...sortingArgs);
    } else {
      this._singleColumnSorting(...sortingArgs);
    }
    this.userInteractionObserver();
    this._loadDataOnce();
  }

  _loadDataOnce() {
    run.debounce(this, this._loadData, this.debounceDataLoadTime);
  }

  constructor(owner, args) {
    super(owner, args);
    this.multipleColumnsSorting = false;
  }

  @action
  changeColumnFilter(...args) {
    super.changeColumnFilter(...args);
    this._loadDataOnce();
  }

  @action
  changeGlobalFilter(...args) {
    super.changeGlobalFilter(...args);
    this._loadDataOnce();
  }

  @action
  changePageSize(...args) {
    super.changePageSize(...args);
    this._loadDataOnce();
  }

  @action
  gotoCustomPage(...args) {
    super.gotoCustomPage(...args);
    this._loadDataOnce();
  }

  @action
  clearFilters(...args) {
    super.clearFilters(...args);
    this._loadDataOnce();
  }
}
