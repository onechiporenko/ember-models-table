import ExampleRoute from './example';
import {set, get} from '@ember/object';

export default class ExpandableRowsRoute extends ExampleRoute {

  setupController(controller, model) {
    super.setupController(...arguments);
    get(controller, 'columns').unshiftObject({
      component: 'expand-toggle',
      componentForFilterCell: 'expand-all-toggle',
      mayBeHidden: false
    });
    set(controller, 'expandedItems', model.slice(1, 3));
  }

}
