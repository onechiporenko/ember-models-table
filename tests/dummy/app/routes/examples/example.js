import Route from '@ember/routing/route';
import {A} from '@ember/array';
import {set} from '@ember/object';

export default class ExampleRoute extends Route {
  beforeModel() {
    return this.store.query('user', {pageSize: 100});
  }
  model() {
    return this.store.query('user', {});
  }

  setupController(controller) {
    set(controller, 'columns', A([
      {propertyName: 'index'},
      {propertyName: 'firstName'},
      {propertyName: 'lastName'},
      {propertyName: 'age'},
      {propertyName: 'city'}
    ]));
    set(controller, 'filterQueryParameters', {
      globalFilter: 'globalSearch',
      sort: 'sort',
      sortDirection: 'sortDirection',
      page: 'page',
      pageSize: 'pageSize'
    });
    set(controller, 'data', A(this.store.peekAll('user').slice()));
    return super.setupController(...arguments);
  }

}
