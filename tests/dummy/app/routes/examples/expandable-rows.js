// BEGIN-SNIPPET table-with-expandable-rows
import ExampleRoute from './example';
import { set } from '@ember/object';

export default class ExpandableRowsRoute extends ExampleRoute {
  setupController(controller, model) {
    super.setupController(controller, model);
    const theme = controller.fw.themeInstance;
    controller.columns.unshift({
      component: theme.expandToggleComponent,
      componentForFilterCell: theme.expandAllToggleComponent,
      mayBeHidden: false,
    });
    set(controller, 'expandedItems', model.slice(1, 3));
  }
}
// END-SNIPPET
