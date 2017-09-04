import Ember from 'ember';
import layout from '../templates/components/expand-all-toggle';

const {get} = Ember;

export default Ember.Component.extend({
  layout,
  actions: {
    collapseAllRows(index) {
      get(this, 'collapseAllRows')(index);
    },
    expandAllRows(index) {
      get(this, 'expandAllRows')(index);
    }
  }
});
