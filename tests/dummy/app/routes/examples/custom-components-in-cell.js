import ExampleRoute from './example';
import { A } from '@ember/array';

export default class CustomComponentsInCellRoute extends ExampleRoute {
  setupController(controller) {
    super.setupController(...arguments);
    controller.data = A(this.store.peekAll('user'));
    controller.columns.pushObject({
      title: 'Delete',
      component: 'deleteRow',
    });
  }
}
