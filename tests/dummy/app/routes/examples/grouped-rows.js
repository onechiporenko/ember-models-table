// BEGIN-SNIPPET table-with-grouped-rows
import { get, set } from '@ember/object';
import ExampleRoute from './example';

export default class GroupedRowsRoute extends ExampleRoute {
  setupController(controller, model) {
    super.setupController(...arguments);
    const theme = controller.fw.themeInstance;
    set(controller, 'collapsedGroupValues', [
      get(model.sortBy('country'), 'firstObject.country'),
    ]);
    get(controller, 'columns').unshiftObject({
      component: theme.expandToggleComponent,
      title: 'Toggle details',
      componentForFilterCell: theme.expandAllToggleComponent,
    });
  }
}
// END-SNIPPET
