import DefaultTheme from './default';

/**
 * @class EmberPaperTheme
 * @namespace Themes
 * @extends Themes.DefaultTheme
 */
export default class EmberPaperTheme extends DefaultTheme {
  componentsPath = 'models-table/themes/ember-paper/';
  table = 'paper-table';
  headerWrapper = 'layout-row layout-align-space-between';
  tfooterInternalWrapper = 'layout-row layout-align-space-between-center footer-internal-wrapper';
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
}
