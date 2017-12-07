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

const {navigation, filters, sorting} = ModelsTableBs;

function fromTo(from , to) {
  const ret = [];
  for (let i = from; i <= to; i++) {
    ret.push(`${i}`);
  }
  return ret;
}

moduleForComponent('models-table-server-paginated', 'ModelsTableServerPaginated | Integration', {
  integration: true,
  beforeEach() {
    ModelsTableBs.setContext(this);
    this.server = startMirage();
    this.server.createList('user', 100);
    this.store = getOwner(this).lookup('service:store');
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

test('#pageSize changes shown rows count', function (assert) {
  this.render(hbs`{{models-table-server-paginated data=data columns=columns filterQueryParameters=filterQueryParameters}}`);
  assert.deepEqual(ModelsTableBs.getColumnCells(0), fromTo(1, 10));

  ModelsTableBs.changePageSize(25);
  return wait().then(() => assert.deepEqual(ModelsTableBs.getColumnCells(0), fromTo(1, 25)));
});

test('#globalFilter causes data filtering', function (assert) {
  this.render(hbs`{{models-table-server-paginated data=data columns=columns filterQueryParameters=filterQueryParameters}}`);

  ModelsTableBs.doGlobalFilter(10);
  return wait().then(() => assert.deepEqual(ModelsTableBs.getColumnCells(0), ['10', '100']));
});

test('#pageSize and #currentPageNumber may be set on component init', function (assert) {
  this.set('pageSize', 25);
  this.set('currentPageNumber', 2);
  this.render(hbs`{{models-table-server-paginated 
    data=data
    columns=columns
    filterQueryParameters=filterQueryParameters
    pageSize=pageSize
    currentPageNumber=currentPageNumber
  }}`);
  return wait().then(() => assert.equal(ModelsTableBs.summary, 'Show 26 - 50 of 100'));
});

test('#columnFilter causes data filtering by `propertyName', function (assert) {
  this.render(hbs`{{models-table-server-paginated data=data columns=columns filterQueryParameters=filterQueryParameters}}`);

  filters(0).inputFilter(10);
  return wait().then(() => {
    assert.deepEqual(ModelsTableBs.getColumnCells(0), ['10', '100']);
    filters(1).inputFilter(this.server.db.users[9]['first-name']);
    return wait().then(() => assert.deepEqual(ModelsTableBs.getColumnCells(0), ['10']));
  });
});

test('#columnFilter causes data filtering by `filteredBy`', function (assert) {
  this.set('columns.1.filteredBy', 'index');
  this.render(hbs`{{models-table-server-paginated data=data columns=columns filterQueryParameters=filterQueryParameters}}`);

  filters(1).inputFilter(this.server.db.users[10]['index']);
  return wait().then(() => assert.deepEqual(ModelsTableBs.getColumnCells(1), [this.server.db.users[10]['first-name']]));
});

test('#columnFilter with predefined options causes data filtering by `propertyName`', function (assert) {
  this.set('columns.firstObject.filterWithSelect', true);
  this.set('columns.firstObject.predefinedFilterOptions', ['10', '20', '30']);
  this.render(hbs`{{models-table-server-paginated data=data columns=columns filterQueryParameters=filterQueryParameters}}`);

  filters(0).selectFilter('10');
  return wait().then(() => assert.deepEqual(ModelsTableBs.getColumnCells(0), ['10', '100']));
});

test('#columnFilter with predefined options causes data filtering by `filteredBy`', function (assert) {
  this.set('columns.1.filterWithSelect', true);
  this.set('columns.1.predefinedFilterOptions', ['10', '20', '30']);
  this.set('columns.1.filteredBy', 'index');
  this.render(hbs`{{models-table-server-paginated data=data columns=columns filterQueryParameters=filterQueryParameters}}`);

  filters(1).selectFilter('10');
  return wait().then(() => assert.deepEqual(ModelsTableBs.getColumnCells(0), ['10', '100']));
});

test('#sortColumn sort data by `propertyName`', function (assert) {
  this.render(hbs`{{models-table-server-paginated data=data columns=columns filterQueryParameters=filterQueryParameters}}`);

  sorting(1).click();
  return wait().then(() => assert.deepEqual(ModelsTableBs.getColumnCells(1), this.server.db.users.map(u => u['first-name']).sort().slice(0, 10)));
});

test('#filteringIgnoreCase cannot be used', function (assert) {
  assert.expect(1);

  assert.expectAssertion(
    () => this.render(hbs`{{models-table-server-paginated data=data columns=columns filteringIgnoreCase=true}}`),
    '"filteringIgnoreCase" can\'t be used with "models-table-server-paginated"'
  );
});

test('#doFilteringByHiddenColumns cannot be used', function (assert) {
  assert.expect(1);

  assert.expectAssertion(
    () => this.render(hbs`{{models-table-server-paginated data=data columns=columns doFilteringByHiddenColumns=true}}`),
    '"doFilteringByHiddenColumns" can\'t be used with "models-table-server-paginated"'
  );
});

test('#sortColumn sort data by `sortedBy`', function (assert) {
  this.set('columns.1.sortedBy', 'lastName');
  this.render(hbs`{{models-table-server-paginated data=data columns=columns filterQueryParameters=filterQueryParameters}}`);

  sorting(1).click();
  return wait().then(() => assert.deepEqual(ModelsTableBs.getColumnCells(1), this.server.db.users.sort((a, b) => a['last-name'] > b['last-name'] ? 1 : -1).map(u => u['first-name']).slice(0, 10)));
});