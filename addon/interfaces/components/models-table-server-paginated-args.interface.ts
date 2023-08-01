import { ModelsTableArgs } from './models-table-args.interface';
import { FilterQueryParameters } from '../filter-query-parameters.interface';

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
