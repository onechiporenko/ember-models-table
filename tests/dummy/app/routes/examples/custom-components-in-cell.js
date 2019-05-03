import ExampleRoute from './example';
import {set, get} from '@ember/object';
import {A} from '@ember/array';

export default class CustomComponentsInCellRoute extends ExampleRoute {

  setupController(controller) {
    super.setupController(...arguments);
    set(controller, 'data', A(get(this, 'store').peekAll('user')));
    get(controller, 'columns').pushObject({
      title: 'Delete',
      component: 'deleteRow'
    });
  }

}
