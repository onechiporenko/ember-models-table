import DefaultTheme from './default';

import {alias} from '@ember/object/computed';

/**
 * @class SemanticUITheme
 * @namespace Themes
 * @extends Themes.DefaultTheme
 */
export default class SemanticUiTheme extends DefaultTheme {

  componentsPath = 'models-table/themes/semanticui/';
  buttonDefault = 'ui button';
  globalFilterWrapper = 'ui labeled icon input';
  columnsDropdownWrapper = 'ui compact menu right floated';
  columnsDropdownDivider = 'divider';
  buttonsGroup = 'ui compact menu right floated';
  clearFilterIcon = 'remove circle link icon';
  dataGroupBySelectWrapper = 'ui labeled action input data-group-by-wrapper';
  sortGroupedPropertyBtn = 'ui icon button';
  caretIcon = 'dropdown icon';
  table = 'ui selectable striped celled sortable table';
  columnVisibleIcon = 'toggle on icon';
  columnHiddenIcon = 'toggle off icon';
  sortAscIcon = 'sort ascending icon';
  sortDescIcon = 'sort descending icon';
  clearAllFiltersIcon = 'remove circle icon';
  footerSummaryNumericPagination = 'four wide tablet wide column';
  @alias('footerSummaryNumericPagination')
  footerSummaryDefaultPagination;
  pageSizeWrapper = 'three wide tablet wide column';
  paginationWrapperNumeric = 'nine wide tablet wide column';
  @alias('paginationWrapperNumeric')
  paginationWrapperDefault;
  tfooterInternalWrapper = 'ui stackable grid middle aligned';
  navFirstIcon = 'angle double left icon';
  navPrevIcon = 'angle left icon';
  navNextIcon = 'angle right icon';
  navLastIcon = 'angle double right icon';
  expandRowIcon = 'icon plus';
  collapseRowIcon = 'icon minus';
  expandAllRowsIcon = 'icon plus';
  collapseAllRowsIcon = 'icon minus';
  selectAllRowsIcon = 'toggle on icon';
  deselectAllRowsIcon = 'toggle off icon';
  selectRowIcon = 'toggle on icon';
  deselectRowIcon = 'toggle off icon';
  paginationBlock = 'ui icon buttons';
  currentPageSizeSelectWrapper = 'ui form right floated';
  formElementWrapper = 'inline fields';
  form = 'ui form';
}
