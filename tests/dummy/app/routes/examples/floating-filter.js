import { inject as service } from '@ember/service';

import ExampleRoute from './example';

export default class FloatingFilterRoute extends ExampleRoute {
  @service store;

  beforeModel() {
    return this.store.query('user', { pageSize: 100 });
  }
  model() {
    return this.store.query('user', {});
  }

  setupController(controller) {
    controller.data = this.store.peekAll('user').slice();
  }
}
