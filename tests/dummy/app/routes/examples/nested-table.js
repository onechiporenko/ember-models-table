// BEGIN-SNIPPET nested-table
import ExampleRoute from './example';
import {get} from '@ember/object';
import {getOwner} from '@ember/application';

export default class ExamplesNestedTableRoute extends ExampleRoute {

  setupController(controller) {
    super.setupController(...arguments);
    const owner = getOwner(this);
    const theme = owner.lookup('component:models-table').themeInstance;
    get(controller, 'columns').unshiftObject({
      component: theme.expandToggleComponent,
      componentForFilterCell: theme.expandAllToggleComponent,
      mayBeHidden: false
    });
  }

}
// END-SNIPPET
