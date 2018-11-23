import Bootstrap4Theme from './bootstrap4';

/**
 * @class EmberBootstrap
 * @namespace Themes
 * @extends Themes.Bootstrap4
 */
export default Bootstrap4Theme.extend({
  components: {
    'columns-dropdown': 'models-table/themes/ember-bootstrap/columns-dropdown',
    'global-filter': 'models-table/themes/ember-bootstrap/global-filter',
    'row-filtering-cell': 'models-table/themes/ember-bootstrap/row-filtering-cell',
    'data-group-by-select': 'models-table/themes/ember-bootstrap/data-group-by-select',
  },

  sortGroupedPropertyBtn: 'btn btn-link'
});