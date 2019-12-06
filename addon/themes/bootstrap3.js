import DefaultTheme from './default';

/**
 * @class Bootstrap3Theme
 * @namespace Themes
 * @extends Themes.DefaultTheme
 */
export default class Bootstrap3Theme extends DefaultTheme {

  /**
   * List of classes added to the table-tag
   * @type string
   * @default 'table table-striped table-bordered table-condensed'
   */
  table = 'table table-striped table-bordered table-condensed';

  /**
   * Wrapper for grouped buttons
   *
   * @type string
   * @default 'btn-group'
   */
  buttonsGroup = 'btn-group';

  /**
   * Wrapper for global filter
   *
   * @type string
   * @default 'pull-left'
   */
  globalFilterWrapper = 'pull-left';

  /**
   * @type string
   * @default 'btn btn-default'
   */
  sortGroupedPropertyBtn = 'btn btn-default';

  /**
   * Wrapper for dropdown with list of columns
   *
   * @type string
   * @default 'pull-right columns-dropdown'
   */
  columnsDropdownWrapper = 'pull-right columns-dropdown';

  /**
   * Dropdown with list of columns itself
   *
   * @type string
   * @default 'dropdown-menu pull-right'
   */
  columnsDropdown = 'dropdown-menu pull-right';

  /**
   * Class for dropdown item used as a divider between "group" actions and "single" column actions
   *
   * @type string
   * @default 'divider'
   */
  columnsDropdownDivider = 'divider';

  /**
   * Class for select field for grouped property
   *
   * @type string
   * @default 'pull-left'
   */
  dataGroupBySelectWrapper = 'data-group-by-wrapper pull-left';

  /**
   * Wrapper for numeric pagination
   *
   * @type string
   * @default 'col-md-4 col-sm-4 col-xs-4'
   */
  footerSummaryNumericPagination = 'col-md-4 col-sm-4 col-xs-4';

  /**
   * Wrapper for simple pagination
   *
   * @type string
   * @default 'col-md-5 col-sm-5 col-xs-5'
   */
  footerSummaryDefaultPagination = 'col-md-5 col-sm-5 col-xs-5';

  /**
   * Wrapper for page selection block
   *
   * @type string
   * @default 'col-md-2 col-sm-2 col-xs-2'
   */
  pageSizeWrapper = 'col-md-2 col-sm-2 col-xs-2';

  /**
   * Wrapper for select-tag in the page-size-select component
   *
   * @type string
   * @default 'pull-right'
   */
  pageSizeSelectWrapper = 'pull-left';

  /**
   * Wrapper for select-tag in the current-page-number-select component
   *
   * @type string
   * @default 'pull-right'
   */
  currentPageSizeSelectWrapper = 'pull-right';

  /**
   * Wrapper for pagination buttons. Used for numeric and simple pagination components
   *
   * @type string
   * @default 'btn-toolbar pull-right'
   */
  paginationInternalWrapper = 'btn-toolbar pull-right';

  /**
   * Wrapper for numeric pagination component
   *
   * @type string
   * @default 'col-md-6 col-sm-6 col-xs-6'
   */
  paginationWrapperNumeric = 'col-md-6 col-sm-6 col-xs-6';

  /**
   * Wrapper for simple pagination component
   *
   * @type string
   * @default 'col-md-5 col-sm-5 col-xs-5'
   */
  paginationWrapperDefault = 'col-md-5 col-sm-5 col-xs-5';

  /**
   * @type string
   * @default 'btn-group'
   */
  paginationBlock = 'btn-group';

  /**
   * CSS-class for active item in the numeric pagination
   *
   * @type string
   * @default 'active'
   */
  paginationNumericItemActive = 'active';

  /**
   * Css-class for any button
   *
   * @type string
   * @default 'btn btn-default'
   */
  buttonDefault = 'btn btn-default';

  /**
   * CSS-class for link-like buttons
   *
   * @type string
   * @default 'btn btn-link'
   */
  buttonLink = 'btn btn-link';

  /**
   * @type string
   * @default 'form-inline'
   */
  form = 'form-inline';

  /**
   * @type string
   * @default 'form-group'
   */
  formElementWrapper = 'form-group';

  /**
   * CSS-class for all form-input items
   *
   * @type string
   * @default 'form-control'
   */
  input = 'form-control';

  /**
   * Extra CSS-class for select elements
   *
   * @type string
   * @default ''
   */
  select = '';

  /**
   * Wrapper for component footer (contains pagination, summary and pager)
   *
   * @type string
   * @default 'table-footer clearfix'
   */
  tfooterWrapper = 'table-footer clearfix';

  /**
   * Internal wrapper for table footer content
   *
   * Internal wrapper contains pagination, summary and pager. It's needed to provide a grid
   *
   * @type string
   * @default 'row'
   */
  tfooterInternalWrapper = 'row';

  /**
   * Icon for clear column filters
   *
   * @type string
   * @default 'glyphicon glyphicon-remove-sign form-control-feedback'
   */
  clearFilterIcon = 'glyphicon glyphicon-remove-sign form-control-feedback';

  /**
   * Icon for clear all filters button
   *
   * @type string
   * @default 'glyphicon glyphicon-remove-circle'
   */
  clearAllFiltersIcon = 'glyphicon glyphicon-remove-circle';

  /**
   * Icon for columns sorted asc
   *
   * @type string
   * @default 'glyphicon glyphicon-triangle-top'
   */
  sortAscIcon = 'glyphicon glyphicon-triangle-top';

  /**
   * Icon for columns sorted desc
   *
   * @type string
   * @default 'glyphicon glyphicon-triangle-bottom'
   */
  sortDescIcon = 'glyphicon glyphicon-triangle-bottom';

  /**
   * Icon for columns dropdown. It's used for currently visible columns
   *
   * @type string
   * @default 'glyphicon glyphicon-check'
   */
  columnVisibleIcon = 'glyphicon glyphicon-check';

  /**
   * Icon for columns dropdown. It's used for currently hidden columns
   *
   * @type string
   * @default 'glyphicon glyphicon-unchecked'
   */
  columnHiddenIcon = 'glyphicon glyphicon-unchecked';

  /**
   * Icon for simple pagination item "Go to first page"
   *
   * @type string
   * @default 'glyphicon glyphicon-chevron-left'
   */
  navFirstIcon = 'glyphicon glyphicon-chevron-left';

  /**
   * Icon for simple pagination item "Go to prev page"
   *
   * @type string
   * @default 'glyphicon glyphicon-menu-left'
   */
  navPrevIcon = 'glyphicon glyphicon-menu-left';

  /**
   * Icon for simple pagination item "Go to next page"
   *
   * @type string
   * @default 'glyphicon glyphicon-menu-right'
   */
  navNextIcon = 'glyphicon glyphicon-menu-right';

  /**
   * Icon for simple pagination item "Go to last page"
   *
   * @type string
   * @default 'glyphicon glyphicon-chevron-right'
   */
  navLastIcon = 'glyphicon glyphicon-chevron-right';

  /**
   * Caret for columns dropdown
   *
   * @type string
   * @default 'caretIcon'
   */
  caretIcon = 'caret';

  /**
   * Icon for expanding row (used in the tbody tr internally)
   *
   * @type string
   * @default 'glyphicon glyphicon-plus'
   */
  expandRowIcon = 'glyphicon glyphicon-plus';

  /**
   * Icon for expanding all rows (used in the thead)
   *
   * @type string
   * @default 'glyphicon glyphicon-plus'
   */
  expandAllRowsIcon = 'glyphicon glyphicon-plus';

  /**
   * Icon for collapsing row (used in the tbody tr internally)
   *
   * @type string
   * @default 'glyphicon glyphicon-minus'
   */
  collapseRowIcon = 'glyphicon glyphicon-minus';

  /**
   * Icon for collapsing all rows (used in the thead)
   *
   * @type string
   * @default 'glyphicon glyphicon-plus'
   */
  collapseAllRowsIcon = 'glyphicon glyphicon-minus';

  /**
   * Icon for selection all rows (used in the thead)
   *
   * @type string
   * @default 'glyphicon glyphicon-check'
   */
  selectAllRowsIcon = 'glyphicon glyphicon-check';

  /**
   * Icon for deselection all rows (used in the thead)
   *
   * @type string
   * @default 'glyphicon glyphicon-unchecked'
   */
  deselectAllRowsIcon = 'glyphicon glyphicon-unchecked';

  /**
   * Icon for selection row (used in the tbody tr internally)
   *
   * @type string
   * @default 'glyphicon glyphicon-check'
   */
  selectRowIcon = 'glyphicon glyphicon-check';

  /**
   * Icon for deselection row (used in the tbody tr internally)
   *
   * @type string
   * @default 'glyphicon glyphicon-unchecked'
   */
  deselectRowIcon = 'glyphicon glyphicon-unchecked';

  /**
   * @type string
   * @default 'btn btn-default'
   */
  editRowButton = 'btn btn-default';

  /**
   * @type string
   * @default 'btn btn-default'
   */
  saveRowButton = 'btn btn-default';

  /**
   * @type string
   * @default 'btn btn-default'
   */
  cancelRowButton = 'btn btn-default';

}
