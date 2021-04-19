// BEGIN-SNIPPET table-with-selectable-rows
import ExampleRoute from './example';
import { get, set } from '@ember/object';

export default class SelectRowWithCheckboxesRoute extends ExampleRoute {
  setupController(controller, model) {
    super.setupController(...arguments);
    const theme = controller.fw.themeInstance;
    get(controller, 'columns').unshiftObject({
      component: theme.rowSelectCheckboxComponent,
      disableFiltering: true,
      mayBeHidden: false,
      componentForSortCell: theme.rowSelectAllCheckboxComponent,
    });
    set(controller, 'selectedItems', model.slice(1, 3));
  }
}
// END-SNIPPET
