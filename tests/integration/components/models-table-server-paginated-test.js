import {
  moduleForComponent,
  test
} from 'ember-qunit';
import wait from 'ember-test-helpers/wait';
import {getOwner} from '@ember/application';
import hbs from 'htmlbars-inline-precompile';
import ModelsTableBs from '../../pages/models-table-bs';
import {startMirage} from 'dummy/initializers/ember-cli-mirage';

import {generateColumns} from '../../helpers/f';

const {navigation, filters} = ModelsTableBs;

moduleForComponent('models-table-server-paginated', 'ModelsTableServerPaginated | Integration', {
  integration: true,
  beforeEach() {
    ModelsTableBs.setContext(this);
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
    ModelsTableBs.removeContext();
  }
});

test('#summary is updated on page change', function (assert) {
  this.render(hbs`{{models-table-server-paginated data=data columns=columns filterQueryParameters=filterQueryParameters}}`);
  assert.equal(ModelsTableBs.summary, 'Show 1 - 10 of 100', 'Content for 1st page (10)');

  navigation.goToNextPage();
  return wait().then(() => assert.equal(ModelsTableBs.summary, 'Show 11 - 20 of 100', 'Content for 2nd page (10)'));
});

test('#summary is updated on page size change', function (assert) {
  this.render(hbs`{{models-table-server-paginated data=data columns=columns filterQueryParameters=filterQueryParameters}}`);
  ModelsTableBs.changePageSize(25);
  return wait().then(() => assert.equal(ModelsTableBs.summary, 'Show 1 - 25 of 100', 'Content for 1st page (25)'));
});

test('#summary is updated on global filter usage', function (assert) {
  this.render(hbs`{{models-table-server-paginated data=data columns=columns filterQueryParameters=filterQueryParameters}}`);
  ModelsTableBs.doGlobalFilter('100');
  return wait().then(() => assert.equal(ModelsTableBs.summary, 'Show 1 - 1 of 1', 'Content for 1st page (1)'));
});

test('#summary is updated on column filter usage', function (assert) {
  this.render(hbs`{{models-table-server-paginated data=data columns=columns filterQueryParameters=filterQueryParameters}}`);
  filters(0).inputFilter('100');
  return wait().then(() => assert.equal(ModelsTableBs.summary, 'Show 1 - 1 of 1', 'Content for 1st page (1)'));
});

test('#navigation first and prev are disabled by default', function (assert) {
  this.render(hbs`{{models-table-server-paginated data=data columns=columns filterQueryParameters=filterQueryParameters}}`);
  return wait().then(() => {
    assert.ok(navigation.goToPrevPageDisabled);
    assert.ok(navigation.goToFirstPageDisabled);
  });
});

test('#navigation next and last are disabled when user on the last page', function (assert) {
  this.render(hbs`{{models-table-server-paginated data=data columns=columns filterQueryParameters=filterQueryParameters}}`);
  navigation.goToLastPage();
  return wait().then(() => {
    assert.ok(navigation.goToNextPageDisabled);
    assert.ok(navigation.goToLastPageDisabled);
  });
});

test('#navigation all buttons are enabled when user not on the last or first page', function (assert) {
  this.render(hbs`{{models-table-server-paginated data=data columns=columns filterQueryParameters=filterQueryParameters}}`);
  navigation.goToNextPage();
  return wait().then(() => {
    assert.notOk(navigation.goToNextPageDisabled);
    assert.notOk(navigation.goToLastPageDisabled);
    assert.notOk(navigation.goToPrevPageDisabled);
    assert.notOk(navigation.goToFirstPageDisabled);
  });
});

test('#content user may set custom page number to be shown initially', function (assert) {
  this.set('currentPageNumber', 5);
  this.render(hbs`{{models-table-server-paginated 
    data=data
    columns=columns
    filterQueryParameters=filterQueryParameters
    currentPageNumber=currentPageNumber}}`);
  return wait().then(() => assert.equal(ModelsTableBs.summary, 'Show 41 - 50 of 100'));
});