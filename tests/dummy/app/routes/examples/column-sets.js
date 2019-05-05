import ExampleRoute from './example';
import {set} from '@ember/object';

export default class ColumnSetsRoute extends ExampleRoute {

  setupController(controller) {
    super.setupController(...arguments);
    set(controller, 'columnSets', [
      {
        label: 'Only Name',
        showColumns: ['firstName', 'lastName']
      },
      {
        label: 'Random',
        showColumns(columns) {
          columns.forEach((column) => column.set('isHidden', Math.random() > 0.5));
          this._sendColumnsVisibilityChangedAction();
        }
      },
      {
        label: 'Add Name',
        showColumns: ['firstName', 'lastName'],
        hideOtherColumns: false
      },
      {
        label: 'Toggle Name',
        showColumns: ['firstName', 'lastName'],
        toggleSet: true
      }
    ]);
  }
}
