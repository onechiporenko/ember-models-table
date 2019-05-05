import ExampleRoute from './example';
import {get, set} from '@ember/object';

export default class SelectRowWithCheckbosesRoute extends ExampleRoute {

  setupController(controller, model) {
    super.setupController(...arguments);
    get(controller, 'columns').unshiftObject({
      component: 'select-row-checkbox',
      useFilter: false,
      mayBeHidden: false,
      componentForSortCell: 'select-all-rows-checkbox'
    });
    set(controller, 'selectedItems', model.slice(1, 3));
  }

}