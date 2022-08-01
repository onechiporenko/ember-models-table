import ExampleRoute from './example';

export default class CustomComponentsInCellRoute extends ExampleRoute {
  setupController(controller) {
    super.setupController(...arguments);
    controller.data = this.store.peekAll('user');
    controller.columns.push({
      title: 'Delete',
      component: 'deleteRow',
    });
  }
}
