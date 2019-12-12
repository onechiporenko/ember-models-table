import Bootstrap3Theme from './bootstrap3';
import {computed} from '@ember/object';

/**
 * @class Bootstrap4Theme
 * @namespace Themes
 * @extends Themes.Bootstrap3Theme
 */
export default class Bootstrap4Theme extends Bootstrap3Theme {

  /**
   * @property columnsDropdownComponent
   * @type string
   * @default 'models-table/themes/bootstrap4/columns-dropdown'
   */

  /**
   * @property dataGroupBySelectComponent
   * @type string
   * @default 'models-table/themes/bootstrap4/data-group-by-select'
   */

  /**
   * @property globalFilterComponent
   * @type string
   * @default 'models-table/themes/bootstrap4/global-filter'
   */

  /**
   * @property rowFilteringCellComponent
   * @type string
   * @default 'models-table/themes/bootstrap4/row-filtering-cell'
   */

  /**
   * @property componentsPath
   * @type string
   * @default 'models-table/themes/bootstrap4/'
   */
  componentsPath = 'models-table/themes/bootstrap4/';

  /**
   * @property table
   * @type string
   * @default 'table table-striped table-bordered table-condensed table-sm'
   */
  table = 'table table-striped table-bordered table-condensed table-sm';

  /**
   * @property globalFilterWrapper
   * @type string
   * @default 'float-left'
   */
  globalFilterWrapper = 'float-left';

  /**
   * @property columnsDropdown
   * @type string
   * @default 'dropdown-menu dropdown-menu-right'
   */
  columnsDropdown = 'dropdown-menu dropdown-menu-right';

  /**
   * @property columnsDropdownWrapper
   * @type string
   * @default 'float-right columns-dropdown dropdown'
   */
  columnsDropdownWrapper = 'float-right columns-dropdown dropdown';

  /**
   * @property columnsDropdownDivider
   * @type string
   * @default 'dropdown-divider'
   */
  columnsDropdownDivider = 'dropdown-divider';

  /**
   * @property buttonDefault
   * @type string
   * @default 'btn btn-secondary'
   */
  buttonDefault = 'btn btn-secondary';

  /**
   * @property buttonDefaultSmall
   * @type string
   * @default 'btn btn-secondary btn-sm'
   */
  @computed('buttonDefault')
  get buttonDefaultSmall() {
    return `${this.buttonDefault} btn-sm`;
  }

  /**
   * @property footerSummaryNumericPagination
   * @type string
   * @default 'col-4'
   */
  footerSummaryNumericPagination = 'col-4';

  /**
   * @property footerSummaryDefaultPagination
   * @type string
   * @default  'col-5'
   */
  footerSummaryDefaultPagination = 'col-5';

  /**
   * @property pageSizeWrapper
   * @type string
   * @default 'col-2'
   */
  pageSizeWrapper = 'col-2';

  /**
   * @property pageSizeSelectWrapper
   * @type string
   * @default 'float-right'
   */
  pageSizeSelectWrapper = 'float-right';

  /**
   * @property paginationInternalWrapper
   * @type string
   * @default 'btn-toolbar float-right'
   */
  paginationInternalWrapper = 'btn-toolbar float-right';

  /**
   * @property paginationWrapperNumeric
   * @type string
   * @default 'col-6'
   */
  paginationWrapperNumeric = 'col-6';

  /**
   * @property paginationWrapperDefault
   * @type string
   * @default 'col-5'
   */
  paginationWrapperDefault = 'col-5';

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
   * @property sortGroupedPropertyBtn
   * @type string
   * @default 'btn'
   */
  sortGroupedPropertyBtn = 'btn';

  /**
   * @property input
   * @type string
   * @default 'form-control'
   */
  input = 'form-control';

  /**
   * @property inputGroup
   * @type string
   * @default 'input-group'
   */
  inputGroup = 'input-group';

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
