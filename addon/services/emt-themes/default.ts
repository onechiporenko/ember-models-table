import Service from '@ember/service';
import Component from '@glimmer/component';
import RowSelectAllCheckbox from '../../components/models-table/themes/default/row-select-all-checkbox';
import ColumnsDropdown from '../../components/models-table/themes/default/columns-dropdown';
import DataGroupBySelect from '../../components/models-table/themes/default/data-group-by-select';
import GlobalFilter from '../../components/models-table/themes/default/global-filter';
import RowFilteringCell from '../../components/models-table/themes/default/row-filtering-cell';
import Summary from '../../components/models-table/themes/default/summary';
import CellContentEdit from '../../components/models-table/themes/default/cell-content-edit';
import Cell from '../../components/models-table/themes/default/cell';
import CellContentDisplay from '../../components/models-table/themes/default/cell-content-display';
import CellEditToggle from '../../components/models-table/themes/default/cell-edit-toggle';
import CellColumnSummary from '../../components/models-table/themes/default/cell-column-summary';
import ColumnsHidden from '../../components/models-table/themes/default/columns-hidden';
import ExpandAllToggle from '../../components/models-table/themes/default/expand-all-toggle';
import ExpandToggle from '../../components/models-table/themes/default/expand-toggle';
import Footer from '../../components/models-table/themes/default/footer';
import GroupedHeader from '../../components/models-table/themes/default/grouped-header';
import NoData from '../../components/models-table/themes/default/no-data';
import PageSizeSelect from '../../components/models-table/themes/default/page-size-select';
import PaginationNumeric from '../../components/models-table/themes/default/pagination-numeric';
import PaginationSimple from '../../components/models-table/themes/default/pagination-simple';
import Row from '../../components/models-table/themes/default/row';
import RowExpand from '../../components/models-table/themes/default/row-expand';
import RowFiltering from '../../components/models-table/themes/default/row-filtering';
import RowGrouping from '../../components/models-table/themes/default/row-grouping';
import RowGroupToggle from '../../components/models-table/themes/default/row-group-toggle';
import RowSelectCheckbox from '../../components/models-table/themes/default/row-select-checkbox';
import RowSorting from '../../components/models-table/themes/default/row-sorting';
import RowSortingCell from '../../components/models-table/themes/default/row-sorting-cell';
import Select from '../../components/models-table/themes/default/select';
import Table from '../../components/models-table/themes/default/table';
import TableBody from '../../components/models-table/themes/default/table-body';
import TableFooter from '../../components/models-table/themes/default/table-footer';
import TableHeader from '../../components/models-table/themes/default/table-header';

/**
 * Almost empty skeleton for themes. Extend it to provide custom CSS-classes for table items and icons.
 *
 * * Every property with suffix `Component` is a path to the component used in theme
 * * Every property with suffix `Msg` is a message shown in the table
 * * Every property with suffix `Icon` is a CSS-class for font-library used as an icons (used for buttons, carets etc)
 */
export default class DefaultTheme extends Service {
  cellComponent = Cell;
  cellContentDisplayComponent = CellContentDisplay;
  cellContentEditComponent = CellContentEdit;
  cellEditToggleComponent = CellEditToggle;
  cellContentSummaryComponent = CellColumnSummary;
  columnsDropdownComponent = ColumnsDropdown;
  columnsHiddenComponent = ColumnsHidden;
  dataGroupBySelectComponent = DataGroupBySelect;
  expandAllToggleComponent = ExpandAllToggle;
  expandToggleComponent = ExpandToggle;
  footerComponent = Footer;
  globalFilterComponent = GlobalFilter;
  groupedHeaderComponent = GroupedHeader;
  noDataComponent = NoData;
  pageSizeSelectComponent = PageSizeSelect;
  paginationNumericComponent = PaginationNumeric;
  paginationSimpleComponent = PaginationSimple;
  rowComponent = Row;
  rowExpandComponent = RowExpand;
  rowFilteringComponent = RowFiltering;
  rowFilteringCellComponent = RowFilteringCell;
  rowGroupingComponent = RowGrouping;
  rowGroupToggleComponent = RowGroupToggle;
  rowSelectAllCheckboxComponent = RowSelectAllCheckbox;
  rowSelectCheckboxComponent = RowSelectCheckbox;
  rowSortingComponent = RowSorting;
  rowSortingCellComponent = RowSortingCell;
  selectComponent: Component = Select;
  summaryComponent = Summary;
  tableComponent = Table;
  tableBodyComponent = TableBody;
  tableFooterComponent = TableFooter;
  tableHeaderComponent = TableHeader;

  /**
   * @default ''
   */
  cellContentTagName = '';

  /**
   * Label for global filter
   */
  searchLabelMsg = 'Search:';

  /**
   * Placeholder for global filter
   */
  searchPlaceholderMsg = '';

  /**
   * Label for dropdown with columns for rows grouping
   */
  groupByLabelMsg = 'Group by:';

  /**
   * Text on toggle for columns dropdown
   */
  columnsTitleMsg = 'Columns';

  /**
   * Label for button to show all table columns (under columns dropdown)
   */
  columnsShowAllMsg = 'Show All';

  /**
   * Label for button to hide all table columns (under columns dropdown)
   */
  columnsHideAllMsg = 'Hide All';

  /**
   * Label for button to restore default visibility for table columns (under columns dropdown)
   */
  columnsRestoreDefaultsMsg = 'Restore Defaults';

  /**
   * Message shown in the table summary. It's used with three options:
   *
   * 1. First row's index
   * 2. Last row's index
   * 3. Overall rows count
   */
  tableSummaryMsg = 'Show %@ - %@ of %@';

  /**
   * Message shown when all columns are hidden. It's shown inside table body
   */
  allColumnsAreHiddenMsg =
    'All columns are hidden. Use <strong>columns</strong>-dropdown to show some of them';

  /**
   * Message shown when there are not data to display in the table. It's shown inside table body in cases when initial `data` is empty or when all records are filtered out
   */
  noDataToShowMsg = 'No records to show';

  /**
   * Default label for button "Edit" inside the `cell-edit-toggle`-component
   */
  editRowButtonLabelMsg = 'Edit';

  /**
   * Default label for button "Save" inside the `cell-edit-toggle`-component
   */
  saveRowButtonLabelMsg = 'Save';

  /**
   * Default label for button "Cancel" inside the `cell-edit-toggle`-component
   */
  cancelRowButtonLabelMsg = 'Cancel';

  /**
   * Label for dropdown with page numbers. Used in both numeric and simple pagination
   */
  currentPageNumberMsg = 'Page:';

  /**
   * Label for dropdown with rows count shown in the page
   */
  rowsCountMsg = 'Rows:';

  /**
   * Label for "First"-page in the numeric pagination. It's used for screen-readers and not "visible" by default
   */
  goToFirstPageButtonTextMsg = 'Go to first page';

  /**
   * Label for "Previous"-page in the numeric pagination. It's used for screen-readers and not "visible" by default
   */
  goToPrevPageButtonTextMsg = 'Go to previous page';

  /**
   * Label for "Next"-page in the numeric pagination. It's used for screen-readers and not "visible" by default
   */
  goToNextPageButtonTextMsg = 'Go to next page';

  /**
   * Label for "Last"-page in the numeric pagination. It's used for screen-readers and not "visible" by default
   */
  goToLastPageButtonTextMsg = 'Go to last page';

  /**
   * Label for "Clear global filter"-button. It's used for screen-readers and not "visible" by default
   */
  clearGlobalFilterMsg = 'Clear global filter input';

  /**
   * Label for "Clear filter"-buttons in the table header's cells. It's used for screen-readers and not "visible" by default
   */
  clearFilterMsg = 'Clear filter input';

  /**
   * Label for "Clear all filters"-button in the table summary section. It's used for screen-readers and not "visible" by default
   */
  clearAllFiltersMsg = 'Clear all filters';

  /**
   * CSS-classes for `table`-tag
   */
  table = '';

  buttonsGroup = '';

  /**
   * CSS-classes for `div`-wrapper over components `global-filter`, `data-group-by-select` and `columns-dropdown`
   */
  headerWrapper = '';

  /**
   * CSS-classes for wrapper used inside `global-filter` component
   */
  globalFilterWrapper = '';

  /**
   * CSS-classes for wrapper used inside `columns-dropdown` component
   */
  columnsDropdownWrapper = '';

  columnsDropdownButtonWrapper = '';

  /**
   * CSS-classes for wrapper over list inside `columns-dropdown` component
   */
  columnsDropdown = '';

  /**
   * CSS-classes for divider for list inside `columns-dropdown` components. Divider is placed before single-column items by default
   */
  columnsDropdownDivider = '';

  /**
   * CSS-classes for wrapper inside `data-group-by-select` component
   */
  dataGroupBySelectWrapper = 'data-group-by-wrapper';

  /**
   * CSS-classes for thead cells
   */
  theadCell = 'table-header';

  /**
   * CSS-classes used for thead-cells with columns titles. This class is used only if columns is not sortable
   */
  theadCellNoSorting = 'table-header-no-sorting';

  /**
   * CSS-classes used for thead-cells with columns filters. This class is used only if columns is not filterable
   */
  theadCellNoFiltering = 'table-header-no-filtering';

  /**
   * CSS-classes for selected rows. Used in the `row` component
   */
  selectedRow = 'selected-row';

  /**
   * CSS-classes for expanded rows. Used in the `row` component
   */
  expandedRow = 'expanded-row';

  /**
   * CSS-classes for table footer
   */
  tfooterWrapper = 'table-footer';

  /**
   * CSS-classes for wrapper inside `footer` component
   */
  tfooterInternalWrapper = '';

  /**
   * CSS-classes for table summary block. Used in the `summary` component
   */
  footerSummary = 'table-summary';

  /**
   * CSS-classes for table summary block. It's used when table has numeric pagination
   */
  footerSummaryNumericPagination = '';

  /**
   * CSS-classes for table summary block. It's used when table has simple pagination
   */
  footerSummaryDefaultPagination = '';

  /**
   * CSS-classes for wrapper over "Page size"-block in the `footer` component
   */
  pageSizeWrapper = '';

  pageSizeSelectWrapper = '';

  /**
   * Wrapper for select-tag in the current-page-number-select component
   */
  currentPageSizeSelectWrapper = '';

  /**
   * CSS-classes for `pagination-simple` and `pagination-numeric` components
   */
  paginationWrapper = 'table-nav';

  /**
   * CSS-classes for buttons-wrapper in the `pagination-simple` and `pagination-numeric` components
   */
  paginationInternalWrapper = '';

  /**
   * CSS-classes for `pagination-numeric` component
   */
  paginationWrapperNumeric = '';

  /**
   * CSS-classes for `pagination-simple` component
   */
  paginationWrapperDefault = '';

  paginationBlock = '';

  /**
   * CSS-classes for items in the `pagination-numeric` component
   */
  paginationNumericItem = '';

  /**
   * CSS-classes for active item in the `pagination-numeric` component
   */
  paginationNumericItemActive = '';

  /**
   * CSS-classes for "default" buttons
   */
  buttonDefault = '';

  /**
   * CSS-classes for "link"-buttons
   */
  buttonLink = '';

  /**
   * CSS-classes for `td` shown when all columns are hidden
   */
  noDataCell = '';

  collapseRow = 'collapse-row';

  collapseAllRows = 'collapse-all-rows';

  expandRow = 'expand-row';

  expandAllRows = 'expand-all-rows';

  cellContentDisplay = '';

  cellContentEdit = '';

  /**
   * CSS-classes for `thead`
   */
  thead = '';

  /**
   * CSS-classes for `form`
   */
  form = '';

  /**
   * CSS-classes for wrapper over the form elements
   */
  formElementWrapper = '';

  /**
   * CSS-classes for input elements
   */
  input = '';

  /**
   * CSS-classes for `select`
   */
  select = '';

  /**
   * CSS-classes for "Clear filter" button. Used for global filter and filters for each column
   */
  clearFilterIcon = '';

  /**
   * CSS-classes for "Clear all filters" button inside the `summary` component
   */
  clearAllFiltersIcon = '';

  globalFilterDropdownWrapper = '';

  /**
   * CSS-classes for `select` inside the `data-group-by-select` component
   */
  changeGroupByField = 'change-group-by-field';

  /**
   * CSS-classes for "sort asc/desc" button inside the `data-group-by-select` component
   */
  sortGroupedPropertyBtn = 'sort-grouped-field';

  /**
   * CSS-class for `row-grouping` component
   */
  groupingRow = 'grouping-row';

  /**
   * CSS-classes for `td` inside `row-grouping` component
   */
  groupingCell = 'grouping-cell';

  /**
   * CSS-classes for icons used to show that some "list" is sorted "ASC". It's used for `data-group-by-select` and `row-sorting-cell`
   */
  sortAscIcon = '';

  /**
   * CSS-classes for icons used to show that some "list" is sorted "desc". It's used for `data-group-by-select` and `row-sorting-cell`
   */
  sortDescIcon = '';

  /**
   * CSS-classes for icons in the `columns-dropdown` related to the visible columns
   */
  columnVisibleIcon = '';

  /**
   * CSS-classes for icons in the `columns-dropdown` related to the hidden columns
   */
  columnHiddenIcon = '';

  /**
   * CSS-classes for icon used in the "First"-button (`pagination-simple`)
   */
  navFirstIcon = '';

  /**
   * CSS-classes for icon used in the "Prev"-button (`pagination-simple`)
   */
  navPrevIcon = '';

  /**
   * CSS-classes for icon used in the "Next"-button (`pagination-simple`)
   */
  navNextIcon = '';

  /**
   * CSS-classes for icon used in the "Last"-button (`pagination-simple`)
   */
  navLastIcon = '';

  /**
   * CSS-classes for "caret"-icon used in the `columns-dropdown`
   */
  caretIcon = '';

  selectAllRowsIcon = '';

  deselectAllRowsIcon = '';

  selectSomeRowsIcon = '';

  selectRowIcon = '';

  deselectRowIcon = '';

  editRowButton = '';

  saveRowButton = '';

  cancelRowButton = '';

  filteringCellInternalWrapper = '';

  expandRowIcon = '';

  collapseRowIcon = '';

  collapseAllRowsIcon = '';

  expandAllRowsIcon = '';
}
