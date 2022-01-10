import { ensureSafeComponent } from '@embroider/util';
import Bootstrap3Theme from './bootstrap3';
import ColumnsDropdown from '../../components/models-table/themes/ember-bootstrap-v3/columns-dropdown';
import DataGroupBySelect from '../../components/models-table/themes/ember-bootstrap-v3/data-group-by-select';
import GlobalFilter from '../../components/models-table/themes/ember-bootstrap-v3/global-filter';
import RowFilteringCell from '../../components/models-table/themes/ember-bootstrap-v3/row-filtering-cell';
import RowSelectAllCheckbox from '../../components/models-table/themes/ember-bootstrap-v3/row-select-all-checkbox';
import Summary from '../../components/models-table/themes/ember-bootstrap-v3/summary';

export default class EmberBootstrap3Theme extends Bootstrap3Theme {
  /**
   * @default 'models-table/themes/ember-bootstrap-v3/columns-dropdown'
   */
  get columnsDropdownComponent(): unknown {
    return ensureSafeComponent(ColumnsDropdown, this);
  }

  /**
   * @default 'models-table/themes/ember-bootstrap-v3/data-group-by-select'
   */
  get dataGroupBySelectComponent(): unknown {
    return ensureSafeComponent(DataGroupBySelect, this);
  }

  /**
   * @default 'models-table/themes/ember-bootstrap-v3/global-filter'
   */
  get globalFilterComponent(): unknown {
    return ensureSafeComponent(GlobalFilter, this);
  }

  /**
   * @default 'models-table/themes/ember-bootstrap-v3/row-filtering-cell'
   */
  get rowFilteringCellComponent(): unknown {
    return ensureSafeComponent(RowFilteringCell, this);
  }

  /**
   * @default 'models-table/themes/ember-bootstrap-v3/row-select-all-checkbox'
   */
  get rowSelectAllCheckboxComponent(): unknown {
    return ensureSafeComponent(RowSelectAllCheckbox, this);
  }

  /**
   * @default 'models-table/themes/ember-bootstrap-v3/summary'
   */
  get summaryComponent(): unknown {
    return ensureSafeComponent(Summary, this);
  }
}
