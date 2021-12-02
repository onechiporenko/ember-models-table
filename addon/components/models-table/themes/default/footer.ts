import Component from '@glimmer/component';
import DefaultTheme from '../../../../services/emt-themes/default';
import { SelectOption } from '../../../models-table';

export interface FooterArgs {
  /**
   * Bound from [[Core.ModelsTable.themeInstance | ModelsTable.themeInstance]]
   */
  themeInstance: DefaultTheme;
  /**
   * Bound from [[Core.ModelsTable.collapseNumPaginationForPagesCount | ModelsTable.collapseNumPaginationForPagesCount]]
   */
  collapseNumPaginationForPagesCount: number;
  /**
   * Bound from [[Core.ModelsTable.firstIndex | ModelsTable.firstIndex]]
   */
  firstIndex: number;
  /**
   * Bound from [[Core.ModelsTable.lastIndex | ModelsTable.lastIndex]]
   */
  lastIndex: number;
  /**
   * Bound from [[Core.ModelsTable.arrangedContentLength | ModelsTable.arrangedContentLength]]
   */
  recordsCount: number;
  /**
   * Bound from [[Core.ModelsTable.anyFilterUsed | ModelsTable.anyFilterUsed]]
   */
  anyFilterUsed: boolean;
  /**
   * Bound from [[Core.ModelsTable.pageSizeOptions | ModelsTable.pageSizeOptions]]
   */
  pageSizeOptions: SelectOption[];
  /**
   * Bound from [[Core.ModelsTable.currentPageNumberOptions | ModelsTable.currentPageNumberOptions]]
   */
  currentPageNumberOptions: SelectOption[];
  /**
   * Bound from [[Core.ModelsTable.pageSize | ModelsTable.pageSize]]
   */
  pageSize: number;
  /**
   * Bound from [[Core.ModelsTable.currentPageNumber | ModelsTable.currentPageNumber]]
   */
  currentPageNumber: number;
  /**
   * Bound from [[Core.ModelsTable.showCurrentPageNumberSelect | ModelsTable.showCurrentPageNumberSelect]]
   */
  showCurrentPageNumberSelect: boolean;
  /**
   * Bound from [[Core.ModelsTable.pagesCount | ModelsTable.pagesCount]]
   */
  pagesCount: number;
  /**
   * Bound from [[Core.ModelsTable.showPageSize | ModelsTable.showPageSize]]
   */
  showPageSize: boolean;
  /**
   * Bound from [[Core.ModelsTable.useNumericPagination | ModelsTable.useNumericPagination]]
   */
  useNumericPagination: boolean;
  /**
   * Bound from [[Core.ModelsTable.goToPage | ModelsTable.goToPage]]
   *
   * @event goToPage
   */
  goToPage: (v: number) => void;
  /**
   * Bound from [[Core.ModelsTable.clearFilters | ModelsTable.clearFilters]]
   *
   * @event clearFilters
   */
  clearFilters: () => void;
  /**
   * Bound from [[Core.ModelsTable.changePageSize | ModelsTable.changePageSize]]
   *
   * @event changePageSize
   */
  changePageSize: (v: number) => void;
}

/**
 * Footer block used within [[Core.ModelsTable | ModelsTable]].
 *
 * Usage example:
 *
 * ```html
 * <ModelsTable @data={{this.data}} @columns={{this.columns}} as |MT|>
 *   <MT.Footer />
 *   {{! .... }}
 * </ModelsTable>
 * ```
 *
 * Usage example with a block context:
 *
 * ```html
 * <ModelsTable @data={{this.data}} @columns={{this.columns}} as |MT|>
 *   <MT.Footer as |Footer|>
 *     <Footer.Summary />
 *     <Footer.PageSizeSelect />
 *     {{#if useNumericPagination}}
 *       <Footer.PaginationNumeric />
 *     {{else}}
 *       <Footer.PaginationSimple />
 *     {{/if}}
 *   </MT.Footer>
 * </ModelsTable>
 * ```
 *
 * ModelsTableFooter yields references to the following contextual components:
 *
 * * [[DefaultTheme.Summary | Summary]] - component with summary info about table data. It also contains button to clear all filters applied to the table
 * * [[DefaultTheme.PageSizeSelect | PageSizeSelect]] - component with a page sizes dropdown. It allows to select number if records shown on page
 * * [[DefaultTheme.PaginationNumeric | PaginationNumeric]] - component with a table navigation. It allows to move to the page by its number
 * * [[DefaultTheme.PaginationSimple | PaginationSimple]] - component with a table navigation. It allows to move to the first, last, prev and next pages (this four buttons are shown always)
 *
 * Check own docs for each component to get detailed info.
 */
export default class Footer extends Component<FooterArgs> {}
