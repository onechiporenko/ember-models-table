import ExampleRoute from './example';
import {get} from '@ember/object';

export default ExampleRoute.extend({

  setupController(controller) {
    this._super(...arguments);
    controller.set('columns', [
      {propertyName: 'index'},
      {propertyName: 'firstName', filterWithSelect: true},
      {
        propertyName: 'lastName',
        filterWithSelect: true,
        predefinedFilterOptions: controller.get('data').mapBy('lastName').slice(0, 10)
      },
      {
        propertyName: 'age',
        filterFunction (val, filterVal, row) {
          const _val = get(row, 'age');
          if (filterVal === '< 34') {
            return _val < 34;
          }
          if (filterVal === '= 34') {
            return _val === 34;
          }
          if (filterVal === '> 34') {
            return _val > 34;
          }
        },
        filterWithSelect: true,
        predefinedFilterOptions: ['< 34', '= 34', '> 34']
      },
      {propertyName: 'city'},
      {propertyName: 'canBuyBeer', filterWithSelect: true},
    ]);
    controller.set('columnsForServerTable', [
      {propertyName: 'index'},
      {
        propertyName: 'firstName',
        filterWithSelect: true,
        predefinedFilterOptions: controller.get('data').mapBy('firstName')
      },
      {
        propertyName: 'lastName',
        filterWithSelect: true,
        predefinedFilterOptions: controller.get('data').mapBy('lastName').slice(0, 10)
      },
      {propertyName: 'age'},
      {propertyName: 'city'},
    ]);
  }

});
