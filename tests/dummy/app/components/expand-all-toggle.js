import Component from '@ember/component';
import { get } from '@ember/object';
import layout from '../templates/components/expand-all-toggle';

export default Component.extend({
  layout,
  actions: {
    collapseAllRows() {
      get(this, 'collapseAllRows')();
    },
    expandAllRows() {
      get(this, 'expandAllRows')();
    }
  }
});
