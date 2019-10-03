import DefaultTheme from './default';

/**
 * @class EmberPaper
 * @namespace Themes
 * @extends Themes.Default
 */
export default DefaultTheme.extend({
  components: {
    'global-filter': 'models-table/themes/ember-paper/global-filter',
    'columns-dropdown': 'models-table/themes/ember-paper/columns-dropdown',
    'data-group-by-select': 'models-table/themes/ember-paper/data-group-by-select',
    'select': 'models-table/themes/ember-paper/select',
    'page-size-select': 'models-table/themes/ember-paper/page-size-select',
    'pagination-simple': 'models-table/themes/ember-paper/pagination-simple',
    'pagination-numeric': 'models-table/themes/ember-paper/pagination-numeric',
    'row-filtering-cell': 'models-table/themes/ember-paper/row-filtering-cell',
    'row-sorting-cell': 'models-table/themes/ember-paper/row-sorting-cell',
    'summary': 'models-table/themes/ember-paper/summary',
  },
  table: 'paper-table',
  headerWrapper: 'layout-row layout-align-space-between',
  tfooterInternalWrapper: 'layout-row layout-align-space-between-center footer-internal-wrapper',
  paginationInternalWrapper: 'layout-row layout-align-space-between-center',
  'column-visible': 'check_box',
  'column-hidden': 'check_box_outline_blank',
  'sort-asc': 'arrow_drop_up',
  'sort-desc': 'arrow_drop_down',
  'nav-first': 'first_page',
  'nav-prev': 'chevron_left',
  'nav-next': 'chevron_right',
  'nav-last': 'last_page',
  clearAllFiltersIcon: 'clear',
  'filtering-cell-internal-wrapper': 'layout-row layout-align-space-between-center',
  columnsDropdownWrapper: 'columns-dropdown'
});
