import Route from '@ember/routing/route';
import {get} from '@ember/object';
import {A} from '@ember/array';
import {next} from '@ember/runloop';

export default Route.extend({
  beforeModel() {
    return this.get('store').query('user', {pageSize: 100});
  },
  model() {
    return this.get('store').query('user', {});
  },

  setupController(controller) {
    controller.set('columns', A([
      {propertyName: 'index'},
      {propertyName: 'firstName'},
      {propertyName: 'lastName'},
      {propertyName: 'age'},
      {propertyName: 'city'}
    ]));
    controller.set('filterQueryParameters', {
      globalFilter: 'globalSearch',
      sort: 'sort',
      sortDirection: 'sortDirection',
      page: 'page',
      pageSize: 'pageSize'
    });
    controller.set('data', A(get(this, 'store').peekAll('user').slice()));
    return this._super(...arguments);
  },

  actions: {
    didTransition() {
      next(() => {
        if (window && window['Prism']) {
          Prism.highlightAll();
        }
      });
      return true;
    }
  }

});
