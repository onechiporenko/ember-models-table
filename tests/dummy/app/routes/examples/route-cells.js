// BEGIN-SNIPPET table-with-route-cells
import ExampleRoute from './example';
import { set } from '@ember/object';

export default class RouteCellsRoute extends ExampleRoute {
  setupController(controller) {
    super.setupController(...arguments);
    set(controller, 'columns', [
      {
        propertyName: 'id',
        routeName: 'users.user',
      },
      {
        propertyName: 'firstName',
        routeName: 'users.user',
      },
      { propertyName: 'lastName' },
      { propertyName: 'age' },
      { propertyName: 'city' },
    ]);
  }
}
// END-SNIPPET
