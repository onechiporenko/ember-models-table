import Component from '@ember/component';
import {get} from '@ember/object';
import layout from '../templates/components/custom-row-group-toggle';

export default Component.extend({
  layout,
  actions: {
    toggleGroupedRows() {
      get(this, 'toggleGroupedRows')(get(this, 'groupedValue'));
    },
    toggleGroupedRowsSelection() {
      get(this, 'toggleGroupedRowsSelection')(get(this, 'groupedValue'));
    },
    toggleGroupedRowsExpands() {
      get(this, 'toggleGroupedRowsExpands')(get(this, 'groupedValue'));
    }
  }
});
