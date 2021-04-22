import Route from '@ember/routing/route';
import { A } from '@ember/array';

export default class ExampleRoute extends Route {
  beforeModel() {
    return this.store.query('user', { pageSize: 100 });
  }
  model() {
    return this.store.query('user', {});
  }

  setupController(controller) {
    controller.columns = A([
      { propertyName: 'index' },
      { propertyName: 'firstName' },
      { propertyName: 'lastName' },
      { propertyName: 'age' },
      { propertyName: 'city' },
    ]);
    controller.filterQueryParameters = {
      globalFilter: 'globalSearch',
      sort: 'sort',
      sortDirection: 'sortDirection',
      page: 'page',
      pageSize: 'pageSize',
    };
    controller.data = A(this.store.peekAll('user').slice());
    return super.setupController(...arguments);
  }
}
