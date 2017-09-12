import Component from '@ember/component';
import { get } from '@ember/object';
import layout from '../templates/components/custom-sort-cell-action';

export default Component.extend({
  layout,
  actions: {
    sendAction() {
      get(this, 'sendAction')('externalAction', get(this, 'record'));
    }
  }
});
