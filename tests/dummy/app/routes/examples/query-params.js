// BEGIN-SNIPPET query-params-route
import {get} from '@ember/object';
import ExampleRoute from './example';

export default class QueryParamsRoute extends ExampleRoute {

  columnFilters = ['index', 'firstName', 'lastName', 'age', 'city'];

  queryParams = {
    pageSize: {},
    page: {},
    globalSearch: {},
    sort: {},
    sortDirection: {},
    index: {},
    firstName: {},
    lastName: {},
    age: {},
    city: {}
  };

  model(qp) {
    const {page, pageSize, globalSearch, sort, sortDirection} = qp;
    const query = {page, pageSize, globalSearch, sort, sortDirection};
    this.columnFilters.forEach(c => {
      if (qp[c]) {
        query[c] = qp[c];
      }
    });
    return this.get('store').query('user', query);
  }

  setupController(controller, model) {
    super.setupController(...arguments);
    const columns = get(controller, 'columns');
    if (model.query.sort) {
      const sortedColumn = columns
        .find(column =>
          column.propertyName === model.query.sort || column.sortedBy === model.query.sort);
      if (sortedColumn) {
        sortedColumn.sortDirection = model.query.sortDirection;
        sortedColumn.sortPrecedence = 1;
      }
    }
    this.columnFilters.forEach(c => {
      if (model.query[c]) {
        const filteredColumn = columns
          .find(column =>
            column.propertyName === c || column.filteredBy === c);
        if (filteredColumn) {
          filteredColumn.filterString = model.query[c];
        }
      }
    });
  }

}
// END-SNIPPET
