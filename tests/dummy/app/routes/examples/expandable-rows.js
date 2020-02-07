// BEGIN-SNIPPET table-with-expandable-rows
import ExampleRoute from './example';
import {set, get} from '@ember/object';
import {getOwner} from '@ember/application';

export default class ExpandableRowsRoute extends ExampleRoute {

  setupController(controller, model) {
    super.setupController(...arguments);
    const owner = getOwner(this);
    const theme = owner.lookup('component:models-table').themeInstance;
    get(controller, 'columns').unshiftObject({
      component: theme.expandToggleComponent,
      componentForFilterCell: theme.expandAllToggleComponent,
      mayBeHidden: false
    });
    set(controller, 'expandedItems', model.slice(1, 3));
  }

}
// END-SNIPPET
