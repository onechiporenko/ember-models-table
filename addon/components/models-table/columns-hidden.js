import Ember from 'ember';
import layout from '../../templates/components/models-table/columns-hidden';

export default Ember.Component.extend({
  layout,
  tagName: 'tr',
  columnsCount: null,
  themeInstance: null
});
