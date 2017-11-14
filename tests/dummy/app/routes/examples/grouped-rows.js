import {get, set} from '@ember/object';
import ExampleRoute from './example';

export default ExampleRoute.extend({
  setupController(controller) {
    this._super(...arguments);
    controller.set('dataGroupProperties', ['age', 'city', 'country']);
    get(controller, 'columns').unshiftObject({
      component: 'expand-toggle',
      title: 'Toggle details',
      componentForFilterCell: 'expand-all-toggle'
    });
    set(controller, 'expandedRowComponent', 'expanded-row');
  }
});
