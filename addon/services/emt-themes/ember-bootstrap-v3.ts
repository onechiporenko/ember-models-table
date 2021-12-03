import Bootstrap3Theme from './bootstrap3';
import RowSelectAllCheckbox from '../../components/models-table/themes/ember-bootstrap-v3/row-select-all-checkbox';
import ColumnsDropdown from '../../components/models-table/themes/ember-bootstrap-v3/columns-dropdown';
import DataGroupBySelect from '../../components/models-table/themes/ember-bootstrap-v3/data-group-by-select';
import GlobalFilter from '../../components/models-table/themes/ember-bootstrap-v3/global-filter';
import RowFilteringCell from '../../components/models-table/themes/ember-bootstrap-v3/row-filtering-cell';
import Summary from '../../components/models-table/themes/ember-bootstrap-v3/summary';

export default class EmberBootstrap3Theme extends Bootstrap3Theme {
  columnsDropdownComponent = ColumnsDropdown;
  dataGroupBySelectComponent = DataGroupBySelect;
  globalFilterComponent = GlobalFilter;
  rowFilteringCellComponent = RowFilteringCell;
  rowSelectAllCheckboxComponent = RowSelectAllCheckbox;
  summaryComponent = Summary;
}
