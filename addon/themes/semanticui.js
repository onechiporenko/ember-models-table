import DefaultTheme from './default';

import {alias} from '@ember/object/computed';

/**
 * @class SemanticUITheme
 * @namespace Themes
 * @extends Themes.DefaultTheme
 */
export default class SemanticUiTheme extends DefaultTheme {

  /**
   * @property columnsDropdownComponent
   * @type string
   * @default 'models-table/themes/semanticui/columns-dropdown'
   */

  /**
   * @property dataGroupBySelectComponent
   * @type string
   * @default 'models-table/themes/semanticui/data-group-by-select'
   */

  /**
   * @property globalFilterComponent
   * @type string
   * @default 'models-table/themes/semanticui/global-filter'
   */

  /**
   * @property paginationNumericComponent
   * @type string
   * @default 'models-table/themes/semanticui/pagination-numeric'
   */

  /**
   * @property paginationSimpleComponent
   * @type string
   * @default 'models-table/themes/semanticui/pagination-simple'
   */

  /**
   * @property rowFilteringCellComponent
   * @type string
   * @default 'models-table/themes/semanticui/row-filtering-cell'
   */

  /**
   * @property selectComponent
   * @type string
   * @default 'models-table/themes/semanticui/select'
   */

  /**
   * @property summaryComponent
   * @type string
   * @default 'models-table/themes/semanticui/summary'
   */

  /**
   * @property componentsPath
   * @type string
   * @default 'models-table/themes/semanticui/'
   */
  componentsPath = 'models-table/themes/semanticui/';

  /**
   * @property buttonDefault
   * @type string
   * @default 'ui button'
   */
  buttonDefault = 'ui button';

  /**
   * @property globalFilterWrapper
   * @type string
   * @default 'ui labeled icon input'
   */
  globalFilterWrapper = 'ui labeled icon input';

  /**
   * @property columnsDropdownWrapper
   * @type string
   * @default 'ui compact menu right floated'
   */
  columnsDropdownWrapper = 'ui compact menu right floated';

  /**
   * @property columnsDropdownDivider
   * @type string
   * @default 'divider'
   */
  columnsDropdownDivider = 'divider';

  /**
   * @property buttonsGroup
   * @type string
   * @default 'ui compact menu right floated'
   */
  buttonsGroup = 'ui compact menu right floated';

  /**
   * @property clearFilterIcon
   * @type string
   * @default 'remove circle link icon'
   */
  clearFilterIcon = 'remove circle link icon';

  /**
   * @property dataGroupBySelectWrapper
   * @type string
   * @default 'ui labeled action input data-group-by-wrapper'
   */
  dataGroupBySelectWrapper = 'ui labeled action input data-group-by-wrapper';

  /**
   * @property sortGroupedPropertyBtn
   * @type string
   * @default 'ui icon button'
   */
  sortGroupedPropertyBtn = 'ui icon button';

  /**
   * @property caretIcon
   * @type string
   * @default 'dropdown icon'
   */
  caretIcon = 'dropdown icon';

  /**
   * @property table
   * @type string
   * @default 'ui selectable striped celled sortable table'
   */
  table = 'ui selectable striped celled sortable table';

  /**
   * @property columnVisibleIcon
   * @type string
   * @default 'toggle on icon'
   */
  columnVisibleIcon = 'toggle on icon';

  /**
   * @property columnHiddenIcon
   * @type string
   * @default 'toggle off icon'
   */
  columnHiddenIcon = 'toggle off icon';

  /**
   * @property sortAscIcon
   * @type string
   * @default 'sort ascending icon'
   */
  sortAscIcon = 'sort ascending icon';

  /**
   * @property sortDescIcon
   * @type string
   * @default 'sort descending icon'
   */
  sortDescIcon = 'sort descending icon';

  /**
   * @property clearAllFiltersIcon
   * @type string
   * @default 'remove circle icon'
   */
  clearAllFiltersIcon = 'remove circle icon';

  /**
   * @property footerSummaryNumericPagination
   * @type string
   * @default 'four wide tablet wide column'
   */
  footerSummaryNumericPagination = 'four wide tablet wide column';

  /**
   * @property footerSummaryDefaultPagination
   * @type string
   * @default 'four wide tablet wide column'
   */
  @alias('footerSummaryNumericPagination')
  footerSummaryDefaultPagination;

  /**
   * @property pageSizeWrapper
   * @type string
   * @default 'three wide tablet wide column'
   */
  pageSizeWrapper = 'three wide tablet wide column';

  /**
   * @property paginationWrapperNumeric
   * @type string
   * @default 'nine wide tablet wide column'
   */
  paginationWrapperNumeric = 'nine wide tablet wide column';

  /**
   * @property paginationWrapperDefault
   * @type string
   * @default 'nine wide tablet wide column'
   */
  @alias('paginationWrapperNumeric')
  paginationWrapperDefault;

  /**
   * @property tfooterInternalWrapper
   * @type string
   * @default 'ui stackable grid middle aligned'
   */
  tfooterInternalWrapper = 'ui stackable grid middle aligned';

  /**
   * @property navFirstIcon
   * @type string
   * @default 'angle double left icon'
   */
  navFirstIcon = 'angle double left icon';

  /**
   * @property navPrevIcon
   * @type string
   * @default 'angle left icon'
   */
  navPrevIcon = 'angle left icon';

  /**
   * @property navNextIcon
   * @type string
   * @default 'angle right icon'
   */
  navNextIcon = 'angle right icon';

  /**
   * @property navLastIcon
   * @type string
   * @default 'angle double right icon'
   */
  navLastIcon = 'angle double right icon';

  /**
   * @property expandRowIcon
   * @type string
   * @default 'icon plus'
   */
  expandRowIcon = 'icon plus';

  /**
   * @property collapseRowIcon
   * @type string
   * @default 'icon minus'
   */
  collapseRowIcon = 'icon minus';

  /**
   * @property expandAllRowsIcon
   * @type string
   * @default 'icon plus'
   */
  expandAllRowsIcon = 'icon plus';

  /**
   * @property collapseAllRowsIcon
   * @type string
   * @default 'icon minus'
   */
  collapseAllRowsIcon = 'icon minus';

  /**
   * @property selectAllRowsIcon
   * @type string
   * @default 'toggle on icon'
   */
  selectAllRowsIcon = 'toggle on icon';

  /**
   * @property deselectAllRowsIcon
   * @type string
   * @default 'toggle off icon'
   */
  deselectAllRowsIcon = 'toggle off icon';

  /**
   * @property selectRowIcon
   * @type string
   * @default 'toggle on icon'
   */
  selectRowIcon = 'toggle on icon';

  /**
   * @property deselectRowIcon
   * @type string
   * @default 'toggle off icon'
   */
  deselectRowIcon = 'toggle off icon';

  /**
   * @property paginationBlock
   * @type string
   * @default 'ui icon buttons'
   */
  paginationBlock = 'ui icon buttons';

  /**
   * @property currentPageSizeSelectWrapper
   * @type string
   * @default 'ui form right floated'
   */
  currentPageSizeSelectWrapper = 'ui form right floated';

  /**
   * @property formElementWrapper
   * @type string
   * @default 'inline fields'
   */
  formElementWrapper = 'inline fields';

  /**
   * @property form
   * @type string
   * @default 'ui form'
   */
  form = 'ui form';
}
