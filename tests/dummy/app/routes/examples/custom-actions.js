import ExampleRoute from './example';
import {set, get} from '@ember/object';
import {A} from '@ember/array';

export default ExampleRoute.extend({

  setupController(controller) {
    this._super(...arguments);
    set(controller, 'data', A(get(this, 'store').peekAll('user')));
    get(controller, 'columns').pushObject({
      title: 'Delete',
      component: 'delete-row'
    });
  }

});
