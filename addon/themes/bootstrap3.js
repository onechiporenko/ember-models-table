import DefaultTheme from './default';

/**
 * @class Bootstrap3
 * @namespace Themes
 * @extends Themes.Default
 */
export default DefaultTheme.extend({

  /**
   * List of classes added to the table-tag
   * @type string
   * @property table
   * @default 'table table-striped table-bordered table-condensed'
   */
  table: 'table table-striped table-bordered table-condensed',

  /**
   * Wrapper for grouped buttons
   *
   * @type string
   * @property buttonsGroup
   * @default 'btn-group'
   */
  buttonsGroup: 'btn-group',

  /**
   * Wrapper for global filter
   *
   * @property globalFilterWrapper
   * @type string
   * @default 'pull-left'
   */
  globalFilterWrapper: 'pull-left',

  /**
   * @property sortGroupedPropertyBtn
   * @type {string}
   * @default 'btn btn-default'
   */
  sortGroupedPropertyBtn: 'btn btn-default',

  /**
   * Wrapper for dropdown with list of columns
   *
   * @property columnsDropdownWrapper
   * @type string
   * @default 'pull-right columns-dropdown'
   */
  columnsDropdownWrapper: 'pull-right columns-dropdown',

  /**
   * Dropdown with list of columns itself
   *
   * @property columnsDropdown
   * @type string
   * @default 'dropdown-menu pull-right'
   */
  columnsDropdown: 'dropdown-menu pull-right',

  /**
   * Class for dropdown item used as a divider between "group" actions and "single" column actions
   *
   * @property columnsDropdownDivider
   * @type string
   * @default 'divider'
   */
  columnsDropdownDivider: 'divider',

  /**
   * Class for select field for grouped property
   *
   * @property dataGroupBySelectWrapper
   * @type string
   * @default 'pull-left'
   */
  dataGroupBySelectWrapper: 'data-group-by-wrapper pull-left',

  /**
   * Wrapper for numeric pagination
   *
   * @type string
   * @property footerSummaryNumericPagination
   * @default 'col-md-4 col-sm-4 col-xs-4'
   */
  footerSummaryNumericPagination: 'col-md-4 col-sm-4 col-xs-4',

  /**
   * Wrapper for simple pagination
   *
   * @type string
   * @property footerSummaryDefaultPagination
   * @default 'col-md-5 col-sm-5 col-xs-5'
   */
  footerSummaryDefaultPagination: 'col-md-5 col-sm-5 col-xs-5',

  /**
   * Wrapper for page selection block
   *
   * @type string
   * @property pageSizeWrapper
   * @default 'col-md-2 col-sm-2 col-xs-2'
   */
  pageSizeWrapper: 'col-md-2 col-sm-2 col-xs-2',

  /**
   * Wrapper for select-tag in the page-size-select component
   *
   * @type string
   * @property pageSizeSelectWrapper
   * @default 'pull-right'
   */
  pageSizeSelectWrapper: 'pull-left',

  /**
   * Wrapper for select-tag in the current-page-number-select component
   *
   * @type string
   * @property currentPageSizeSelectWrapper
   * @default 'pull-right'
   */
  currentPageSizeSelectWrapper: 'pull-right',

  /**
   * Wrapper for pagination buttons. Used for numeric and simple pagination components
   *
   * @type string
   * @property paginationInternalWrapper
   * @default 'btn-toolbar pull-right'
   */
  paginationInternalWrapper: 'btn-toolbar pull-right',

  /**
   * Wrapper for numeric pagination component
   *
   * @type string
   * @property paginationWrapperNumeric
   * @default 'col-md-6 col-sm-6 col-xs-6'
   */
  paginationWrapperNumeric: 'col-md-6 col-sm-6 col-xs-6',

  /**
   * Wrapper for simple pagination component
   *
   * @type string
   * @property paginationWrapperDefault
   * @default 'col-md-5 col-sm-5 col-xs-5'
   */
  paginationWrapperDefault: 'col-md-5 col-sm-5 col-xs-5',

  /**
   * @type string
   * @property paginationBlock
   * @default 'btn-group'
   */
  paginationBlock: 'btn-group',

  /**
   * CSS-class for active item in the numeric pagination
   *
   * @type string
   * @property paginationNumericItemActive
   * @default 'active'
   */
  paginationNumericItemActive: 'active',

  /**
   * Css-class for any button
   *
   * @type string
   * @property buttonDefault
   * @default 'btn btn-default'
   */
  buttonDefault: 'btn btn-default',

  /**
   * CSS-class for link-like buttons
   *
   * @type string
   * @property buttonLink
   * @default 'btn btn-link'
   */
  buttonLink: 'btn btn-link',

  /**
   * @type string
   * @property form
   * @default 'form-inline'
   */
  form: 'form-inline',

  /**
   * @property formElementWrapper
   * @type string
   * @default 'form-group'
   */
  formElementWrapper: 'form-group',

  /**
   * CSS-class for all form-input items
   *
   * @type string
   * @property input
   * @default 'form-control'
   */
  input: 'form-control',

  /**
   * Extra CSS-class for select elements
   *
   * @type string
   * @property select
   * @default ''
   */
  select: '',

  /**
   * Wrapper for component footer (contains pagination, summary and pager)
   *
   * @type string
   * @property tfooterWrapper
   * @default 'table-footer clearfix'
   */
  tfooterWrapper: 'table-footer clearfix',

  /**
   * Internal wrapper for table footer content
   *
   * Internal wrapper contains pagination, summary and pager. It's needed to provide a grid
   *
   * @type string
   * @property tfooterInternalWrapper
   * @default 'row'
   */
  tfooterInternalWrapper: 'row',

  /**
   * Icon for clear column filters
   *
   * @type string
   * @property clearFilterIcon
   * @default 'glyphicon glyphicon-remove-sign form-control-feedback'
   */
  clearFilterIcon: 'glyphicon glyphicon-remove-sign form-control-feedback',

  /**
   * Icon for clear all filters button
   *
   * @type string
   * @property clearAllFiltersIcon
   * @default 'glyphicon glyphicon-remove-circle'
   */
  clearAllFiltersIcon: 'glyphicon glyphicon-remove-circle',

  /**
   * Icon for columns sorted asc
   *
   * @type string
   * @property sort-asc
   * @default 'glyphicon glyphicon-triangle-top'
   */
  'sort-asc': 'glyphicon glyphicon-triangle-top',

  /**
   * Icon for columns sorted desc
   *
   * @type string
   * @property sort-desc
   * @default 'glyphicon glyphicon-triangle-bottom'
   */
  'sort-desc': 'glyphicon glyphicon-triangle-bottom',

  /**
   * Icon for columns dropdown. It's used for currently visible columns
   *
   * @type string
   * @property column-visible
   * @default 'glyphicon glyphicon-check'
   */
  'column-visible': 'glyphicon glyphicon-check',

  /**
   * Icon for columns dropdown. It's used for currently hidden columns
   *
   * @type string
   * @property column-hidden
   * @default 'glyphicon glyphicon-unchecked'
   */
  'column-hidden': 'glyphicon glyphicon-unchecked',

  /**
   * Icon for simple pagination item "Go to first page"
   *
   * @type string
   * @property nav-first
   * @default 'glyphicon glyphicon-chevron-left'
   */
  'nav-first': 'glyphicon glyphicon-chevron-left',

  /**
   * Icon for simple pagination item "Go to prev page"
   *
   * @type string
   * @property nav-prev
   * @default 'glyphicon glyphicon-menu-left'
   */
  'nav-prev': 'glyphicon glyphicon-menu-left',

  /**
   * Icon for simple pagination item "Go to next page"
   *
   * @type string
   * @property nav-next
   * @default 'glyphicon glyphicon-menu-right'
   */
  'nav-next': 'glyphicon glyphicon-menu-right',

  /**
   * Icon for simple pagination item "Go to last page"
   *
   * @type string
   * @property nav-last
   * @default 'glyphicon glyphicon-chevron-right'
   */
  'nav-last': 'glyphicon glyphicon-chevron-right',

  /**
   * Caret for columns dropdown
   *
   * @type string
   * @property caret
   * @default 'caret'
   */
  'caret': 'caret',

  /**
   * Icon for expanding row (used in the tbody tr internally)
   *
   * @type string
   * @property expand-row
   * @default 'glyphicon glyphicon-plus'
   */
  'expand-row': 'glyphicon glyphicon-plus',

  /**
   * Icon for expanding all rows (used in the thead)
   *
   * @type string
   * @property expand-all-rows
   * @default 'glyphicon glyphicon-plus'
   */
  'expand-all-rows': 'glyphicon glyphicon-plus',

  /**
   * Icon for collapsing row (used in the tbody tr internally)
   *
   * @type string
   * @property collapse-row
   * @default 'glyphicon glyphicon-minus'
   */
  'collapse-row': 'glyphicon glyphicon-minus',

  /**
   * Icon for collapsing all rows (used in the thead)
   *
   * @type string
   * @property collapse-all-rows
   * @default 'glyphicon glyphicon-plus'
   */
  'collapse-all-rows': 'glyphicon glyphicon-minus',

  /**
   * Icon for selection all rows (used in the thead)
   *
   * @type string
   * @property select-all-rows
   * @default 'glyphicon glyphicon-check'
   */
  'select-all-rows': 'glyphicon glyphicon-check',

  /**
   * Icon for deselection all rows (used in the thead)
   *
   * @type string
   * @property deselect-all-rows
   * @default 'glyphicon glyphicon-unchecked'
   */
  'deselect-all-rows': 'glyphicon glyphicon-unchecked',

  /**
   * Icon for selection row (used in the tbody tr internally)
   *
   * @type string
   * @property select-row
   * @default 'glyphicon glyphicon-check'
   */
  'select-row': 'glyphicon glyphicon-check',

  /**
   * Icon for deselection row (used in the tbody tr internally)
   *
   * @type string
   * @property deselect-row
   * @default 'glyphicon glyphicon-unchecked'
   */
  'deselect-row': 'glyphicon glyphicon-unchecked',

  /**
   * @type string
   * @property edit-row-button
   * @default 'btn btn-default'
   */
  'edit-row-button': 'btn btn-default',

  /**
   * @type string
   * @property save-row-button
   * @default 'btn btn-default'
   */
  'save-row-button': 'btn btn-default',

  /**
   * @type string
   * @property cancel-row-button
   * @default 'btn btn-default'
   */
  'cancel-row-button': 'btn btn-default'

});
