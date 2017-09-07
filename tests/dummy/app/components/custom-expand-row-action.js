import Ember from 'ember';
import layout from '../templates/components/custom-expand-row-action';

const {get} = Ember;

export default Ember.Component.extend({
  layout,
  actions: {
    sendAction() {
      get(this, 'sendAction')('externalAction', get(this, 'record'));
    }
  }
});
