// BEGIN-SNIPPET table-with-inline-edit-route
import ExampleRoute from './example';

export default class InLineEditRoute extends ExampleRoute {
  setupController(controller) {
    super.setupController(...arguments);
    controller.data = this.store.peekAll('user');

    controller.columns.push({
      title: 'Edit',
      component: 'editRow',
      editable: false,
    });

    controller.columns[0].editable = false;
  }
}
// END-SNIPPET
