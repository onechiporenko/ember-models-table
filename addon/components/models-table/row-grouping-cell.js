import Component from '@ember/component';
import {get} from '@ember/object';
import layout from '../../templates/components/models-table/row-grouping-cell';

export default Component.extend({
  layout,
  tagName: 'td',
  attributeBindings: ['visibleProcessedColumns.length:colspan'],

  actions: {
    toggleGroupedRows() {
      get(this, 'toggleGroupedRows')(get(this, 'groupedValue'));
    }
  }
});
