import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class ExampleRoute extends Route {
  @service store;

  beforeModel() {
    return this.store.query('user', { pageSize: 100 });
  }
  model() {
    return this.store.query('user', {});
  }

  setupController(controller, model) {
    controller.columns = [
      { propertyName: 'index' },
      { propertyName: 'firstName' },
      { propertyName: 'lastName' },
      { propertyName: 'age' },
      { propertyName: 'city' },
    ];
    controller.filterQueryParameters = {
      globalFilter: 'globalSearch',
      sort: 'sort',
      sortDirection: 'sortDirection',
      page: 'page',
      pageSize: 'pageSize',
    };
    controller.data = this.store.peekAll('user').slice();
    controller.queuedModel = model;
    return super.setupController(controller, model);
  }
}
