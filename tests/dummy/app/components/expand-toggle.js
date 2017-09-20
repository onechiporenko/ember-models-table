import Component from '@ember/component';
import { get } from '@ember/object';
import layout from '../templates/components/expand-toggle';

export default Component.extend({
  layout,
  actions: {
    collapseRow(index, record) {
      get(this, 'collapseRow')(index, record);
    },
    expandRow(index, record) {
      get(this, 'expandRow')(index, record);
    }
  }
});
