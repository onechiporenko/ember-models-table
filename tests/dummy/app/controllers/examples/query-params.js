// BEGIN-SNIPPET query-params-controller
import { action, set } from '@ember/object';

import ExampleController from './example';

export default class QueryParamsController extends ExampleController {
  queryParams = [
    'page',
    'pageSize',
    'globalSearch',
    'sort',
    'sortDirection',
    'index',
    'firstName',
    'lastName',
    'city',
    'age',
  ];

  columnFilters = ['index', 'firstName', 'lastName', 'age', 'city'];

  page = 1;
  pageSize = 10;
  globalSearch = '';
  sort = '';
  sortDirection = 'desc';
  index = '';
  firstName = '';
  lastName = '';
  age = '';
  city = '';

  filterQueryParameters = {
    pageSize: 'pageSize',
    page: 'page',
    sort: 'sort',
    sortDirection: 'sortDirection',
    globalFilter: 'globalSearch',
  };

  @action
  displayAction(d) {
    const sorted = d.columns.find((c) => c.sorting !== 'none');
    if (sorted) {
      set(this, 'sort', sorted.sortField);
      set(this, 'sortDirection', sorted.sorting);
    } else {
      set(this, 'sortDirection', 'desc');
      set(this, 'sort', '');
    }
    set(this, 'page', d.currentPageNumber);
    set(this, 'pageSize', d.pageSize);
    set(this, 'globalSearch', d.filterString);
    this.columnFilters.forEach((c) => {
      set(this, c, d.columnFilters[c]);
    });
  }
}
// END-SNIPPET
