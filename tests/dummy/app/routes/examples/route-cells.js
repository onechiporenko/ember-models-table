import ExampleRoute from './example';
import {set} from '@ember/object';

export default ExampleRoute.extend({

  setupController(controller) {
    this._super(...arguments);
    set(controller, 'columns', [
      {
        propertyName: 'id',
        routeName: 'users.user'
      },
      {
        propertyName: 'firstName',
        routeName: 'users.user',
      },
      {propertyName: 'lastName'},
      {propertyName: 'age'},
      {propertyName: 'city'}
    ]);
  }

});
