// BEGIN-SNIPPET table-with-selectable-rows
import ExampleRoute from './example';

export default class SelectRowWithCheckboxesRoute extends ExampleRoute {
  setupController(controller, model) {
    super.setupController(...arguments);
    const theme = controller.fw.themeInstance;
    controller.columns.splice(0, 0, {
      component: theme.rowSelectCheckboxComponent,
      disableFiltering: true,
      mayBeHidden: false,
      componentForSortCell: theme.rowSelectAllCheckboxComponent,
    });
    controller.selectedItems = model.slice(1, 3);
  }
}
// END-SNIPPET
