import Ember from 'ember';
import layout from '../templates/components/models-table-grouped-header';

export default Ember.Component.extend({
  layout,
  tagName: 'tr',
  groupedHeader: null,
  themeInstance: null
});
