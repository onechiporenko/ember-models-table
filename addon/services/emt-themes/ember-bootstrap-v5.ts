import { ComponentLike } from '@glint/template';
import { tracked } from '@glimmer/tracking';
import { ensureSafeComponent } from '@embroider/util';
import DefaultTheme from './default';
import ColumnsDropdown from '../../components/models-table/themes/ember-bootstrap-v5/columns-dropdown';
import DataGroupBySelect from '../../components/models-table/themes/ember-bootstrap-v5/data-group-by-select';
import GlobalFilter from '../../components/models-table/themes/ember-bootstrap-v5/global-filter';
import RowFilteringCell from '../../components/models-table/themes/ember-bootstrap-v5/row-filtering-cell';
import Summary from '../../components/models-table/themes/ember-bootstrap-v5/summary';
import PageSizeSelect from '../../components/models-table/themes/ember-bootstrap-v5/page-size-select';
import PaginationSimple from '../../components/models-table/themes/ember-bootstrap-v5/pagination-simple';
import PaginationNumeric from '../../components/models-table/themes/ember-bootstrap-v5/pagination-numeric';
import { ColumnsDropdownSignature } from '../../interfaces/components/models-table/themes/default/columns-dropdown-signature.interface';
import { DataGroupBySelectSignature } from '../../interfaces/components/models-table/themes/default/data-group-by-select-signature.interface';
import { GlobalFilterSignature } from '../../interfaces/components/models-table/themes/default/global-filter-signature.interface';
import { RowFilteringCellSignature } from '../../interfaces/components/models-table/themes/default/row-filtering-cell-signature.interface';
import { SummarySignature } from '../../interfaces/components/models-table/themes/default/summary-signature.interface';
import { PageSizeSelectSignature } from '../../interfaces/components/models-table/themes/default/page-size-select-signature.interface';
import { PaginationSimpleSignature } from '../../interfaces/components/models-table/themes/default/pagination-simple-signature.interface';
import { PaginationNumericSignature } from '../../interfaces/components/models-table/themes/default/pagination-numeric-signature.interface';

export default class EmberBootstrap5Theme extends DefaultTheme {
  /**
   * @default 'models-table/themes/ember-bootstrap-v5/columns-dropdown'
   */
  get columnsDropdownComponent(): ComponentLike<ColumnsDropdownSignature> {
    return ensureSafeComponent(ColumnsDropdown, this);
  }

  /**
   * @default 'models-table/themes/ember-bootstrap-v5/data-group-by-select'
   */
  get dataGroupBySelectComponent(): ComponentLike<DataGroupBySelectSignature> {
    return ensureSafeComponent(DataGroupBySelect, this);
  }

  /**
   * @default 'models-table/themes/ember-bootstrap-v5/global-filter'
   */
  get globalFilterComponent(): ComponentLike<GlobalFilterSignature> {
    return ensureSafeComponent(GlobalFilter, this);
  }

  /**
   * @default 'models-table/themes/ember-bootstrap-v5/row-filtering-cell'
   */
  get rowFilteringCellComponent(): ComponentLike<RowFilteringCellSignature> {
    return ensureSafeComponent(RowFilteringCell, this);
  }

  /**
   * @default 'models-table/themes/ember-bootstrap-v5/summary'
   */
  get summaryComponent(): ComponentLike<SummarySignature> {
    return ensureSafeComponent(Summary, this);
  }

  /**
   * @default 'models-table/themes/ember-bootstrap-v5/page-size-select'
   */
  get pageSizeSelectComponent(): ComponentLike<PageSizeSelectSignature> {
    return ensureSafeComponent(PageSizeSelect, this);
  }

  /**
   * @default 'models-table/themes/ember-bootstrap-v5/pagination-simple'
   */
  get paginationSimpleComponent(): ComponentLike<PaginationSimpleSignature> {
    return ensureSafeComponent(PaginationSimple, this);
  }

  /**
   * @default 'models-table/themes/ember-bootstrap-v5/pagination-numeric'
   */
  get paginationNumericComponent(): ComponentLike<PaginationNumericSignature> {
    return ensureSafeComponent(PaginationNumeric, this);
  }

  table =
    'table table-striped table-bordered table-condensed table-sm table-hover';

  globalFilterWrapper = 'pull-left';

  columnsDropdown = 'dropdown-menu dropdown-menu-right';

  columnsDropdownWrapper = 'pull-right columns-dropdown dropdown';

  columnsDropdownDivider = 'dropdown-divider';

  buttonLink = 'btn btn-link';

  @tracked
  buttonDefault = 'btn btn-secondary';

  get buttonDefaultSmall(): string {
    return `${this.buttonDefault} btn-sm`;
  }

  footerSummaryNumericPagination = 'col-4';

  footerSummaryDefaultPagination = 'col-5';

  pageSizeWrapper = 'col-2';

  pageSizeSelectWrapper = 'pull-right';

  paginationBlock = 'btn-group pull-right';

  paginationWrapperNumeric = 'col-6';

  paginationWrapperDefault = 'col-5';

  clearFilterIcon = 'fa fa-fw fa-times form-control-feedback';

  clearAllFiltersIcon = 'fa fa-fw fa-times';

  sortGroupedPropertyBtn = 'btn';

  tfooterInternalWrapper = 'row';

  input = 'form-control';

  inputGroup = 'input-group';

  form = 'form-inline';

  formElementWrapper = 'form-group';

  paginationNumericItemActive = 'active';

  sortAscIcon = 'fa fa-fw fa-sort-asc';

  sortDescIcon = 'fa fa-fw fa-sort-desc';

  columnVisibleIcon = 'fa fa-fw fa-check-square-o';

  columnHiddenIcon = 'fa fa-fw fa-square-o';

  navFirstIcon = 'fa fa-fw fa-angle-double-left';

  navPrevIcon = 'fa fa-fw fa-angle-left';

  navNextIcon = 'fa fa-fw fa-angle-right';

  navLastIcon = 'fa fa-fw fa-angle-double-right';

  caretIcon = 'caret';

  expandRowIcon = 'fa fa-fw fa-plus';

  expandAllRowsIcon = 'fa fa-fw fa-plus';

  collapseRowIcon = 'fa fa-fw fa-minus';

  collapseAllRowsIcon = 'fa fa-fw fa-minus';

  selectAllRowsIcon = 'fa fa-fw fa-check-square-o';

  deselectAllRowsIcon = 'fa fa-fw fa-square-o';

  selectSomeRowsIcon = 'fa fa-fw fa-minus-square-o';

  selectRowIcon = 'fa fa-fw fa-check-square-o';

  deselectRowIcon = 'fa fa-fw fa-square-o';
}

declare module '@ember/service' {
  interface Registry {
    'emt-themes/ember-bootstrap-v5': EmberBootstrap5Theme;
  }
}
