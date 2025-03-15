import { ensureSafeComponent } from '@embroider/util';
import { tracked } from '@glimmer/tracking';
import { type ComponentLike } from '@glint/template';

import ColumnsDropdown from '../../components/models-table/themes/bootstrap4/columns-dropdown';
import DataGroupBySelect from '../../components/models-table/themes/bootstrap4/data-group-by-select';
import GlobalFilter from '../../components/models-table/themes/bootstrap4/global-filter';
import RowFilteringCell from '../../components/models-table/themes/bootstrap4/row-filtering-cell';
import { type ColumnsDropdownSignature } from '../../interfaces/components/models-table/themes/default/columns-dropdown-signature.interface';
import { type DataGroupBySelectSignature } from '../../interfaces/components/models-table/themes/default/data-group-by-select-signature.interface';
import { type GlobalFilterSignature } from '../../interfaces/components/models-table/themes/default/global-filter-signature.interface';
import { type RowFilteringCellSignature } from '../../interfaces/components/models-table/themes/default/row-filtering-cell-signature.interface';
import Bootstrap3Theme from './bootstrap3';

export default class Bootstrap4Theme extends Bootstrap3Theme {
  /**
   * @default 'models-table/themes/bootstrap4/columns-dropdown'
   */
  get columnsDropdownComponent(): ComponentLike<ColumnsDropdownSignature> {
    return ensureSafeComponent(ColumnsDropdown, this);
  }

  /**
   * @default 'models-table/themes/bootstrap4/data-group-by-select'
   */
  get dataGroupBySelectComponent(): ComponentLike<DataGroupBySelectSignature> {
    return ensureSafeComponent(DataGroupBySelect, this);
  }

  /**
   * @default 'models-table/themes/bootstrap4/global-filter'
   */
  get globalFilterComponent(): ComponentLike<GlobalFilterSignature> {
    return ensureSafeComponent(GlobalFilter, this);
  }

  /**
   * @default 'models-table/themes/bootstrap4/row-filtering-cell'
   */
  get rowFilteringCellComponent(): ComponentLike<RowFilteringCellSignature> {
    return ensureSafeComponent(RowFilteringCell, this);
  }

  table = 'table table-striped table-bordered table-condensed table-sm';

  globalFilterWrapper = 'float-left';

  columnsDropdown = 'dropdown-menu dropdown-menu-right';

  columnsDropdownWrapper = 'float-right columns-dropdown dropdown';

  columnsDropdownDivider = 'dropdown-divider';

  @tracked
  buttonDefault = 'btn btn-secondary';

  get buttonDefaultSmall(): string {
    return `${this.buttonDefault} btn-sm`;
  }

  footerSummaryNumericPagination = 'col-4';

  footerSummaryDefaultPagination = 'col-5';

  pageSizeWrapper = 'col-2';

  pageSizeSelectWrapper = 'float-right';

  paginationInternalWrapper = 'btn-toolbar float-right';

  paginationWrapperNumeric = 'col-6';

  paginationWrapperDefault = 'col-5';

  clearFilterIcon = 'fa fa-fw fa-times form-control-feedback';

  clearAllFiltersIcon = 'fa fa-fw fa-times';

  sortGroupedPropertyBtn = 'btn';

  input = 'form-control';

  inputGroup = 'input-group';

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
    'emt-themes/bootstrap4': Bootstrap4Theme;
  }
}
