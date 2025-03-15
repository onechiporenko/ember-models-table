import { ensureSafeComponent } from '@embroider/util';
import { type ComponentLike } from '@glint/template';

import RowSelectAllCheckbox from '../../components/models-table/themes/bootstrap3/row-select-all-checkbox';
import { type RowSelectAllCheckboxSignature } from '../../interfaces/components/models-table/themes/default/row-select-all-checkbox-signature.interface';
import DefaultTheme from './default';

export default class Bootstrap3Theme extends DefaultTheme {
  /**
   * @default 'models-table/themes/bootstrap3/row-select-all-checkbox'
   */
  get rowSelectAllCheckboxComponent(): ComponentLike<RowSelectAllCheckboxSignature> {
    return ensureSafeComponent(RowSelectAllCheckbox, this);
  }

  table = 'table table-striped table-bordered table-condensed';

  buttonsGroup = 'btn-group';

  globalFilterWrapper = 'pull-left';

  sortGroupedPropertyBtn = 'btn btn-default';

  columnsDropdownWrapper = 'pull-right columns-dropdown';

  columnsDropdown = 'dropdown-menu pull-right';

  columnsDropdownDivider = 'divider';

  dataGroupBySelectWrapper = 'data-group-by-wrapper pull-left';

  footerSummaryNumericPagination = 'col-md-4 col-sm-4 col-xs-4';

  footerSummaryDefaultPagination = 'col-md-5 col-sm-5 col-xs-5';

  pageSizeWrapper = 'col-md-2 col-sm-2 col-xs-2';

  pageSizeSelectWrapper = 'pull-left';

  currentPageSizeSelectWrapper = 'pull-right';

  paginationInternalWrapper = 'btn-toolbar pull-right';

  paginationWrapperNumeric = 'col-md-6 col-sm-6 col-xs-6';

  paginationWrapperDefault = 'col-md-5 col-sm-5 col-xs-5';

  paginationBlock = 'btn-group';

  paginationNumericItemActive = 'active';

  buttonDefault = 'btn btn-default';

  buttonLink = 'btn btn-link';

  form = 'form-inline';

  formElementWrapper = 'form-group';

  input = 'form-control';

  select = '';

  tfooterInternalWrapper = 'row';

  clearFilterIcon = 'glyphicon glyphicon-remove-sign form-control-feedback';

  clearAllFiltersIcon = 'glyphicon glyphicon-remove-circle';

  sortAscIcon = 'glyphicon glyphicon-triangle-top';

  sortDescIcon = 'glyphicon glyphicon-triangle-bottom';

  columnVisibleIcon = 'glyphicon glyphicon-check';

  columnHiddenIcon = 'glyphicon glyphicon-unchecked';

  navFirstIcon = 'glyphicon glyphicon-chevron-left';

  navPrevIcon = 'glyphicon glyphicon-menu-left';

  navNextIcon = 'glyphicon glyphicon-menu-right';

  navLastIcon = 'glyphicon glyphicon-chevron-right';

  caretIcon = 'caret';

  expandRowIcon = 'glyphicon glyphicon-plus';

  expandAllRowsIcon = 'glyphicon glyphicon-plus';

  collapseRowIcon = 'glyphicon glyphicon-minus';

  collapseAllRowsIcon = 'glyphicon glyphicon-minus';

  selectSomeRowsIcon = 'glyphicon glyphicon-minus';

  selectAllRowsIcon = 'glyphicon glyphicon-check';

  deselectAllRowsIcon = 'glyphicon glyphicon-unchecked';

  selectRowIcon = 'glyphicon glyphicon-check';

  deselectRowIcon = 'glyphicon glyphicon-unchecked';

  editRowButton = 'btn btn-default';

  saveRowButton = 'btn btn-default';

  cancelRowButton = 'btn btn-default';
}

declare module '@ember/service' {
  interface Registry {
    'emt-themes/bootstrap3': Bootstrap3Theme;
  }
}
