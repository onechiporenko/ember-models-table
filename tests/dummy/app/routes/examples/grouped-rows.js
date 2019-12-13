import {get, set} from '@ember/object';
import ExampleRoute from './example';
import {getOwner} from '@ember/application';

export default class GroupedRowsRoute extends ExampleRoute {
  setupController(controller, model) {
    super.setupController(...arguments);
    const owner = getOwner(this);
    const theme = owner.lookup('component:models-table').themeInstance;
    set(controller, 'dataGroupProperties', ['age', 'city', 'country']);
    set(controller, 'currentGroupingPropertyName', 'country');
    set(controller, 'collapsedGroupValues', [get(model.sortBy('country'), 'firstObject.country')]);
    get(controller, 'columns').unshiftObject({
      component: theme.expandToggleComponent,
      title: 'Toggle details',
      componentForFilterCell: theme.expandAllToggleComponent
    });
  }
}
