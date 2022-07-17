import { ensureSafeComponent } from '@embroider/util';
import Bootstrap4Theme from './bootstrap4';
import ColumnsDropdown from '../../components/models-table/themes/ember-bootstrap-v4/columns-dropdown';
import DataGroupBySelect from '../../components/models-table/themes/ember-bootstrap-v4/data-group-by-select';
import GlobalFilter from '../../components/models-table/themes/ember-bootstrap-v4/global-filter';
import RowFilteringCell from '../../components/models-table/themes/ember-bootstrap-v4/row-filtering-cell';
import Summary from '../../components/models-table/themes/ember-bootstrap-v4/summary';

export default class EmberBootstrap4Theme extends Bootstrap4Theme {
  /**
   * @default 'models-table/themes/ember-bootstrap-v4/columns-dropdown'
   */
  get columnsDropdownComponent(): unknown {
    return ensureSafeComponent(ColumnsDropdown, this);
  }

  /**
   * @default 'models-table/themes/ember-bootstrap-v4/data-group-by-select'
   */
  get dataGroupBySelectComponent(): unknown {
    return ensureSafeComponent(DataGroupBySelect, this);
  }

  /**
   * @default 'models-table/themes/ember-bootstrap-v4/global-filter'
   */
  get globalFilterComponent(): unknown {
    return ensureSafeComponent(GlobalFilter, this);
  }

  /**
   * @default 'models-table/themes/ember-bootstrap-v4/row-filtering-cell'
   */
  get rowFilteringCellComponent(): unknown {
    return ensureSafeComponent(RowFilteringCell, this);
  }

  /**
   * @default 'models-table/themes/ember-bootstrap-v4/summary'
   */
  get summaryComponent(): unknown {
    return ensureSafeComponent(Summary, this);
  }

  sortGroupedPropertyBtn = 'btn btn-link';
}

declare module '@ember/service' {
  interface Registry {
    'emt-themes/ember-bootstrap-v4': EmberBootstrap4Theme;
  }
}
