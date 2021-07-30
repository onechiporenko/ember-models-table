import { tracked } from '@glimmer/tracking';
import Bootstrap3Theme from './bootstrap3';

export default class Bootstrap4Theme extends Bootstrap3Theme {
  componentsPath = 'models-table/themes/bootstrap4/';

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

  clearFilterIcon = 'fa fa-times form-control-feedback';

  clearAllFiltersIcon = 'fa fa-times';

  sortGroupedPropertyBtn = 'btn';

  input = 'form-control';

  inputGroup = 'input-group';

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
