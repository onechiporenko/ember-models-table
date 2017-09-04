import Ember from 'ember';
import layout from '../templates/components/models-table-row-filtering';

export default Ember.Component.extend({
  layout,
  tagName: 'tr',
  processedColumns: null,
  themeInstance: null
});
