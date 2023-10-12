import { tracked } from '@glimmer/tracking';
import { ComponentLike } from '@glint/template';
import { ensureSafeComponent } from '@embroider/util';
import Service from '@ember/service';
import GlobalFilter from '../../components/models-table/themes/default/global-filter';
import Cell from '../../components/models-table/themes/default/cell';
import CellContentDisplay from '../../components/models-table/themes/default/cell-content-display';
import CellContentEdit from '../../components/models-table/themes/default/cell-content-edit';
import CellEditToggle from '../../components/models-table/themes/default/cell-edit-toggle';
import CellColumnSummary from '../../components/models-table/themes/default/cell-column-summary';
import ColumnsDropdown from '../../components/models-table/themes/default/columns-dropdown';
import ColumnsHidden from '../../components/models-table/themes/default/columns-hidden';
import DataGroupBySelect from '../../components/models-table/themes/default/data-group-by-select';
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
import RowFilteringCell from '../../components/models-table/themes/default/row-filtering-cell';
import RowGrouping from '../../components/models-table/themes/default/row-grouping';
import RowGroupToggle from '../../components/models-table/themes/default/row-group-toggle';
import RowSelectAllCheckbox from '../../components/models-table/themes/default/row-select-all-checkbox';
import RowSelectCheckbox from '../../components/models-table/themes/default/row-select-checkbox';
import RowSorting from '../../components/models-table/themes/default/row-sorting';
import RowSortingCell from '../../components/models-table/themes/default/row-sorting-cell';
import Select from '../../components/models-table/themes/default/select';
import Summary from '../../components/models-table/themes/default/summary';
import Table from '../../components/models-table/themes/default/table';
import TableBody from '../../components/models-table/themes/default/table-body';
import TableFooter from '../../components/models-table/themes/default/table-footer';
import TableHeader from '../../components/models-table/themes/default/table-header';
import { CellSignature } from '../../interfaces/components/models-table/themes/default/cell-signature.interface';
import { CellContentDisplaySignature } from '../../interfaces/components/models-table/themes/default/cell-content-display-signature.interface';
import { CellContentEditSignature } from '../../interfaces/components/models-table/themes/default/cell-content-edit-signature.interface';
import { CellEditToggleSignature } from '../../interfaces/components/models-table/themes/default/cell-edit-toggle-signature.interface';
import { CellColumnSummarySignature } from '../../interfaces/components/models-table/themes/default/cell-column-summary-signature.interface';
import { ColumnsDropdownSignature } from '../../interfaces/components/models-table/themes/default/columns-dropdown-signature.interface';
import { ColumnsHiddenSignature } from '../../interfaces/components/models-table/themes/default/columns-hidden-signature.interface';
import { DataGroupBySelectSignature } from '../../interfaces/components/models-table/themes/default/data-group-by-select-signature.interface';
import { ExpandAllToggleSignature } from '../../interfaces/components/models-table/themes/default/expand-all-toggle-signature.interface';
import { ExpandToggleSignature } from '../../interfaces/components/models-table/themes/default/expand-toggle-signature.interface';
import { FooterSignature } from '../../interfaces/components/models-table/themes/default/footer-signature.interface';
import { GlobalFilterSignature } from '../../interfaces/components/models-table/themes/default/global-filter-signature.interface';
import { GroupedHeaderSignature } from '../../interfaces/components/models-table/themes/default/grouped-header-signature.interface';
import { NoDataSignature } from '../../interfaces/components/models-table/themes/default/no-data-signature.interface';
import { PageSizeSelectSignature } from '../../interfaces/components/models-table/themes/default/page-size-select-signature.interface';
import { PaginationNumericSignature } from '../../interfaces/components/models-table/themes/default/pagination-numeric-signature.interface';
import { PaginationSimpleSignature } from '../../interfaces/components/models-table/themes/default/pagination-simple-signature.interface';
import { RowSignature } from '../../interfaces/components/models-table/themes/default/row-signature.interface';
import { RowExpandSignature } from '../../interfaces/components/models-table/themes/default/row-expand-signature.interface';
import { RowFilteringSignature } from '../../interfaces/components/models-table/themes/default/row-filtering-signature.interface';
import { RowFilteringCellSignature } from '../../interfaces/components/models-table/themes/default/row-filtering-cell-signature.interface';
import { RowGroupingSignature } from '../../interfaces/components/models-table/themes/default/row-grouping-signature.interface';
import { RowGroupToggleSignature } from '../../interfaces/components/models-table/themes/default/row-group-toggle-signature.interface';
import { RowSelectAllCheckboxSignature } from '../../interfaces/components/models-table/themes/default/row-select-all-checkbox-signature.interface';
import { RowSelectCheckboxSignature } from '../../interfaces/components/models-table/themes/default/row-select-checkbox-signature.interface';
import { RowSortingSignature } from '../../interfaces/components/models-table/themes/default/row-sorting-signature.interface';
import { RowSortingCellSignature } from '../../interfaces/components/models-table/themes/default/row-sorting-cell-signature.interface';
import { SelectSignature } from '../../interfaces/components/models-table/themes/default/select-signature.interface';
import { SummarySignature } from '../../interfaces/components/models-table/themes/default/summary-signature.interface';
import { TableSignature } from '../../interfaces/components/models-table/themes/default/table-signature.interface';
import { TableBodySignature } from '../../interfaces/components/models-table/themes/default/table-body-signature.interface';
import { TableFooterSignature } from '../../interfaces/components/models-table/themes/default/table-footer-signature.interface';
import { TableHeaderSignature } from '../../interfaces/components/models-table/themes/default/table-header-signature.interface';
import { IconSignature } from '../../interfaces/components/models-table/themes/default/icon-signature.interface';
import SortAsc from '../../components/models-table/themes/default/icons/sort-asc';
import SortDesc from '../../components/models-table/themes/default/icons/sort-desc';
import ClearFilter from '../../components/models-table/themes/default/icons/clear-filter';
import ClearAllFilters from '../../components/models-table/themes/default/icons/clear-all-filters';
import ColumnVisible from '../../components/models-table/themes/default/icons/column-visible';
import ColumnHidden from '../../components/models-table/themes/default/icons/column-hidden';
import NavFirst from '../../components/models-table/themes/default/icons/nav-first';
import NavLast from '../../components/models-table/themes/default/icons/nav-last';
import NavPrev from '../../components/models-table/themes/default/icons/nav-prev';
import NavNext from '../../components/models-table/themes/default/icons/nav-next';
import Caret from '../../components/models-table/themes/default/icons/caret';
import SelectAllRows from '../../components/models-table/themes/default/icons/select-all-rows';
import DeselectAllRows from '../../components/models-table/themes/default/icons/deselect-all-rows';
import SelectSomeRows from '../../components/models-table/themes/default/icons/select-some-rows';
import SelectRow from 'ember-models-table/components/models-table/themes/default/icons/select-row';
import DeselectRow from '../../components/models-table/themes/default/icons/deselect-row';
import CollapseRow from '../../components/models-table/themes/default/icons/collapse-row';
import ExpandRow from '../../components/models-table/themes/default/icons/expand-row';
import ExpandAllRows from 'ember-models-table/components/models-table/themes/default/icons/expand-all-rows';
import CollapseAllRows from 'ember-models-table/components/models-table/themes/default/icons/collapse-all-rows';

/**
 * Almost empty skeleton for themes. Extend it to provide custom CSS-classes for table items and icons.
 *
 * * Every property with suffix `Component` is a path to the component used in theme
 * * Every property with suffix `Msg` is a message shown in the table
 * * Every property with suffix `Icon` is a CSS-class for font-library used as an icons (used for buttons, carets etc)
 */
export default class DefaultTheme extends Service {
  /**
   * @default 'models-table/themes/default/cell'
   */
  get cellComponent(): ComponentLike<CellSignature> {
    return ensureSafeComponent(Cell, this);
  }

  /**
   * @default 'models-table/themes/default/cell-content-display'
   */
  get cellContentDisplayComponent(): ComponentLike<CellContentDisplaySignature> {
    return ensureSafeComponent(CellContentDisplay, this);
  }

  /**
   * @default 'models-table/themes/default/cell-content-edit'
   */
  get cellContentEditComponent(): ComponentLike<CellContentEditSignature> {
    return ensureSafeComponent(CellContentEdit, this);
  }

  /**
   * @default 'models-table/themes/default/cell-edit-toggle'
   */
  get cellEditToggleComponent(): ComponentLike<CellEditToggleSignature> {
    return ensureSafeComponent(CellEditToggle, this);
  }

  /**
   * @default 'models-table/themes/default/cell-column-summary'
   */
  get cellContentSummaryComponent(): ComponentLike<CellColumnSummarySignature> {
    return ensureSafeComponent(CellColumnSummary, this);
  }

  /**
   * @default 'models-table/themes/default/columns-dropdown'
   */
  get columnsDropdownComponent(): ComponentLike<ColumnsDropdownSignature> {
    return ensureSafeComponent(ColumnsDropdown, this);
  }

  /**
   * @default 'models-table/themes/default/columns-hidden'
   */
  get columnsHiddenComponent(): ComponentLike<ColumnsHiddenSignature> {
    return ensureSafeComponent(ColumnsHidden, this);
  }

  /**
   * @default 'models-table/themes/default/data-group-by-select'
   */
  get dataGroupBySelectComponent(): ComponentLike<DataGroupBySelectSignature> {
    return ensureSafeComponent(DataGroupBySelect, this);
  }

  /**
   * @default 'models-table/themes/default/expand-all-toggle'
   */
  get expandAllToggleComponent(): ComponentLike<ExpandAllToggleSignature> {
    return ensureSafeComponent(ExpandAllToggle, this);
  }

  /**
   * @default 'models-table/themes/default/expand-toggle'
   */
  get expandToggleComponent(): ComponentLike<ExpandToggleSignature> {
    return ensureSafeComponent(ExpandToggle, this);
  }

  /**
   * @default 'models-table/themes/default/footer'
   */
  get footerComponent(): ComponentLike<FooterSignature> {
    return ensureSafeComponent(Footer, this);
  }

  /**
   * @default 'models-table/themes/default/global-filter'
   */
  get globalFilterComponent(): ComponentLike<GlobalFilterSignature> {
    return ensureSafeComponent(GlobalFilter, this);
  }

  /**
   * @default 'models-table/themes/default/grouped-header'
   */
  get groupedHeaderComponent(): ComponentLike<GroupedHeaderSignature> {
    return ensureSafeComponent(GroupedHeader, this);
  }

  /**
   * @default 'models-table/themes/default/no-data'
   */
  get noDataComponent(): ComponentLike<NoDataSignature> {
    return ensureSafeComponent(NoData, this);
  }

  /**
   * @default 'models-table/themes/default/page-size-select'
   */
  get pageSizeSelectComponent(): ComponentLike<PageSizeSelectSignature> {
    return ensureSafeComponent(PageSizeSelect, this);
  }

  /**
   * @default 'models-table/themes/default/pagination-numeric'
   */
  get paginationNumericComponent(): ComponentLike<PaginationNumericSignature> {
    return ensureSafeComponent(PaginationNumeric, this);
  }

  /**
   * @default 'models-table/themes/default/pagination-simple'
   */
  get paginationSimpleComponent(): ComponentLike<PaginationSimpleSignature> {
    return ensureSafeComponent(PaginationSimple, this);
  }

  /**
   * @default 'models-table/themes/default/row'
   */
  get rowComponent(): ComponentLike<RowSignature> {
    return ensureSafeComponent(Row, this);
  }

  /**
   * @default 'models-table/themes/default/row-expand'
   */
  get rowExpandComponent(): ComponentLike<RowExpandSignature> {
    return ensureSafeComponent(RowExpand, this);
  }

  /**
   * @default 'models-table/themes/default/row-filtering'
   */
  get rowFilteringComponent(): ComponentLike<RowFilteringSignature> {
    return ensureSafeComponent(RowFiltering, this);
  }

  /**
   * @default 'models-table/themes/default/row-filtering-cell'
   */
  get rowFilteringCellComponent(): ComponentLike<RowFilteringCellSignature> {
    return ensureSafeComponent(RowFilteringCell, this);
  }

  /**
   * @default 'models-table/themes/default/row-grouping'
   */
  get rowGroupingComponent(): ComponentLike<RowGroupingSignature> {
    return ensureSafeComponent(RowGrouping, this);
  }

  /**
   * @default 'models-table/themes/default/row-group-toggle'
   */
  get rowGroupToggleComponent(): ComponentLike<RowGroupToggleSignature> {
    return ensureSafeComponent(RowGroupToggle, this);
  }

  /**
   * @default 'models-table/themes/default/row-select-all-checkbox'
   */
  get rowSelectAllCheckboxComponent(): ComponentLike<RowSelectAllCheckboxSignature> {
    return ensureSafeComponent(RowSelectAllCheckbox, this);
  }

  /**
   * @default 'models-table/themes/default/row-select-checkbox'
   */
  get rowSelectCheckboxComponent(): ComponentLike<RowSelectCheckboxSignature> {
    return ensureSafeComponent(RowSelectCheckbox, this);
  }

  /**
   * @default 'models-table/themes/default/row-sorting'
   */
  get rowSortingComponent(): ComponentLike<RowSortingSignature> {
    return ensureSafeComponent(RowSorting, this);
  }

  /**
   * @default 'models-table/themes/default/row-sorting-cell'
   */
  get rowSortingCellComponent(): ComponentLike<RowSortingCellSignature> {
    return ensureSafeComponent(RowSortingCell, this);
  }

  /**
   * @default 'models-table/themes/default/select'
   */
  get selectComponent(): ComponentLike<SelectSignature> {
    return ensureSafeComponent(Select, this);
  }

  /**
   * @default 'models-table/themes/default/summary'
   */
  get summaryComponent(): ComponentLike<SummarySignature> {
    return ensureSafeComponent(Summary, this);
  }

  /**
   * @default 'models-table/themes/default/table'
   */
  get tableComponent(): ComponentLike<TableSignature> {
    return ensureSafeComponent(Table, this);
  }

  /**
   * @default 'models-table/themes/default/table-body'
   */
  get tableBodyComponent(): ComponentLike<TableBodySignature> {
    return ensureSafeComponent(TableBody, this);
  }

  /**
   * @default 'models-table/themes/default/table-footer'
   */
  get tableFooterComponent(): ComponentLike<TableFooterSignature> {
    return ensureSafeComponent(TableFooter, this);
  }

  /**
   * @default 'models-table/themes/default/table-header'
   */
  get tableHeaderComponent(): ComponentLike<TableHeaderSignature> {
    return ensureSafeComponent(TableHeader, this);
  }

  /**
   * @default 'models-table/themes/default/icons/sort-asc'
   */
  get sortAscIconComponent(): ComponentLike<IconSignature> {
    return ensureSafeComponent(SortAsc, this);
  }

  /**
   * @default 'models-table/themes/default/icons/sort-desc'
   */
  get sortDescIconComponent(): ComponentLike<IconSignature> {
    return ensureSafeComponent(SortDesc, this);
  }

  /**
   * @default 'models-table/themes/default/icons/clear-filter'
   */
  get clearFilterIconComponent(): ComponentLike<IconSignature> {
    return ensureSafeComponent(ClearFilter, this);
  }

  /**
   * @default 'models-table/themes/default/icons/clear-all-filters'
   */
  get clearAllFiltersIconComponent(): ComponentLike<IconSignature> {
    return ensureSafeComponent(ClearAllFilters, this);
  }

  /**
   * @default 'models-table/themes/default/icons/column-visible'
   */
  get columnVisibleIconComponent(): ComponentLike<IconSignature> {
    return ensureSafeComponent(ColumnVisible, this);
  }

  /**
   * @default 'models-table/themes/default/icons/column-hidden'
   */
  get columnHiddenIconComponent(): ComponentLike<IconSignature> {
    return ensureSafeComponent(ColumnHidden, this);
  }

  /**
   * @default 'models-table/themes/default/icons/nav-first'
   */
  get navFirstIconComponent(): ComponentLike<IconSignature> {
    return ensureSafeComponent(NavFirst, this);
  }

  /**
   * @default 'models-table/themes/default/icons/nav-last'
   */
  get navLastIconComponent(): ComponentLike<IconSignature> {
    return ensureSafeComponent(NavLast, this);
  }

  /**
   * @default 'models-table/themes/default/icons/nav-prev'
   */
  get navPrevIconComponent(): ComponentLike<IconSignature> {
    return ensureSafeComponent(NavPrev, this);
  }

  /**
   * @default 'models-table/themes/default/icons/nav-next'
   */
  get navNextIconComponent(): ComponentLike<IconSignature> {
    return ensureSafeComponent(NavNext, this);
  }

  /**
   * @default 'models-table/themes/default/icons/caret'
   */
  get caretIconComponent(): ComponentLike<IconSignature> {
    return ensureSafeComponent(Caret, this);
  }

  /**
   * @default 'models-table/themes/default/icons/select-all-rows'
   */
  get selectAllRowsIconComponent(): ComponentLike<IconSignature> {
    return ensureSafeComponent(SelectAllRows, this);
  }

  /**
   * @default 'models-table/themes/default/icons/deselect-all-rows'
   */
  get deselectAllRowsIconComponent(): ComponentLike<IconSignature> {
    return ensureSafeComponent(DeselectAllRows, this);
  }

  /**
   * @default 'models-table/themes/default/icons/select-some-rows'
   */
  get selectSomeRowsIconComponent(): ComponentLike<IconSignature> {
    return ensureSafeComponent(SelectSomeRows, this);
  }

  /**
   * @default 'models-table/themes/default/icons/select-row'
   */
  get selectRowIconComponent(): ComponentLike<IconSignature> {
    return ensureSafeComponent(SelectRow, this);
  }

  /**
   * @default 'models-table/themes/default/icons/deselect-row'
   */
  get deselectRowIconComponent(): ComponentLike<IconSignature> {
    return ensureSafeComponent(DeselectRow, this);
  }

  /**
   * @default 'models-table/themes/default/icons/expand-row'
   */
  get expandRowIconComponent(): ComponentLike<IconSignature> {
    return ensureSafeComponent(ExpandRow, this);
  }

  /**
   * @default 'models-table/themes/default/icons/collapse-row'
   */
  get collapseRowIconComponent(): ComponentLike<IconSignature> {
    return ensureSafeComponent(CollapseRow, this);
  }

  /**
   * @default 'models-table/themes/default/icons/expand-all-rows'
   */
  get expandAllRowsIconComponent(): ComponentLike<IconSignature> {
    return ensureSafeComponent(ExpandAllRows, this);
  }

  /**
   * @default 'models-table/themes/default/icons/collapse-all-rows'
   */
  get collapseAllRowsIconComponent(): ComponentLike<IconSignature> {
    return ensureSafeComponent(CollapseAllRows, this);
  }

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
  @tracked
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

  // just to avoid type issues in the templates
  get buttonDefaultSmall(): string {
    return '';
  }
  inputGroup = '';

  [key: string]: any;
}

declare module '@ember/service' {
  interface Registry {
    'emt-themes/default': DefaultTheme;
  }
}
