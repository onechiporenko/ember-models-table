import Ember from 'ember';

const {String: S, A } = Ember;

const {keys} = Object;

Math.trunc = Math.trunc || function(x) {
  return x - x % 1;
};

export default function() {

  this.timing = 0;

  function _doFilter(collection, filterBy) {
    return collection.filter(item => {
      let result = true;
      Object.keys(filterBy).forEach(field => {
        if(('' + item[field]).indexOf('' + filterBy[field]) === -1) {
          result = false;
        }
      });
      return result;
    });
  }

  function _getFilters(queryParams) {
    let columns = ['age', 'index', 'first-name', 'last-name', 'city'];
    let filterBy = {};
    keys(queryParams).forEach(function(n) {
      let dasherized = S.dasherize(n);
      if (columns.indexOf(dasherized) !== -1) {
        filterBy[dasherized] = queryParams[n];
      }
    });
    return filterBy;
  }

  function _doGlobalFilter(collection, value) {
    if (!value) {
      return collection.where(() => true);
    }
    let _value = '' + value;
    return collection.where(item => {
      let result = false;
      Object.keys(item).forEach(field => {
        if(('' + item[field]).indexOf(_value) !== -1) {
          result = true;
        }
      });
      return result;
    });
  }

  this.get('/users', function ({users}, {queryParams}) {
    let data = _doGlobalFilter(users, queryParams.globalSearch);
    let filterBy = _getFilters(queryParams);
    let useFilters = !!keys(filterBy).length;
    data = useFilters ? _doFilter(data, filterBy) : data;
    let json = this.serialize(data);
    let pageSize = parseInt(queryParams.pageSize || 10, 10);
    let page = parseInt(queryParams.page || 1, 10);
    let startIndex = pageSize * (page - 1);
    let itemsCount = json.data.length;
    let pagesCount = Math.trunc(itemsCount / pageSize);
    if (itemsCount % pageSize) {
      pagesCount++;
    }
    let {sort} = queryParams;
    if (sort) {
      json.data = A(json.data).sortBy(`attributes.${S.dasherize(sort)}`);
    }
    if (queryParams.sortDirection === 'DESC') {
      json.data = json.data.reverse();
    }
    json.data = json.data.slice(startIndex, startIndex + pageSize);
    json.meta = {
      itemsCount,
      pagesCount
    };
    return json;
  });

  this.get('/users/:id');

}
