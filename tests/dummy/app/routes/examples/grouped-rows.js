import {get, set} from '@ember/object';
import ExampleRoute from './example';

export default class GroupedRowsRoute extends ExampleRoute {
  setupController(controller, model) {
    super.setupController(...arguments);
    set(controller, 'dataGroupProperties', ['age', 'city', 'country']);
    set(controller, 'currentGroupingPropertyName', 'country');
    set(controller, 'collapsedGroupValues', [get(model.sortBy('country'), 'firstObject.country')]);
    get(controller, 'columns').unshiftObject({
      component: 'expand-toggle',
      title: 'Toggle details',
      componentForFilterCell: 'expand-all-toggle'
    });
  }
}
