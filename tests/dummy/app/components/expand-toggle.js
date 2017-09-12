import Component from '@ember/component';
import { get } from '@ember/object';
import layout from '../templates/components/expand-toggle';

export default Component.extend({
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
