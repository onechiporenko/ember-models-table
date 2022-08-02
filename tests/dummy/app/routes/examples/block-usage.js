import { inject as service } from '@ember/service';
import ExampleRoute from './example';

export default class BlockUsageRoute extends ExampleRoute {
  @service() fw;

  setupController(controller) {
    super.setupController(...arguments);
    const theme = this.fw.themeInstance;
    controller.columns.unshift({
      component: theme.expandToggleComponent,
      componentForFilterCell: theme.expandAllToggleComponent,
      mayBeHidden: false,
    });
    controller.columns.unshift({
      component: theme.rowSelectCheckboxComponent,
      disableFiltering: true,
      mayBeHidden: false,
      componentForSortCell: theme.rowSelectAllCheckboxComponent,
    });
    controller.columns[5].filterWithSelect = true; // Age
    controller.columns[5].sortFilterOptions = true;
  }
}
