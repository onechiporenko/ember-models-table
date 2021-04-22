import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, settled } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
import { setupMirage } from 'ember-cli-mirage/test-support';
import { generateColumns, generateContent } from '../../helpers/f';
import a11yAudit from 'ember-a11y-testing/test-support/audit';

function fromTo(from, to) {
  const ret = [];
  for (let i = from; i <= to; i++) {
    ret.push(`${i}`);
  }
  return ret;
}

import getPageObject from '../../helpers/get-page-object';

let filters, navigation, sorting;

module('ModelsTableServerPaginated | Integration', function (hooks) {
  setupRenderingTest(hooks);
  setupMirage(hooks);

  hooks.beforeEach(function () {
    this.ModelsTablePageObject = getPageObject(this);
    filters = this.ModelsTablePageObject.filters;
    navigation = this.ModelsTablePageObject.navigation;
    sorting = this.ModelsTablePageObject.sorting;
    this.themeInstance = this.owner.lookup('service:fw').themeInstance;
    this.server.createList('user', 100);
    this.store = this.owner.lookup('service:store');
    this.set('filterQueryParameters', {
      globalFilter: 'globalSearch',
      sort: 'sort',
      sortDirection: 'sortDirection',
      page: 'page',
      pageSize: 'pageSize',
    });
    this.set('columns', generateColumns(['index', 'firstName', 'lastName']));
    return this.store.query('user', {}).then((d) => (this.data = d));
  });

  hooks.afterEach(function () {
    this.server.shutdown();
  });

  test('#summary is updated on page change', async function (assert) {
    await render(
      hbs`<ModelsTableServerPaginated @themeInstance={{themeInstance}} @data={{data}} @columns={{columns}} @filterQueryParameters={{filterQueryParameters}} />`
    );
    assert.ok(
      /Show 1 - 10 of 100( clear)? Clear all filters/.test(
        this.ModelsTablePageObject.summary
      ),
      `Content for 1st page (10) "${this.ModelsTablePageObject.summary}"`
    );

    await navigation.goToNextPage();
    assert.ok(
      /Show 11 - 20 of 100( clear)? Clear all filters/.test(
        this.ModelsTablePageObject.summary
      ),
      `Content for 2nd page (10) "${this.ModelsTablePageObject.summary}"`
    );
  });

  test('#summary is updated on page size change', async function (assert) {
    await render(
      hbs`<ModelsTableServerPaginated @themeInstance={{themeInstance}} @data={{data}} @columns={{columns}} @filterQueryParameters={{filterQueryParameters}} />`
    );
    await this.ModelsTablePageObject.changePageSize(25);
    await settled();
    assert.ok(
      /Show 1 - 25 of 100( clear)? Clear all filters/.test(
        this.ModelsTablePageObject.summary
      ),
      `Content for 1st page (25) "${this.ModelsTablePageObject.summary}"`
    );
  });

  test('#summary is updated on global filter usage', async function (assert) {
    await render(
      hbs`<ModelsTableServerPaginated @themeInstance={{themeInstance}} @data={{data}} @columns={{columns}} @filterQueryParameters={{filterQueryParameters}} />`
    );
    await this.ModelsTablePageObject.doGlobalFilter('100');
    await settled();
    assert.ok(
      /Show 1 - 1 of 1( clear)? Clear all filters/.test(
        this.ModelsTablePageObject.summary
      ),
      `Content for 1st page (1) "${this.ModelsTablePageObject.summary}"`
    );
  });

  test('#summary is updated on column filter usage', async function (assert) {
    await render(
      hbs`<ModelsTableServerPaginated @themeInstance={{themeInstance}} @data={{data}} @columns={{columns}} @filterQueryParameters={{filterQueryParameters}} />`
    );
    await filters.objectAt(0).inputFilter('100');
    await settled();
    assert.ok(
      /Show 1 - 1 of 1( clear)? Clear all filters/.test(
        this.ModelsTablePageObject.summary
      ),
      `Content for 1st page (1) "${this.ModelsTablePageObject.summary}"`
    );
  });

  test('#navigation first and prev are disabled by default', async function (assert) {
    await render(
      hbs`<ModelsTableServerPaginated @themeInstance={{themeInstance}} @data={{data}} @columns={{columns}} @filterQueryParameters={{filterQueryParameters}} />`
    );
    assert.ok(navigation.goToPrevPageDisabled);
    assert.ok(navigation.goToFirstPageDisabled);
  });

  test('#navigation next and last are disabled when user on the last page', async function (assert) {
    await render(
      hbs`<ModelsTableServerPaginated @themeInstance={{themeInstance}} @data={{data}} @columns={{columns}} @filterQueryParameters={{filterQueryParameters}} />`
    );
    await navigation.goToLastPage();
    await settled();
    assert.ok(navigation.goToNextPageDisabled);
    assert.ok(navigation.goToLastPageDisabled);
  });

  test('#navigation all buttons are enabled when user not on the last or first page', async function (assert) {
    await render(
      hbs`<ModelsTableServerPaginated @themeInstance={{themeInstance}} @data={{data}} @columns={{columns}} @filterQueryParameters={{filterQueryParameters}} />`
    );
    await navigation.goToNextPage();
    await settled();
    assert.notOk(navigation.goToNextPageDisabled);
    assert.notOk(navigation.goToLastPageDisabled);
    assert.notOk(navigation.goToPrevPageDisabled);
    assert.notOk(navigation.goToFirstPageDisabled);
  });

  test('#content user may set custom page number to be shown initially', async function (assert) {
    this.set('currentPageNumber', 5);
    await render(hbs`<ModelsTableServerPaginated
      @themeInstance={{themeInstance}}
      @data={{data}}
      @columns={{columns}}
      @filterQueryParameters={{filterQueryParameters}}
      @currentPageNumber={{currentPageNumber}} />`);
    assert.ok(
      /Show 41 - 50 of 100( clear)? Clear all filters/.test(
        this.ModelsTablePageObject.summary
      ),
      `Content for 5th page "${this.ModelsTablePageObject.summary}"`
    );
  });

  test('#pageSize changes shown rows count', async function (assert) {
    await render(
      hbs`<ModelsTableServerPaginated @themeInstance={{themeInstance}} @data={{data}} @columns={{columns}} @filterQueryParameters={{filterQueryParameters}} />`
    );
    assert.deepEqual(
      this.ModelsTablePageObject.getColumnCells(0),
      fromTo(1, 10)
    );

    await this.ModelsTablePageObject.changePageSize(25);
    await settled();
    assert.deepEqual(
      this.ModelsTablePageObject.getColumnCells(0),
      fromTo(1, 25)
    );
  });

  test('#globalFilter causes data filtering', async function (assert) {
    await render(
      hbs`<ModelsTableServerPaginated @themeInstance={{themeInstance}} @data={{data}} @columns={{columns}} @filterQueryParameters={{filterQueryParameters}} />`
    );

    await this.ModelsTablePageObject.doGlobalFilter(10);
    await settled();
    assert.deepEqual(this.ModelsTablePageObject.getColumnCells(0), [
      '10',
      '100',
    ]);
  });

  test('#pageSize and #currentPageNumber may be set on component init', async function (assert) {
    this.set('pageSize', 25);
    this.set('currentPageNumber', 2);
    await render(hbs`<ModelsTableServerPaginated
      @themeInstance={{themeInstance}}

      @data={{data}}
      @columns={{columns}}
      @filterQueryParameters={{filterQueryParameters}}
      @pageSize={{pageSize}}
      @currentPageNumber={{currentPageNumber}}
    />`);
    assert.ok(
      /Show 26 - 50 of 100( clear)? Clear all filters/.test(
        this.ModelsTablePageObject.summary
      ),
      `Content for 2nd page "${this.ModelsTablePageObject.summary}"`
    );
  });

  test('#columnFilter causes data filtering by `propertyName', async function (assert) {
    await render(
      hbs`<ModelsTableServerPaginated @themeInstance={{themeInstance}} @data={{data}} @columns={{columns}} @filterQueryParameters={{filterQueryParameters}} />`
    );

    await filters.objectAt(0).inputFilter(10);
    await settled();
    assert.deepEqual(this.ModelsTablePageObject.getColumnCells(0), [
      '10',
      '100',
    ]);
    await filters
      .objectAt(1)
      .inputFilter(this.server.db.users[9]['first-name']);
    await settled();
    assert.deepEqual(this.ModelsTablePageObject.getColumnCells(0), ['10']);
  });

  test('#columnFilter causes data filtering by `filteredBy`', async function (assert) {
    this.set('columns.1.filteredBy', 'index');
    await render(
      hbs`<ModelsTableServerPaginated @themeInstance={{themeInstance}} @data={{data}} @columns={{columns}} @filterQueryParameters={{filterQueryParameters}} />`
    );

    await filters.objectAt(1).inputFilter(this.server.db.users[10]['index']);
    await settled();
    assert.deepEqual(this.ModelsTablePageObject.getColumnCells(1), [
      this.server.db.users[10]['first-name'],
    ]);
  });

  test('#columnFilter with predefined options causes data filtering by `propertyName`', async function (assert) {
    this.set('columns.firstObject.filterWithSelect', true);
    this.set('columns.firstObject.predefinedFilterOptions', ['10', '20', '30']);
    await render(
      hbs`<ModelsTableServerPaginated @themeInstance={{themeInstance}} @data={{data}} @columns={{columns}} @filterQueryParameters={{filterQueryParameters}} />`
    );

    await filters.objectAt(0).selectFilter('10');
    await settled();
    assert.deepEqual(this.ModelsTablePageObject.getColumnCells(0), [
      '10',
      '100',
    ]);
  });

  test('#columnFilter with predefined options causes data filtering by `filteredBy`', async function (assert) {
    this.set('columns.1.filterWithSelect', true);
    this.set('columns.1.predefinedFilterOptions', ['10', '20', '30']);
    this.set('columns.1.filteredBy', 'index');
    await render(
      hbs`<ModelsTableServerPaginated @themeInstance={{themeInstance}} @data={{data}} @columns={{columns}} @filterQueryParameters={{filterQueryParameters}} />`
    );

    await filters.objectAt(1).selectFilter('10');
    await settled();
    assert.deepEqual(this.ModelsTablePageObject.getColumnCells(0), [
      '10',
      '100',
    ]);
  });

  test('#sortColumn sort data by `propertyName`', async function (assert) {
    await render(
      hbs`<ModelsTableServerPaginated @themeInstance={{themeInstance}} @data={{data}} @columns={{columns}} @filterQueryParameters={{filterQueryParameters}} />`
    );

    await sorting.objectAt(1).doSort();
    await settled();
    assert.deepEqual(
      this.ModelsTablePageObject.getColumnCells(1),
      this.server.db.users
        .map((u) => u['first-name'])
        .sort()
        .slice(0, 10)
    );
  });

  test('#sortColumn sort data by `sortedBy`', async function (assert) {
    this.set('columns.1.sortedBy', 'lastName');
    await render(
      hbs`<ModelsTableServerPaginated @themeInstance={{themeInstance}} @data={{data}} @columns={{columns}} @filterQueryParameters={{filterQueryParameters}} />`
    );

    await sorting.objectAt(1).doSort();
    await settled();
    assert.deepEqual(
      this.ModelsTablePageObject.getColumnCells(1),
      this.server.db.users
        .sort((a, b) => (a['last-name'] > b['last-name'] ? 1 : -1))
        .map((u) => u['first-name'])
        .slice(0, 10)
    );
  });

  test('#sort by single column', async function (assert) {
    this.server.get('/users', (schema, req) => {
      assert.deepEqual(
        req.queryParams,
        {
          page: '1',
          pageSize: '10',
          sort: 'firstName',
          sortDirection: 'ASC',
        },
        'correct query parameters are sent'
      );
    });

    await render(
      hbs`<ModelsTableServerPaginated @themeInstance={{themeInstance}} @data={{data}} @columns={{columns}} @filterQueryParameters={{filterQueryParameters}} />`
    );
    await sorting.objectAt(1).doSort();
  });

  test('#sort by multiple columns', async function (assert) {
    const expectedQp = [
      {
        page: '1',
        pageSize: '10',
        sort: 'firstName',
      },
      {
        page: '1',
        pageSize: '10',
        sort: 'firstName,lastName',
      },
      {
        page: '1',
        pageSize: '10',
        sort: 'firstName,-lastName',
      },
    ];

    let index = 0;

    this.server.get('/users', (schema, req) => {
      assert.deepEqual(
        req.queryParams,
        expectedQp[index],
        `correct query parameters are sent (${index})`
      );
      index++;
    });

    await render(
      hbs`<ModelsTableServerPaginated @themeInstance={{themeInstance}} @data={{data}} @columns={{columns}} @filterQueryParameters={{filterQueryParameters}} @multipleColumnsSorting={{true}} />`
    );
    await sorting.objectAt(1).doSort();
    await sorting.objectAt(2).doSort();
    await sorting.objectAt(2).doSort();
  });

  test('A11y', async function (assert) {
    const columns = generateColumns(['index', 'reversedIndex']);
    columns[0].filterWithSelect = true;

    const data = generateContent(10);
    this.setProperties({
      data,
      columns,
    });

    await render(
      hbs`<ModelsTableServerPaginated @themeInstance={{themeInstance}} @data={{data}} @columns={{columns}} @filterQueryParameters={{filterQueryParameters}} />`
    );
    await a11yAudit('.models-table-wrapper');
    assert.ok(true, 'no a11y errors found');
  });
});
