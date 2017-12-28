import Component from '@ember/component';
import {get} from '@ember/object';
import layout from '../templates/components/custom-row-group-toggle';

export default Component.extend({
  layout,
  actions: {
    toggleGroupedRows() {
      get(this, 'toggleGroupedRows')(get(this, 'groupedValue'));
    },
    toggleGroupedRowsSelection(e) {
      get(this, 'toggleGroupedRowsSelection')(get(this, 'groupedValue'));
      e.stopPropagation();
    },
    toggleGroupedRowsExpands(e) {
      get(this, 'toggleGroupedRowsExpands')(get(this, 'groupedValue'));
      e.stopPropagation();
    }
  }
});
