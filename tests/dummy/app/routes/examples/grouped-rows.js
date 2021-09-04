// BEGIN-SNIPPET table-with-grouped-rows
import ExampleRoute from './example';

export default class GroupedRowsRoute extends ExampleRoute {
  setupController(controller, model) {
    super.setupController(...arguments);
    const theme = controller.fw.themeInstance;
    controller.collapsedGroupValues = [model.sortBy('country')[0].country];
    controller.columns.unshiftObject({
      component: theme.expandToggleComponent,
      title: 'Toggle details',
      componentForFilterCell: theme.expandAllToggleComponent,
    });
  }
}
// END-SNIPPET
