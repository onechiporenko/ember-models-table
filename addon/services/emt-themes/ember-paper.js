import DefaultTheme from './default';

/**
 * @class EmberPaperTheme
 * @namespace Themes
 * @extends Themes.DefaultTheme
 */
export default class EmberPaperTheme extends DefaultTheme {
  /**
   * @property columnsDropdownComponent
   * @type string
   * @default ''models-table/themes/ember-paper/columns-dropdown'
   */

  /**
   * @property dataGroupBySelectComponent
   * @type string
   * @default 'models-table/themes/ember-paper/data-group-by-select'
   */

  /**
   * @property globalFilterComponent
   * @type string
   * @default 'models-table/themes/ember-paper/global-filter'
   */

  /**
   * @property pageSizeSelectComponent
   * @type string
   * @default 'models-table/themes/ember-paper/page-size-select'
   */

  /**
   * @property paginationNumericComponent
   * @type string
   * @default 'models-table/themes/ember-paper/pagination-numeric'
   */

  /**
   * @property paginationSimpleComponent
   * @type string
   * @default 'models-table/themes/ember-paper/pagination-simple'
   */

  /**
   * @property rowFilteringCellComponent
   * @type string
   * @default 'models-table/themes/ember-paper/row-filtering-cell'
   */

  /**
   * @property rowSortingCellComponent
   * @type string
   * @default 'models-table/themes/ember-paper/row-sorting-cell'
   */

  /**
   * @property selectComponent
   * @type string
   * @default 'models-table/themes/ember-paper/select'
   */

  /**
   * @property summaryComponent
   * @type string
   * @default 'models-table/themes/ember-paper/summary'
   */

  /**
   * @property rowSelectAllCheckboxComponent
   * @type string
   * @default 'models-table/themes/ember-paper/row-select-all-checkbox'
   */

  /**
   * @property rowSelectCheckboxComponent
   * @type string
   * @default 'models-table/themes/ember-paper/row-select-checkbox'
   */

  /**
   * @property expandToggleComponent
   * @type string
   * @default 'models-table/themes/ember-paper/expand-toggle'
   */

  /**
   * @property cellEditToggleComponent
   * @type string
   * @default 'models-table/themes/ember-paper/cell-edit-toggle'
   */

  /**
   * @property cellContentEditComponent
   * @type string
   * @default 'models-table/themes/ember-paper/cell-content-edit'
   */

  /**
   * @property componentsPath
   * @type string
   * @default 'models-table/themes/ember-paper/'
   */
  componentsPath = 'models-table/themes/ember-paper/';

  /**
   * @property table
   * @type string
   * @default 'paper-table'
   */
  table = 'paper-table';

  /**
   * @property headerWrapper
   * @type string
   * @default 'layout-row layout-align-space-between'
   */
  headerWrapper = 'layout-row layout-align-space-between';

  /**
   * @property tfooterInternalWrapper
   * @type string
   * @default 'layout-row layout-align-space-between-center footer-internal-wrapper'
   */
  tfooterInternalWrapper =
    'layout-row layout-align-space-between-center footer-internal-wrapper';

  /**
   * @property paginationInternalWrapper
   * @type string
   * @default 'layout-row layout-align-space-between-center'
   */
  paginationInternalWrapper = 'layout-row layout-align-space-between-center';

  /**
   * @property columnVisibleIcon
   * @type string
   * @default 'check_box'
   */
  columnVisibleIcon = 'check_box';

  /**
   * @property columnHiddenIcon
   * @type string
   * @default 'check_box_outline_blank'
   */
  columnHiddenIcon = 'check_box_outline_blank';

  /**
   * @property sortAscIcon
   * @type string
   * @default 'arrow_drop_up'
   */
  sortAscIcon = 'arrow_drop_up';

  /**
   * @property sortDescIcon
   * @type string
   * @default 'arrow_drop_down'
   */
  sortDescIcon = 'arrow_drop_down';

  /**
   * @property navFirstIcon
   * @type string
   * @default 'first_page'
   */
  navFirstIcon = 'first_page';

  /**
   * @property navPrevIcon
   * @type string
   * @default 'chevron_left'
   */
  navPrevIcon = 'chevron_left';

  /**
   * @property navNextIcon
   * @type string
   * @default 'chevron_right'
   */
  navNextIcon = 'chevron_right';

  /**
   * @property navLastIcon
   * @type string
   * @default 'last_page'
   */
  navLastIcon = 'last_page';

  /**
   * @property clearAllFiltersIcon
   * @type string
   * @default 'clear'
   */
  clearAllFiltersIcon = 'clear';

  /**
   * @property filteringCellInternalWrapper
   * @type string
   * @default 'layout-row layout-align-space-between-center'
   */
  filteringCellInternalWrapper = 'layout-row layout-align-space-between-center';

  /**
   * @property columnsDropdownWrapper
   * @type string
   * @default 'dropdown'
   */
  columnsDropdownWrapper = 'columns-dropdown';

  /**
   * @property collapseRowIcon
   * @type string
   * @default 'expand_less'
   */
  collapseRowIcon = 'expand_less';
  /**
   * @property expandRowIcon
   * @type string
   * @default 'expand_more'
   */
  expandRowIcon = 'expand_more';

  /**
   * @property collapseAllRowsIcon
   * @type string
   * @default 'expand_less'
   */
  collapseAllRowsIcon = 'expand_less';

  /**
   * @property expandAllRowsIcon
   * @type string
   * @default 'expand_more'
   */
  expandAllRowsIcon = 'expand_more';
}
