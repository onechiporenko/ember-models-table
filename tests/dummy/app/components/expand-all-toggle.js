import Component from '@ember/component';
import { get } from '@ember/object';
import layout from '../templates/components/expand-all-toggle';

export default Component.extend({
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
