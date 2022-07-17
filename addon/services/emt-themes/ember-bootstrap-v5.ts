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

export default class EmberBootstrap5Theme extends DefaultTheme {
  /**
   * @default 'models-table/themes/ember-bootstrap-v5/columns-dropdown'
   */
  get columnsDropdownComponent(): unknown {
    return ensureSafeComponent(ColumnsDropdown, this);
  }

  /**
   * @default 'models-table/themes/ember-bootstrap-v5/data-group-by-select'
   */
  get dataGroupBySelectComponent(): unknown {
    return ensureSafeComponent(DataGroupBySelect, this);
  }

  /**
   * @default 'models-table/themes/ember-bootstrap-v5/global-filter'
   */
  get globalFilterComponent(): unknown {
    return ensureSafeComponent(GlobalFilter, this);
  }

  /**
   * @default 'models-table/themes/ember-bootstrap-v5/row-filtering-cell'
   */
  get rowFilteringCellComponent(): unknown {
    return ensureSafeComponent(RowFilteringCell, this);
  }

  /**
   * @default 'models-table/themes/ember-bootstrap-v5/summary'
   */
  get summaryComponent(): unknown {
    return ensureSafeComponent(Summary, this);
  }

  /**
   * @default 'models-table/themes/ember-bootstrap-v5/page-size-select'
   */
  get pageSizeSelectComponent(): unknown {
    return ensureSafeComponent(PageSizeSelect, this);
  }

  /**
   * @default 'models-table/themes/ember-bootstrap-v5/pagination-simple'
   */
  get paginationSimpleComponent(): unknown {
    return ensureSafeComponent(PaginationSimple, this);
  }

  /**
   * @default 'models-table/themes/ember-bootstrap-v5/pagination-numeric'
   */
  get paginationNumericComponent(): unknown {
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

  clearFilterIcon = 'fa fa-times form-control-feedback';

  clearAllFiltersIcon = 'fa fa-times';

  sortGroupedPropertyBtn = 'btn';

  tfooterInternalWrapper = 'row';

  input = 'form-control';

  inputGroup = 'input-group';

  form = 'form-inline';

  formElementWrapper = 'form-group';

  paginationNumericItemActive = 'active';

  sortAscIcon = 'fa fa-sort-asc';

  sortDescIcon = 'fa fa-sort-desc';

  columnVisibleIcon = 'fa fa-check-square-o';

  columnHiddenIcon = 'fa fa-square-o';

  navFirstIcon = 'fa fa-angle-double-left';

  navPrevIcon = 'fa fa-angle-left';

  navNextIcon = 'fa fa-angle-right';

  navLastIcon = 'fa fa-angle-double-right';

  caretIcon = 'caret';

  expandRowIcon = 'fa fa-plus';

  expandAllRowsIcon = 'fa fa-plus';

  collapseRowIcon = 'fa fa-minus';

  collapseAllRowsIcon = 'fa fa-minus';

  selectAllRowsIcon = 'fa fa-check-square-o';

  deselectAllRowsIcon = 'fa fa-square-o';

  selectSomeRowsIcon = 'fa fa-minus-square-o';

  selectRowIcon = 'fa fa-check-square-o';

  deselectRowIcon = 'fa fa-square-o';
}

declare module '@ember/service' {
  interface Registry {
    'emt-themes/ember-bootstrap-v5': EmberBootstrap5Theme;
  }
}
