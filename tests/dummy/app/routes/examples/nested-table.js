// BEGIN-SNIPPET nested-table
import ExampleRoute from './example';

export default class ExamplesNestedTableRoute extends ExampleRoute {
  setupController(controller) {
    super.setupController(...arguments);
    const theme = controller.fw.themeInstance;
    controller.columns.unshiftObject({
      component: theme.expandToggleComponent,
      componentForFilterCell: theme.expandAllToggleComponent,
      mayBeHidden: false,
    });
  }
}
// END-SNIPPET
