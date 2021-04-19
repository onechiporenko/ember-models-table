// BEGIN-SNIPPET table-with-custom-column-classes
import ExampleRoute from './example';
import { set } from '@ember/object';

export default class CustomColumnClassesRoute extends ExampleRoute {
  setupController(controller) {
    super.setupController(...arguments);
    set(controller, 'columns', [
      { propertyName: 'index', className: 'text-right' },
      { propertyName: 'firstName', className: 'text-success' },
      { propertyName: 'lastName', className: 'text-uppercase' },
      { propertyName: 'age', className: 'text-center' },
      { propertyName: 'city', className: 'text-uppercase' },
    ]);
  }
}
// END-SNIPPET
