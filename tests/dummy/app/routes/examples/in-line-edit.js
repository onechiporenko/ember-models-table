import ExampleRoute from './example';
import {set, get} from '@ember/object';
import {A} from '@ember/array';

export default ExampleRoute.extend({

  setupController(controller) {
    this._super(...arguments);
    set(controller, 'data', A(get(this, 'store').peekAll('user')));

    let columns = get(controller, 'columns');
    columns.pushObject({
      title: 'Edit',
      component: 'editRow',
      editable: false
    });

    columns.objectAt(0).editable = false;
  }

});
