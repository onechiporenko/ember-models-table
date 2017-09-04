import Ember from 'ember';
import layout from '../templates/components/custom-action';
const {get} = Ember;

export default Ember.Component.extend({
  layout,
  actions: {
    sendAction() {
      get(this, 'sendAction')('action', get(this, 'record'));
    }
  }
});
