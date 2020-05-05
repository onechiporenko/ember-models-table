import DefaultTheme from './default';

/**
 * @class Bootstrap3Theme
 * @namespace Themes
 * @extends Themes.DefaultTheme
 */
export default class Bootstrap3Theme extends DefaultTheme {

  /**
   * @property rowSelectAllCheckboxComponent
   * @type string
   * @default 'models-table/themes/bootstrap3/row-select-all-checkbox'
   */

  /**
   * @property componentsPath
   * @type string
   * @default 'models-table/themes/ember-bootstrap-v3/'
   */
  componentsPath = 'models-table/themes/bootstrap3/';

  /**
   * @property table
   * @type string
   * @default 'table table-striped table-bordered table-condensed'
   */
  table = 'table table-striped table-bordered table-condensed';

  /**
   * @property buttonsGroup
   * @type string
   * @default 'btn-group'
   */
  buttonsGroup = 'btn-group';

  /**
   * @property globalFilterWrapper
   * @type string
   * @default 'pull-left'
   */
  globalFilterWrapper = 'pull-left';

  /**
   * @property sortGroupedPropertyBtn
   * @type string
   * @default 'btn btn-default'
   */
  sortGroupedPropertyBtn = 'btn btn-default';

  /**
   * @property columnsDropdownWrapper
   * @type string
   * @default 'pull-right columns-dropdown'
   */
  columnsDropdownWrapper = 'pull-right columns-dropdown';

  /**
   * @property columnsDropdown
   * @type string
   * @default 'dropdown-menu pull-right'
   */
  columnsDropdown = 'dropdown-menu pull-right';

  /**
   * @property columnsDropdownDivider
   * @type string
   * @default 'divider'
   */
  columnsDropdownDivider = 'divider';

  /**
   * @property dataGroupBySelectWrapper
   * @type string
   * @default 'pull-left'
   */
  dataGroupBySelectWrapper = 'data-group-by-wrapper pull-left';

  /**
   * @property footerSummaryNumericPagination
   * @type string
   * @default 'col-md-4 col-sm-4 col-xs-4'
   */
  footerSummaryNumericPagination = 'col-md-4 col-sm-4 col-xs-4';

  /**
   * @property footerSummaryDefaultPagination
   * @type string
   * @default 'col-md-5 col-sm-5 col-xs-5'
   */
  footerSummaryDefaultPagination = 'col-md-5 col-sm-5 col-xs-5';

  /**
   * @property pageSizeWrapper
   * @type string
   * @default 'col-md-2 col-sm-2 col-xs-2'
   */
  pageSizeWrapper = 'col-md-2 col-sm-2 col-xs-2';

  /**
   * @property pageSizeSelectWrapper
   * @type string
   * @default 'pull-right'
   */
  pageSizeSelectWrapper = 'pull-left';

  /**
   * @property currentPageSizeSelectWrapper
   * @type string
   * @default 'pull-right'
   */
  currentPageSizeSelectWrapper = 'pull-right';

  /**
   * @property paginationInternalWrapper
   * @type string
   * @default 'btn-toolbar pull-right'
   */
  paginationInternalWrapper = 'btn-toolbar pull-right';

  /**
   * @property paginationWrapperNumeric
   * @type string
   * @default 'col-md-6 col-sm-6 col-xs-6'
   */
  paginationWrapperNumeric = 'col-md-6 col-sm-6 col-xs-6';

  /**
   * @property paginationWrapperDefault
   * @type string
   * @default 'col-md-5 col-sm-5 col-xs-5'
   */
  paginationWrapperDefault = 'col-md-5 col-sm-5 col-xs-5';

  /**
   * @property paginationBlock
   * @type string
   * @default 'btn-group'
   */
  paginationBlock = 'btn-group';

  /**
   * @property paginationNumericItemActive
   * @type string
   * @default 'active'
   */
  paginationNumericItemActive = 'active';

  /**
   * @property buttonDefault
   * @type string
   * @default 'btn btn-default'
   */
  buttonDefault = 'btn btn-default';

  /**
   * @property buttonLink
   * @type string
   * @default 'btn btn-link'
   */
  buttonLink = 'btn btn-link';

  /**
   * @property form
   * @type string
   * @default 'form-inline'
   */
  form = 'form-inline';

  /**
   * @property formElementWrapper
   * @type string
   * @default 'form-group'
   */
  formElementWrapper = 'form-group';

  /**
   * @property input
   * @type string
   * @default 'form-control'
   */
  input = 'form-control';

  /**
   * @property select
   * @type string
   * @default ''
   */
  select = '';

  /**
   * @property tfooterWrapper
   * @type string
   * @default 'table-footer clearfix'
   */
  tfooterWrapper = 'table-footer clearfix';

  /**
   * @property tfooterInternalWrapper
   * @type string
   * @default 'row'
   */
  tfooterInternalWrapper = 'row';

  /**
   * @property clearFilterIcon
   * @type string
   * @default 'glyphicon glyphicon-remove-sign form-control-feedback'
   */
  clearFilterIcon = 'glyphicon glyphicon-remove-sign form-control-feedback';

  /**
   * @property clearAllFiltersIcon
   * @type string
   * @default 'glyphicon glyphicon-remove-circle'
   */
  clearAllFiltersIcon = 'glyphicon glyphicon-remove-circle';

  /**
   * @property sortAscIcon
   * @type string
   * @default 'glyphicon glyphicon-triangle-top'
   */
  sortAscIcon = 'glyphicon glyphicon-triangle-top';

  /**
   * @property sortDescIcon
   * @type string
   * @default 'glyphicon glyphicon-triangle-bottom'
   */
  sortDescIcon = 'glyphicon glyphicon-triangle-bottom';

  /**
   * @property columnVisibleIcon
   * @type string
   * @default 'glyphicon glyphicon-check'
   */
  columnVisibleIcon = 'glyphicon glyphicon-check';

  /**
   * @property columnHiddenIcon
   * @type string
   * @default 'glyphicon glyphicon-unchecked'
   */
  columnHiddenIcon = 'glyphicon glyphicon-unchecked';

  /**
   * @property navFirstIcon
   * @type string
   * @default 'glyphicon glyphicon-chevron-left'
   */
  navFirstIcon = 'glyphicon glyphicon-chevron-left';

  /**
   * @property navPrevIcon
   * @type string
   * @default 'glyphicon glyphicon-menu-left'
   */
  navPrevIcon = 'glyphicon glyphicon-menu-left';

  /**
   * @property navNextIcon
   * @type string
   * @default 'glyphicon glyphicon-menu-right'
   */
  navNextIcon = 'glyphicon glyphicon-menu-right';

  /**
   * @property navLastIcon
   * @type string
   * @default 'glyphicon glyphicon-chevron-right'
   */
  navLastIcon = 'glyphicon glyphicon-chevron-right';

  /**
   * @property caretIcon
   * @type string
   * @default 'caretIcon'
   */
  caretIcon = 'caret';

  /**
   * @property expandRowIcon
   * @type string
   * @default 'glyphicon glyphicon-plus'
   */
  expandRowIcon = 'glyphicon glyphicon-plus';

  /**
   * @property expandAllRowsIcon
   * @type string
   * @default 'glyphicon glyphicon-plus'
   */
  expandAllRowsIcon = 'glyphicon glyphicon-plus';

  /**
   * @property collapseRowIcon
   * @type string
   * @default 'glyphicon glyphicon-minus'
   */
  collapseRowIcon = 'glyphicon glyphicon-minus';

  /**
   * @property collapseAllRowsIcon
   * @type string
   * @default 'glyphicon glyphicon-plus'
   */
  collapseAllRowsIcon = 'glyphicon glyphicon-minus';

  /**
   * @property selectSomeRowsIcon
   * @type string
   * @default 'glyphicon glyphicon-unchecked glyphicon-minus'
   */
  selectSomeRowsIcon = 'glyphicon glyphicon-minus';

  /**
   * @property selectAllRowsIcon
   * @type string
   * @default 'glyphicon glyphicon-check'
   */
  selectAllRowsIcon = 'glyphicon glyphicon-check';

  /**
   * @property deselectAllRowsIcon
   * @type string
   * @default 'glyphicon glyphicon-unchecked'
   */
  deselectAllRowsIcon = 'glyphicon glyphicon-unchecked';

  /**
   * @property selectRowIcon
   * @type string
   * @default 'glyphicon glyphicon-check'
   */
  selectRowIcon = 'glyphicon glyphicon-check';

  /**
   * @property deselectRowIcon
   * @type string
   * @default 'glyphicon glyphicon-unchecked'
   */
  deselectRowIcon = 'glyphicon glyphicon-unchecked';

  /**
   * @property editRowButton
   * @type string
   * @default 'btn btn-default'
   */
  editRowButton = 'btn btn-default';

  /**
   * @property saveRowButton
   * @type string
   * @default 'btn btn-default'
   */
  saveRowButton = 'btn btn-default';

  /**
   * @property cancelRowButton
   * @type string
   * @default 'btn btn-default'
   */
  cancelRowButton = 'btn btn-default';

}
