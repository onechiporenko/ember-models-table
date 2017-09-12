import Component from '@ember/component';
import { get } from '@ember/object';
import layout from '../templates/components/delete-row';

export default Component.extend({
  layout,
  sendAction: null,
  record: null,
  actions: {
    sendAction() {
      get(this, 'sendAction')('delete', get(this, 'record'));
    }
  }
});
