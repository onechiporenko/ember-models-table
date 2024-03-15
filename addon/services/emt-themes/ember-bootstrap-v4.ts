import { type ComponentLike } from '@glint/template';
import { ensureSafeComponent } from '@embroider/util';
import Bootstrap4Theme from './bootstrap4';
import ColumnsDropdown from '../../components/models-table/themes/ember-bootstrap-v4/columns-dropdown';
import DataGroupBySelect from '../../components/models-table/themes/ember-bootstrap-v4/data-group-by-select';
import GlobalFilter from '../../components/models-table/themes/ember-bootstrap-v4/global-filter';
import RowFilteringCell from '../../components/models-table/themes/ember-bootstrap-v4/row-filtering-cell';
import Summary from '../../components/models-table/themes/ember-bootstrap-v4/summary';
import { type ColumnsDropdownSignature } from '../../interfaces/components/models-table/themes/default/columns-dropdown-signature.interface';
import { type DataGroupBySelectSignature } from '../../interfaces/components/models-table/themes/default/data-group-by-select-signature.interface';
import { type GlobalFilterSignature } from '../../interfaces/components/models-table/themes/default/global-filter-signature.interface';
import { type RowFilteringCellSignature } from '../../interfaces/components/models-table/themes/default/row-filtering-cell-signature.interface';
import { type SummarySignature } from '../../interfaces/components/models-table/themes/default/summary-signature.interface';

export default class EmberBootstrap4Theme extends Bootstrap4Theme {
  /**
   * @default 'models-table/themes/ember-bootstrap-v4/columns-dropdown'
   */
  get columnsDropdownComponent(): ComponentLike<ColumnsDropdownSignature> {
    return ensureSafeComponent(ColumnsDropdown, this);
  }

  /**
   * @default 'models-table/themes/ember-bootstrap-v4/data-group-by-select'
   */
  get dataGroupBySelectComponent(): ComponentLike<DataGroupBySelectSignature> {
    return ensureSafeComponent(DataGroupBySelect, this);
  }

  /**
   * @default 'models-table/themes/ember-bootstrap-v4/global-filter'
   */
  get globalFilterComponent(): ComponentLike<GlobalFilterSignature> {
    return ensureSafeComponent(GlobalFilter, this);
  }

  /**
   * @default 'models-table/themes/ember-bootstrap-v4/row-filtering-cell'
   */
  get rowFilteringCellComponent(): ComponentLike<RowFilteringCellSignature> {
    return ensureSafeComponent(RowFilteringCell, this);
  }

  /**
   * @default 'models-table/themes/ember-bootstrap-v4/summary'
   */
  get summaryComponent(): ComponentLike<SummarySignature> {
    return ensureSafeComponent(Summary, this);
  }

  sortGroupedPropertyBtn = 'btn btn-link';
}

declare module '@ember/service' {
  interface Registry {
    'emt-themes/ember-bootstrap-v4': EmberBootstrap4Theme;
  }
}
