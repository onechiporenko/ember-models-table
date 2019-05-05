import EmberObject from '@ember/object';

/**
 * Almost empty skeleton for themes. Extend it to provide custom css-classes for table items and icons.
 *
 * Check [BootstrapTheme](Themes.Bootstrap3.html) for implementation example.
 *
 * Check [ModelsTable.themeInstance](Components.ModelsTable.html#property_themeInstance) for usage example.
 *
 * @class Default
 * @namespace Themes
 */
export default EmberObject.extend({

  mergedProperties: [
    'components',
    'tagNames',
    'messages'
  ],

  /**
   * Map with internal components
   *
   * You may override it if some custom component should be used instead the default one. You don't need to copy whole map because it's declared as a [mergedProperty](https://www.emberjs.com/api/ember/2.14/classes/Ember.CoreObject/properties/mergedProperties?anchor=mergedProperties)
   *
   * @property components
   * @type object
   */
  components: {
    'cell': 'models-table/cell',
    'cell-content-display': 'models-table/cell-content-display',
    'cell-content-edit': 'models-table/cell-content-edit',
    'cell-column-summary': 'models-table/cell-column-summary',
    'columns-dropdown': 'models-table/columns-dropdown',
    'columns-hidden': 'models-table/columns-hidden',
    'data-group-by-select': 'models-table/data-group-by-select',
    'footer': 'models-table/footer',
    'global-filter': 'models-table/global-filter',
    'grouped-header': 'models-table/grouped-header',
    'no-data': 'models-table/no-data',
    'page-size-select': 'models-table/page-size-select',
    'pagination-numeric': 'models-table/pagination-numeric',
    'pagination-simple': 'models-table/pagination-simple',
    'row': 'models-table/row',
    'row-expand': 'models-table/row-expand',
    'row-filtering': 'models-table/row-filtering',
    'row-filtering-cell': 'models-table/row-filtering-cell',
    'row-grouping': 'models-table/row-grouping',
    'row-group-toggle': 'models-table/row-group-toggle',
    'row-sorting': 'models-table/row-sorting',
    'row-sorting-cell': 'models-table/row-sorting-cell',
    'select': 'models-table/select',
    'summary': 'models-table/summary',
    'table': 'models-table/table',
    'table-body': 'models-table/table-body',
    'table-footer': 'models-table/table-footer',
    'table-header': 'models-table/table-header'
  },

  tagNames: {
    /* blank for backward compatibility */
    'cell-content': ''
  },

  /**
   *  Map with overrides for messages used in the component
   *
   * Available keys and values
   *
   *  * `searchLabel`: 'Search:',
   *  * `groupByLabel`: 'Group by:',
   *  * `searchPlaceholder`: '',
   *  * `columns-title`: 'Columns',
   *  * `columns-showAll`: 'Show All',
   *  * `columns-hideAll`: 'Hide All',
   *  * `columns-restoreDefaults`: 'Restore Defaults',
   *  * `tableSummary`: 'Show %@ - %@ of %@',
   *  * `allColumnsAreHidden`: 'All columns are hidden. Use <strong>columns</strong>-dropdown to show some of them',
   *  * `noDataToShow`: 'No records to show',
   *  * `editRowButtonLabel`: 'Edit',
   *  * `saveRowButtonLabel`: 'Save',
   *  * `cancelRowButtonLabel`: 'Cancel'
   *  * `currentPageNumber`: 'Page:'
   *  * `rowsCount`: 'Rows:'
   *
   * @property messages
   * @type object
   */
  messages: {
    searchLabel: 'Search:',
    searchPlaceholder: '',
    groupByLabel: 'Group by:',
    'columns-title': 'Columns',
    'columns-showAll': 'Show All',
    'columns-hideAll': 'Hide All',
    'columns-restoreDefaults': 'Restore Defaults',
    tableSummary: 'Show %@ - %@ of %@',
    allColumnsAreHidden: 'All columns are hidden. Use <strong>columns</strong>-dropdown to show some of them',
    noDataToShow: 'No records to show',
    editRowButtonLabel: 'Edit',
    saveRowButtonLabel: 'Save',
    cancelRowButtonLabel: 'Cancel',
    currentPageNumber: 'Page:',
    rowsCount: 'Rows:'
  },

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
   * @type string
   * @property dataGroupBySelectWrapper
   * @default ''
   */
  dataGroupBySelectWrapper: 'data-group-by-wrapper',

  /**
   * CSS-class for thead cells
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
   * @type string
   * @property expandedRow
   * @default 'expanded-row'
   */
  expandedRow: 'expanded-row',

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
   * Wrapper for select-tag in the current-page-number-select component
   *
   * @type string
   * @property currentPageSizeSelectWrapper
   * @default ''
   */
  currentPageSizeSelectWrapper: '',

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
   * @property cellContentDisplay
   * @default ''
   */
  cellContentDisplay: '',

  /**
   * @type string
   * @property cellContentEdit
   * @default ''
   */
  cellContentEdit: '',

  /**
   * CSS-class for table header
   *
   * @type string
   * @property thead
   * @default ''
   */
  thead: '',

  /**
   * @type string
   * @property form
   * @default ''
   */
  form: '',

  /**
   * @property formElementWrapper
   * @type string
   * @default ''
   */
  formElementWrapper: '',

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
   * @default 'change-group-by-field'
   * @property changeGroupByField
   */
  changeGroupByField: 'change-group-by-field',

  /**
   * @type string
   * @default ''
   * @property sortGroupedPropertyBtn
   */
  sortGroupedPropertyBtn: 'sort-grouped-field',

  /**
   * @type string
   * @property groupingRow
   * @default 'grouping-row'
   */
  groupingRow: 'grouping-row',

  /**
   * @type string
   * @property groupingCell
   * @default 'grouping-cell'
   */
  groupingCell: 'grouping-cell',

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
  'deselect-row': '',

  /**
   * @type string
   * @property edit-row-button
   * @default ''
   */
  'edit-row-button': '',

  /**
   * @type string
   * @property save-row-button
   * @default ''
   */
  'save-row-button': '',

  /**
   * @type string
   * @property cancel-row-button
   * @default ''
   */
  'cancel-row-button': ''
});
