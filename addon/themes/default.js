import EmberObject from '@ember/object';

/**
 * Almost empty skeleton for themes. Extend it to provide custom css-classes for table items and icons.
 *
 * Check [BootstrapTheme](Themes.Bootstrap.html) for implementation example.
 *
 * Check [ModelsTable.themeInstance](Components.ModelsTable.html#property_themeInstance) for usage example.
 *
 * @class Default
 * @namespace Themes
 */
export default EmberObject.extend({

  /**
   * @property table
   * @type string
   * @default ''
   */
  table: '',

  /**
   * @property buttonsGroup
   * @type string
   * @default ''
   */
  buttonsGroup: '',

  /**
   * @type string
   * @property globalFilterWrapper
   * @default ''
   */
  globalFilterWrapper: '',

  /**
   * @type string
   * @property columnsDropdownWrapper
   * @default ''
   */
  columnsDropdownWrapper: '',

  /**
   * @type string
   * @property columnsDropdownButtonWrapper
   * @default ''
   */
  columnsDropdownButtonWrapper: '',

  /**
   * @type string
   * @property columnsDropdown
   * @default ''
   */
  columnsDropdown: '',

  /**
   * @type string
   * @property columnsDropdownDivider
   * @default ''
   */
  columnsDropdownDivider: '',

  /**
   * CSS-class for table-header
   *
   * @type string
   * @property theadCell
   * @default 'table-header'
   */
  theadCell: 'table-header',

  /**
   * CSS-class used for thead-cells with columns titles. This class is used only if columns is not sortable
   *
   * @type string
   * @property theadCellNoSorting
   * @default 'table-header-no-sorting'
   */
  theadCellNoSorting: 'table-header-no-sorting',

  /**
   * CSS-class used for thead-cells with columns filters. This class is used only if columns is not filterable
   *
   * @type string
   * @property theadCellNoFiltering
   * @default 'table-header-no-filtering'
   */
  theadCellNoFiltering: 'table-header-no-filtering',

  /**
   * @type string
   * @property selectedRow
   * @default 'selected-row'
   */
  selectedRow: 'selected-row',

  /**
   * CSS-class for table footer
   *
   * @type string
   * @property tfooterWrapper
   * @default 'table-footer'
   */
  tfooterWrapper: 'table-footer',

  /**
   * @type string
   * @property tfooterInternalWrapper
   * @default ''
   */
  tfooterInternalWrapper: '',

  /**
   * CSS-class for table summary block
   *
   * @type string
   * @property footerSummary
   * @default 'table-summary'
   */
  footerSummary: 'table-summary',

  /**
   * @type string
   * @property footerSummaryNumericPagination
   * @default ''
   */
  footerSummaryNumericPagination: '',

  /**
   * @type string
   * @property footerSummaryDefaultPagination
   * @default ''
   */
  footerSummaryDefaultPagination: '',

  /**
   * @type string
   * @property pageSizeWrapper
   * @default ''
   */
  pageSizeWrapper: '',

  /**
   * @type string
   * @property pageSizeSelectWrapper
   * @default ''
   */
  pageSizeSelectWrapper: '',

  /**
   * Wrapper for pagination blocks
   *
   * @type string
   * @property paginationWrapper
   * @default 'table-nav'
   */
  paginationWrapper: 'table-nav',

  /**
   * @type string
   * @property paginationInternalWrapper
   * @default ''
   */
  paginationInternalWrapper: '',

  /**
   * @type string
   * @property paginationWrapperNumeric
   * @default ''
   */
  paginationWrapperNumeric: '',

  /**
   * @type string
   * @property paginationWrapperDefault
   * @default ''
   */
  paginationWrapperDefault: '',

  /**
   * @type string
   * @property paginationBlock
   * @default ''
   */
  paginationBlock: '',

  /**
   * @type string
   * @property paginationNumericItem
   * @default ''
   */
  paginationNumericItem: '',

  /**
   * @type string
   * @property paginationNumericItemActive
   * @default ''
   */
  paginationNumericItemActive: '',

  /**
   * @type string
   * @property buttonDefault
   * @default ''
   */
  buttonDefault: '',

  /**
   * @type string
   * @property buttonLink
   * @default ''
   */
  buttonLink: '',

  /**
   * @type string
   * @property noDataCell
   * @default ''
   */
  noDataCell: '',

  /**
   * @type string
   * @property collapseRow
   * @default 'collapse-row'
   */
  collapseRow: 'collapse-row',

  /**
   * @type string
   * @property collapseAllRows
   * @default 'collapse-all-rows'
   */
  collapseAllRows: 'collapse-all-rows',

  /**
   * @type string
   * @property expandRow
   * @default 'expand-row'
   */
  expandRow: 'expand-row',

  /**
   * @type string
   * @property expandAllRows
   * @default 'expand-all-rows'
   */
  expandAllRows: 'expand-all-rows',

  /**
   * @type string
   * @property thead
   * @default ''
   */
  thead: '',

  /**
   * @type string
   * @property input
   * @default ''
   */
  input: '',

  /**
   * @type string
   * @property select
   * @default ''
   */
  select: '',

  /**
   * @type string
   * @property clearFilterIcon
   * @default ''
   */
  clearFilterIcon: '',

  /**
   * @type string
   * @property clearAllFiltersIcon
   * @default ''
   */
  clearAllFiltersIcon: '',

  /**
   * @type string
   * @property globalFilterDropdownWrapper
   * @default ''
   */
  globalFilterDropdownWrapper: '',

  /**
   * @type string
   * @property sort-asc
   * @default ''
   */
  'sort-asc': '',

  /**
   * @type string
   * @property sort-desc
   * @default ''
   */
  'sort-desc': '',

  /**
   * @type string
   * @property column-visible
   * @default ''
   */
  'column-visible': '',

  /**
   * @type string
   * @property column-hidden
   * @default ''
   */
  'column-hidden': '',

  /**
   * @type string
   * @property nav-first
   * @default ''
   */
  'nav-first': '',

  /**
   * @type string
   * @property nav-prev
   * @default ''
   */
  'nav-prev': '',

  /**
   * @type string
   * @property nav-next
   * @default ''
   */
  'nav-next': '',

  /**
   * @type string
   * @property nav-last
   * @default ''
   */
  'nav-last': '',

  /**
   * @type string
   * @property caret
   * @default ''
   */
  'caret': '',

  /**
   * @type string
   * @property expand-row
   * @default ''
   */
  'expand-row': '',

  /**
   * @type string
   * @property expand-all-rows
   * @default ''
   */
  'expand-all-rows': '',

  /**
   * @type string
   * @property collapse-row
   * @default ''
   */
  'collapse-row': '',

  /**
   * @type string
   * @property collapse-all-rows
   * @default ''
   */
  'collapse-all-rows': '',

  /**
   * @type string
   * @property select-all-rows
   * @default ''
   */
  'select-all-rows': '',

  /**
   * @type string
   * @property deselect-all-rows
   * @default ''
   */
  'deselect-all-rows': '',

  /**
   * @type string
   * @property select-row
   * @default ''
   */
  'select-row': '',

  /**
   * @type string
   * @property deselect-row
   * @default ''
   */
  'deselect-row': ''
});