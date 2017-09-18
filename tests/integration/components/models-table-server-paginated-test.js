import Ember from 'ember';
import {
  moduleForComponent,
  test
} from 'ember-qunit';

import wait from 'ember-test-helpers/wait';
import {startMirage} from 'dummy/initializers/ember-cli-mirage';

import hbs from 'htmlbars-inline-precompile';

const {getOwner} = Ember;

import * as dom from '../../helpers/dom';
import {
  generateColumns
} from '../../helpers/f';

const {
  typeOf
} = Ember;

let selectors;

moduleForComponent('models-table-server-paginated', 'ModelsTableServerPaginated | Integration', {
  integration: true,
  beforeEach() {
    Object.keys(dom).forEach(m => {
      let f = dom[m];
      if ('function' === typeOf(f)) {
        this[m] = f.bind(this);
      }
    });
    selectors = dom.selectors;
    this.server = startMirage();
    this.server.createList('user', 100);
    this.store = getOwner(this).lookup("service:store");
    this.set('filterQueryParameters', {
      globalFilter: 'globalSearch',
      sort: 'sort',
      sortDirection: 'sortDirection',
      page: 'page',
      pageSize: 'pageSize'
    });
    this.set('columns', generateColumns(['index', 'firstName', 'lastName']));
    return this.store.query('user', {}).then(d => this.data = d);
  },
  afterEach() {
    this.server.shutdown();
  }
});

test('#content user may set custom page number to be shown initially', function (assert) {
  this.set('currentPageNumber', 5);
  this.render(hbs`{{models-table-server-paginated
    data=data
    columns=columns
    filterQueryParameters=filterQueryParameters
    currentPageNumber=currentPageNumber}}`);
  return wait().then(() => assert.equal(this.getEachAsString(selectors.summary), 'Show 41 - 50 of 100'));
});

test('#sortColumn sort data by `propertyName`', function (assert) {
  this.render(hbs`{{models-table-server-paginated data=data columns=columns filterQueryParameters=filterQueryParameters}}`);

  this.sortSecondColumn();
  return wait().then(() => assert.equal(this.getEachAsString(selectors.secondColumn), this.server.db.users.map(u => u['first-name']).sort().slice(0, 10).join('')));
});

test('#sortColumn sort data by `sortedBy`', function (assert) {
  this.set('columns.1.sortedBy', 'lastName');
  this.render(hbs`{{models-table-server-paginated data=data columns=columns filterQueryParameters=filterQueryParameters}}`);

  this.sortSecondColumn();
  return wait().then(() => assert.equal(this.getEachAsString(selectors.secondColumn), this.server.db.users.sort((a, b) => a['last-name'] > b['last-name'] ? 1 : -1).map(u => u['first-name']).slice(0, 10).join('')));
});