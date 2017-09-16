import Ember from 'ember';
import {
  moduleForComponent,
  test
} from 'ember-qunit';

import wait from 'ember-test-helpers/wait';
import {startMirage} from 'dummy/initializers/ember-cli-mirage';

import hbs from 'htmlbars-inline-precompile';

const {getOwner} = Ember;

import {
  generateColumns
} from '../../helpers/f';


moduleForComponent('models-table-server-paginated', 'ModelsTableServerPaginated | Integration', {
  integration: true,
  beforeEach() {
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
  return wait().then(() => assert.equal(this.$('.table-summary').text().trim(), 'Show 41 - 50 of 100'));
});
