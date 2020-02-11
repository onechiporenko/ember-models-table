import EmberObject, {computed} from '@ember/object';
import {getOwner} from '@ember/application';

export const componentPath = (componentName) =>
  computed('componentsPath', 'defaultComponentsPath', function () {
    const owner = getOwner(this);
    const defaultPath =`${this.defaultComponentsPath}${componentName}`;
    const customPath = `${this.componentsPath}${componentName}`;
    return owner.lookup(`component:${customPath}`) ? customPath : defaultPath;
  });

/**
 * Almost empty skeleton for themes. Extend it to provide custom CSS-classes for table items and icons.
 *
 * * Every property with suffix `Component` is a path to the component used in theme
 * * Every property with suffix `Msg` is a message shown in the table
 * * Every property with suffix `Icon` is a CSS-class for font-library used as an icons (used for buttons, carets etc)
 *
 * **Difference from `v.2`:**
 *
 * * No `mergedProperties`
 * * Properties `components`, `messages` and `icons` are removed. Every their key is placed directly in theme and named with suffix `Component`, `Msg` or `Icon`.
 * * Every property name is converted to the `lowerCamelCase`
 *
 * @class DefaultTheme
 * @namespace Themes
 */
export default class DefaultTheme extends EmberObject {

  /**
   * Path to theme's components. It's used in the child-themes
   *
   * @property componentsPath
   * @default 'models-table/'
   * @type string
   */
  componentsPath = 'models-table/';

  /**
   * Default path to theme's components
   *
   * @property defaultComponentsPath
   * @default 'models-table/'
   * @type string
   */
  defaultComponentsPath = 'models-table/';

  /**
   * @property cellComponent
   * @type string
   * @default 'models-table/cell'
   */
  @componentPath('cell')
  cellComponent;

  /**
   * @property cellContentDisplayComponent
   * @type string
   * @default 'models-table/cell-content-display'
   */
  @componentPath('cell-content-display')
  cellContentDisplayComponent;

  /**
   * @property cellContentEditComponent
   * @type string
   * @default 'models-table/cell-content-edit'
   */
  @componentPath('cell-content-edit')
  cellContentEditComponent;

  /**
   * @property cellEditToggleComponent
   * @type string
   * @default 'models-table/cell-edit-toggle'
   */
  @componentPath('cell-edit-toggle')
  cellEditToggleComponent;


  /**
   * @property cellContentSummaryComponent
   * @type string
   * @default 'models-table/cell-column-summary'
   */
  @componentPath('cell-column-summary')
  cellContentSummaryComponent;

  /**
   * @property columnsDropdownComponent
   * @type string
   * @default 'models-table/columns-dropdown'
   */
  @componentPath('columns-dropdown')
  columnsDropdownComponent;

  /**
   * @property columnsHiddenComponent
   * @type string
   * @default 'models-table/columns-hidden'
   */
  @componentPath('columns-hidden')
  columnsHiddenComponent;

  /**
   * @property dataGroupBySelectComponent
   * @type string
   * @default 'models-table/data-group-by-select'
   */
  @componentPath('data-group-by-select')
  dataGroupBySelectComponent;

  /**
   * @property expandAllToggleComponent
   * @type string
   * @default 'models-table/expand-all-toggle'
   */
  @componentPath('expand-all-toggle')
  expandAllToggleComponent;

  /**
   * @property expandToggleComponent
   * @type string
   * @default 'models-table/expand-toggle'
   */
  @componentPath('expand-toggle')
  expandToggleComponent;

  /**
   * @property footerComponent
   * @type string
   * @default 'models-table/footer'
   */
  @componentPath('footer')
  footerComponent;

  /**
   * @property globalFilterComponent
   * @type string
   * @default 'models-table/global-filter'
   */
  @componentPath('global-filter')
  globalFilterComponent;

  /**
   * @property groupedHeaderComponent
   * @type string
   * @default 'models-table/grouped-header'
   */
  @componentPath('grouped-header')
  groupedHeaderComponent;

  /**
   * @property noDataComponent
   * @type string
   * @default 'models-table/no-data'
   */
  @componentPath('no-data')
  noDataComponent;

  /**
   * @property pageSizeSelectComponent
   * @type string
   * @default 'models-table/page-size-select'
   */
  @componentPath('page-size-select')
  pageSizeSelectComponent;

  /**
   * @property paginationNumericComponent
   * @type string
   * @default 'models-table/pagination-numeric'
   */
  @componentPath('pagination-numeric')
  paginationNumericComponent;

  /**
   * @property paginationSimpleComponent
   * @type string
   * @default 'models-table/pagination-simple'
   */
  @componentPath('pagination-simple')
  paginationSimpleComponent;

  /**
   * @property rowComponent
   * @type string
   * @default 'models-table/row'
   */
  @componentPath('row')
  rowComponent;

  /**
   * @property rowExpandComponent
   * @type string
   * @default 'models-table/row-expand'
   */
  @componentPath('row-expand')
  rowExpandComponent;

  /**
   * @property rowFilteringComponent
   * @type string
   * @default 'models-table/row-filtering'
   */
  @componentPath('row-filtering')
  rowFilteringComponent;

  /**
   * @property rowFilteringCellComponent
   * @type string
   * @default 'models-table/row-filtering-cell'
   */
  @componentPath('row-filtering-cell')
  rowFilteringCellComponent;

  /**
   * @property rowGroupingComponent
   * @type string
   * @default 'models-table/row-grouping'
   */
  @componentPath('row-grouping')
  rowGroupingComponent;

  /**
   * @property rowGroupToggleComponent
   * @type string
   * @default 'models-table/row-group-toggle'
   */
  @componentPath('row-group-toggle')
  rowGroupToggleComponent;

  /**
   * @property rowSelectAllCheckboxComponent
   * @type string
   * @default 'models-table/row-select-all-checkbox'
   */
  @componentPath('row-select-all-checkbox')
  rowSelectAllCheckboxComponent;

  /**
   * @property rowSelectCheckboxComponent
   * @type string
   * @default 'models-table/row-select-checkbox'
   */
  @componentPath('row-select-checkbox')
  rowSelectCheckboxComponent;

  /**
   * @property rowSortingComponent
   * @type string
   * @default 'models-table/row-sorting'
   */
  @componentPath('row-sorting')
  rowSortingComponent;

  /**
   * @property rowSortingCellComponent
   * @type string
   * @default 'models-table/row-sorting-cell'
   */
  @componentPath('row-sorting-cell')
  rowSortingCellComponent;

  /**
   * @property selectComponent
   * @type string
   * @default 'models-table/select'
   */
  @componentPath('select')
  selectComponent;

  /**
   * @property summaryComponent
   * @type string
   * @default 'models-table/summary'
   */
  @componentPath('summary')
  summaryComponent;

  /**
   * @property tableComponent
   * @type string
   * @default 'models-table/table'
   */
  @componentPath('table')
  tableComponent;

  /**
   * @property tableBodyComponent
   * @type string
   * @default 'models-table/table-body'
   */
  @componentPath('table-body')
  tableBodyComponent;

  /**
   * @property tableFooterComponent
   * @type string
   * @default 'models-table/table-footer'
   */
  @componentPath('table-footer')
  tableFooterComponent;

  /**
   * @property tableHeaderComponent
   * @type string
   * @default 'models-table/table-header'
   */
  @componentPath('table-header')
  tableHeaderComponent;

  /**
   * @property cellContentTagName
   * @type string
   * @default ''
   */
  cellContentTagName = '';

  /**
   * @property searchLabelMsg
   * Label for global filter
   *
   * @type string
   * @default 'Search:'
   */
  searchLabelMsg = 'Search:';

  /**
   * Placeholder for global filter
   *
   * @property searchPlaceholderMsg
   * @type string
   * @default ''
   */
  searchPlaceholderMsg = '';

  /**
   * Label for dropdown with columns for rows grouping
   *
   * @property groupByLabelMsg
   * @type string
   * @default 'Group by:'
   */
  groupByLabelMsg = 'Group by:';

  /**
   * Text on toggle for columns dropdown
   *
   * @property columnsTitleMsg
   * @type string
   * @default 'Columns'
   */
  columnsTitleMsg = 'Columns';

  /**
   * Label for button to show all table columns (under columns dropdown)
   *
   * @property columnsShowAllMsg
   * @type string
   * @default 'Show All'
   */
  columnsShowAllMsg = 'Show All';

  /**
   * Label for button to hide all table columns (under columns dropdown)
   *
   * @property columnsHideAllMsg
   * @type string
   * @default 'Hide All'
   */
  columnsHideAllMsg = 'Hide All';

  /**
   * Label for button to restore default visibility for table columns (under columns dropdown)
   *
   * @property columnsRestoreDefaultsMsg
   * @type string
   * @default 'Restore Defaults'
   */
  columnsRestoreDefaultsMsg = 'Restore Defaults';

  /**
   * Message shown in the table summary. It's used with three options:
   *
   * 1. First row's index
   * 2. Last row's index
   * 3. Overall rows count
   *
   * @property tableSummaryMsg
   * @type string
   * @default 'Show %@ - %@ of %@'
   */
  tableSummaryMsg = 'Show %@ - %@ of %@';

  /**
   * Message shown when all columns are hidden. It's shown inside table body
   *
   * @property allColumnsAreHiddenMsg
   * @type string
   * @default 'All columns are hidden. Use <strong>columns</strong>-dropdown to show some of them'
   */
  allColumnsAreHiddenMsg = 'All columns are hidden. Use <strong>columns</strong>-dropdown to show some of them';

  /**
   * Message shown when there are not data to display in the table. It's shown inside table body in cases when initial `data` is empty or when all records are filtered out
   *
   * @property noDataToShowMsg
   * @type string
   * @default 'No records to show'
   */
  noDataToShowMsg = 'No records to show';

  /**
   * Default label for button "Edit" inside the `cell-edit-toggle`-component
   *
   * @property editRowButtonLabelMsg
   * @type string
   * @default 'Edit'
   */
  editRowButtonLabelMsg = 'Edit';

  /**
   * Default label for button "Save" inside the `cell-edit-toggle`-component
   *
   * @property saveRowButtonLabelMsg
   * @type string
   * @default 'Save'
   */
  saveRowButtonLabelMsg = 'Save';

  /**
   * Default label for button "Cancel" inside the `cell-edit-toggle`-component
   *
   * @property cancelRowButtonLabelMsg
   * @type string
   * @default 'Cancel'
   */
  cancelRowButtonLabelMsg = 'Cancel';

  /**
   * Label for dropdown with page numbers. Used in both numeric and simple pagination
   *
   * @property currentPageNumberMsg
   * @type string
   * @default 'Page:'
   */
  currentPageNumberMsg = 'Page:';

  /**
   * Label for dropdown with rows count shown in the page
   *
   * @property rowsCountMsg
   * @type string
   * @default 'Rows:'
   */
  rowsCountMsg = 'Rows:';

  /**
   * Label for "First"-page in the numeric pagination. It's used for screen-readers and not "visible" by default
   *
   * @property goToFirstPageButtonTextMsg
   * @type string
   * @default 'Go to first page'
   */
  goToFirstPageButtonTextMsg = 'Go to first page';

  /**
   * Label for "Previous"-page in the numeric pagination. It's used for screen-readers and not "visible" by default
   *
   * @property goToPrevPageButtonTextMsg
   * @type string
   * @default 'Go to previous page'
   */
  goToPrevPageButtonTextMsg = 'Go to previous page';

  /**
   * Label for "Next"-page in the numeric pagination. It's used for screen-readers and not "visible" by default
   *
   * @property goToNextPageButtonTextMsg
   * @type string
   * @default 'Go to next page'
   */
  goToNextPageButtonTextMsg = 'Go to next page';

  /**
   * Label for "Last"-page in the numeric pagination. It's used for screen-readers and not "visible" by default
   *
   * @property goToLastPageButtonTextMsg
   * @type string
   * @default 'Go to last page'
   */
  goToLastPageButtonTextMsg = 'Go to last page';

  /**
   * Label for "Clear global filter"-button. It's used for screen-readers and not "visible" by default
   *
   * @property clearGlobalFilterMsg
   * @type string
   * @default 'Clear global filter input'
   */
  clearGlobalFilterMsg = 'Clear global filter input';

  /**
   * Label for "Clear filter"-buttons in the table header's cells. It's used for screen-readers and not "visible" by default
   *
   * @property clearFilterMsg
   * @type string
   * @default 'Clear filter input'
   */
  clearFilterMsg = 'Clear filter input';

  /**
   * Label for "Clear all filters"-button in the table summary section. It's used for screen-readers and not "visible" by default
   *
   * @property clearAllFiltersMsg
   * @type string
   * @default 'Clear all filters'
   */
  clearAllFiltersMsg = 'Clear all filters';

  /**
   * CSS-classes for `table`-tag
   *
   * @property table
   * @type string
   * @default ''
   */
  table = '';

  /**
   * @property buttonsGroup
   * @type string
   * @default ''
   */
  buttonsGroup = '';

  /**
   * CSS-classes for `div`-wrapper over components `global-filter`, `data-group-by-select` and `columns-dropdown`
   *
   * @property headerWrapper
   * @type string
   * @default ''
   */
  headerWrapper = '';

  /**
   * CSS-classes for wrapper used inside `global-filter` component
   *
   * @property globalFilterWrapper
   * @type string
   * @default ''
   */
  globalFilterWrapper = '';

  /**
   * CSS-classes for wrapper used inside `columns-dropdown` component
   *
   * @property columnsDropdownWrapper
   * @type string
   * @default ''
   */
  columnsDropdownWrapper = '';

  /**
   * @property columnsDropdownButtonWrapper
   * @type string
   * @default ''
   */
  columnsDropdownButtonWrapper = '';

  /**
   * CSS-classes for wrapper over list inside `columns-dropdown` component
   *
   * @property columnsDropdown
   * @type string
   * @default ''
   */
  columnsDropdown = '';

  /**
   * CSS-classes for divider for list inside `columns-dropdown` components. Divider is placed before single-column items by default
   *
   * @property columnsDropdownDivider
   * @type string
   * @default ''
   */
  columnsDropdownDivider = '';

  /**
   * CSS-classes for wrapper inside `data-group-by-select` component
   *
   * @property dataGroupBySelectWrapper
   * @type string
   * @default ''
   */
  dataGroupBySelectWrapper = 'data-group-by-wrapper';

  /**
   * CSS-classes for thead cells
   *
   * @property theadCell
   * @type string
   * @default 'table-header'
   */
  theadCell = 'table-header';

  /**
   * CSS-classes used for thead-cells with columns titles. This class is used only if columns is not sortable
   *
   * @property theadCellNoSorting
   * @type string
   * @default 'table-header-no-sorting'
   */
  theadCellNoSorting = 'table-header-no-sorting';

  /**
   * CSS-classes used for thead-cells with columns filters. This class is used only if columns is not filterable
   *
   * @property theadCellNoFiltering
   * @type string
   * @default 'table-header-no-filtering'
   */
  theadCellNoFiltering = 'table-header-no-filtering';

  /**
   * CSS-classes for selected rows. Used in the `row` component
   *
   * @property selectedRow
   * @type string
   * @default 'selected-row'
   */
  selectedRow = 'selected-row';

  /**
   * CSS-classes for expanded rows. Used in the `row` component
   *
   * @property expandedRow
   * @type string
   * @default 'expanded-row'
   */
  expandedRow = 'expanded-row';

  /**
   * CSS-classes for table footer
   *
   * @property tfooterWrapper
   * @type string
   * @default 'table-footer'
   */
  tfooterWrapper = 'table-footer';

  /**
   * CSS-classes for wrapper inside `footer` component
   *
   * @property tfooterInternalWrapper
   * @type string
   * @default ''
   */
  tfooterInternalWrapper = '';

  /**
   * CSS-classes for table summary block. Used in the `summary` component
   *
   * @property footerSummary
   * @type string
   * @default 'table-summary'
   */
  footerSummary = 'table-summary';

  /**
   * CSS-classes for table summary block. It's used when table has numeric pagination
   *
   * @property footerSummaryNumericPagination
   * @type string
   * @default ''
   */
  footerSummaryNumericPagination = '';

  /**
   * CSS-classes for table summary block. It's used when table has simple pagination
   *
   * @property footerSummaryDefaultPagination
   * @type string
   * @default ''
   */
  footerSummaryDefaultPagination = '';

  /**
   * CSS-classes for wrapper over "Page size"-block in the `footer` component
   *
   * @property pageSizeWrapper
   * @type string
   * @default ''
   */
  pageSizeWrapper = '';

  /**
   * @property pageSizeSelectWrapper
   * @type string
   * @default ''
   */
  pageSizeSelectWrapper = '';


  /**
   * Wrapper for select-tag in the current-page-number-select component
   *
   * @property currentPageSizeSelectWrapper
   * @type string
   * @default ''
   */
  currentPageSizeSelectWrapper = '';

  /**
   * CSS-classes for `pagination-simple` and `pagination-numeric` components
   *
   * @property paginationWrapper
   * @type string
   * @default 'table-nav'
   */
  paginationWrapper = 'table-nav';

  /**
   * CSS-classes for buttons-wrapper in the `pagination-simple` and `pagination-numeric` components
   *
   * @property paginationInternalWrapper
   * @type string
   * @default ''
   */
  paginationInternalWrapper = '';

  /**
   * CSS-classes for `pagination-numeric` component
   *
   * @property paginationWrapperNumeric
   * @type string
   * @default ''
   */
  paginationWrapperNumeric = '';

  /**
   * CSS-classes for `pagination-simple` component
   *
   * @property paginationWrapperDefault
   * @type string
   * @default ''
   */
  paginationWrapperDefault = '';

  /**
   * @property paginationBlock
   * @type string
   * @default ''
   */
  paginationBlock = '';

  /**
   * CSS-classes for items in the `pagination-numeric` component
   *
   * @property paginationNumericItem
   * @type string
   * @default ''
   */
  paginationNumericItem = '';

  /**
   * CSS-classes for active item in the `pagination-numeric` component
   *
   * @property paginationNumericItemActive
   * @type string
   * @default ''
   */
  paginationNumericItemActive = '';

  /**
   * CSS-classes for "default" buttons
   *
   * @property buttonDefault
   * @type string
   * @default ''
   */
  buttonDefault = '';

  /**
   * CSS-classes for "link"-buttons
   *
   * @property buttonLink
   * @type string
   * @default ''
   */
  buttonLink = '';

  /**
   * CSS-classes for `td` shown when all columns are hidden
   *
   * @property noDataCell
   * @type string
   * @default ''
   */
  noDataCell = '';

  /**
   * @property collapseRow
   * @type string
   * @default 'collapseRow'
   */
  collapseRow = 'collapse-row';

  /**
   * @property collapseAllRows
   * @type string
   * @default 'collapse-all-rows'
   */
  collapseAllRows = 'collapse-all-rows';

  /**
   * @property expandRow
   * @type string
   * @default 'expand-row'
   */
  expandRow = 'expand-row';

  /**
   * @property expandAllRows
   * @type string
   * @default 'expand-all-rows'
   */
  expandAllRows = 'expand-all-rows';

  /**
   * @property cellContentDisplay
   * @type string
   * @default ''
   */
  cellContentDisplay = '';

  /**
   * @property cellContentEdit
   * @type string
   * @default ''
   */
  cellContentEdit = '';

  /**
   * CSS-classes for `thead`
   *
   * @property thead
   * @type string
   * @default ''
   */
  thead = '';

  /**
   * CSS-classes for `form`
   *
   * @property form
   * @type string
   * @default ''
   */
  form = '';

  /**
   * CSS-classes for wrapper over the form elements
   *
   * @property formElementWrapper
   * @type string
   * @default ''
   */
  formElementWrapper = '';

  /**
   * CSS-classes for input elements
   *
   * @property input
   * @type string
   * @default ''
   */
  input = '';

  /**
   * CSS-classes for `select`
   *
   * @property select
   * @type string
   * @default ''
   */
  select = '';

  /**
   * CSS-classes for "Clear filter" button. Used for global filter and filters for each column
   *
   * @property clearFilterIcon
   * @type string
   * @default ''
   */
  clearFilterIcon = '';

  /**
   * CSS-classes for "Clear all filters" button inside the `summary` component
   *
   * @property clearAllFiltersIcon
   * @type string
   * @default ''
   */
  clearAllFiltersIcon = '';

  /**
   * @property globalFilterDropdownWrapper
   * @type string
   * @default ''
   */
  globalFilterDropdownWrapper = '';

  /**
   * CSS-classes for `select` inside the `data-group-by-select` component
   *
   * @property changeGroupByField
   * @type string
   * @default 'change-group-by-field'
   */
  changeGroupByField = 'change-group-by-field';

  /**
   * CSS-classes for "sort asc/desc" button inside the `data-group-by-select` component
   *
   * @property sortGroupedPropertyBtn
   * @type string
   * @default ''
   */
  sortGroupedPropertyBtn = 'sort-grouped-field';

  /**
   * CSS-class for `row-grouping` component
   *
   * @property groupingRow
   * @type string
   * @default 'grouping-row'
   */
  groupingRow = 'grouping-row';

  /**
   * CSS-classes for `td` inside `row-grouping` component
   *
   * @property groupingCell
   * @type string
   * @default 'grouping-cell'
   */
  groupingCell = 'grouping-cell';

  /**
   * CSS-classes for icons used to show that some "list" is sorted "ASC". It's used for `data-group-by-select` and `row-sorting-cell`
   *
   * @property sortAscIcon
   * @type string
   * @default ''
   */
  sortAscIcon = '';

  /**
   * CSS-classes for icons used to show that some "list" is sorted "DESC". It's used for `data-group-by-select` and `row-sorting-cell`
   *
   * @property sortDescIcon
   * @type string
   * @default ''
   */
  sortDescIcon = '';

  /**
   * CSS-classes for icons in the `columns-dropdown` related to the visible columns
   *
   * @property columnVisibleIcon
   * @type string
   * @default ''
   */
  columnVisibleIcon = '';

  /**
   * CSS-classes for icons in the `columns-dropdown` related to the hidden columns
   *
   * @property columnHiddenIcon
   * @type string
   * @default ''
   */
  columnHiddenIcon = '';

  /**
   * CSS-classes for icon used in the "First"-button (`pagination-simple`)
   *
   * @property navFirstIcon
   * @type string
   * @default ''
   */
  navFirstIcon = '';

  /**
   * CSS-classes for icon used in the "Prev"-button (`pagination-simple`)
   *
   * @property navPrevIcon
   * @type string
   * @default ''
   */
  navPrevIcon = '';

  /**
   * CSS-classes for icon used in the "Next"-button (`pagination-simple`)
   *
   * @property navNextIcon
   * @type string
   * @default ''
   */
  navNextIcon = '';

  /**
   * CSS-classes for icon used in the "Last"-button (`pagination-simple`)
   *
   * @property navLastIcon
   * @type string
   * @default ''
   */
  navLastIcon = '';

  /**
   * CSS-classes for "caret"-icon used in the `columns-dropdown`
   *
   * @property caretIcon
   * @type string
   * @default ''
   */
  caretIcon = '';

  /**
   * @property selectAllRowsIcon
   * @type string
   * @default ''
   */
  selectAllRowsIcon = '';

  /**
   * @property deselectAllRowsIcon
   * @type string
   * @default ''
   */
  deselectAllRowsIcon = '';

  /**
   * @property selectRowIcon
   * @type string
   * @default ''
   */
  selectRowIcon = '';

  /**
   * @property deselectRowIcon
   * @type string
   * @default ''
   */
  deselectRowIcon = '';

  /**
   * @property editRowButton
   * @type string
   * @default ''
   */
  editRowButton = '';

  /**
   * @property saveRowButton
   * @type string
   * @default ''
   */
  saveRowButton = '';

  /**
   * @property cancelRowButton
   * @type string
   * @default ''
   */
  cancelRowButton = '';

  /**
   * @property filteringCellInternalWrapper
   * @type string
   * @default ''
   */
  filteringCellInternalWrapper = '';

  /**
   * @property expandRowIcon
   * @type string
   * @default ''
   */
  expandRowIcon = '';

  /**
   * @property collapseRowIcon
   * @type string
   * @default ''
   */
  collapseRowIcon = '';

  /**
   * @property collapseAllRowsIcon
   * @type string
   * @default ''
   */
  collapseAllRowsIcon = '';

  /**
   * @property expandAllRowsIcon
   * @type string
   * @default ''
   */
  expandAllRowsIcon = '';
}
