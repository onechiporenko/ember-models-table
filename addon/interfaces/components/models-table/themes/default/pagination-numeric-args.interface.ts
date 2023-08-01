import { SelectOption } from '../../../../select-option.interface';
import DefaultTheme from '../../../../../services/emt-themes/default';

export interface PaginationNumericArgs {
  /**
   * Bound from {@link Core.ModelsTable.currentPageNumber | ModelsTable.currentPageNumber}
   */
  currentPageNumber: number;
  /**
   * Bound from {@link Core.ModelsTable.collapseNumPaginationForPagesCount | ModelsTable.collapseNumPaginationForPagesCount}
   */
  collapseNumPaginationForPagesCount: number;
  /**
   * Bound from {@link Core.ModelsTable.arrangedContentLength | ModelsTable.arrangedContentLength}
   */
  recordsCount: number;
  /**
   * Bound from {@link Core.ModelsTable.pageSize | ModelsTable.pageSize}
   */
  pageSize: number;
  /**
   * Bound from {@link Core.ModelsTable.currentPageNumberOptions | ModelsTable.currentPageNumberOptions}
   */
  currentPageNumberOptions: SelectOption[];
  /**
   * Bound from {@link Core.ModelsTable.pagesCount | ModelsTable.pagesCount}
   */
  pagesCount: number;
  /**
   * Bound from {@link Core.ModelsTable.themeInstance | ModelsTable.themeInstance}
   */
  themeInstance: DefaultTheme;
  /**
   * Bound from {@link Core.ModelsTable.showCurrentPageNumberSelect | ModelsTable.showCurrentPageNumberSelect}
   */
  showCurrentPageNumberSelect: boolean;
  /**
   * Bound from {@link Core.ModelsTable.goToPage | ModelsTable.goToPage}
   *
   * @event goToPage
   */
  goToPage: (v: number) => void;
}
