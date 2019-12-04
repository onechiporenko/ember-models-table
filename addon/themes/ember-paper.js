import DefaultTheme from './default';

/**
 * @class EmberPaper
 * @namespace Themes
 * @extends Themes.Default
 */
export default class EmberPaperTheme extends DefaultTheme {
  componentsPath = 'models-table/themes/ember-paper/';
  table = 'paper-table';
  headerWrapper = 'layout-row layout-align-space-between';
  tfooterInternalWrapper = 'layout-row layout-align-space-between-center footer-internal-wrapper';
  paginationInternalWrapper = 'layout-row layout-align-space-between-center';
  'column-visible' = 'check_box';
  'column-hidden' = 'check_box_outline_blank';
  'sort-asc' = 'arrow_drop_up';
  'sort-desc' = 'arrow_drop_down';
  'nav-first' = 'first_page';
  'nav-prev' = 'chevron_left';
  'nav-next' = 'chevron_right';
  'nav-last' = 'last_page';
  clearAllFiltersIcon = 'clear';
  'filtering-cell-internal-wrapper' = 'layout-row layout-align-space-between-center';
  columnsDropdownWrapper = 'columns-dropdown';
}
