import DefaultTheme from './default';

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

  componentsPath = 'models-table/themes/ember-paper/';

  table = 'paper-table';

  headerWrapper = 'layout-row layout-align-space-between';

  tfooterInternalWrapper =
    'layout-row layout-align-space-between-center footer-internal-wrapper';

  paginationInternalWrapper = 'layout-row layout-align-space-between-center';

  columnVisibleIcon = 'check_box';

  columnHiddenIcon = 'check_box_outline_blank';

  sortAscIcon = 'arrow_drop_up';

  sortDescIcon = 'arrow_drop_down';

  navFirstIcon = 'first_page';

  navPrevIcon = 'chevron_left';

  navNextIcon = 'chevron_right';

  navLastIcon = 'last_page';

  clearAllFiltersIcon = 'clear';

  filteringCellInternalWrapper = 'layout-row layout-align-space-between-center';

  columnsDropdownWrapper = 'columns-dropdown';

  expandRowIcon = 'expand_more';

  collapseAllRowsIcon = 'expand_less';

  expandAllRowsIcon = 'expand_more';
}
