// BEGIN-SNIPPET table-with-custom-sorting-and-filtering
import { compare } from '@ember/utils';

import ExampleRoute from './example';

export default class SortByFilterByRoute extends ExampleRoute {
  setupController(controller) {
    super.setupController(...arguments);
    controller.set('columns', [
      {
        propertyName: 'index',
        sortFunction: function sortEvenFirst(i1, i2) {
          if (i1 % 2 === 0) {
            if (i2 % 2 === 0) {
              return compare(i1, i2);
            }
            return -1;
          } else {
            if (i2 % 2 === 0) {
              return 1;
            }
            return compare(i1, i2);
          }
        },
      },
      {
        propertyName: 'firstName',
        sortedBy: 'lastName',
        filteredBy: 'lastName',
      },
      {
        propertyName: 'lastName',
        sortedBy: 'firstName',
        filteredBy: 'firstName',
      },
      { propertyName: 'age' },
      { propertyName: 'city' },
    ]);
  }
}
// END-SNIPPET
