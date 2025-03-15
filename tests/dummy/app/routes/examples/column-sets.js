// BEGIN-SNIPPET table-with-column-sets
import { set } from '@ember/object';

import ExampleRoute from './example';

export default class ColumnSetsRoute extends ExampleRoute {
  setupController(controller) {
    super.setupController(...arguments);
    set(controller, 'columnSets', [
      {
        label: 'Only Name',
        showColumns: ['firstName', 'lastName'],
      },
      {
        label: 'Random',
        showColumns(columns) {
          columns.forEach((column) => (column.isHidden = Math.random() > 0.5));
          this._onColumnsVisibilityChanged();
        },
      },
      {
        label: 'Add Name',
        showColumns: ['firstName', 'lastName'],
        hideOtherColumns: false,
      },
      {
        label: 'Toggle Name',
        showColumns: ['firstName', 'lastName'],
        toggleSet: true,
      },
    ]);
  }
}
// END-SNIPPET
