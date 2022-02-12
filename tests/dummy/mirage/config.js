import { A } from '@ember/array';
import { dasherize } from '@ember/string';
import { createServer } from 'miragejs';

const { keys } = Object;

Math.trunc =
  Math.trunc ||
  function (x) {
    return x - (x % 1);
  };

export default function (config) {
  let finalConfig = {
    ...config,
    routes,
  };

  return createServer(finalConfig);
}

function routes() {
  this.passthrough('/write-coverage');

  this.timing = 0;

  function _doFilter(collection, filterBy) {
    return collection.filter((item) => {
      let result = true;
      Object.keys(filterBy).forEach((field) => {
        if (field.indexOf('Id') !== -1) {
          if (`${item[field]}` !== `${filterBy[field]}`) {
            result = false;
          }
          return;
        }
        if (('' + item[field]).indexOf('' + filterBy[field]) === -1) {
          result = false;
        }
      });
      return result;
    });
  }

  function _getFilters(columns, queryParams) {
    const filterBy = {};
    keys(queryParams).forEach((key) => {
      const dasherized = dasherize(key);
      if (columns.indexOf(dasherized) !== -1) {
        filterBy[dasherized] = queryParams[key];
      }
    });
    return filterBy;
  }

  function _doGlobalFilter(collection, value) {
    if (!value) {
      return collection.where(() => true);
    }
    let _value = '' + value;
    return collection.where((item) => {
      let result = false;
      Object.keys(item).forEach((field) => {
        // skip relations
        if (field.indexOf('Ids') !== -1) {
          return;
        }
        if (('' + item[field]).indexOf(_value) !== -1) {
          result = true;
        }
      });
      return result;
    });
  }

  function _getMany(collection, queryParams, filterBy) {
    let data = _doGlobalFilter(collection, queryParams.globalSearch);
    const useFilters = !!keys(filterBy).length;
    data = useFilters ? _doFilter(data, filterBy) : data;
    const json = this.serialize(data);
    const pageSize = parseInt(queryParams.pageSize || 10, 10);
    const page = parseInt(queryParams.page || 1, 10);
    let startIndex = pageSize * (page - 1);
    const itemsCount = json.data.length;
    let pagesCount = Math.trunc(itemsCount / pageSize);
    if (itemsCount % pageSize) {
      pagesCount++;
    }
    let { sort } = queryParams;
    if (sort) {
      json.data = A(json.data).sortBy(`attributes.${dasherize(sort)}`);
    }
    if (queryParams.sortDirection === 'desc') {
      json.data = json.data.reverse();
    }
    json.data = json.data.slice(startIndex, startIndex + pageSize);
    json.meta = {
      itemsCount,
      pagesCount,
    };
    return json;
  }

  this.get('/users', function ({ users }, { queryParams }) {
    const columns = ['age', 'index', 'first-name', 'last-name', 'city'];
    return _getMany.call(
      this,
      users,
      queryParams,
      _getFilters(columns, queryParams)
    );
  });

  this.get('/users/:id');
  this.delete('/users/:id');
  this.patch('/users/:id');
  this.get('/comments', function ({ comments }, { queryParams }) {
    const columns = ['text', 'date'];
    const filterBy = _getFilters(columns, queryParams);
    if (queryParams.authorId) {
      filterBy.authorId = queryParams.authorId;
    }
    return _getMany.call(this, comments, queryParams, filterBy);
  });
  this.get('/comments/:id');
  this.patch('/comments/:id');
  this.delete('/comments/:id');
}
