// BEGIN-SNIPPET table-with-grouped-rows
import ExampleRoute from './example';

export default class GroupedRowsRoute extends ExampleRoute {
  setupController(controller, model) {
    super.setupController(...arguments);
    const theme = controller.fw.themeInstance;
    controller.collapsedGroupValues = [
      model.map((d) => d.country).sort()[0].country,
    ];
    controller.columns.unshift({
      component: theme.expandToggleComponent,
      title: 'Toggle details',
      componentForFilterCell: theme.expandAllToggleComponent,
    });
  }
}
// END-SNIPPET
