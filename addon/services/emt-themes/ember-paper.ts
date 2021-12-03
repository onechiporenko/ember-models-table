import DefaultTheme from './default';
import RowSelectAllCheckbox from '../../components/models-table/themes/ember-paper/row-select-all-checkbox';
import ColumnsDropdown from '../../components/models-table/themes/ember-paper/columns-dropdown';
import DataGroupBySelect from '../../components/models-table/themes/ember-paper/data-group-by-select';
import GlobalFilter from '../../components/models-table/themes/ember-paper/global-filter';
import RowFilteringCell from '../../components/models-table/themes/ember-paper/row-filtering-cell';
import Summary from '../../components/models-table/themes/ember-paper/summary';
import CellContentEdit from '../../components/models-table/themes/ember-paper/cell-content-edit';
import CellEditToggle from '../../components/models-table/themes/ember-paper/cell-edit-toggle';
import ExpandAllToggle from '../../components/models-table/themes/ember-paper/expand-all-toggle';
import ExpandToggle from '../../components/models-table/themes/ember-paper/expand-toggle';
import PageSizeSelect from '../../components/models-table/themes/ember-paper/page-size-select';
import PaginationNumeric from '../../components/models-table/themes/ember-paper/pagination-numeric';
import PaginationSimple from '../../components/models-table/themes/ember-paper/pagination-simple';
import RowSelectCheckbox from '../../components/models-table/themes/ember-paper/row-select-checkbox';
import RowSortingCell from '../../components/models-table/themes/ember-paper/row-sorting-cell';
import Select from '../../components/models-table/themes/ember-paper/select';

export default class EmberPaperTheme extends DefaultTheme {
  cellContentEditComponent = CellContentEdit;
  cellEditToggleComponent = CellEditToggle;
  columnsDropdownComponent = ColumnsDropdown;
  dataGroupBySelectComponent = DataGroupBySelect;
  globalFilterComponent = GlobalFilter;
  expandAllToggleComponent = ExpandAllToggle;
  expandToggleComponent = ExpandToggle;
  pageSizeSelectComponent = PageSizeSelect;
  paginationNumericComponent = PaginationNumeric;
  paginationSimpleComponent = PaginationSimple;
  rowFilteringCellComponent = RowFilteringCell;
  rowSelectAllCheckboxComponent = RowSelectAllCheckbox;
  rowSelectCheckboxComponent = RowSelectCheckbox;
  rowSortingCellComponent = RowSortingCell;
  selectComponent = Select;
  summaryComponent = Summary;

  table = 'paper-table';

  headerWrapper = 'layout-row layout-align-space-between';

  tfooterInternalWrapper =
    'layout-row layout-align-space-between-center footer-internal-wrapper';

  paginationInternalWrapper = 'layout-row layout-align-space-between-center';

  columnVisibleIcon = 'check_box';

  columnHiddenIcon = 'check_box_outline_blank';

  sortAscIcon = 'arrow_drop_up';

  sortDescIcon = 'arrow_drop_down';

  navFirstIcon = 'first_page';

  navPrevIcon = 'chevron_left';

  navNextIcon = 'chevron_right';

  navLastIcon = 'last_page';

  clearAllFiltersIcon = 'clear';

  filteringCellInternalWrapper = 'layout-row layout-align-space-between-center';

  columnsDropdownWrapper = 'columns-dropdown';

  expandRowIcon = 'expand_more';

  collapseAllRowsIcon = 'expand_less';

  expandAllRowsIcon = 'expand_more';
}
