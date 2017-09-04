import Ember from 'ember';
import layout from '../templates/components/delete-row';

const {get} = Ember;

export default Ember.Component.extend({
  layout,
  sendAction: null,
  record: null,
  actions: {
    sendAction() {
      get(this, 'sendAction')('delete', get(this, 'record'));
    }
  }
});
