import Bootstrap3Theme from './bootstrap3';

/**
 * @class EmberBootstrap
 * @namespace Themes
 * @extends Themes.Bootstrap3
 */
export default Bootstrap3Theme.extend({
  components: {
    'columns-dropdown': 'models-table/themes/ember-bootstrap-v3/columns-dropdown',
    'data-group-by-select': 'models-table/themes/ember-bootstrap-v3/data-group-by-select',
    'global-filter': 'models-table/themes/ember-bootstrap-v3/global-filter',
    'row-filtering-cell': 'models-table/themes/ember-bootstrap-v3/row-filtering-cell',
    'summary': 'models-table/themes/ember-bootstrap-v3/summary',
  }
});
