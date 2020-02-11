// BEGIN-SNIPPET table-with-selectable-rows
import ExampleRoute from './example';
import {get, set} from '@ember/object';
import {getOwner} from '@ember/application';

export default class SelectRowWithCheckboxesRoute extends ExampleRoute {

  setupController(controller, model) {
    super.setupController(...arguments);
    const owner = getOwner(this);
    const theme = owner.lookup('component:models-table').themeInstance;
    get(controller, 'columns').unshiftObject({
      component: theme.rowSelectCheckboxComponent,
      useFilter: false,
      mayBeHidden: false,
      componentForSortCell: theme.rowSelectAllCheckboxComponent
    });
    set(controller, 'selectedItems', model.slice(1, 3));
  }

}
// END-SNIPPET
