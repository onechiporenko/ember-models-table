import DefaultTheme from './default';

/**
 * @class PlainHtmlTheme
 * @namespace Themes
 * @extends Themes.Default
 */
export default class PlainHtmlTheme extends DefaultTheme {
  /**
   * @property componentsPath
   * @type string
   * @default 'models-table/themes/plain-html/'
   */
  componentsPath = 'models-table/themes/plain-html/';

  /**
   * @property columnsDropdownComponent
   * @type string
   * @default 'models-table/themes/plain-html/columns-dropdown'
   */

  /**
   * @property rowFilteringCellComponent
   * @type string
   * @default 'models-table/themes/plain-html/row-filtering-cell'
   */

  /**
   * @property summaryComponent
   * @type string
   * @default 'models-table/themes/plain-html/summary'
   */

  /**
   * @property headerWrapper
   * @type string
   * @default 'models-table-header'
   */
  headerWrapper = 'models-table-header';

  /**
   * @property tfooterInternalWrapper
   * @type string
   * @default 'models-table-footer'
   */
  tfooterInternalWrapper = 'models-table-footer';

  /**
   * @property paginationInternalWrapper
   * @type string
   * @default 'pagination-wrapper'
   */
  paginationInternalWrapper = 'pagination-wrapper';

  /**
   * @property currentPageSizeSelectWrapper
   * @type string
   * @default 'page-size-select-wrapper'
   */
  currentPageSizeSelectWrapper = 'page-size-select-wrapper';

  /**
   * @property columnsDropdownWrapper
   * @type string
   * @default 'dropdown'
   */
  columnsDropdownWrapper = 'columns-dropdown';

  /**
   * @property clearFilterIcon
   * @type string
   * @default 'fa fa-times form-control-feedback'
   */
  clearFilterIcon = 'fa fa-times form-control-feedback';

  /**
   * @property clearAllFiltersIcon
   * @type string
   * @default 'fa fa-times'
   */
  clearAllFiltersIcon = 'fa fa-times';

  /**
   * @property sortAscIcon
   * @type string
   * @default 'fa fa-sort-asc'
   */
  sortAscIcon = 'fa fa-sort-asc';

  /**
   * @property sortDescIcon
   * @type string
   * @default 'fa fa-sort-desc'
   */
  sortDescIcon = 'fa fa-sort-desc';

  /**
   * @property columnVisibleIcon
   * @type string
   * @default 'fa fa-check-square-o'
   */
  columnVisibleIcon = 'fa fa-check-square-o';

  /**
   * @property columnHiddenIcon
   * @type string
   * @default 'fa fa-square-o'
   */
  columnHiddenIcon = 'fa fa-square-o';

  /**
   * @property navFirstIcon
   * @type string
   * @default 'fa fa-angle-double-left'
   */
  navFirstIcon = 'fa fa-angle-double-left';

  /**
   * @property navPrevIcon
   * @type string
   * @default 'fa fa-angle-left'
   */
  navPrevIcon = 'fa fa-angle-left';

  /**
   * @property navNextIcon
   * @type string
   * @default 'fa fa-angle-right'
   */
  navNextIcon = 'fa fa-angle-right';

  /**
   * @property navLastIcon
   * @type string
   * @default 'fa fa-angle-double-right'
   */
  navLastIcon = 'fa fa-angle-double-right';

  /**
   * @property caretIcon
   * @type string
   * @default 'caret'
   */
  caretIcon = 'caret';

  /**
   * @property expandRowIcon
   * @type string
   * @default 'fa fa-plus'
   */
  expandRowIcon = 'fa fa-plus';

  /**
   * @property expandAllRowsIcon
   * @type string
   * @default 'fa fa-plus'
   */
  expandAllRowsIcon = 'fa fa-plus';

  /**
   * @property collapseRowIcon
   * @type string
   * @default 'fa fa-minus'
   */
  collapseRowIcon = 'fa fa-minus';

  /**
   * @property collapseAllRowsIcon
   * @type string
   * @default 'fa fa-minus'
   */
  collapseAllRowsIcon = 'fa fa-minus';

  /**
   * @property selectAllRowsIcon
   * @type string
   * @default 'fa fa-check-square-o'
   */
  selectAllRowsIcon = 'fa fa-check-square-o';

  /**
   * @property selectSomeRowsIcon
   * @type string
   * @default 'fa fa-check-square-o'
   */
  selectSomeRowsIcon = 'fa fa-minus-square-o';

  /**
   * @property deselectAllRowsIcon
   * @type string
   * @default 'fa fa-square-o'
   */
  deselectAllRowsIcon = 'fa fa-square-o';

  /**
   * @property selectRowIcon
   * @type string
   * @default 'fa fa-check-square-o'
   */
  selectRowIcon = 'fa fa-check-square-o';

  /**
   * @property deselectRowIcon
   * @type string
   * @default 'fa fa-square-o'
   */
  deselectRowIcon = 'fa fa-square-o';
}
