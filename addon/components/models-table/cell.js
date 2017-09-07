import Ember from 'ember';
import layout from '../../templates/components/models-table/cell';

export default Ember.Component.extend({
  layout,
  tagName: 'td',
  classNameBindings: ['column.className']
});
