// BEGIN-SNIPPET table-with-custom-filters
import ExampleRoute from './example';

export default class FilteringRoute extends ExampleRoute {
  setupController(controller) {
    super.setupController(...arguments);
    controller.set('columns', [
      { propertyName: 'index' },
      { propertyName: 'firstName', filterWithSelect: true },
      {
        propertyName: 'lastName',
        filterWithSelect: true,
        predefinedFilterOptions: controller.data
          .map((d) => d.lastName)
          .slice(0, 10),
      },
      {
        propertyName: 'age',
        filterFunction(val, filterVal, row) {
          const _val = row.age;
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
        predefinedFilterOptions: ['< 34', '= 34', '> 34'],
      },
      { propertyName: 'city' },
      { propertyName: 'canBuyBeer', filterWithSelect: true },
    ]);
    controller.set('columnsForServerTable', [
      { propertyName: 'index' },
      {
        propertyName: 'firstName',
        filterWithSelect: true,
        predefinedFilterOptions: controller.data.map((d) => d.firstName),
      },
      {
        propertyName: 'lastName',
        filterWithSelect: true,
        predefinedFilterOptions: controller.data
          .map((d) => d.lastName)
          .slice(0, 10),
      },
      { propertyName: 'age' },
      { propertyName: 'city' },
    ]);
  }
}
// END-SNIPPET
