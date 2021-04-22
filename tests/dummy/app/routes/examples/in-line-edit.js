// BEGIN-SNIPPET table-with-inline-edit-route
import ExampleRoute from './example';
import { A } from '@ember/array';

export default class InLineEditRoute extends ExampleRoute {
  setupController(controller) {
    super.setupController(...arguments);
    controller.data = A(this.store.peekAll('user'));

    controller.columns.pushObject({
      title: 'Edit',
      component: 'editRow',
      editable: false,
    });

    controller.columns[0].editable = false;
  }
}
// END-SNIPPET
