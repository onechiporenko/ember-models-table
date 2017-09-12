import Route from '@ember/routing/route';

export default Route.extend({

  model() {
    return this.get('store').query('user', {});
  },

  setupController(controller) {
    controller.set('columns', [
      {propertyName: 'index'},
      {propertyName: 'firstName'},
      {propertyName: 'lastName'},
      {propertyName: 'age'},
      {propertyName: 'city'}
    ]);
    return this._super(...arguments);
  }

});
