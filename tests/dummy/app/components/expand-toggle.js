import Ember from 'ember';
import layout from '../templates/components/expand-toggle';

const {get} = Ember;

export default Ember.Component.extend({
  layout,
  actions: {
    collapseRow(index) {
      get(this, 'collapseRow')(index);
    },
    expandRow(index) {
      get(this, 'expandRow')(index);
    }
  }
});
