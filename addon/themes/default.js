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
 * Almost empty skeleton for themes. Extend it to provide custom css-classes for table items and icons.
 *
 * Check [BootstrapTheme](Themes.Bootstrap3Theme.html) for implementation example.
 *
 * Check [ModelsTable.themeInstance](Components.ModelsTable.html#property_themeInstance) for usage example.
 *
 * @class DefaultTheme
 * @namespace Themes
 */
export default class DefaultTheme extends EmberObject {

  /**
   * Path to theme's components. It's used in the child-themes
   *
   * @default 'models-table/'
   * @type string
   */
  componentsPath = 'models-table/';

  /**
   * Default path to theme's components
   *
   * @default 'models-table/'
   * @type string
   */
  defaultComponentsPath = 'models-table/';

  /**
   * @type string
   * @default 'models-table/cell'
   */
  @componentPath('cell')
  cellComponent;

  /**
   * @type string
   * @default 'models-table/cell-content-display'
   */
  @componentPath('cell-content-display')
  cellContentDisplayComponent;

  /**
   * @type string
   * @default 'models-table/cell-content-edit'
   */
  @componentPath('cell-content-edit')
  cellContentEditComponent;

  /**
   * @type string
   * @default 'models-table/cell-column-summary'
   */
  @componentPath('cell-column-summary')
  cellContentSummaryComponent;

  /**
   * @type string
   * @default 'models-table/columns-dropdown'
   */
  @componentPath('columns-dropdown')
  columnsDropdownComponent;

  /**
   * @type string
   * @default 'models-table/columns-hidden'
   */
  @componentPath('columns-hidden')
  columnsHiddenComponent;

  /**
   * @type string
   * @default 'models-table/data-group-by-select'
   */
  @componentPath('data-group-by-select')
  dataGroupBySelectComponent;

  /**
   * @type string
   * @default 'models-table/footer'
   */
  @componentPath('footer')
  footerComponent;

  /**
   * @type string
   * @default 'models-table/global-filter'
   */
  @componentPath('global-filter')
  globalFilterComponent;

  /**
   * @type string
   * @default 'models-table/grouped-header'
   */
  @componentPath('grouped-header')
  groupedHeaderComponent;

  /**
   * @type string
   * @default 'models-table/no-data'
   */
  @componentPath('no-data')
  noDataComponent;

  /**
   * @type string
   * @default 'models-table/page-size-select'
   */
  @componentPath('page-size-select')
  pageSizeSelectComponent;

  /**
   * @type string
   * @default 'models-table/pagination-numeric'
   */
  @componentPath('pagination-numeric')
  paginationNumericComponent;

  /**
   * @type string
   * @default 'models-table/pagination-simple'
   */
  @componentPath('pagination-simple')
  paginationSimpleComponent;

  /**
   * @type string
   * @default 'models-table/row'
   */
  @componentPath('row')
  rowComponent;

  /**
   * @type string
   * @default 'models-table/row-expand'
   */
  @componentPath('row-expand')
  rowExpandComponent;

  /**
   * @type string
   * @default 'models-table/row-filtering'
   */
  @componentPath('row-filtering')
  rowFilteringComponent;

  /**
   * @type string
   * @default 'models-table/row-filtering-cell'
   */
  @componentPath('row-filtering-cell')
  rowFilteringCellComponent;

  /**
   * @type string
   * @default 'models-table/row-grouping'
   */
  @componentPath('row-grouping')
  rowGroupingComponent;

  /**
   * @type string
   * @default 'models-table/row-group-toggle'
   */
  @componentPath('row-group-toggle')
  rowGroupToggleComponent;

  /**
   * @type string
   * @default 'models-table/row-sorting'
   */
  @componentPath('row-sorting')
  rowSortingComponent;

  /**
   * @type string
   * @default 'models-table/row-sorting-cell'
   */
  @componentPath('row-sorting-cell')
  rowSortingCellComponent;

  /**
   * @type string
   * @default 'models-table/select'
   */
  @componentPath('select')
  selectComponent;

  /**
   * @type string
   * @default 'models-table/summary'
   */
  @componentPath('summary')
  summaryComponent;

  /**
   * @type string
   * @default 'models-table/table'
   */
  @componentPath('table')
  tableComponent;

  /**
   * @type string
   * @default 'models-table/table-body'
   */
  @componentPath('table-body')
  tableBodyComponent;

  /**
   * @type string
   * @default 'models-table/table-footer'
   */
  @componentPath('table-footer')
  tableFooterComponent;

  /**
   * @type string
   * @default 'models-table/table-header'
   */
  @componentPath('table-header')
  tableHeaderComponent;

  /**
   * @type string
   * @default ''
   */
  cellContentTagName = '';

  /**
   * Label for global filter
   *
   * @type string
   * @default 'Search:'
   */
  searchLabelMsg = 'Search:';

  /**
   * Placeholder for global filter
   *
   * @type string
   * @default ''
   */
  searchPlaceholderMsg = '';

  /**
   * Label for dropdown with columns for rows grouping
   *
   * @type string
   * @default 'Group by:'
   */
  groupByLabelMsg = 'Group by:';

  /**
   * Text on toggle for columns dropdown
   *
   * @type string
   * @default 'Columns'
   */
  columnsTitleMsg = 'Columns';

  /**
   * Label for button to show all table columns (under columns dropdown)
   *
   * @type string
   * @default 'Show All'
   */
  columnsShowAllMsg = 'Show All';

  /**
   * Label for button to hide all table columns (under columns dropdown)
   *
   * @type string
   * @default 'Hide All'
   */
  columnsHideAllMsg = 'Hide All';

  /**
   * Label for button to restore default visibility for table columns (under columns dropdown)
   *
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
   * @type string
   * @default 'Show %@ - %@ of %@'
   */
  tableSummaryMsg = 'Show %@ - %@ of %@';

  /**
   * Message shown when all columns are hidden. It's shown inside table body
   */
  allColumnsAreHiddenMsg = 'All columns are hidden. Use <strong>columns</strong>-dropdown to show some of them';

  /**
   * Message shown when there are not data to display in the table. It's shown inside table body in cases when initial `data` is empty or when all records are filtered out
   *
   * @type string
   * @default 'No records to show'
   */
  noDataToShowMsg = 'No records to show';

  /**
   * Default label for button "Edit" inside the `cell-edit-toggle`-component
   *
   * @type string
   * @default 'Edit'
   */
  editRowButtonLabelMsg = 'Edit';

  /**
   * Default label for button "Save" inside the `cell-edit-toggle`-component
   *
   * @type string
   * @default 'Save'
   */
  saveRowButtonLabelMsg = 'Save';

  /**
   * Default label for button "Cancel" inside the `cell-edit-toggle`-component
   *
   * @type string
   * @default 'Cancel'
   */
  cancelRowButtonLabelMsg = 'Cancel';

  /**
   * Label for dropdown with page numbers. Used in both numeric and simple pagination
   *
   * @type string
   * @default 'Page:'
   */
  currentPageNumberMsg = 'Page:';

  /**
   * Label for dropdown with rows count shown in the page
   *
   * @type string
   * @default 'Rows:'
   */
  rowsCountMsg = 'Rows:';

  /**
   * Label for "First"-page in the numeric pagination. It's used for screen-readers and not "visible" by default
   *
   * @type string
   * @default 'Go to first page'
   */
  goToFirstPageButtonTextMsg = 'Go to first page';

  /**
   * Label for "Previous"-page in the numeric pagination. It's used for screen-readers and not "visible" by default
   *
   * @type string
   * @default 'Go to previous page'
   */
  goToPrevPageButtonTextMsg = 'Go to previous page';

  /**
   * Label for "Next"-page in the numeric pagination. It's used for screen-readers and not "visible" by default
   *
   * @type string
   * @default 'Go to next page'
   */
  goToNextPageButtonTextMsg = 'Go to next page';

  /**
   * Label for "Last"-page in the numeric pagination. It's used for screen-readers and not "visible" by default
   *
   * @type string
   * @default 'Go to last page'
   */
  goToLastPageButtonTextMsg = 'Go to last page';

  /**
   * Label for "Clear global filter"-button. It's used for screen-readers and not "visible" by default
   *
   * @type string
   * @default 'Clear global filter input'
   */
  clearGlobalFilterMsg = 'Clear global filter input';

  /**
   * Label for "Clear filter"-buttons in the table header's cells. It's used for screen-readers and not "visible" by default
   *
   * @type string
   * @default 'Clear filter input'
   */
  clearFilterMsg = 'Clear filter input';

  /**
   * Label for "Clear all filters"-button in the table summary section. It's used for screen-readers and not "visible" by default
   *
   * @type string
   * @default 'Clear all filters'
   */
  clearAllFiltersMsg = 'Clear all filters';

  /**
   * CSS-classes for `table`-tag
   *
   * @type string
   * @default ''
   */
  table = '';

  /**
   * @type string
   * @default ''
   */
  buttonsGroup = '';

  /**
   * CSS-classes for `div`-wrapper over components `global-filter`, `data-group-by-select` and `columns-dropdown`
   *
   * @type string
   * @default ''
   */
  headerWrapper = '';

  /**
   * CSS-classes for wrapper used inside `global-filter` component
   *
   * @type string
   * @default ''
   */
  globalFilterWrapper = '';

  /**
   * CSS-classes for wrapper used inside `columns-dropdown` component
   *
   * @type string
   * @default ''
   */
  columnsDropdownWrapper = '';

  /**
   * @type string
   * @default ''
   */
  columnsDropdownButtonWrapper = '';

  /**
   * CSS-classes for wrapper over list inside `columns-dropdown` component
   *
   * @type string
   * @default ''
   */
  columnsDropdown = '';

  /**
   * CSS-classes for divider for list inside `columns-dropdown` components. Divider is placed before single-column items by default
   *
   * @type string
   * @default ''
   */
  columnsDropdownDivider = '';

  /**
   * CSS-classes for wrapper inside `data-group-by-select` component
   *
   * @type string
   * @default ''
   */
  dataGroupBySelectWrapper = 'data-group-by-wrapper';

  /**
   * CSS-classes for thead cells
   *
   * @type string
   * @default 'table-header'
   */
  theadCell = 'table-header';

  /**
   * CSS-classes used for thead-cells with columns titles. This class is used only if columns is not sortable
   *
   * @type string
   * @default 'table-header-no-sorting'
   */
  theadCellNoSorting = 'table-header-no-sorting';

  /**
   * CSS-classes used for thead-cells with columns filters. This class is used only if columns is not filterable
   *
   * @type string
   * @default 'table-header-no-filtering'
   */
  theadCellNoFiltering = 'table-header-no-filtering';

  /**
   * CSS-classes for selected rows. Used in the `row` component
   *
   * @type string
   * @default 'selected-row'
   */
  selectedRow = 'selected-row';

  /**
   * CSS-classes for expanded rows. Used in the `row` component
   *
   * @type string
   * @default 'expanded-row'
   */
  expandedRow = 'expanded-row';

  /**
   * CSS-classes for table footer
   *
   * @type string
   * @default 'table-footer'
   */
  tfooterWrapper = 'table-footer';

  /**
   * CSS-classes for wrapper inside `footer` component
   *
   * @type string
   * @default ''
   */
  tfooterInternalWrapper = '';

  /**
   * CSS-classes for table summary block. Used in the `summary` component
   *
   * @type string
   * @default 'table-summary'
   */
  footerSummary = 'table-summary';

  /**
   * CSS-classes for table summary block. It's used when table has numeric pagination
   *
   * @type string
   * @default ''
   */
  footerSummaryNumericPagination = '';

  /**
   * CSS-classes for table summary block. It's used when table has simple pagination
   *
   * @type string
   * @default ''
   */
  footerSummaryDefaultPagination = '';

  /**
   * CSS-classes for wrapper over "Page size"-block in the `footer` component
   *
   * @type string
   * @default ''
   */
  pageSizeWrapper = '';

  /**
   * @type string
   * @default ''
   */
  pageSizeSelectWrapper = '';


  /**
   * Wrapper for select-tag in the current-page-number-select component
   *
   * @type string
   * @default ''
   */
  currentPageSizeSelectWrapper = '';

  /**
   * CSS-classes for `pagination-simple` and `pagination-numeric` components
   *
   * @type string
   * @default 'table-nav'
   */
  paginationWrapper = 'table-nav';

  /**
   * CSS-classes for buttons-wrapper in the `pagination-simple` and `pagination-numeric` components
   *
   * @type string
   * @default ''
   */
  paginationInternalWrapper = '';

  /**
   * CSS-classes for `pagination-numeric` component
   *
   * @type string
   * @default ''
   */
  paginationWrapperNumeric = '';

  /**
   * CSS-classes for `pagination-simple` component
   *
   * @type string
   * @default ''
   */
  paginationWrapperDefault = '';

  /**
   * @type string
   * @default ''
   */
  paginationBlock = '';

  /**
   * CSS-classes for items in the `pagination-numeric` component
   *
   * @type string
   * @default ''
   */
  paginationNumericItem = '';

  /**
   * CSS-classes for active item in the `pagination-numeric` component
   *
   * @type string
   * @default ''
   */
  paginationNumericItemActive = '';

  /**
   * CSS-classes for "default" buttons
   *
   * @type string
   * @default ''
   */
  buttonDefault = '';

  /**
   * CSS-classes for "link"-buttons
   *
   * @type string
   * @default ''
   */
  buttonLink = '';

  /**
   * CSS-classes for `td` shown when all columns are hidden
   *
   * @type string
   * @default ''
   */
  noDataCell = '';

  /**
   * @type string
   * @default 'collapseRow'
   */
  collapseRow = 'collapse-row';

  /**
   * @type string
   * @default 'collapse-all-rows'
   */
  collapseAllRows = 'collapse-all-rows';

  /**
   * @type string
   * @default 'expand-row'
   */
  expandRow = 'expand-row';

  /**
   * @type string
   * @default 'expand-all-rows'
   */
  expandAllRows = 'expand-all-rows';

  /**
   * @type string
   * @default ''
   */
  cellContentDisplay = '';

  /**
   * @type string
   * @default ''
   */
  cellContentEdit = '';

  /**
   * CSS-classes for `thead`
   *
   * @type string
   * @default ''
   */
  thead = '';

  /**
   * CSS-classes for `form`
   *
   * @type string
   * @default ''
   */
  form = '';

  /**
   * CSS-classes for wrapper over the form elements
   *
   * @type string
   * @default ''
   */
  formElementWrapper = '';

  /**
   * CSS-classes for input elements
   *
   * @type string
   * @default ''
   */
  input = '';

  /**
   * CSS-classes for `select`
   *
   * @type string
   * @default ''
   */
  select = '';

  /**
   * CSS-classes for "Clear filter" button. Used for global filter and filters for each column
   *
   * @type string
   * @default ''
   */
  clearFilterIcon = '';

  /**
   * CSS-classes for "Clear all filters" button inside the `summary` component
   *
   * @type string
   * @default ''
   */
  clearAllFiltersIcon = '';

  /**
   * @type string
   * @default ''
   */
  globalFilterDropdownWrapper = '';

  /**
   * CSS-classes for `select` inside the `data-group-by-select` component
   *
   * @type string
   * @default 'change-group-by-field'
   */
  changeGroupByField = 'change-group-by-field';

  /**
   * CSS-classes for "sort asc/desc" button inside the `data-group-by-select` component
   *
   * @type string
   * @default ''
   */
  sortGroupedPropertyBtn = 'sort-grouped-field';

  /**
   * CSS-class for `row-grouping` component
   *
   * @type string
   * @default 'grouping-row'
   */
  groupingRow = 'grouping-row';

  /**
   * CSS-classes for `td` inside `row-grouping` component
   *
   * @type string
   * @default 'grouping-cell'
   */
  groupingCell = 'grouping-cell';

  /**
   * CSS-classes for icons used to show that some "list" is sorted "ASC". It's used for `data-group-by-select` and `row-sorting-cell`
   *
   * @type string
   * @default ''
   */
  sortAscIcon = '';

  /**
   * CSS-classes for icons used to show that some "list" is sorted "DESC". It's used for `data-group-by-select` and `row-sorting-cell`
   *
   * @type string
   * @default ''
   */
  sortDescIcon = '';

  /**
   * CSS-classes for icons in the `columns-dropdown` related to the visible columns
   *
   * @type string
   * @default ''
   */
  columnVisibleIcon = '';

  /**
   * CSS-classes for icons in the `columns-dropdown` related to the hidden columns
   *
   * @type string
   * @default ''
   */
  columnHiddenIcon = '';

  /**
   * CSS-classes for icon used in the "First"-button (`pagination-simple`)
   *
   * @type string
   * @default ''
   */
  navFirstIcon = '';

  /**
   * CSS-classes for icon used in the "Prev"-button (`pagination-simple`)
   *
   * @type string
   * @default ''
   */
  navPrevIcon = '';

  /**
   * CSS-classes for icon used in the "Next"-button (`pagination-simple`)
   *
   * @type string
   * @default ''
   */
  navNextIcon = '';

  /**
   * CSS-classes for icon used in the "Last"-button (`pagination-simple`)
   *
   * @type string
   * @default ''
   */
  navLastIcon = '';

  /**
   * CSS-classes for "caret"-icon used in the `columns-dropdown`
   *
   * @type string
   * @default ''
   */
  caretIcon = '';

  /**
   * @type string
   * @default ''
   */
  selectAllRowsIcon = '';

  /**
   * @type string
   * @default ''
   */
  deselectAllRowsIcon = '';

  /**
   * @type string
   * @default ''
   */
  selectRowIcon = '';

  /**
   * @type string
   * @default ''
   */
  deselectRowIcon = '';

  /**
   * @type string
   * @default ''
   */
  editRowButton = '';

  /**
   * @type string
   * @default ''
   */
  saveRowButton = '';

  /**
   * @type string
   * @default ''
   */
  cancelRowButton = '';

  /**
   * @type string
   * @default ''
   */
  filteringCellInternalWrapper = '';

  /**
   * @type string
   * @default ''
   */
  expandRowIcon = '';

  /**
   * @type string
   * @default ''
   */
  collapseRowIcon = '';

  /**
   * @type string
   * @default ''
   */
  collapseAllRowsIcon = '';

  /**
   * @type string
   * @default ''
   */
  expandAllRowsIcon = '';
}
