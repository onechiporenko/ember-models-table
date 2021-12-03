import Bootstrap4Theme from './bootstrap4';
import ColumnsDropdown from '../../components/models-table/themes/ember-bootstrap-v4/columns-dropdown';
import DataGroupBySelect from '../../components/models-table/themes/ember-bootstrap-v4/data-group-by-select';
import GlobalFilter from '../../components/models-table/themes/ember-bootstrap-v4/global-filter';
import RowFilteringCell from '../../components/models-table/themes/ember-bootstrap-v4/row-filtering-cell';
import Summary from '../../components/models-table/themes/ember-bootstrap-v4/summary';

export default class EmberBootstrap4Theme extends Bootstrap4Theme {
  columnsDropdownComponent = ColumnsDropdown;
  dataGroupBySelectComponent = DataGroupBySelect;
  globalFilterComponent = GlobalFilter;
  rowFilteringCellComponent = RowFilteringCell;
  summaryComponent = Summary;
  sortGroupedPropertyBtn = 'btn btn-link';
}
