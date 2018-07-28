import Ember from 'ember';
import {module, test} from 'qunit';
import {setupRenderingTest} from 'ember-qunit';
import {render, settled} from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
import ModelsTableBs from '../../pages/models-table-bs';
import {startMirage} from 'dummy/initializers/ember-cli-mirage';
import {generateColumns} from '../../helpers/f';

const {navigation, filters, sorting} = ModelsTableBs;

function fromTo(from, to) {
  const ret = [];
  for (let i = from; i <= to; i++) {
    ret.push(`${i}`);
  }
  return ret;
}

let onerror;

module('ModelsTableServerPaginated | Integration', function (hooks) {
  setupRenderingTest(hooks);

  hooks.beforeEach(function () {
    onerror = Ember.onerror;
    ModelsTableBs.setContext(this);
    this.server = startMirage();
    this.server.createList('user', 100);
    this.store = this.owner.lookup('service:store');
    this.set('filterQueryParameters', {
      globalFilter: 'globalSearch',
      sort: 'sort',
      sortDirection: 'sortDirection',
      page: 'page',
      pageSize: 'pageSize'
    });
    this.set('columns', generateColumns(['index', 'firstName', 'lastName']));
    return this.store.query('user', {}).then(d => this.data = d);
  });

  hooks.afterEach(function () {
    Ember.onerror = onerror;
    this.server.shutdown();
    ModelsTableBs.removeContext();
  });

  test('#summary is updated on page change', async function (assert) {
    await render(
      hbs`{{models-table-server-paginated data=data columns=columns filterQueryParameters=filterQueryParameters}}`
    );
    assert.equal(ModelsTableBs.summary, 'Show 1 - 10 of 100', 'Content for 1st page (10)');

    navigation.goToNextPage();
    await settled();
    assert.equal(ModelsTableBs.summary, 'Show 11 - 20 of 100', 'Content for 2nd page (10)');
  });

  test('#summary is updated on page size change', async function (assert) {
    await render(
      hbs`{{models-table-server-paginated data=data columns=columns filterQueryParameters=filterQueryParameters}}`
    );
    ModelsTableBs.changePageSize(25);
    await settled();
    assert.equal(ModelsTableBs.summary, 'Show 1 - 25 of 100', 'Content for 1st page (25)');
  });

  test('#summary is updated on global filter usage', async function (assert) {
    await render(
      hbs`{{models-table-server-paginated data=data columns=columns filterQueryParameters=filterQueryParameters}}`
    );
    ModelsTableBs.doGlobalFilter('100');
    await settled();
    assert.equal(ModelsTableBs.summary, 'Show 1 - 1 of 1', 'Content for 1st page (1)');
  });

  test('#summary is updated on column filter usage', async function (assert) {
    await render(
      hbs`{{models-table-server-paginated data=data columns=columns filterQueryParameters=filterQueryParameters}}`
    );
    filters.objectAt(0).inputFilter('100');
    await settled();
    assert.equal(ModelsTableBs.summary, 'Show 1 - 1 of 1', 'Content for 1st page (1)');
  });

  test('#navigation first and prev are disabled by default', async function (assert) {
    await render(
      hbs`{{models-table-server-paginated data=data columns=columns filterQueryParameters=filterQueryParameters}}`
    );
    await settled();
    assert.ok(navigation.goToPrevPageDisabled);
    assert.ok(navigation.goToFirstPageDisabled);
  });

  test('#navigation next and last are disabled when user on the last page', async function (assert) {
    await render(
      hbs`{{models-table-server-paginated data=data columns=columns filterQueryParameters=filterQueryParameters}}`
    );
    navigation.goToLastPage();
    await settled();
    assert.ok(navigation.goToNextPageDisabled);
    assert.ok(navigation.goToLastPageDisabled);
  });

  test('#navigation all buttons are enabled when user not on the last or first page', async function (assert) {
    await render(
      hbs`{{models-table-server-paginated data=data columns=columns filterQueryParameters=filterQueryParameters}}`
    );
    navigation.goToNextPage();
    await settled();
    assert.notOk(navigation.goToNextPageDisabled);
    assert.notOk(navigation.goToLastPageDisabled);
    assert.notOk(navigation.goToPrevPageDisabled);
    assert.notOk(navigation.goToFirstPageDisabled);
  });

  test('#content user may set custom page number to be shown initially', async function (assert) {
    this.set('currentPageNumber', 5);
    await render(hbs`{{models-table-server-paginated 
      data=data
      columns=columns
      filterQueryParameters=filterQueryParameters
      currentPageNumber=currentPageNumber}}`);
    await settled();
    assert.equal(ModelsTableBs.summary, 'Show 41 - 50 of 100');
  });

  test('#pageSize changes shown rows count', async function (assert) {
    await render(
      hbs`{{models-table-server-paginated data=data columns=columns filterQueryParameters=filterQueryParameters}}`
    );
    assert.deepEqual(ModelsTableBs.getColumnCells(0), fromTo(1, 10));

    ModelsTableBs.changePageSize(25);
    await settled();
    assert.deepEqual(ModelsTableBs.getColumnCells(0), fromTo(1, 25));
  });

  test('#globalFilter causes data filtering', async function (assert) {
    await render(
      hbs`{{models-table-server-paginated data=data columns=columns filterQueryParameters=filterQueryParameters}}`
    );

    ModelsTableBs.doGlobalFilter(10);
    await settled();
    assert.deepEqual(ModelsTableBs.getColumnCells(0), ['10', '100']);
  });

  test('#pageSize and #currentPageNumber may be set on component init', async function (assert) {
    this.set('pageSize', 25);
    this.set('currentPageNumber', 2);
    await render(hbs`{{models-table-server-paginated 
      data=data
      columns=columns
      filterQueryParameters=filterQueryParameters
      pageSize=pageSize
      currentPageNumber=currentPageNumber
    }}`);
    assert.equal(ModelsTableBs.summary, 'Show 26 - 50 of 100');
  });

  test('#columnFilter causes data filtering by `propertyName', async function (assert) {
    await render(
      hbs`{{models-table-server-paginated data=data columns=columns filterQueryParameters=filterQueryParameters}}`
    );

    filters.objectAt(0).inputFilter(10);
    await settled();
    assert.deepEqual(ModelsTableBs.getColumnCells(0), ['10', '100']);
    filters.objectAt(1).inputFilter(this.server.db.users[9]['first-name']);
    await settled()
    assert.deepEqual(ModelsTableBs.getColumnCells(0), ['10']);
  });

  test('#columnFilter causes data filtering by `filteredBy`', async function (assert) {
    this.set('columns.1.filteredBy', 'index');
    await render(
      hbs`{{models-table-server-paginated data=data columns=columns filterQueryParameters=filterQueryParameters}}`
    );

    filters.objectAt(1).inputFilter(this.server.db.users[10]['index']);
    await settled();
    assert.deepEqual(ModelsTableBs.getColumnCells(1), [this.server.db.users[10]['first-name']]);
  });

  test('#columnFilter with predefined options causes data filtering by `propertyName`', async function (assert) {
    this.set('columns.firstObject.filterWithSelect', true);
    this.set('columns.firstObject.predefinedFilterOptions', ['10', '20', '30']);
    await render(
      hbs`{{models-table-server-paginated data=data columns=columns filterQueryParameters=filterQueryParameters}}`
    );

    filters.objectAt(0).selectFilter('10');
    await settled();
    assert.deepEqual(ModelsTableBs.getColumnCells(0), ['10', '100']);
  });

  test('#columnFilter with predefined options causes data filtering by `filteredBy`', async function (assert) {
    this.set('columns.1.filterWithSelect', true);
    this.set('columns.1.predefinedFilterOptions', ['10', '20', '30']);
    this.set('columns.1.filteredBy', 'index');
    await render(
      hbs`{{models-table-server-paginated data=data columns=columns filterQueryParameters=filterQueryParameters}}`
    );

    filters.objectAt(1).selectFilter('10');
    await settled();
    assert.deepEqual(ModelsTableBs.getColumnCells(0), ['10', '100']);
  });

  test('#sortColumn sort data by `propertyName`', async function (assert) {
    await render(
      hbs`{{models-table-server-paginated data=data columns=columns filterQueryParameters=filterQueryParameters}}`
    );

    sorting.objectAt(1).click();
    await settled();
    assert.deepEqual(ModelsTableBs.getColumnCells(1), this.server.db.users.map(u => u['first-name']).sort().slice(0, 10));
  });

  test('#sortColumn sort data by `sortedBy`', async function (assert) {
    this.set('columns.1.sortedBy', 'lastName');
    await render(
      hbs`{{models-table-server-paginated data=data columns=columns filterQueryParameters=filterQueryParameters}}`
    );

    sorting.objectAt(1).click();
    await settled();
    assert.deepEqual(ModelsTableBs.getColumnCells(1), this.server.db.users.sort((a, b) => a['last-name'] > b['last-name'] ? 1 : -1).map(u => u['first-name']).slice(0, 10));
  });
});