import { TrackedArray } from 'tracked-built-ins';

import { type SelectOption } from '../../../../../interfaces/select-option.interface';
import DefaultTheme from '../../../../../services/emt-themes/default';

export interface FooterArgs {
  /**
   * Bound from {@link Core.ModelsTable.themeInstance | ModelsTable.themeInstance}
   */
  themeInstance: DefaultTheme;
  /**
   * Bound from {@link Core.ModelsTable.collapseNumPaginationForPagesCount | ModelsTable.collapseNumPaginationForPagesCount}
   */
  collapseNumPaginationForPagesCount: number;
  /**
   * Bound from {@link Core.ModelsTable.firstIndex | ModelsTable.firstIndex}
   */
  firstIndex: number;
  /**
   * Bound from {@link Core.ModelsTable.lastIndex | ModelsTable.lastIndex}
   */
  lastIndex: number;
  /**
   * Bound from {@link Core.ModelsTable.arrangedContentLength | ModelsTable.arrangedContentLength}
   */
  recordsCount: number;
  /**
   * Bound from {@link Core.ModelsTable.anyFilterUsed | ModelsTable.anyFilterUsed}
   */
  anyFilterUsed: boolean;
  /**
   * Bound from {@link Core.ModelsTable.pageSizeOptions | ModelsTable.pageSizeOptions}
   */
  pageSizeOptions: TrackedArray<SelectOption>;
  /**
   * Bound from {@link Core.ModelsTable.currentPageNumberOptions | ModelsTable.currentPageNumberOptions}
   */
  currentPageNumberOptions: SelectOption[];
  /**
   * Bound from {@link Core.ModelsTable.pageSize | ModelsTable.pageSize}
   */
  pageSize: number;
  /**
   * Bound from {@link Core.ModelsTable.currentPageNumber | ModelsTable.currentPageNumber}
   */
  currentPageNumber: number;
  /**
   * Bound from {@link Core.ModelsTable.showCurrentPageNumberSelect | ModelsTable.showCurrentPageNumberSelect}
   */
  showCurrentPageNumberSelect: boolean;
  /**
   * Bound from {@link Core.ModelsTable.pagesCount | ModelsTable.pagesCount}
   */
  pagesCount: number;
  /**
   * Bound from {@link Core.ModelsTable.showPageSize | ModelsTable.showPageSize}
   */
  showPageSize: boolean;
  /**
   * Bound from {@link Core.ModelsTable.useNumericPagination | ModelsTable.useNumericPagination}
   */
  useNumericPagination: boolean;
  /**
   * Bound from {@link Core.ModelsTable.goToPage | ModelsTable.goToPage}
   *
   * @event goToPage
   */
  goToPage: (v: number) => void;
  /**
   * Bound from {@link Core.ModelsTable.clearFilters | ModelsTable.clearFilters}
   *
   * @event clearFilters
   */
  clearFilters: () => void;
  /**
   * Bound from {@link Core.ModelsTable.changePageSize | ModelsTable.changePageSize}
   *
   * @event changePageSize
   */
  changePageSize: (e: string) => void;
}
