import ExampleRoute from './example';
import { set } from '@ember/object';

export default class BlockUsageRoute extends ExampleRoute {
  setupController(controller) {
    super.setupController(...arguments);
    const theme = controller.fw.themeInstance;
    controller.columns.unshiftObject({
      component: theme.expandToggleComponent,
      componentForFilterCell: theme.expandAllToggleComponent,
      mayBeHidden: false,
    });
    controller.columns.unshiftObject({
      component: theme.rowSelectCheckboxComponent,
      disableFiltering: true,
      mayBeHidden: false,
      componentForSortCell: theme.rowSelectAllCheckboxComponent,
    });
    controller.columns[5].filterWithSelect = true; // Age
    controller.columns[5].sortFilterOptions = true;
    set(controller, 'useDataGrouping', true);
    set(controller, 'dataGroupProperties', ['age', 'city', 'country']);
    set(controller, 'currentGroupingPropertyName', 'country');
    set(controller, 'displayGroupedValueAs', 'row');
    set(controller, 'columnsForSecondTable', controller.columns.slice(2));
  }
}
