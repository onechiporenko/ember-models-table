import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { isBlank, isNone } from '@ember/utils';
import { debounce } from '@ember/runloop';
import ModelsTable, { ModelsTableArgs } from './models-table';
import ModelsTableColumn from '../utils/emt/emt-column';
import { SortConstants } from '../constants/sort-constants';

interface DataRequestQuery {
  [key: string]: unknown;
}

export interface FilterQueryParameters {
  globalFilter: string;
  sort: string;
  sortDirection: string;
  page: string;
  pageSize: string;
}

export interface ModelsTableServerPaginatedArgs extends ModelsTableArgs {
  /**
   * Max number of record in the current table's page
   *
   * Items count depends on your API and may be placed not like bellow
   */
  itemsCount: number;

  /**
   * Number of table's pages
   *
   * Pages count depends on your API and may be placed not like bellow
   */
  pagesCount: number;

  /**
   * `doQuery` is an action-handler that must be passed to the `ModelsTableServerPaginated` component.
   *
   * It's called after interactions with table like:
   *
   * * Change page size
   * * Change page number
   * * Update any filter
   * * Do any sorting
   * * Clear any filter
   *
   * It's important to update data-property and both `itemsCount` and `pagesCount`.
   *
   * `doQuery` was implemented internally in the `ModelsTableServerPaginated` v.3 and `@ember/data` was "hardcoded" as a data-provider.
   * Now any data-provider can be used.
   */
  doQuery: (...args: any[]) => Promise<any>;
  /**
   * The query parameters to use for server side filtering / querying.
   *
   * @default {
   *   globalFilter: 'search',
   *   sort: 'sort',
   *   sortDirection: 'sortDirection',
   *   page: 'page',
   *   pageSize: 'pageSize'
   * }
   */
  filterQueryParameters?: FilterQueryParameters;
  /**
   * This can be tweaked to avoid making too many requests.
   *
   * `debounce` from `@ember/runloop` is used internally.
   */
  debounceDataLoadTime?: number;
  query?: Record<string, any>;
}

/**
 * Table-component with pagination, sorting and filtering.
 *
 * It should be used when pagination, filtering and sorting are done on the server-side. Otherwise, [[Core.ModelsTable | ModelsTable]] should be used.
 *
 * This component extends the base models-table component. For the end user, it can be used (nearly) the same:
 *
 * ```html
 * <ModelsTableServerPaginated
 *   @data={{this.data}}
 *   @columns={{this.columns}}
 *   @themeInstance={{this.themeInstance}}
 *   @doQuery={{this.doQuery}}
 *   @itemsCount={{this.itemsCount}}
 *   @pagesCount={{this.pagesCount}}
 * />
 * ```
 *
 * Usage with block context:
 *
 * ```html
 * <ModelsTableServerPaginated
 *   @data={{this.data}}
 *   @columns={{this.columns}}
 *   @themeInstance={{this.themeInstance}}
 *   @doQuery={{this.doQuery}}
 *   @itemsCount={{this.itemsCount}}
 *   @pagesCount={{this.pagesCount}}
 * as |MT|>
 *   <MT.GlobalFilter />
 *   <MT.DataGroupBySelect />
 *   <MT.ColumnsDropdown />
 *   <MT.Table />
 *   <MT.Footer />
 * </ModelsTableServerPaginated>
 * ```
 *
 * Here `doQuery` is an action-handler used when user interacts with table by changing page number, page size, global or column filter, sorting etc.
 *
 * `itemsCount` and `pageCount` show how many rows are in the table's page and how many pages are overall.
 *
 * ModelsTableServerPaginated yields same components, actions and properties as a ModelsTable does. Check its docs for more info.
 *
 * Check own docs for each component to get detailed info.
 *
 * ModelsTableServerPaginated has a lot of options you may configure, but there are six required properties called `data`, `columns`, `themeInstance`, `doQuery`, `itemsCount` and `pagesCount`.
 *
 * A few things to notice:
 *
 * - When using `filterWithSelect` for a column, you must use `predefinedFilterOptions`, because the automatic loading of possible filter values cannot work here.
 * - There is a new optional field `filteredBy` for columns, which works much like `sortedBy`: if set, this field will be used as query parameter, otherwise it will use the `propertyName`.
 * - Sorting will not use multipleColumnSorting, it will only sort by one column.
 * - If you set `sortedBy: false` on a column, sorting will be disabled for this column.
 *
 * There are a couple of things which can be configured to adapt to your API:
 *
 * ```js
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
 */
export default class ModelsTableServerPaginated extends ModelsTable<ModelsTableServerPaginatedArgs> {
  /**
   * True if data is currently being loaded from the server.
   * Can be used in the template to e.g. display a loading spinner.
   */
  isLoading = false;

  /**
   * True if last data query promise has been rejected.
   * Can be used in the template to e.g. indicate stale data or to e.g. show error state.
   */
  isError = false;

  /**
   * The time to wait until new data is actually loaded.
   * This can be tweaked to avoid making too many server requests.
   *
   * @default 500
   */
  protected get debounceDataLoadTime(): number {
    return this.args.debounceDataLoadTime ?? 500;
  }

  @tracked
  protected _filterQueryParameters = {
    globalFilter: 'search',
    sort: 'sort',
    sortDirection: 'sortDirection',
    page: 'page',
    pageSize: 'pageSize',
  };

  /**
   * The query parameters to use for server side filtering / querying.
   */
  protected get filterQueryParameters(): FilterQueryParameters {
    return this.args.filterQueryParameters ?? this._filterQueryParameters;
  }

  get filteredContent(): any {
    return this.args.data;
  }

  /**
   * For server side filtering, arrangedContent is same as the filtered content
   */
  get arrangedContent(): any {
    return this.filteredContent;
  }

  /**
   * For server side filtering, visibleContent is same as the filtered content
   */
  get visibleContent(): any {
    return this.arrangedContent;
  }

  get arrangedContentLength(): number {
    return this.args.itemsCount ?? 0;
  }

  get pagesCount(): number {
    return this.args.pagesCount ?? 1;
  }

  /**
   * The index of the last item that is currently being shown.
   */
  get lastIndex(): number {
    const pageMax = parseInt(`${this.pageSize}`, 10) * this.currentPageNumber;
    return Math.min(pageMax, this.arrangedContentLength);
  }

  /**
   * This function actually loads the data from the server.
   * It takes the store, modelName and query from the passed in data-object and adds page, sorting & filtering to it.
   */
  protected _loadData(): any {
    let query = Object.assign({}, this.args.query || {}) as DataRequestQuery;

    // Add pagination information
    query[this.filterQueryParameters.page] = this.currentPageNumber;
    query[this.filterQueryParameters.pageSize] = this.pageSize;
    // Add sorting information
    if (this.sortProperties && this.sortProperties.length) {
      if (this.multipleColumnsSorting) {
        query = this.multipleColumnsSortingWrapper(query, this.sortProperties);
      } else {
        if (this.sortProperties[0]) {
          const [sortBy, sortDirection] = this.sortProperties[0].split(':');
          query = this.singleColumnSortingWrapper(
            query,
            sortBy || '',
            sortDirection || ''
          );
        }
      }
    } else {
      delete query[this.filterQueryParameters.sort];
      delete query[this.filterQueryParameters.sortDirection];
    }

    // Add global filter
    const globalFilter = this.filterQueryParameters.globalFilter;
    if (this.filterString) {
      query[globalFilter] = this.filterString;
    } else {
      delete query[globalFilter];
    }

    // Add per-column filter
    if (this.useFilteringByColumns) {
      this.processedColumns.forEach((column) => {
        this.setQueryFilter(
          query,
          column,
          column.filterField,
          column.filterString
        );
      });
    }

    this.isLoading = true;
    this.isError = false;
    return this.args
      .doQuery(query)
      .then(() => {
        this.isLoading = false;
        this.isError = false;
      })
      .catch(() => {
        this.isLoading = false;
        this.isError = true;
      });
  }

  /**
   * Actually set the filter on a query.
   * This can be overwritten for special case handling.
   * Note that this will mutate the given query object!
   */
  protected setQueryFilter(
    query: DataRequestQuery,
    _: ModelsTableColumn,
    filterTitle?: string,
    filter?: string
  ): void {
    if (!isBlank(filter)) {
      if (filterTitle) {
        query[filterTitle] = filter;
      }
    } else {
      if (filterTitle) {
        delete query[filterTitle];
      }
    }
  }

  /**
   * Wrapper for sorting query when single column sorting is used
   */
  protected singleColumnSortingWrapper(
    query: DataRequestQuery,
    sortBy: string,
    sortDirection: string
  ): DataRequestQuery {
    query[this.filterQueryParameters.sort] = sortBy;
    query[this.filterQueryParameters.sortDirection] = sortDirection;

    return query;
  }

  /**
   * Wrapper for sorting query when multi columns sorting is used
   */
  protected multipleColumnsSortingWrapper(
    query: DataRequestQuery,
    sortProperties: string[]
  ): DataRequestQuery {
    query[this.filterQueryParameters.sort] = sortProperties
      .map((sortProp) => {
        const [prop, direction] = sortProp.split(':');
        const sign = (direction || '').toLowerCase() === 'desc' ? '-' : '';
        return `${sign}${prop}`;
      })
      .join(',');

    return query;
  }

  protected _loadDataOnce(): void {
    debounce(this, this._loadData, this.debounceDataLoadTime);
  }

  constructor(owner: unknown, args: ModelsTableServerPaginatedArgs) {
    super(owner, args);
    this.multipleColumnsSorting = false;
  }

  /**
   * @event sort
   */
  @action
  sort(column: ModelsTableColumn): void {
    if (isNone(column.sortField)) {
      return;
    }
    const currentSorting = column.sorting || SortConstants.none;
    const newSorting = this.sortMap[currentSorting];
    if (this.multipleColumnsSorting) {
      this._multiColumnsSorting(column, column.sortField, newSorting);
    } else {
      this._singleColumnSorting(column, column.sortField, newSorting);
    }
    this.userInteractionObserver();
    this._loadDataOnce();
  }

  /**
   * @event changeColumnFilter
   */
  @action
  changeColumnFilter(
    newColumnFilterValue: string,
    column: ModelsTableColumn
  ): void {
    super.changeColumnFilter(newColumnFilterValue, column);
    this._loadDataOnce();
  }

  /**
   * @event changeGlobalFilter
   */
  @action
  changeGlobalFilter(newGlobalFilterValue: string): void {
    super.changeGlobalFilter(newGlobalFilterValue);
    this._loadDataOnce();
  }

  /**
   * @event changePageSize
   */
  @action
  changePageSize(newPageSize: number): void {
    super.changePageSize(newPageSize);
    this._loadDataOnce();
  }

  /**
   * @event goToPage
   */
  @action
  goToPage(pageNumber: number): void {
    super.goToPage(pageNumber);
    this._loadDataOnce();
  }

  /**
   * @event clearFilters
   */
  @action
  clearFilters(): void {
    super.clearFilters();
    this._loadDataOnce();
  }
}
