import {get, set} from '@ember/object';
import ExampleRoute from './example';

export default ExampleRoute.extend({
  setupController(controller, model) {
    this._super(...arguments);
    set(controller, 'dataGroupProperties', ['age', 'city', 'country']);
    set(controller, 'currentGroupingPropertyName', 'country');
    set(controller, 'collapsedGroupValues', [get(model.sortBy('country'), 'firstObject.country')]);
    get(controller, 'columns').unshiftObject({
      component: 'expand-toggle',
      title: 'Toggle details',
      componentForFilterCell: 'expand-all-toggle'
    });
  }
});
