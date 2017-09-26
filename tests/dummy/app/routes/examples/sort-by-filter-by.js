import ExampleRoute from './example';

export default ExampleRoute.extend({

  setupController(controller) {
    this._super(...arguments);
    controller.set('columns', [
      {propertyName: 'index'},
      {propertyName: 'firstName', sortedBy: 'lastName', filteredBy: 'lastName'},
      {propertyName: 'lastName', sortedBy: 'firstName', filteredBy: 'firstName'},
      {propertyName: 'age'},
      {propertyName: 'city'}
    ]);
  }

});
