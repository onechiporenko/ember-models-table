import ExampleRoute from './example';
import {getOwner} from '@ember/application';
import {set} from '@ember/object';

export default class BlockUsageRoute extends ExampleRoute {
  setupController(controller) {
    super.setupController(...arguments);
    controller.set('groupedHeaders', [
      [
        {title: 'Big Title', colspan: 7}
      ],
      [
        {title: '', colspan: 2},
        {title: 'Subtitle 1', colspan: 3},
        {title: 'Subtitle 2', colspan: 2}
      ]
    ]);
    const owner = getOwner(this);
    const theme = owner.lookup('component:models-table').themeInstance;
    controller.columns.unshiftObject({
      component: theme.expandToggleComponent,
      componentForFilterCell: theme.expandAllToggleComponent,
      mayBeHidden: false
    });
    controller.columns.unshiftObject({
      component: theme.rowSelectCheckboxComponent,
      useFilter: false,
      mayBeHidden: false,
      componentForSortCell: theme.rowSelectAllCheckboxComponent
    });
    set(controller, 'useDataGrouping', true);
    set(controller, 'dataGroupProperties', ['age', 'city', 'country']);
    set(controller, 'currentGroupingPropertyName', 'country');
    set(controller, 'displayGroupedValueAs', 'row');
  }
}
