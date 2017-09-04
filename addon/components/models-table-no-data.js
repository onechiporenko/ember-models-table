import Ember from 'ember';
import layout from '../templates/components/models-table-no-data';

export default Ember.Component.extend({
  layout,
  tagName: 'tr',
  columnsCount: null,
  themeInstance: null
});
