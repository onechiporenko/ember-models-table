import {A} from '@ember/array';
import DS from 'ember-data';
import {computed, defineProperty, get, set} from '@ember/object';
import {compare} from '@ember/utils';
import Component from '@ember/component';
import {run} from '@ember/runloop';
import {module, test, skip} from 'qunit';
import {setupRenderingTest} from 'ember-qunit';
import {settled, click, clearRender, render, triggerEvent} from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
import a11yAudit from 'ember-a11y-testing/test-support/audit';
import {
  generateContent,
  generateColumns,
  firstNames,
  lastNames
} from '../../helpers/f';

import getPageObject from '../../helpers/get-page-object';
import getThemeClass from '../../helpers/get-theme-class';

const oneTenArray = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten'];
const oneTenArrayDig = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];
const tenOneArrayDig = oneTenArrayDig.slice().reverse();
const oneTenAscArray = ['eight', 'five', 'four', 'nine', 'one', 'seven', 'six', 'ten', 'three', 'two'];
const oneTenDescArray = ['two', 'three', 'ten', 'six', 'seven', 'one', 'nine', 'four', 'five', 'eight'];
class TestModel extends DS.Model {}

let rows, filters, navigation, sorting, columnsDropDown, headers, groupingRowsByRow, groupingRowsByColumn;

module('ModelsTable | Integration', function (hooks) {
  setupRenderingTest(hooks);

  hooks.beforeEach(function () {
    this.actions = {};
    this.ModelsTablePageObject = getPageObject(this);
    rows = this.ModelsTablePageObject.rows;
    filters = this.ModelsTablePageObject.filters;
    navigation = this.ModelsTablePageObject.navigation;
    sorting = this.ModelsTablePageObject.sorting;
    columnsDropDown = this.ModelsTablePageObject.columnsDropDown;
    headers = this.ModelsTablePageObject.headers;
    groupingRowsByRow = this.ModelsTablePageObject.groupingRowsByRow;
    groupingRowsByColumn = this.ModelsTablePageObject.groupingRowsByColumn;
  });

  function signFilter(cellValue, neededString) {
    const signs = ['<', '>', '='];
    let neededNumber = neededString;
    let sign = '=';
    if (-1 !== signs.indexOf(neededString[0])) {
      sign = neededString[0];
      neededNumber = parseInt(neededString.substring(1), 10);
    }
    let _cellValue = parseInt(cellValue, 10);
    if ('=' === sign) {
      return _cellValue === neededNumber;
    }
    if ('>' === sign) {
      return _cellValue > neededNumber;
    }
    if ('<' === sign) {
      return _cellValue < neededNumber;
    }
    return cellValue === neededNumber;
  }

  test('summary', async function (assert) {

    this.setProperties({
      data: A([]),
      columns: generateColumns(['index'])
    });

    await render(hbs`<ModelsTable @data={{data}} @columns={{columns}} />`);
    assert.ok(/Show 0 - 0 of 0( clear)? Clear all filters/.test(this.ModelsTablePageObject.summary), `Empty content "${this.ModelsTablePageObject.summary}"`);

    this.set('data', generateContent(10));
    assert.ok(/Show 1 - 10 of 10( clear)? Clear all filters/.test(this.ModelsTablePageObject.summary), `Content for 1 page "${this.ModelsTablePageObject.summary}"`);

    this.set('data', generateContent(15));
    await navigation.goToNextPage();
    assert.ok(/Show 11 - 15 of 15( clear)? Clear all filters/.test(this.ModelsTablePageObject.summary), `Content for 2 pages. Last page selected "${this.ModelsTablePageObject.summary}"`);

    this.set('data', generateContent(35));
    assert.ok(/Show 11 - 20 of 35( clear)? Clear all filters/.test(this.ModelsTablePageObject.summary), `Content for 4 pages. Middle page selected "${this.ModelsTablePageObject.summary}"`);

  });

  test('basic render', async function (assert) {

    this.setProperties({
      columns: generateColumns(['index', 'reversedIndex']),
      data: generateContent(10, 1)
    });

    await render(hbs`<ModelsTable @data={{data}} @columns={{columns}} />`);

    assert.equal(this.ModelsTablePageObject.tablesCount, 1, 'Table exists');
    assert.equal(rows.length, 10, 'Table has 10 rows');
    assert.ok(/Show 1 - 10 of 10( clear)? Clear all filters/.test(this.ModelsTablePageObject.summary), `Summary is valid "${this.ModelsTablePageObject.summary}"`);
    assert.equal(navigation.disabledNavigationLinksCount, 4, 'All navigation buttons are disabled');
    assert.equal(this.ModelsTablePageObject.footer.isVisible, false, 'Table footer not exists, if there is no footer-components');
    assert.deepEqual(this.ModelsTablePageObject.getColumnCells(0), oneTenArrayDig, 'Content is valid');

  });

  test('basic render with data update', async function (assert) {
    this.set('data', generateContent(10, 1));
    this.set('columns', generateColumns(['index', 'reversedIndex']));

    await render(hbs`<ModelsTable @data={{data}} @columns={{columns}} />`);
    assert.equal(this.ModelsTablePageObject.tablesCount, 1, 'Table exists');
    assert.equal(rows.length, 10, 'Table has 10 rows');
    assert.ok(/Show 1 - 10 of 10( clear)? Clear all filters/.test(this.ModelsTablePageObject.summary), `Summary is valid "${this.ModelsTablePageObject.summary}"`);
    assert.equal(navigation.disabledNavigationLinksCount, 4, 'All navigation buttons are disabled');
    assert.deepEqual(this.ModelsTablePageObject.getColumnCells(0), oneTenArrayDig, 'Content is valid');

    this.set('data.0.index', 11);
    assert.deepEqual(this.ModelsTablePageObject.getColumnCells(0), ['11', '2', '3', '4', '5', '6', '7', '8', '9', '10'], 'Content is valid after update');

    this.set('data.firstObject.index', 12);
    assert.deepEqual(this.ModelsTablePageObject.getColumnCells(0), ['12', '2', '3', '4', '5', '6', '7', '8', '9', '10'], 'Content is valid after second update');

  });

  test('render without footer', async function (assert) {

    this.set('showComponentFooter', false);
    await render(hbs`<ModelsTable @showComponentFooter={{showComponentFooter}} />`);

    assert.equal(this.ModelsTablePageObject.tableFooterCount, 0, 'table footer isn\'t rendered');

  });

  test('pageSizeObserver', async function (assert) {

    this.set('data', generateContent(50, 1));
    await render(hbs`<ModelsTable @data={{data}} />`);

    assert.ok(/Show 1 - 10 of 50( clear)? Clear all filters/.test(this.ModelsTablePageObject.summary), `init value "${this.ModelsTablePageObject.summary}"`);
    await navigation.goToNextPage();

    assert.ok(/Show 11 - 20 of 50( clear)? Clear all filters/.test(this.ModelsTablePageObject.summary), `value changed by user "${this.ModelsTablePageObject.summary}"`);
    await this.ModelsTablePageObject.changePageSize(25);
    assert.ok(/Show 1 - 25 of 50( clear)? Clear all filters/.test(this.ModelsTablePageObject.summary), `value restored to 1st page with 25 items "${this.ModelsTablePageObject.summary}"`);

  });

  test('visibleContent', async function (assert) {

    this.setProperties({
      columns: generateColumns(['index']),
      data: generateContent(10),
      pageSize: 10,
      currentPageNumber: 1
    });

    await render(
      hbs`<ModelsTable @data={{data}} @currentPageNumber={{currentPageNumber}} @pageSize={{pageSize}} @columns={{columns}} />`
    );
    assert.deepEqual(this.ModelsTablePageObject.getColumnCells(0), generateContent(10).mapBy('index').map(c => `${c}`), 'One page');

    this.setProperties({
      data: generateContent(25, 1),
      currentPageNumber: 2
    });
    assert.deepEqual(this.ModelsTablePageObject.getColumnCells(0), generateContent(10, 11).mapBy('index').map(c => `${c}`), 'Second page');

    this.setProperties({
      data: generateContent(25, 1),
      currentPageNumber: 1,
      pageSize: 50
    });
    assert.deepEqual(this.ModelsTablePageObject.getColumnCells(0), generateContent(25, 1).mapBy('index').map(c => `${c}`), 'One big page');

    this.setProperties({
      data: generateContent(25, 1),
      currentPageNumber: 1,
      pageSize: 10
    });
    await navigation.goToNextPage();
    await navigation.goToNextPage();
    assert.deepEqual(this.ModelsTablePageObject.getColumnCells(0), generateContent(5, 21).mapBy('index').map(c => `${c}`), 'Last page');

  });

  test('visibleContent with page size changing and pagination', async function (assert) {

    this.setProperties({
      data: generateContent(1000, 1),
      columns: generateColumns(['index'])
    });

    await render(hbs`<ModelsTable @data={{data}} @columns={{columns}} />`);

    await this.ModelsTablePageObject.changePageSize(25);
    assert.equal(rows.length, 25, '1st page has 25 rows');

    await navigation.goToNextPage();
    assert.equal(rows.length, 25, '2nd page has 25 rows');

    await navigation.goToNextPage();
    assert.equal(rows.length, 25, '3rd page has 25 rows');

  });

  test('sorting by nested properties', async function (assert) {

    this.setProperties({
      data: generateContent(100, 1),
      columns: generateColumns(['nested.index'])
    });

    await render(hbs`<ModelsTable @data={{data}} @columns={{columns}} />`);
    await sorting.objectAt(0).click();
    assert.deepEqual(this.ModelsTablePageObject.getColumnCells(0), oneTenArrayDig, 'Content is valid after sorting');

    await sorting.objectAt(0).click();
    assert.deepEqual(this.ModelsTablePageObject.getColumnCells(0), ['100', '99', '98', '97', '96', '95', '94', '93', '92', '91'], 'Content is valid after sorting (2)');
  });

  test('gotoBackEnabled', async function (assert) {

    this.setProperties({
      data: generateContent(25, 1),
      columns: generateColumns(['index'])
    });
    await render(hbs`<ModelsTable @data={{data}} @columns={{columns}} />`);

    assert.ok(navigation.goToPrevPageDisabled, 'Disabled, if user is on the 1st page');

    await navigation.goToNextPage();
    assert.notOk(navigation.goToPrevPageDisabled, 'Enabled, if user isn\'t on the 1st page');

  });

  test('gotoForwardEnabled', async function (assert) {

    this.setProperties({
      data: generateContent(10),
      columns: generateColumns(['id'])
    });

    await render(hbs`<ModelsTable @data={{data}} @columns={{columns}} />`);
    assert.ok(navigation.goToNextPageDisabled, 'One page only');

    this.set('data', generateContent(11));
    assert.notOk(navigation.goToNextPageDisabled, 'One page + 1 record more');

    this.setProperties({
      data: generateContent(25)
    });
    await navigation.goToNextPage();
    await navigation.goToNextPage();
    await navigation.goToNextPage();
    assert.ok(navigation.goToNextPageDisabled, 'Three pages, last one selected');

  });

  test('#345 work with select for page number', async function (assert) {
    this.setProperties({
      data: generateContent(100),
      columns: generateColumns(['id']),
      showCurrentPageNumberSelect: true,
      useNumericPagination: false
    });

    await render(hbs`<ModelsTable
      @data={{data}}
      @columns={{columns}}
      @showCurrentPageNumberSelect={{showCurrentPageNumberSelect}}
      @useNumericPagination={{useNumericPagination}}
    />`);
    assert.ok(navigation.selectPageNumberExists, 'Select for current page number is shown by default for simple pagination');
    assert.equal(navigation.selectedPageNumber, '1', 'First page is selected');

    this.set('useNumericPagination', true);
    assert.ok(navigation.selectPageNumberExists, 'Select for current page number is shown by default for numeric pagination');
    assert.equal(navigation.selectedPageNumber, '1', 'First page is selected');

    this.set('useNumericPagination', false);
    await navigation.selectPageNumber(4);
    assert.ok(/Show 31 - 40 of 100( clear)? Clear all filters/.test(this.ModelsTablePageObject.summary), `Summary is shown for 4th page "${this.ModelsTablePageObject.summary}"`);

    await navigation.goToLastPage();
    assert.equal(navigation.selectedPageNumber, '10', 'Last page is selected');

    await this.ModelsTablePageObject.changePageSize(25);
    assert.equal(navigation.selectedPageNumber, '1', 'First page is selected after page size is changed');

    this.set('showCurrentPageNumberSelect', false);
    assert.notOk(navigation.selectPageNumberExists, 'Select for current page number is hidden for simple pagination');
    this.set('useNumericPagination', true);
    assert.notOk(navigation.selectPageNumberExists, 'Select for current page number is hidden for numeric pagination');
  });

  test('#374 Disable page-number select if there are no options for it', async function (assert) {
    this.setProperties({
      data: generateContent(100),
      columns: generateColumns(['id']),
      showCurrentPageNumberSelect: true,
      useNumericPagination: false
    });

    await render(hbs`<ModelsTable
      @data={{data}}
      @columns={{columns}}
      @showCurrentPageNumberSelect={{showCurrentPageNumberSelect}}
      @useNumericPagination={{useNumericPagination}}
    />`);

    await this.ModelsTablePageObject.doGlobalFilter('any random text that does not exist in the table');

    assert.ok(navigation.selectPageNumberDisabled, 'disabled with simple pagination');
    this.set('useNumericPagination', true);
    assert.ok(navigation.selectPageNumberDisabled, 'disabled with numeric pagination');
  });

  test('render multi-pages table', async function (assert) {

    this.setProperties({
      columns: generateColumns(['index', 'reversedIndex']),
      data: generateContent(20, 1)
    });
    await render(hbs`<ModelsTable @data={{data}} @columns={{columns}} />`);

    assert.notOk(navigation.goToNextPageDisabled, 'next enabled');
    assert.notOk(navigation.goToLastPageDisabled, 'last enabled');
    assert.ok(navigation.goToPrevPageDisabled, 'prev disabled');
    assert.ok(navigation.goToFirstPageDisabled, 'first disabled');
    assert.ok(/Show 1 - 10 of 20( clear)? Clear all filters/.test(this.ModelsTablePageObject.summary), `Summary is valid "${this.ModelsTablePageObject.summary}"`);

    await navigation.goToNextPage();

    assert.deepEqual(this.ModelsTablePageObject.getColumnCells(0), ['11', '12', '13', '14', '15', '16', '17', '18', '19', '20'], 'Content is valid');
    assert.ok(navigation.goToNextPageDisabled, 'next disabled');
    assert.ok(navigation.goToLastPageDisabled, 'last disabled');
    assert.notOk(navigation.goToPrevPageDisabled, 'prev enabled');
    assert.notOk(navigation.goToFirstPageDisabled, 'first enabled');

  });

  test('render custom component in the table cell', async function (assert) {

    const columns = generateColumns(['index', 'someWord']);
    columns[1].component = 'cell-component';
    this.setProperties({
      data: generateContent(20, 1),
      columns
    });

    await render(hbs`<ModelsTable @data={{data}} @columns={{columns}} />`);
    assert.deepEqual(this.ModelsTablePageObject.getColumnCells(1), oneTenArray, 'Content is valid');

  });

  test('render custom component in the table cell as a composable component', async function (assert) {

    const columns = generateColumns(['index', 'someWord']);
    columns[1].component = 'cellComp';
    this.setProperties({
      data: generateContent(20, 1),
      columns
    });

    await render(
      hbs`<ModelsTable @columns={{columns}} @data={{data}} @columnComponents={{hash cellComp=(component "cell-component")}} />`
    );
    assert.deepEqual(this.ModelsTablePageObject.getColumnCells(1), oneTenArray, 'Content is valid');

  });

  test('render custom component (input) in the filter cell', async function (assert) {

    const columns = generateColumns(['index', 'someWord']);
    columns[1].componentForFilterCell = 'filter-cell-input';

    this.setProperties({
      data: generateContent(10, 1),
      columns
    });

    await render(hbs`<ModelsTable @data={{data}} @columns={{columns}} />`);
    assert.deepEqual(this.ModelsTablePageObject.getColumnCells(1), oneTenArray, 'Content is valid');

    await filters.objectAt(1).inputFilter('one');
    assert.deepEqual(this.ModelsTablePageObject.getColumnCells(1), ['one'], 'Content is filtered');

    await filters.objectAt(1).clearFilter();
    assert.deepEqual(this.ModelsTablePageObject.getColumnCells(1), oneTenArray, 'Content is restored');

  });

  test('render custom component (select) in the filter cell', async function (assert) {

    const columns = generateColumns(['index', 'someWord']);
    columns[1].componentForFilterCell = 'filter-cell-select';
    if (get(this, 'owner.application.uiFramework') === 'semantic-ui') {
        columns[1].componentForFilterCell = 'themes/ember-semanticui/filter-cell-select';
    }

    if (get(this, 'owner.application.uiFramework') === 'paper') {
      columns[1].componentForFilterCell = 'themes/ember-paper/filter-cell-select';
    }

    this.setProperties({
      data: generateContent(10, 1),
      columns
    });

    await render(hbs`<ModelsTable @data={{data}} @columns={{columns}} />`);

    await filters.objectAt(1).focusSelectFilter();
    assert.deepEqual(filters.objectAt(1).selectOptions, ['', ...oneTenArray], 'Filter options are correct');
    assert.deepEqual(this.ModelsTablePageObject.getColumnCells(1), oneTenArray, 'Content is valid');

    await filters.objectAt(1).focusSelectFilter();
    await filters.objectAt(1).selectFilter('one');
    assert.deepEqual(this.ModelsTablePageObject.getColumnCells(1), ['one'], 'Content is filtered');

    await filters.objectAt(1).clearFilter();
    assert.deepEqual(this.ModelsTablePageObject.getColumnCells(1), oneTenArray, 'Content is restored');

  });

  test('render custom component in the sort cell', async function (assert) {

    const columns = generateColumns(['index', 'someWord']);
    columns[1].componentForSortCell = 'sort-cell';

    this.setProperties({
      data: generateContent(10, 1),
      columns
    });

    await render(hbs`<ModelsTable @columns={{columns}} @data={{data}} @multipleColumnsSorting=false />`);
    await sorting.objectAt(1).click();
    assert.deepEqual(this.ModelsTablePageObject.getColumnCells(1), oneTenAscArray, 'Content is valid (sorting 2nd column asc)');

    await sorting.objectAt(1).click();
    assert.deepEqual(this.ModelsTablePageObject.getColumnCells(1), oneTenDescArray, 'Content is valid (sorting 2nd column desc)');

  });

  test('custom cell component should prevent filtering and sorting if propertyName and sortedBy/filteredBy not provided', async function (assert) {

    const columns = generateColumns(['index', 'someWord']);
    columns[1].component = 'cell-component';
    delete columns[1].propertyName;
    delete columns[1].filteredBy;
    this.setProperties({
      data: generateContent(20, 1),
      columns
    });

    await render(hbs`<ModelsTable @data={{data}} @columns={{columns}} />`);
    assert.equal(filters.objectAt(1).content, '', 'Filter-cell is empty');
    await sorting.objectAt(1).click();
    assert.notOk(sorting.objectAt(1).hasSortMarker, 'Not sorted');
    await sorting.objectAt(1).click();
    assert.notOk(sorting.objectAt(1).hasSortMarker, 'Not sorted again');

  });

  test('render show/hide columns', async function (assert) {

    this.setProperties({
      columns: generateColumns(['index', 'reversedIndex']),
      data: generateContent(10, 1)
    });
    await render(hbs`<ModelsTable @data={{data}} @columns={{columns}} />`);

    assert.equal(sorting.length, 2, '2 columns are shown (thead)');
    assert.equal(filters.length, 2, '2 columns are shown (thead)');
    assert.equal(rows.objectAt(0).cells.length, 2, '2 columns are shown (tbody)');

    await this.ModelsTablePageObject.toggleColumnDropDown();
    await columnsDropDown.objectAt(3).click();
    await this.ModelsTablePageObject.openColumnsDropDown();

    assert.equal(sorting.length, 1, '1 column is shown (thead)');
    assert.equal(filters.length, 1, '1 column is shown (thead)');
    assert.equal(rows.objectAt(0).cells.length, 1, '1 column is shown (tbody)');
    assert.deepEqual(sorting.mapBy('title'), ['reversedIndex'], 'Valid column is shown (thead)');

    assert.equal(this.element.querySelector(this.ModelsTablePageObject.firstColumnIconSelector).className.includes(this.ModelsTablePageObject.uncheckedIconClass), true, 'First column is unchecked');
    assert.equal(this.element.querySelector(this.ModelsTablePageObject.secondColumnIconSelector).className.includes(this.ModelsTablePageObject.checkedIconClass), true, 'Second column is checked');

    await columnsDropDown.objectAt(3).click();
    await this.ModelsTablePageObject.openColumnsDropDown();

    assert.equal(sorting.length, 2, '2 columns are shown (thead)');
    assert.equal(filters.length, 2, '2 columns are shown (tbody)');
    assert.equal(this.element.querySelector(this.ModelsTablePageObject.firstColumnIconSelector).className.includes(this.ModelsTablePageObject.checkedIconClass), true, 'First column is checked');
    assert.equal(this.element.querySelector(this.ModelsTablePageObject.secondColumnIconSelector).className.includes(this.ModelsTablePageObject.checkedIconClass), true, 'Second column is checked');

    await columnsDropDown.objectAt(4).click();
    await this.ModelsTablePageObject.openColumnsDropDown();

    assert.equal(sorting.length, 1, '1 column is shown (thead)');
    assert.equal(filters.length, 1, '1 column is shown (tbody)');
    assert.deepEqual(sorting.mapBy('title'), ['index'], 'Valid column is shown (thead)');
    assert.equal(this.element.querySelector(this.ModelsTablePageObject.firstColumnIconSelector).className.includes(this.ModelsTablePageObject.checkedIconClass), true, 'First column is checked');
    assert.equal(this.element.querySelector(this.ModelsTablePageObject.secondColumnIconSelector).className.includes(this.ModelsTablePageObject.uncheckedIconClass), true, 'Second column is unchecked');

    await columnsDropDown.objectAt(3).click();
    await this.ModelsTablePageObject.openColumnsDropDown();

    assert.equal(rows.length, 1, '1 row is shown when all columns are hidden');
    assert.equal(this.ModelsTablePageObject.getCellsCount(), 1, 'with 1 cell');
    assert.deepEqual(this.ModelsTablePageObject.getColumnCells(0), ['All columns are hidden. Use columns-dropdown to show some of them'], 'correct message is shown');
    assert.equal(this.element.querySelector(this.ModelsTablePageObject.firstColumnIconSelector).className.includes(this.ModelsTablePageObject.uncheckedIconClass), true, 'First column is unchecked');
    assert.equal(this.element.querySelector(this.ModelsTablePageObject.secondColumnIconSelector).className.includes(this.ModelsTablePageObject.uncheckedIconClass), true, 'Second column is unchecked');

  });

  test('render show/hide all columns', async function (assert) {
    this.setProperties({
      columns: generateColumns(['index', 'reversedIndex']),
      data: generateContent(10, 1)
    });

    await render(hbs`<ModelsTable @data={{data}} @columns={{columns}} />`);
    assert.equal(sorting.length, 2, '2 columns are shown (thead)');
    assert.equal(filters.length, 2, '2 columns are shown (thead)');
    assert.equal(rows.objectAt(0).cells.length, 2, '2 columns are shown (tbody)');

    await this.ModelsTablePageObject.toggleColumnDropDown();

    await columnsDropDown.objectAt(1).click();
    await this.ModelsTablePageObject.openColumnsDropDown();

    assert.equal(rows.length, 1, '1 row is shown when all columns are hidden');
    assert.equal(this.ModelsTablePageObject.getCellsCount(), 1, 'with 1 cell');
    assert.deepEqual(this.ModelsTablePageObject.getColumnCells(0), ['All columns are hidden. Use columns-dropdown to show some of them'], 'correct message is shown');

    await columnsDropDown.objectAt(0).click();
    await this.ModelsTablePageObject.openColumnsDropDown();

    assert.equal(sorting.length, 2, '2 columns are shown (thead)');
    assert.equal(filters.length, 2, '2 columns are shown (thead)');
    assert.equal(rows.objectAt(0).cells.length, 2, '2 columns are shown (tbody)');

  });

  test('render columns-dropdown with mayBeHidden = false for some columns', async function (assert) {

    const columns = generateColumns(['index', 'reversedIndex']);
    columns[0].mayBeHidden = false;
    this.setProperties({
      columns,
      data: generateContent(10, 1)
    });

    await render(hbs`<ModelsTable @data={{data}} @columns={{columns}} />`);
    await this.ModelsTablePageObject.toggleColumnDropDown();
    assert.deepEqual(columnsDropDown.mapBy('label'), ['Show All', 'Hide All', 'Restore Defaults', 'reversedIndex'], 'Column with mayBeHidden = false is not shown in the columns dropdown');

    await columnsDropDown.objectAt(3).click();
    await this.ModelsTablePageObject.openColumnsDropDown();

    assert.equal(sorting.length, 1, '1 column are shown (thead)');
    assert.equal(filters.length, 1, '1 column are shown (thead)');
    assert.equal(rows.objectAt(0).cells.length, 1, '1 column are shown (tbody)');
    assert.deepEqual(sorting.mapBy('title'), ['index'], 'Valid column is shown (thead)');

    await columnsDropDown.objectAt(3).click();
    await this.ModelsTablePageObject.openColumnsDropDown();

    assert.equal(sorting.length, 2, '2 columns are shown (thead)');

    await columnsDropDown.objectAt(1).click();
    await this.ModelsTablePageObject.openColumnsDropDown();

    assert.equal(sorting.length, 1, '1 column are shown (thead)');
    assert.equal(filters.length, 1, '1 column are shown (thead)');
    assert.equal(rows.objectAt(0).cells.length, 1, '1 column are shown (tbody)');
    assert.deepEqual(sorting.mapBy('title'), ['index'], 'Valid column is shown (thead)');

  });

  test('#block render columns-dropdown', async function (assert) {
    const columns = generateColumns(['index', 'reversedIndex']);
    columns[0].mayBeHidden = false;
    this.setProperties({
      columns,
      data: generateContent(10, 1)
    });

    await render(hbs`<ModelsTable @data={{data}} @columns={{columns}} as |MT|>
      <MT.ColumnsDropdown as |CD|>
        {{#if MT.columnDropdownOptions.showAll}}
          <button {{action MT.showAllColumns}}>{{MT.themeInstance.columnsShowAllMsg}}</button>
        {{/if}}
        {{#if MT.columnDropdownOptions.hideAll}}
          <button {{action MT.hideAllColumns}}>{{MT.themeInstance.columnsHideAllMsg}}</button>
        {{/if}}
        {{#if MT.columnDropdownOptions.restoreDefaults}}
          <button {{action MT.restoreDefaultVisibility}}>{{MT.themeInstance.columnsRestoreDefaultsMsg}}</button>
        {{/if}}
        {{#each MT.columnDropdownOptions.columnSets as |columnSet|}}
          <button {{action MT.toggleColumnSetVisilibity columnSet}}>{{columnSet.label}}</button>
        {{/each}}
        {{#each MT.processedColumns as |column|}}
          {{#if column.mayBeHidden}}
            <button {{action MT.toggleColumnVisibility column}}>
              <i class={{if column.isVisible MT.themeInstance.columnVisibleIcon MT.themeInstance.columnHiddenIcon}}></i>{{column.title}}
            </button>
          {{/if}}
        {{/each}}
      </MT.ColumnsDropdown>
      {{! .... }}
    </ModelsTable>`);
    assert.deepEqual([...this.element.querySelectorAll('button')].map(t => t.innerText), ['Show All', 'Hide All', 'Restore Defaults', 'reversedIndex'], 'Correct buttons are shown');
  });

  test('render columnSets in columns-dropdown', async function (assert) {
    let customFunctionCalled = null;
    this.setProperties({
      columns: generateColumns(['index', 'index2', 'reversedIndex', 'id']),
      data: generateContent(10, 1),
      columnSets: [
        {
          label: 'Set 1',
          showColumns: ['index', 'id']
        },
        {
          label: 'Set 2',
          showColumns: ['index', 'id'],
          hideOtherColumns: false
        },
        {
          label: 'Set 3',
          showColumns: ['index', 'id'],
          toggleSet: true
        },
        {
          label: 'Set 4',
          showColumns(columns) {
            customFunctionCalled = columns;
          }
        }
      ]
    });

    await render(hbs`<ModelsTable @columns={{columns}} @data={{data}} @columnSets={{columnSets}} />`);
    assert.equal(sorting.length, 4, '4 columns are shown (thead)');
    assert.equal(filters.length, 4, '4 columns are shown (thead)');
    assert.equal(rows.objectAt(0).cells.length, 4, '4 columns are shown (tbody)');

    await this.ModelsTablePageObject.toggleColumnDropDown();
    await columnsDropDown.objectAt(1).click();
    await this.ModelsTablePageObject.openColumnsDropDown();
    await columnsDropDown.objectAt(3).click();
    await this.ModelsTablePageObject.openColumnsDropDown();
    assert.equal(rows.objectAt(0).cells.length, 2, '2 columns are shown for default settings');

    await columnsDropDown.objectAt(3).click();
    await this.ModelsTablePageObject.openColumnsDropDown();
    assert.equal(rows.objectAt(0).cells.length, 2, '2 columns are still shown after repeated click');

    await columnsDropDown.objectAt(0).click();
    await this.ModelsTablePageObject.openColumnsDropDown();
    await columnsDropDown.objectAt(3).click();
    await this.ModelsTablePageObject.openColumnsDropDown();
    assert.equal(rows.objectAt(0).cells.length, 2, 'other columns are hidden if hideOtherColumns=true');

    await columnsDropDown.objectAt(0).click();
    await this.ModelsTablePageObject.openColumnsDropDown();
    await columnsDropDown.objectAt(7).click(); // This is the first regular column
    await this.ModelsTablePageObject.openColumnsDropDown();
    await columnsDropDown.objectAt(4).click();
    await this.ModelsTablePageObject.openColumnsDropDown();
    assert.equal(rows.objectAt(0).cells.length, 4, 'other columns are not hidden if hideOtherColumns=false');

    await columnsDropDown.objectAt(4).click();
    await this.ModelsTablePageObject.openColumnsDropDown();
    assert.equal(rows.objectAt(0).cells.length, 4, 'columns remain visible after repeated click with hideOtherColumns=false');

    await columnsDropDown.objectAt(5).click();
    await this.ModelsTablePageObject.openColumnsDropDown();
    assert.equal(rows.objectAt(0).cells.length, 2, 'columns are hidden if toggleSet=true and both columns are visible');

    await columnsDropDown.objectAt(5).click();
    await this.ModelsTablePageObject.openColumnsDropDown();
    assert.equal(rows.objectAt(0).cells.length, 4, 'columns are shown if toggleSet=true and both columns are hidden');

    await columnsDropDown.objectAt(7).click(); // This is the first regular column
    await this.ModelsTablePageObject.openColumnsDropDown();
    await columnsDropDown.objectAt(5).click();
    await this.ModelsTablePageObject.openColumnsDropDown();
    assert.equal(rows.objectAt(0).cells.length, 4, 'columns are shown if toggleSet=true and one of them is hidden');

    await columnsDropDown.objectAt(6).click();
    await this.ModelsTablePageObject.openColumnsDropDown();
    assert.ok(customFunctionCalled, 'custom function is called if showColumns is a function');
    assert.deepEqual(customFunctionCalled.mapBy('propertyName'), ['index', 'index2', 'reversedIndex', 'id'], 'custom function gets columns as argument');
  });

  test('global filter and current page may be set on component init', async function (assert) {
    const columns = generateColumns(['index', 'reversedIndex']);
    this.setProperties({
      columns,
      data: generateContent(1000, 1),
      filterString: '1'
    });
    await render(hbs`<ModelsTable @data={{data}} @columns={{columns}} @currentPageNumber=2 @filterString={{filterString}} />`);
    assert.ok(/Show 11 - 20 of 488( clear)? Clear all filters/.test(this.ModelsTablePageObject.summary), this.ModelsTablePageObject.summary);
  });

  test('page size and current page may be set on component init', async function (assert) {
    const columns = generateColumns(['index', 'reversedIndex']);
    this.setProperties({
      columns,
      data: generateContent(100, 1)
    });
    await render(hbs`<ModelsTable @data={{data}} @columns={{columns}} @currentPageNumber=2 @pageSize=25 />`);
    assert.ok(/Show 26 - 50 of 100( clear)? Clear all filters/.test(this.ModelsTablePageObject.summary), this.ModelsTablePageObject.summary);
  });

  test('global filtering (ignore case OFF)', async function (assert) {

    const columns = generateColumns(['index', 'reversedIndex']);
    this.setProperties({
      columns,
      data: generateContent(10, 1)
    });
    await render(hbs`<ModelsTable @data={{data}} @columns={{columns}} />`);

    await this.ModelsTablePageObject.doGlobalFilter('1');

    assert.deepEqual(this.ModelsTablePageObject.getColumnCells(0), ['1', '10'], 'Content is filtered correctly');

    await this.ModelsTablePageObject.doGlobalFilter('');

    assert.deepEqual(this.ModelsTablePageObject.getColumnCells(0), oneTenArrayDig, 'Filter is empty and All rows are shown');

    await this.ModelsTablePageObject.doGlobalFilter('invalid input');

    assert.deepEqual(this.ModelsTablePageObject.getColumnCells(0), ['No records to show'], 'All rows are filtered out and proper message is shown');
    assert.equal(rows.objectAt(0).getCellColspans(), columns.length, 'cell with message has correct colspan');

  });

  test('global filtering (ignore case ON)', async function (assert) {

    const columns = generateColumns(['index', 'someWord']);
    this.setProperties({
      filteringIgnoreCase: true,
      columns,
      data: generateContent(10, 1)
    });
    await render(hbs`<ModelsTable @columns={{columns}} @data={{data}} @filteringIgnoreCase={{filteringIgnoreCase}} />`);

    await this.ModelsTablePageObject.doGlobalFilter('One');

    assert.deepEqual(rows.objectAt(0).cells.mapBy('content'), ['1', 'one'], 'Content is filtered correctly');

    await this.ModelsTablePageObject.doGlobalFilter('');

    assert.deepEqual(this.ModelsTablePageObject.getColumnCells(0), oneTenArrayDig, 'Filter is empty and All rows are shown');

    await this.ModelsTablePageObject.doGlobalFilter('invalid input');

    assert.deepEqual(this.ModelsTablePageObject.getColumnCells(0), ['No records to show'], 'All rows are filtered out and proper message is shown');
    assert.equal(rows.objectAt(0).getCellColspans(), columns.length, 'cell with message has correct colspan');

    await this.ModelsTablePageObject.doGlobalFilter('');
    await sorting.objectAt(0).click();
    await sorting.objectAt(0).click();

    await this.ModelsTablePageObject.doGlobalFilter('One');

    assert.deepEqual(this.ModelsTablePageObject.getColumnCells(1), ['one'], 'Content is filtered correctly when sorting is not done');

  });

  test('filtering by columns (ignore case OFF)', async function (assert) {

    const columns = generateColumns(['index', 'reversedIndex']);
    columns[0].filterPlaceholder = 'custom placeholder';
    this.setProperties({
      columns,
      data: generateContent(10, 1),
      useFilteringByColumns: true
    });

    await render(hbs`<ModelsTable @data={{data}} @columns={{columns}} @useFilteringByColumns={{useFilteringByColumns}} />`);
    await filters.objectAt(0).inputFilter('1');

    assert.deepEqual(this.ModelsTablePageObject.getColumnCells(0), ['1', '10'], 'Content is filtered correctly');

    await filters.objectAt(0).inputFilter('');

    assert.deepEqual(this.ModelsTablePageObject.getColumnCells(0), oneTenArrayDig, 'Filter is empty and All rows are shown');

    await filters.objectAt(0).inputFilter('invalid input');

    assert.deepEqual(this.ModelsTablePageObject.getColumnCells(0), ['No records to show'], 'All rows are filtered out and proper message is shown');
    assert.equal(rows.objectAt(0).getCellColspans(), columns.length, 'cell with message has correct colspan');

    assert.equal(filters.objectAt(0).inputPlaceholder, 'custom placeholder', 'Placeholder is correct');

    this.set('useFilteringByColumns', false);

    assert.deepEqual(this.ModelsTablePageObject.getColumnCells(0), oneTenArrayDig, 'Filtering by columns is ignored');
    assert.equal(this.element.querySelectorAll('thead input').length, 0, 'Columns filters are hidden');

  });

  test('filtering by columns (ignore case ON)', async function (assert) {

    const columns = generateColumns(['index', 'someWord']);
    this.setProperties({
      filteringIgnoreCase: true,
      useFilteringByColumns: true,
      columns,
      data: generateContent(10, 1)
    });

    await render(
      hbs`<ModelsTable @filteringIgnoreCase={{filteringIgnoreCase}} @columns={{columns}} @data={{data}} @useFilteringByColumns={{useFilteringByColumns}} />`
    );
    await filters.objectAt(1).inputFilter('One');
    assert.deepEqual(rows.objectAt(0).cells.mapBy('content'), ['1', 'one'], 'Content is filtered correctly');

    await filters.objectAt(1).inputFilter('');

    assert.deepEqual(this.ModelsTablePageObject.getColumnCells(0), oneTenArrayDig, 'Filter is empty and All rows are shown');

    await filters.objectAt(1).inputFilter('invalid input');

    assert.deepEqual(this.ModelsTablePageObject.getColumnCells(0), ['No records to show'], 'All rows are filtered out and proper message is shown');
    assert.equal(rows.objectAt(0).getCellColspans(), columns.length, 'cell with message has correct colspan');

    await filters.objectAt(1).inputFilter('');

    await filters.objectAt(1).inputFilter('One');
    assert.deepEqual(this.ModelsTablePageObject.getColumnCells(1), ['one'], 'Content is filtered correctly when sorting is not done');

    this.set('useFilteringByColumns', false);

    assert.deepEqual(this.ModelsTablePageObject.getColumnCells(0), oneTenArrayDig, 'Filtering by columns is ignored');
    assert.equal(filters.length, 0, 'Columns filters are hidden');

  });

  test('filtering by columns with custom functions', async function (assert) {

    const columns = generateColumns(['index', 'someWord']);
    columns[0].filterFunction = signFilter;

    this.setProperties({
      useFilteringByColumns: true,
      columns,
      data: generateContent(10, 1)
    });

    await render(hbs`<ModelsTable @columns={{columns}} @data={{data}} @useFilteringByColumns={{useFilteringByColumns}} />`);
    await filters.objectAt(0).inputFilter('=1');
    assert.deepEqual(this.ModelsTablePageObject.getColumnCells(0), ['1'], 'Content is filtered correctly (with "=1")');

    await filters.objectAt(0).inputFilter('>5');
    assert.deepEqual(this.ModelsTablePageObject.getColumnCells(0), ['6', '7', '8', '9', '10'], 'Content is filtered correctly (with ">5")');

    await filters.objectAt(0).inputFilter('<6');
    assert.deepEqual(this.ModelsTablePageObject.getColumnCells(0), ['1', '2', '3', '4', '5'], 'Content is filtered correctly (with "<6")');

  });

  test('filtering by columns with custom functions and predefined filter options', async function (assert) {

    const columns = generateColumns(['index', 'someWord']);
    columns[0].filterFunction = signFilter;
    columns[0].filterWithSelect = true;
    columns[0].predefinedFilterOptions = ['=1', '>5', '<6'];

    this.setProperties({
      useFilteringByColumns: true,
      columns,
      data: generateContent(10, 1)
    });

    await render(hbs`<ModelsTable @columns={{columns}} @data={{data}} @useFilteringByColumns={{useFilteringByColumns}} />`);
    await filters.objectAt(0).selectFilter('=1');
    assert.deepEqual(this.ModelsTablePageObject.getColumnCells(0), ['1'], 'Content is filtered correctly (with "=1")');

    await filters.objectAt(0).selectFilter('>5');
    assert.deepEqual(this.ModelsTablePageObject.getColumnCells(0), ['6', '7', '8', '9', '10'], 'Content is filtered correctly (with ">5")');

    await filters.objectAt(0).selectFilter('<6');
    assert.deepEqual(this.ModelsTablePageObject.getColumnCells(0), ['1', '2', '3', '4', '5'], 'Content is filtered correctly (with "<6")');

  });

  test('filtering with filterWithSelect (without predefinedFilterOptions)', async function (assert) {

    const columns = generateColumns(['index', 'someWord']);
    columns[1].filterWithSelect = true;
    const data = generateContent(10, 1);
    data[data.length - 1].someWord = '';
    this.setProperties({
      columns,
      data
    });
    await render(hbs`<ModelsTable @data={{data}} @columns={{columns}} />`);
    await filters.objectAt(1).focusSelectFilter();
    assert.equal(filters.objectAt(1).selectOptions.length, 10, 'Empty data-value was excluded');

    assert.deepEqual(filters.objectAt(1).selectOptions, ['', ...data.mapBy('someWord').slice(0, -1)], 'Options for select are valid');

    await filters.objectAt(1).selectFilter('one');

    assert.equal(rows.length, 1, 'Only one row exist after filtering');

    this.set('data.firstObject.someWord', 'not a number');

    if (get(this, 'owner.application.uiFramework') === 'paper') {
      await settled();
      assert.notOk(filters.objectAt(1).selectValueExists, 'Filter is set to the default value');
    }
    else {
      assert.equal(filters.objectAt(1).selectValue, '', 'Filter is reverted to the default value');
    }

    await settled();
    assert.equal(rows.length, 10, 'All rows are shown after clear filter');

  });

  test('filtering with filterWithSelect (without predefinedFilterOptions), `sortFilterOptions` is true', async function (assert) {

    const columns = generateColumns(['index', 'someWord']);
    columns[1].filterWithSelect = true;
    columns[1].sortFilterOptions = true;
    const data = generateContent(10, 1);
    data[data.length - 1].someWord = '';
    const words = data.mapBy('someWord').sort();
    this.setProperties({
      columns,
      data
    });
    await render(hbs`<ModelsTable @data={{data}} @columns={{columns}} />`);

    await filters.objectAt(1).focusSelectFilter();
    assert.deepEqual(filters.objectAt(1).selectOptions, words, 'Options for select are valid');

    await filters.objectAt(1).selectFilter('one');
    assert.equal(rows.length, 1, 'Only one row exist after filtering');

  });

  test('filtering with filterWithSelect (without predefinedFilterOptions), sort by property with boolean values', async function (assert) {

    const columns = generateColumns(['index', 'rand']);
    columns[1].filterWithSelect = true;
    const data = generateContent(10, 1);
    this.setProperties({
      columns,
      data
    });
    await render(hbs`<ModelsTable @data={{data}} @columns={{columns}} />`);

    assert.equal(rows.length, 10, '10 rows exist before filtering');

    await filters.objectAt(1).selectFilter('true');
    assert.equal(rows.length, 5, '5 rows exist after filtering');
    assert.deepEqual(this.ModelsTablePageObject.getColumnCells(1), ['true', 'true', 'true', 'true', 'true'], 'valid rows are shown');

    await filters.objectAt(1).selectFilter('false');
    assert.equal(rows.length, 5, '5 rows exist after filtering (2)');
    assert.deepEqual(this.ModelsTablePageObject.getColumnCells(1), ['false', 'false', 'false', 'false', 'false'], 'valid rows are shown (2)');

  });

  test('filtering with filterWithSelect (with predefinedFilterOptions as primitives)', async function (assert) {

    const columns = generateColumns(['index', 'someWord']);
    columns[1].filterWithSelect = true;
    columns[1].predefinedFilterOptions = ['one', 'two'];
    const data = generateContent(10, 1);

    this.setProperties({
      columns,
      data
    });
    await render(hbs`<ModelsTable @data={{data}} @columns={{columns}} />`);

    await filters.objectAt(1).focusSelectFilter();
    assert.deepEqual(filters.objectAt(1).selectOptions, ['', 'one', 'two'], 'Options for select are valid');

    await filters.objectAt(1).selectFilter('one');
    assert.equal(filters.objectAt(1).selectValue, 'one', 'Proper option is selected');
    assert.equal(rows.length, 1, 'Only one row exist after filtering');

    this.set('data', generateContent(9, 2));

    await filters.objectAt(1).focusSelectFilter();
    assert.equal(filters.objectAt(1).selectValue, 'one', 'Filter is not reverted to the default value');
    assert.deepEqual(filters.objectAt(1).selectOptions, ['', 'one', 'two'], 'Options for select are valid');

    await filters.objectAt(1).clearFilter();

    assert.equal(rows.length, 9, 'All rows are shown after clear filter');

  });

  test('filtering with filterWithSelect (with predefinedFilterOptions as objects)', async function (assert) {

    const columns = generateColumns(['index', 'someWord']);
    columns[1].filterWithSelect = true;
    columns[1].predefinedFilterOptions = [{label: '1', value: 'one'}, {label: '2', value: 'two'}];
    const data = generateContent(10, 1);

    this.setProperties({
      columns,
      data
    });
    await render(hbs`<ModelsTable @data={{data}} @columns={{columns}} />`);
    await filters.objectAt(1).focusSelectFilter();

    assert.deepEqual(filters.objectAt(1).selectOptions, ['', '1', '2'], 'Options for select are valid');

    await filters.objectAt(1).selectFilter('one', undefined, {valueToUse: '1'});
    assert.equal(filters.objectAt(1).selectValue, 'one', 'Proper option is selected');
    assert.equal(rows.length, 1, 'Only one row exist after filtering');

    this.set('data', generateContent(9, 2));

    assert.equal(filters.objectAt(1).selectValue, 'one', 'Filter is not reverted to the default value');
    await filters.objectAt(1).focusSelectFilter();
    assert.deepEqual(filters.objectAt(1).selectOptions, ['', '1', '2'], 'Options for select are valid');

    await filters.objectAt(1).clearFilter();

    assert.equal(rows.length, 9, 'All rows are shown after clear filter');

  });

  test('filtering with filterWithSelect (with predefinedFilterOptions as empty array)', async function (assert) {

    const columns = generateColumns(['index', 'someWord']);
    columns[1].filterWithSelect = true;
    columns[1].predefinedFilterOptions = [];
    const data = generateContent(10, 1);

    this.setProperties({
      columns,
      data
    });
    await render(hbs`<ModelsTable @data={{data}} @columns={{columns}} />`);

    assert.notOk(filters.objectAt(1).selectFilterExists, 'Select-box for column with `filterWithSelect` does not exist if empty predefinedFilterOptions are given');
  });

  test('filtering with filterWithSelect (with predefinedFilterOptions). `filterPlaceholder` is used', async function (assert) {

    const columns = generateColumns(['index', 'someWord']);
    columns[1].filterWithSelect = true;
    columns[1].filterPlaceholder = 'placeholder';
    columns[1].predefinedFilterOptions = [{label: '1', value: 'one'}, {label: '2', value: 'two'}];
    const data = generateContent(10, 1);

    this.setProperties({
      columns,
      data
    });
    await render(hbs`<ModelsTable @data={{data}} @columns={{columns}} />`);

    assert.equal(filters.objectAt(1).selectPlaceholder, 'placeholder');
  });

  test('filtering with filterWithSelect (without predefinedFilterOptions). `filterPlaceholder` is used', async function (assert) {

    const columns = generateColumns(['index', 'someWord']);
    columns[1].filterWithSelect = true;
    columns[1].filterPlaceholder = 'placeholder';
    const data = generateContent(10, 1);

    this.setProperties({
      columns,
      data
    });
    await render(hbs`<ModelsTable @data={{data}} @columns={{columns}} />`);

    assert.equal(filters.objectAt(1).selectPlaceholder, 'placeholder');
  });

  test('filtering with `filteredBy`', async function (assert) {

    const columns = generateColumns(['index', 'index']);
    delete columns[0].propertyName;
    columns[0].filteredBy = 'index';
    this.setProperties({
      columns,
      data: generateContent(10, 1),
      useFilteringByColumns: true
    });
    await render(hbs`<ModelsTable @data={{data}} @columns={{columns}} @useFilteringByColumns={{useFilteringByColumns}} />`);

    await filters.objectAt(1).inputFilter('1');
    assert.deepEqual(this.ModelsTablePageObject.getColumnCells(1), ['1', '10'], 'Content is filtered correctly');

    await filters.objectAt(1).inputFilter('');
    assert.deepEqual(this.ModelsTablePageObject.getColumnCells(1), oneTenArrayDig, 'Filter is empty and All rows are shown');

  });

  test('`filteredBy` has higher priority than `propertyName`', async function (assert) {

    const columns = generateColumns(['someWord']);
    columns[0].filteredBy = 'index';
    this.setProperties({
      columns,
      data: generateContent(10, 1)
    });
    await render(hbs`<ModelsTable @data={{data}} @columns={{columns}} />`);
    await this.ModelsTablePageObject.doGlobalFilter('2');
    assert.deepEqual(this.ModelsTablePageObject.getColumnCells(0), ['two'], 'Content is filtered correctly (global filter)');

    await this.ModelsTablePageObject.doGlobalFilter('');
    await filters.objectAt(0).inputFilter('2');
    assert.deepEqual(this.ModelsTablePageObject.getColumnCells(0), ['two'], 'Content is filtered correctly (filter by column)');

  });

  test('clear filters using icons', async function (assert) {

    const columns = generateColumns(['index', 'someWord']);
    columns[1].filterWithSelect = true;
    const data = generateContent(10, 1);
    this.setProperties({
      columns,
      data
    });

    await render(hbs`<ModelsTable @data={{data}} @columns={{columns}} />`);

    await this.ModelsTablePageObject.doGlobalFilter(2);
    assert.equal(rows.length, 1, 'Global filter is used');
    await this.ModelsTablePageObject.clearGlobalFilter();
    assert.equal(rows.length, data.length, 'Global filter is clear (1)');

    await this.ModelsTablePageObject.doGlobalFilter(2);
    assert.equal(rows.length, 1, 'Global filter is used');
    await this.ModelsTablePageObject.clearAllFilters();
    assert.equal(rows.length, data.length, 'Global filter is clear (2)');

    await filters.objectAt(0).inputFilter(2);
    assert.equal(rows.length, 1, 'Filter for first column is used');
    await this.ModelsTablePageObject.clearAllFilters();
    assert.equal(rows.length, data.length, 'Filter for first column is clear (1)');

    await filters.objectAt(0).inputFilter(2);
    assert.equal(rows.length, 1, 'Filter for first column is used');
    await this.ModelsTablePageObject.clearAllFilters();
    assert.equal(rows.length, data.length, 'Filter for first column is clear (2)');

    await filters.objectAt(1).selectFilter('one');
    assert.equal(rows.length, 1, 'Filter for second column is used');
    await filters.objectAt(1).clearFilter();
    assert.equal(rows.length, data.length, 'Filter for second column is clear (1)');

    await filters.objectAt(1).selectFilter('one');
    assert.equal(rows.length, 1, 'Filter for second column is used');
    await this.ModelsTablePageObject.clearAllFilters();
    assert.equal(rows.length, data.length, 'Filter for second column is clear (2)');

    this.ModelsTablePageObject.doGlobalFilter(2);
    await filters.objectAt(0).inputFilter(2);
    await filters.objectAt(1).selectFilter('two');
    assert.equal(rows.length, 1, 'All filters are used, 1 row shown');
    await this.ModelsTablePageObject.clearAllFilters();
    assert.equal(rows.length, data.length, 'All filters are clear');

  });

  test('all custom messages', async function (assert) {

    const messages = {
      searchLabelMsg: 'Se@rch:',
      columnsTitleMsg: 'ColumnZ',
      columnsShowAllMsg: 'Show Me All!',
      columnsHideAllMsg: 'Hide All!',
      columnsRestoreDefaultsMsg: 'Restore My Columns',
      tableSummaryMsg: 'Now are showing %@ - %@ of %@',
      allColumnsAreHiddenMsg: 'No visible columns, dude!',
      noDataToShowMsg: 'No data. Sorry, bro...',
      editRowButtonLabelMsg: 'Ed1t',
      saveRowButtonLabelMsg: 'S@ve',
      cancelRowButtonLabelMsg: 'Canc3l'
    };

    const messages2 = {
      searchLabelMsg: 'SEARCH',
      columnsTitleMsg: 'COLUMNS',
      columnsShowAllMsg: 'SHOW All',
      columnsHideAllMsg: 'HIDE ALL',
      columnsRestoreDefaultsMsg: 'RESTORE MY COLUMNS',
      tableSummaryMsg: 'DISPLAY %@ - %@ OF %@',
      allColumnsAreHiddenMsg: 'NO COLUMNS',
      noDataToShowMsg: 'NO DATA',
      editRowButtonLabelMsg: 'EDIT',
      saveRowButtonLabelMsg: 'SAVE',
      cancelRowButtonLabelMsg: 'CANCEL'
    };

    this.setProperties({
      columns: generateColumns(['index', 'reversedIndex']),
      data: generateContent(10, 1),
      themeInstance: getThemeClass(this).create(messages)
    });

    await render(hbs`<ModelsTable @data={{data}} @columns={{columns}} @themeInstance={{themeInstance}} />`);

    assert.ok(/Now are showing 1 - 10 of 10( clear)? Clear all filters/.test(this.ModelsTablePageObject.summary), `Summary is valid "${this.ModelsTablePageObject.summary}"`);
    assert.ok(this.ModelsTablePageObject.columnsDropdownLabel.includes(messages.columnsTitleMsg), 'Columns-dropdown title is valid');

    await this.ModelsTablePageObject.toggleColumnDropDown();
    assert.equal(columnsDropDown.objectAt(0).label, messages.columnsShowAllMsg, 'Columns-dropdown "showAll" is valid');
    assert.equal(columnsDropDown.objectAt(1).label, messages.columnsHideAllMsg, 'Columns-dropdown "hideAll" is valid');
    assert.equal(columnsDropDown.objectAt(2).label, messages.columnsRestoreDefaultsMsg, 'Columns-dropdown "restoreDefaults" is valid');
    assert.equal(this.ModelsTablePageObject.globalFilterLabel, messages.searchLabelMsg, 'Global-search label is valid');

    await columnsDropDown.objectAt(1).click();

    assert.deepEqual(this.ModelsTablePageObject.getColumnCells(0), [messages.allColumnsAreHiddenMsg], 'Message about all hidden columns is valid');
    await this.ModelsTablePageObject.openColumnsDropDown();
    await columnsDropDown.objectAt(0).click();
    await this.ModelsTablePageObject.doGlobalFilter('invalid string');

    assert.deepEqual(this.ModelsTablePageObject.getColumnCells(0), [messages.noDataToShowMsg], 'Message about no data is valid');

    this.get('themeInstance').setProperties(messages2);

    await this.ModelsTablePageObject.doGlobalFilter('');

    assert.ok(/DISPLAY 1 - 10 OF 10( clear)?/.test(this.ModelsTablePageObject.summary), `Summary is valid (2) "${this.ModelsTablePageObject.summary}"`);
    await this.ModelsTablePageObject.openColumnsDropDown();
    assert.ok(this.ModelsTablePageObject.columnsDropdownLabel.includes(messages2.columnsTitleMsg), 'Columns-dropdown title is valid (2)');
    assert.equal(columnsDropDown.objectAt(0).label, messages2.columnsShowAllMsg, 'Columns-dropdown "showAll" is valid (2)');
    assert.equal(columnsDropDown.objectAt(1).label, messages2.columnsHideAllMsg, 'Columns-dropdown "hideAll" is valid (2)');
    assert.equal(columnsDropDown.objectAt(2).label, messages2.columnsRestoreDefaultsMsg, 'Columns-dropdown "restoreDefaults" is valid (2)');
    assert.equal(this.ModelsTablePageObject.globalFilterLabel, messages2.searchLabelMsg, 'Global-search label is valid (2)');

    await this.ModelsTablePageObject.openColumnsDropDown();
    await columnsDropDown.objectAt(1).click();

    assert.deepEqual(this.ModelsTablePageObject.getColumnCells(0), [messages2.allColumnsAreHiddenMsg], 'Message about all hidden columns is valid (2)');

    await this.ModelsTablePageObject.openColumnsDropDown();
    await columnsDropDown.objectAt(0).click();
    await this.ModelsTablePageObject.doGlobalFilter('invalid string');

    assert.deepEqual(this.ModelsTablePageObject.getColumnCells(0), [messages2.noDataToShowMsg], 'Message about no data is valid (2)');

  });

  test('custom icons', async function (assert) {

    const customIcons = {
      sortAscIcon: 'sort-asc',
      sortDescIcon: 'sort-desc',
      columnVisibleIcon: 'column-visible',
      columnHiddenIcon: 'column-hidden',
      navFirstIcon: 'nav-first',
      navPrevIcon: 'nav-prev',
      navNextIcon: 'nav-next',
      navLastIcon: 'nav-last'
    };

    this.setProperties({
      columns: generateColumns(['index', 'reversedIndex']),
      data: generateContent(10, 1),
      themeInstance: getThemeClass(this).create(customIcons)
    });

    await render(hbs`<ModelsTable @data={{data}} @columns={{columns}} @themeInstance={{themeInstance}} />`);
    await sorting.objectAt(0).click();

    assert.equal(this.element.querySelectorAll('.sort-asc').length, 1, 'sort asc 1 column');

    await sorting.objectAt(1).click();

    await sorting.objectAt(1).click();
    assert.equal(this.element.querySelectorAll('.sort-asc').length, 1, 'sort asc 1 column');
    assert.equal(this.element.querySelectorAll('.sort-desc').length, 1, 'sort desc 1 column');

    await this.ModelsTablePageObject.toggleColumnDropDown();
    assert.equal(this.element.querySelectorAll('.column-visible').length, 2, 'all columns are visible');
    await this.ModelsTablePageObject.toggleColumnDropDown();

    await this.ModelsTablePageObject.toggleColumnDropDown();
    await columnsDropDown.objectAt(3).click();
    await this.ModelsTablePageObject.openColumnsDropDown();

    assert.equal(this.element.querySelectorAll('.column-visible').length, 1, '1 column is visible');
    assert.equal(this.element.querySelectorAll('.column-hidden').length, 1, '1 column is hidden');

    assert.ok(navigation.btns.objectAt(0).icon.includes('nav-first'), 'First-button has valid class');
    assert.ok(navigation.btns.objectAt(1).icon.includes('nav-prev'), 'Prev-button has valid class');
    assert.ok(navigation.btns.objectAt(2).icon.includes('nav-next'), 'Next-button has valid class');
    assert.ok(navigation.btns.objectAt(3).icon.includes('nav-last'), 'Last-button has valid class');
  });

  test('custom column cell classes', async function (assert) {

    const columns = generateColumns(['index', 'reversedIndex']);
    columns[0].className = 'custom-column-class';
    this.setProperties({
      columns,
      data: generateContent(10, 1)
    });
    await render(hbs`<ModelsTable @data={{data}} @columns={{columns}} />`);

    assert.equal(this.element.querySelectorAll('tbody .custom-column-class').length, 10, 'Custom column class exists on each column cell');

    columns[0].simple = true;
    // force re-render
    await render(hbs`<ModelsTable @data={{data}} @columns={{columns}} />`);

    assert.equal(this.element.querySelectorAll('tbody .custom-column-class').length, 10, 'Custom class for simple column exists on each column cell');

  });

  test('column title auto generation', async function (assert) {

    const columns = generateColumns(['index', 'reversedIndex']);
    columns.setEach('title', null);
    this.setProperties({
      columns,
      data: generateContent(10, 1)
    });
    await render(hbs`<ModelsTable @data={{data}} @columns={{columns}} />`);

    assert.deepEqual(sorting.mapBy('title'), ['Index', 'Reversed index']);

  });

  test('`sortedBy` has higher priority than `propertyName`', async function (assert) {

    const columns = generateColumns(['someWord', 'index']);
    columns[0].sortedBy = 'index';
    this.setProperties({
      columns,
      data: generateContent(10, 1)
    });
    await render(hbs`<ModelsTable @data={{data}} @columns={{columns}} />`);

    await sorting.objectAt(1).click();
    assert.deepEqual(this.ModelsTablePageObject.getColumnCells(1), oneTenArrayDig, 'Content is valid (sorting by `index` desc)');

    await sorting.objectAt(1).click();
    assert.deepEqual(this.ModelsTablePageObject.getColumnCells(1), tenOneArrayDig, 'Content is valid (sorting by `index` asc)');

  });

  test('sorting , custom sort function (multi `true`)', async function (assert) {

    const columns = generateColumns(['index', 'index2']);
    columns[0].sortFunction = function sortEvenFirst(i1, i2) {
      if (i1 % 2 === 0) {
        if (i2 % 2 === 0) {
          return compare(i1, i2);
        }
        return -1
      } else {
        if (i2 % 2 === 0) {
          return 1;
        }
        return compare(i1, i2);
      }
    };

    this.setProperties({
      columns: columns,
      data: generateContent(10, 1)
    });
    await render(hbs`<ModelsTable @data={{data}} @columns={{columns}} />`);
    await sorting.objectAt(0).click();

    assert.deepEqual(this.ModelsTablePageObject.getColumnCells(0), ['2', '4', '6', '8', '10', '1', '3', '5', '7', '9'], 'Content is valid (sorting 1st column asc)');

    await sorting.objectAt(0).click();

    assert.deepEqual(this.ModelsTablePageObject.getColumnCells(0), ['9', '7', '5', '3', '1', '10', '8', '6', '4', '2'], 'Content is valid (sorting 1st column desc)');

    await sorting.objectAt(0).click();
    await sorting.objectAt(1).click();

    assert.deepEqual(this.ModelsTablePageObject.getColumnCells(0), oneTenArrayDig, 'Content is valid (sorting 1st column asc) - restore defaults');
    assert.deepEqual(this.ModelsTablePageObject.getColumnCells(1), ['1', '1', '2', '2', '3', '3', '4', '4', '5', '5'], 'Content is valid (sorting 2nd column asc) - restore defaults');

    await sorting.objectAt(0).click();
    await sorting.objectAt(0).click();

    assert.deepEqual(this.ModelsTablePageObject.getColumnCells(0), ['3', '4', '7', '8', '1', '2', '5', '6', '9', '10'], 'Content is valid (sorting 1st column desc)');
    assert.deepEqual(this.ModelsTablePageObject.getColumnCells(1), ['2', '2', '4', '4', '1', '1', '3', '3', '5', '5'], 'Content is valid (sorting 2nd column asc)');

  });

  test('sorting, custom sort function (multi `false`)', async function (assert) {

    const columns = generateColumns(['index', 'index2']);
    columns[0].sortFunction = function sortEvenFirst(i1, i2) {
      if (i1 % 2 === 0) {
        if (i2 % 2 === 0) {
          return compare(i1, i2);
        }
        return -1
      } else {
        if (i2 % 2 === 0) {
          return 1;
        }
        return compare(i1, i2);
      }
    };

    this.setProperties({
      columns: columns,
      data: generateContent(10, 1)
    });
    await render(hbs`<ModelsTable
      @columns={{columns}}
      @data={{data}}
      @multipleColumnsSorting={{false}}
    />`);
    await sorting.objectAt(0).click();

    assert.deepEqual(this.ModelsTablePageObject.getColumnCells(0), ['2', '4', '6', '8', '10', '1', '3', '5', '7', '9'], 'Content is valid (sorting 1st column asc)');

    await sorting.objectAt(0).click();

    assert.deepEqual(this.ModelsTablePageObject.getColumnCells(0), ['9', '7', '5', '3', '1', '10', '8', '6', '4', '2'], 'Content is valid (sorting 1st column desc)');

    await sorting.objectAt(0).click();
    await sorting.objectAt(1).click();

    assert.deepEqual(this.ModelsTablePageObject.getColumnCells(0), oneTenArrayDig, 'Content is valid (sorting 1st column asc) - restore defaults');
    assert.deepEqual(this.ModelsTablePageObject.getColumnCells(1), ['1', '1', '2', '2', '3', '3', '4', '4', '5', '5'], 'Content is valid (sorting 2nd column asc) - restore defaults');

    await sorting.objectAt(0).click();
    await sorting.objectAt(0).click();

    assert.deepEqual(this.ModelsTablePageObject.getColumnCells(0), ['9', '7', '5', '3', '1', '10', '8', '6', '4', '2'], 'Content is valid (sorting 1st column desc)');
    assert.deepEqual(this.ModelsTablePageObject.getColumnCells(1), ['5', '4', '3', '2', '1', '5', '4', '3', '2', '1'], 'Content is valid (sorting 2nd reverted)');

  });

  test('column is sorted with `sortedBy` when `propertyName` is not provided', async function (assert) {

    const columns = generateColumns(['index', 'index2']);
    columns[1].sortedBy = 'index';
    delete columns[1].propertyName;
    columns[1].component = 'custom-concat';

    this.setProperties({
      columns,
      data: generateContent(3, 1).reverse()
    });
    await render(hbs`<ModelsTable @columns={{columns}} @data={{data}} @multipleColumnsSorting={{false}} />`);

    await sorting.objectAt(1).click();
    assert.deepEqual(this.ModelsTablePageObject.getColumnCells(1), ['1+3', '2+2', '3+1'], 'Content is sorted by `index`');

  });

  test('table is sorted by first column with `propertyName` or `sortedBy` by default, according to sortDirection', async function (assert) {

    const data = generateContent(10, 1).reverse();
    const columns = generateColumns(['index']);
    columns[0].sortPrecedence = 0;
    columns[0].sortDirection = 'asc';

    this.setProperties({
      data,
      columns
    });
    await render(hbs`<ModelsTable @data={{data}} @columns={{columns}} />`);

    assert.deepEqual(this.ModelsTablePageObject.getColumnCells(0), oneTenArrayDig, 'Content is sorted correctly');

  });

  test('table is not sorted by first column with `propertyName` or `sortedBy` by default', async function (assert) {

    const data = generateContent(10, 1).reverse();
    const columns = generateColumns(['indexWithHtml', 'index']);
    delete columns[0].propertyName;

    this.setProperties({
      data,
      columns
    });
    await render(hbs`<ModelsTable @data={{data}} @columns={{columns}} />`);

    assert.deepEqual(this.ModelsTablePageObject.getColumnCells(1), tenOneArrayDig, 'Content is sorted correctly');

  });

  test('visible page numbers', async function (assert) {

    this.setProperties({
      data: generateContent(10, 1),
      columns: generateColumns(['index']),
      currentPageNumber: 1,
      useNumericPagination: true,
      pageSize: 1
    });

    await render(
      hbs`<ModelsTable @data={{data}} @columns={{columns}} @currentPageNumber={{currentPageNumber}} @pageSize={{pageSize}} @useNumericPagination={{useNumericPagination}} />`
    );

    A([
      {
        currentPageNumber: 1,
        visiblePageNumbers: [{label: 1, isLink: true, isActive: true}, {
          label: 2,
          isLink: true,
          isActive: false
        }, {label: '...', isLink: false, isActive: false}, {label: 10, isLink: true, isActive: false}]
      },
      {
        currentPageNumber: 2,
        visiblePageNumbers: [{label: 1, isLink: true, isActive: false}, {
          label: 2,
          isLink: true,
          isActive: true
        }, {label: 3, isLink: true, isActive: false}, {label: '...', isLink: false, isActive: false}, {
          label: 10,
          isLink: true,
          isActive: false
        }]
      },
      {
        currentPageNumber: 3,
        visiblePageNumbers: [{label: 1, isLink: true, isActive: false}, {
          label: 2,
          isLink: true,
          isActive: false
        }, {label: 3, isLink: true, isActive: true}, {label: 4, isLink: true, isActive: false}, {
          label: '...',
          isLink: false,
          isActive: false
        }, {label: 10, isLink: true, isActive: false}]
      },
      {
        currentPageNumber: 4,
        visiblePageNumbers: [{label: 1, isLink: true, isActive: false}, {
          label: '...',
          isLink: false,
          isActive: false
        }, {label: 3, isLink: true, isActive: false}, {label: 4, isLink: true, isActive: true}, {
          label: 5,
          isLink: true,
          isActive: false
        }, {label: '...', isLink: false, isActive: false}, {label: 10, isLink: true, isActive: false}]
      },
      {
        currentPageNumber: 5,
        visiblePageNumbers: [{label: 1, isLink: true, isActive: false}, {
          label: '...',
          isLink: false,
          isActive: false
        }, {label: 4, isLink: true, isActive: false}, {label: 5, isLink: true, isActive: true}, {
          label: 6,
          isLink: true,
          isActive: false
        }, {label: '...', isLink: false, isActive: false}, {label: 10, isLink: true, isActive: false}]
      },
      {
        currentPageNumber: 6,
        visiblePageNumbers: [{label: 1, isLink: true, isActive: false}, {
          label: '...',
          isLink: false,
          isActive: false
        }, {label: 5, isLink: true, isActive: false}, {label: 6, isLink: true, isActive: true}, {
          label: 7,
          isLink: true,
          isActive: false
        }, {label: '...', isLink: false, isActive: false}, {label: 10, isLink: true, isActive: false}]
      },
      {
        currentPageNumber: 7,
        visiblePageNumbers: [{label: 1, isLink: true, isActive: false}, {
          label: '...',
          isLink: false,
          isActive: false
        }, {label: 6, isLink: true, isActive: false}, {label: 7, isLink: true, isActive: true}, {
          label: 8,
          isLink: true,
          isActive: false
        }, {label: '...', isLink: false, isActive: false}, {label: 10, isLink: true, isActive: false}]
      },
      {
        currentPageNumber: 8,
        visiblePageNumbers: [{label: 1, isLink: true, isActive: false}, {
          label: '...',
          isLink: false,
          isActive: false
        }, {label: 7, isLink: true, isActive: false}, {label: 8, isLink: true, isActive: true}, {
          label: 9,
          isLink: true,
          isActive: false
        }, {label: 10, isLink: true, isActive: false}]
      },
      {
        currentPageNumber: 9,
        visiblePageNumbers: [{label: 1, isLink: true, isActive: false}, {
          label: '...',
          isLink: false,
          isActive: false
        }, {label: 8, isLink: true, isActive: false}, {label: 9, isLink: true, isActive: true}, {
          label: 10,
          isLink: true,
          isActive: false
        }]
      },
      {
        currentPageNumber: 10,
        visiblePageNumbers: [{label: 1, isLink: true, isActive: false}, {
          label: '...',
          isLink: false,
          isActive: false
        }, {label: 9, isLink: true, isActive: false}, {label: 10, isLink: true, isActive: true}]
      }
    ]).forEach(test => {
      this.set('currentPageNumber', test.currentPageNumber);
      assert.deepEqual(navigation.navigationButtons, A(test.visiblePageNumbers).mapBy('label').map(c => `${c}`), `10 pages, active is ${test.currentPageNumber}`);
    }, this);

    this.set('data', generateContent(10, 1));
    this.set('pageSize', 10);

    assert.deepEqual(navigation.navigationButtons, ['1'], 'Only 1 page');

  });

  test('visible page numbers with #collapseNumPaginationForPagesCount', async function (assert) {
    this.set('data', generateContent(40, 1));
    this.set('columns', generateColumns(['index']));
    this.set('collapseNumPaginationForPagesCount', 4);
    await render(
      hbs`<ModelsTable @data={{data}} @columns={{columns}} @useNumericPagination={{true}} @collapseNumPaginationForPagesCount={{collapseNumPaginationForPagesCount}} />`
    );

    assert.deepEqual(this.ModelsTablePageObject.numericNavigation.mapBy('text'), ['1', '2', '3', '4']);

    this.set('collapseNumPaginationForPagesCount', 1);
    assert.deepEqual(this.ModelsTablePageObject.numericNavigation.mapBy('text'), ['1', '2', '...', '4']);
  });

  test('#event on user interaction (filtering by column)', async function (assert) {

    this.setProperties({
      columns: generateColumns(['index', 'someWord']),
      data: generateContent(10, 1),
      displayDataChangedAction: 'displayDataChanged'
    });

    this.actions.displayDataChanged = function (data) {
      assert.deepEqual(data.columnFilters, {someWord: 'One'});
      assert.deepEqual(data.columns, [
        {propertyName: 'index', filterField: 'index', sortField: 'index', filterString: '', sorting: 'none'},
        {propertyName: 'someWord', filterField: 'someWord', sortField: 'someWord', filterString: 'One', sorting: 'none'}
      ]);
    };

    await render(
      hbs`<ModelsTable @columns={{columns}} @data={{data}} @displayDataChangedAction={{action "displayDataChanged"}} />`
    );
    await filters.objectAt(1).inputFilter('One');

  });

  test('#event on user interaction (global filtering))', async function (assert) {

    this.setProperties({
      columns: generateColumns(['index', 'someWord']),
      data: generateContent(10, 1),
    });

    this.actions.displayDataChanged = function (data) {
      assert.equal(data.filterString, 'One');
    };

    await render(
      hbs`<ModelsTable @columns={{columns}} @data={{data}} @displayDataChangedAction={{action "displayDataChanged"}} />`
    );
    await this.ModelsTablePageObject.doGlobalFilter('One');
  });

  test('#event on user interaction (sorting)', async function (assert) {

    this.setProperties({
      columns: generateColumns(['index', 'someWord']),
      data: generateContent(10, 1)
    });

    this.actions.displayDataChanged = function (data) {
      assert.deepEqual(data.sort, ['index:asc']);
      assert.deepEqual(data.columns, [
        {propertyName: 'index', filterField: 'index', sortField: 'index', filterString: '', sorting: 'asc'},
        {propertyName: 'someWord', filterField: 'someWord', sortField: 'someWord', filterString: '', sorting: 'none'}
      ]);
    };

    await render(
      hbs`<ModelsTable @columns={{columns}} @data={{data}} @displayDataChangedAction={{action "displayDataChanged"}} />`
    );
    await sorting.objectAt(0).click();
  });

  test('#event on user interaction (expanding rows)', async function (assert) {

    const columns = generateColumns(['id']);
    const records = generateContent(30, 1);
    columns.splice(0, 0, {
      component: 'models-table/expand-toggle',
      mayBeHidden: false
    });
    this.setProperties({
      columns,
      data: records
    });

    this.actions.displayDataChanged = function (data) {
      assert.deepEqual(data.expandedItems, [records[0]]);
    };

    await render(
      hbs`<ModelsTable @columns={{columns}} @data={{data}} @displayDataChangedAction={{action "displayDataChanged"}} @expandedRowComponent={{component "expanded-row"}} />`
    );
    await rows.objectAt(0).expand();

  });

  test('#event on user interaction (selecting rows)', async function (assert) {

    const records = generateContent(30, 1);
    this.setProperties({
      columns: generateColumns(['id']),
      data: records
    });

    this.actions.displayDataChanged = function (data) {
      assert.deepEqual(data.selectedItems, [records[0]]);
    };

    await render(
      hbs`<ModelsTable @columns={{columns}} @data={{data}} @displayDataChangedAction={{action "displayDataChanged"}} />`
    );
    await rows.objectAt(0).click();

  });

  test('#event on user interaction (clear all filters)', async function (assert) {

    assert.expect(6);
    const calls = [
      // after filter by first column
      {
        filterString: '',
        columnFilters: {id: '1'}
      },
      // after global filter
      {
        filterString: '1',
        columnFilters: {id: '1'}
      },
      // after clear all this.ModelsTablePageObject.filters
      {
        filterString: '',
        columnFilters: {}
      }
    ];
    let indx = 0;
    this.setProperties({
      columns: generateColumns(['id']),
      data: generateContent(30, 1)
    });

    this.actions.displayDataChanged = function (settings) {
      const call = calls[indx];
      assert.equal(call.filterString, settings.filterString, `#${indx + 1}. filterString`);
      assert.deepEqual(call.columnFilters, settings.columnFilters, `#${indx + 1}. columnFilters`);
      indx++;
    };

    await render(
      hbs`<ModelsTable @columns={{columns}} @data={{data}} @displayDataChangedAction={{action "displayDataChanged"}} />`
    );
    await filters.objectAt(0).inputFilter(1);
    await this.ModelsTablePageObject.doGlobalFilter(1);
    await this.ModelsTablePageObject.clearAllFilters();
  });

  test('#event on user interaction (toggle all columns visibility)', async function (assert) {
    assert.expect(2);
    const expects = [
      [
        {propertyName: 'index', isHidden: true, mayBeHidden: true},
        {propertyName: 'reversedIndex', isHidden: true, mayBeHidden: true}
      ],
      [
        {propertyName: 'index', isHidden: false, mayBeHidden: true},
        {propertyName: 'reversedIndex', isHidden: false, mayBeHidden: true}
      ]
    ];
    let i = 0;
    this.setProperties({
      columns: generateColumns(['index', 'reversedIndex']),
      data: generateContent(10, 1)
    });
    this.actions.onVisibilityChange = function (data) {
      assert.deepEqual(data, expects[i++]);
    };
    await render(
      hbs`<ModelsTable @columns={{columns}} @data={{data}} @columnsVisibilityChangedAction={{action "onVisibilityChange"}} />`
    );
    await this.ModelsTablePageObject.toggleColumnDropDown();
    await columnsDropDown.objectAt(1).click(); // hide all
    await this.ModelsTablePageObject.openColumnsDropDown();
    await columnsDropDown.objectAt(0).click(); // show all
  });

  test('#event on user interaction (toggle single column visibility)', async function (assert) {
    assert.expect(2);
    const expects = [
      [
        {propertyName: 'index', isHidden: true, mayBeHidden: true},
        {propertyName: 'reversedIndex', isHidden: false, mayBeHidden: true}
      ],
      [
        {propertyName: 'index', isHidden: false, mayBeHidden: true},
        {propertyName: 'reversedIndex', isHidden: false, mayBeHidden: true}
      ]
    ];
    let i = 0;
    this.setProperties({
      columns: generateColumns(['index', 'reversedIndex']),
      data: generateContent(10, 1)
    });
    this.actions.onVisibilityChange = function (data) {
      assert.deepEqual(data, expects[i++]);
    };
    await render(
      hbs`<ModelsTable @columns={{columns}} @data={{data}} @columnsVisibilityChangedAction={{action "onVisibilityChange"}} />`
    );
    await this.ModelsTablePageObject.toggleColumnDropDown();
    await columnsDropDown.objectAt(3).click(); // hide 1st column
    await this.ModelsTablePageObject.openColumnsDropDown();
    await columnsDropDown.objectAt(3).click(); // show 1st column
  });

  test('#event on user interaction (restore default columns visibility)', async function (assert) {
    assert.expect(3);
    const expects = [
      [
        {propertyName: 'index', isHidden: false, mayBeHidden: true},
        {propertyName: 'reversedIndex', isHidden: false, mayBeHidden: true}
      ],
      [
        {propertyName: 'index', isHidden: true, mayBeHidden: true},
        {propertyName: 'reversedIndex', isHidden: false, mayBeHidden: true}
      ],
      [
        {propertyName: 'index', isHidden: true, mayBeHidden: true},
        {propertyName: 'reversedIndex', isHidden: false, mayBeHidden: true}
      ]
    ];
    let i = 0;
    const columns = generateColumns(['index', 'reversedIndex']);
    columns[0].isHidden = true;
    this.setProperties({
      columns,
      data: generateContent(10, 1)
    });
    this.actions.onVisibilityChange = function (data) {
      assert.deepEqual(data, expects[i++]);
    };
    await render(
      hbs`<ModelsTable @columns={{columns}} @data={{data}} @columnsVisibilityChangedAction={{action "onVisibilityChange"}} />`
    );
    await this.ModelsTablePageObject.toggleColumnDropDown();
    await columnsDropDown.objectAt(3).click(); // show 1st column
    await this.ModelsTablePageObject.openColumnsDropDown();
    await columnsDropDown.objectAt(2).click(); // restore defaults
  });

  test('#event on user interaction (toggle columns set visibility)', async function (assert) {
    assert.expect(4);
    const expects = [
      [
        {propertyName: 'index', isHidden: true, mayBeHidden: true},
        {propertyName: 'index2', isHidden: false, mayBeHidden: true},
        {propertyName: 'id', isHidden: false, mayBeHidden: true}
      ],
      [
        {propertyName: 'index', isHidden: true, mayBeHidden: true},
        {propertyName: 'index2', isHidden: false, mayBeHidden: true},
        {propertyName: 'id', isHidden: true, mayBeHidden: true}
      ],
      [
        {propertyName: 'index', isHidden: false, mayBeHidden: true},
        {propertyName: 'index2', isHidden: false, mayBeHidden: true},
        {propertyName: 'id', isHidden: true, mayBeHidden: true}
      ],
      [
        {propertyName: 'index', isHidden: false, mayBeHidden: true},
        {propertyName: 'index2', isHidden: false, mayBeHidden: true},
        {propertyName: 'id', isHidden: false, mayBeHidden: true}
      ]
    ];
    let i = 0;
    this.setProperties({
      columns: generateColumns(['index', 'index2', 'id']),
      data: generateContent(10, 1),
      columnSets: [
        {
          label: 'Set 1',
          showColumns: ['index', 'id'],
          toggleSet: true
        }
      ]
    });
    this.actions.onVisibilityChange = function (data) {
      assert.deepEqual(data, expects[i++]);
    };

    await render(
      hbs`<ModelsTable @columns={{columns}} @data={{data}} @columnSets={{columnSets}} @columnsVisibilityChangedAction={{action "onVisibilityChange"}} />`
    );
    await this.ModelsTablePageObject.toggleColumnDropDown();
    await columnsDropDown.objectAt(3).click(); // hide 1st columns set
    await this.ModelsTablePageObject.openColumnsDropDown();
    await columnsDropDown.objectAt(3).click(); // show 1st columns set
  });

  test('#event on user interaction (page size changing)', async function (assert) {
    assert.expect(2);
    const expects = [
      25,
      50
    ];
    let i = 0;
    this.setProperties({
      columns: generateColumns(['index', 'reversedIndex']),
      data: generateContent(10, 1)
    });
    this.actions.displayDataChanged = function (data) {
      assert.equal(data.pageSize, expects[i++]);
    };
    await render(
      hbs`<ModelsTable @columns={{columns}} @data={{data}} @displayDataChangedAction={{action "displayDataChanged"}} />`
    );
    await this.ModelsTablePageObject.changePageSize(25);
    await this.ModelsTablePageObject.changePageSize(50);
  });

  test('show first page if for some reasons there is no content for current page, but table data exists', async function (assert) {

    assert.expect(1);

    const data = generateContent(11, 1);
    const columns = generateColumns(['index', 'indexWithHtml']);
    columns.push({
      title: 'Delete',
      component: 'deleteRow'
    });
    const self = this;
    this.setProperties({
      data,
      columns
    });
    this.actions.deleteRecord = function (record) {
      self.set('data', data.without(record));
    };
    await render(hbs`<ModelsTable
      @data={{data}}
      @columns={{columns}}
      @columnComponents={{hash
        deleteRow=(
          component "delete-row-comp"
          onClick=(action "deleteRecord")
        )
      }}
    />`);
    // move to the 2nd page and delete 1 row there
    await navigation.goToNextPage();
    await click('td button');
    assert.ok(/Show 1 - 10 of 10( clear)? Clear all filters/.test(this.ModelsTablePageObject.summary), `First page is shown "${this.ModelsTablePageObject.summary}"`);
  });

  test('row deleted in the middle page', async function (assert) {

    assert.expect(1);

    const data = generateContent(31, 1);
    const columns = generateColumns(['index', 'indexWithHtml']);
    columns.push({
      title: 'Delete',
      component: 'deleteRow'
    });
    const self = this;
    this.setProperties({
      data,
      columns
    });
    this.actions.deleteRecord = function (record) {
      self.set('data', data.without(record));
    };
    await render(hbs`<ModelsTable
      @data={{data}}
      @columns={{columns}}
      @columnComponents={{hash
        deleteRow=(
          component "delete-row-comp"
          onClick=(action "deleteRecord")
        )
      }}
    />`);
    // move to the 2nd page and delete 1 row there
    await navigation.goToNextPage();
    await click('td button');
    assert.ok(/Show 11 - 20 of 30( clear)? Clear all filters/.test(this.ModelsTablePageObject.summary), `Second page is shown "${this.ModelsTablePageObject.summary}"`);
  });

  test('updateable columns (disabled)', async function (assert) {

    const columns1 = generateColumns(['index', 'someWord']);
    const columns2 = generateColumns(['index', 'index2', 'someWord']);

    this.setProperties({
      columns: columns1,
      data: generateContent(10, 1),
      columnsAreUpdateable: false
    });

    await render(hbs`<ModelsTable @columns={{columns}} @data={{data}} @columnsAreUpdateable={{columnsAreUpdateable}} />`);
    await filters.objectAt(0).inputFilter('1');
    await sorting.objectAt(0).click();
    await this.ModelsTablePageObject.toggleColumnDropDown();
    assert.deepEqual(sorting.mapBy('title'), ['index', 'someWord'], 'two columns are shown');
    assert.deepEqual(columnsDropDown.mapBy('label'), ['Show All', 'Hide All', 'Restore Defaults', 'index', 'someWord'], 'two columns are in columns dropdown');

    this.set('columns', columns2);
    assert.deepEqual(sorting.mapBy('title'), ['index', 'someWord'], 'columns are not updated');
    assert.deepEqual(columnsDropDown.mapBy('label'), ['Show All', 'Hide All', 'Restore Defaults', 'index', 'someWord'], 'columns dropdown is not updated');
    assert.equal(filters.objectAt(0).inputValue, '1', 'column filter was not dropped');
    assert.ok(sorting.objectAt(0).isSorted, 'column sorting was not dropped');
  });

  test('updateable columns (enabled)', async function (assert) {

    const columns1 = generateColumns(['index', 'someWord']);
    const columns2 = generateColumns(['index', 'index2', 'someWord']);

    this.setProperties({
      columns: columns1,
      data: generateContent(10, 1),
      columnsAreUpdateable: true
    });

    await render(hbs`<ModelsTable @columns={{columns}} @data={{data}} @columnsAreUpdateable={{columnsAreUpdateable}} />`);
    await this.ModelsTablePageObject.toggleColumnDropDown();
    assert.deepEqual(sorting.mapBy('title'), ['index', 'someWord'], 'two columns are shown');
    assert.deepEqual(columnsDropDown.mapBy('label'), ['Show All', 'Hide All', 'Restore Defaults', 'index', 'someWord'], 'two columns are in columns dropdown');
    await filters.objectAt(0).inputFilter('1');
    await sorting.objectAt(0).click();

    this.set('columns', columns2);
    await this.ModelsTablePageObject.openColumnsDropDown();
    assert.deepEqual(sorting.mapBy('title'), ['index', 'index2', 'someWord'], 'columns are updated');
    assert.deepEqual(columnsDropDown.mapBy('label'), ['Show All', 'Hide All', 'Restore Defaults', 'index', 'index2', 'someWord'], 'columns dropdown is updated');
    assert.equal(filters.objectAt(0).inputValue, '', 'column filter was dropped');

  });

  test('filtering with `doFilteringByHiddenColumns` = false', async function (assert) {

    this.setProperties({
      columns: generateColumns(['index', 'someWord']),
      data: generateContent(10, 1),
      doFilteringByHiddenColumns: false
    });

    await render(
      hbs`<ModelsTable @columns={{columns}} @data={{data}} @doFilteringByHiddenColumns={{doFilteringByHiddenColumns}} />`
    );

    await this.ModelsTablePageObject.toggleColumnDropDown();
    await columnsDropDown.objectAt(4).click();
    await this.ModelsTablePageObject.doGlobalFilter('one');

    assert.deepEqual(this.ModelsTablePageObject.getColumnCells(0), ['No records to show'], 'Content is not changed');

    this.set('doFilteringByHiddenColumns', true);
    assert.deepEqual(this.ModelsTablePageObject.getColumnCells(0), ['No records to show'], 'Content is not changed after `doFilteringByHiddenColumns` updating');

    await this.ModelsTablePageObject.doGlobalFilter('');
    await this.ModelsTablePageObject.doGlobalFilter('one');

    assert.deepEqual(this.ModelsTablePageObject.getColumnCells(0), ['1'], 'Content is filtered');

  });

  test('grouped headers', async function (assert) {

    this.setProperties({
      columns: generateColumns(['index', 'index2', 'reversedIndex', 'indexWithHtml', 'someWord']),
      data: generateContent(10, 1),
      groupedHeaders: [
        [{title: 'BigTitle', colspan: 5}],
        [{title: 'SubTitle1', colspan: 2}, {title: 'SubTitle2', colspan: 3}]
      ]
    });

    await render(hbs`<ModelsTable @columns={{columns}} @data={{data}} @groupedHeaders={{groupedHeaders}} />`);

    assert.deepEqual(headers.objectAt(0).cells, ['BigTitle']);
    assert.deepEqual(headers.objectAt(0).colspans, ['5']);

    assert.deepEqual(headers.objectAt(1).cells, ['SubTitle1', 'SubTitle2']);
    assert.deepEqual(headers.objectAt(1).colspans, ['2', '3']);

  });

  test('#block render grouped-header', async function (assert) {
    this.setProperties({
      columns: generateColumns(['index', 'index2', 'reversedIndex', 'indexWithHtml', 'someWord']),
      data: generateContent(10, 1),
      groupedHeaders: [
        [{title: 'BigTitle', colspan: 5}],
        [{title: 'SubTitle1', colspan: 2}, {title: 'SubTitle2', colspan: 3}]
      ]
    });

    await render(hbs`<ModelsTable
      @columns={{columns}}
      @data={{data}} as |MT|>
      <MT.Table as |Table|>
        <Table.Header as |Header|>
          {{#each groupedHeaders as |groupedHeader|}}
            <Header.GroupedHeader @groupedHeader={{groupedHeader}} as |GroupedHeader|>
              {{#each GroupedHeader.groupedHeader as |cell|}}
                <th colspan={{cell.colspan}} rowspan={{cell.rowspan}}>{{cell.title}}</th>
              {{/each}}
            </Header.GroupedHeader>
          {{/each}}
        </Table.Header>
      </MT.Table>
    </ModelsTable>`);

    assert.deepEqual(headers.objectAt(0).cells, ['BigTitle']);
    assert.deepEqual(headers.objectAt(0).colspans, ['5']);

    assert.deepEqual(headers.objectAt(1).cells, ['SubTitle1', 'SubTitle2']);
    assert.deepEqual(headers.objectAt(1).colspans, ['2', '3']);
  });

  test('expandable rows (multipleExpand = true)', async function (assert) {

    const columns = generateColumns(['id']);
    columns.splice(0, 0, {
      component: 'models-table/expand-toggle',
      mayBeHidden: false
    });
    this.setProperties({
      columns,
      data: generateContent(30, 1)
    });

    await render(
      hbs`<ModelsTable @columns={{columns}} @data={{data}} @expandedRowComponent={{component "expanded-row"}} @multipleExpand={{true}} />`
    );

    assert.equal(this.ModelsTablePageObject.collapseRowButtons, 0, 'All rows are collapsed by default');

    await rows.objectAt(0).expand();
    assert.ok(rows.objectAt(0).expanded, 'First row is expanded');
    assert.equal(this.element.querySelectorAll('.expand-0').length, 1, 'Expanded row content exists');
    assert.equal(this.element.querySelectorAll('.expand-0 .id').length, 1, 'Expanded row content is valid');

    await rows.objectAt(1).expand();
    assert.ok(rows.objectAt(0).expanded, 'First row is still expanded');
    assert.ok(rows.objectAt(1).expanded, 'Second row is expanded');

    await rows.objectAt(0).collapse();
    assert.ok(rows.objectAt(0).collapsed, 'First row is collapsed');
    assert.ok(rows.objectAt(1).expanded, 'Second row is still expanded');

    await rows.objectAt(1).collapse();
    assert.ok(rows.objectAt(1).collapsed, 'Second row is collapsed');

    await rows.objectAt(0).expand();
    await navigation.goToNextPage();
    assert.ok(rows.objectAt(0).collapsed, 'First row on the second page is collapsed');

  });

  test('expandable rows (multipleExpand = true, expand All rows)', async function (assert) {

    defineProperty(this, 'expandedItems', computed('flag', 'data.@each.index1', function () {
      return get(this, 'flag') ? get(this, 'data').filter((itemn, index) => index % 2 === 0) : A([]);
    }).readOnly());

    const columns = generateColumns(['id']);
    columns.splice(0, 0, {
      component: 'models-table/expand-toggle',
      componentForFilterCell: 'models-table/expand-all-toggle',
      mayBeHidden: false
    });
    this.setProperties({
      columns,
      flag: false,
      data: generateContent(30, 1)
    });

    await render(
      hbs`<ModelsTable @columns={{columns}} @data={{data}} @expandedRowComponent={{component "expanded-row"}} @multipleExpand={{true}} />`
    );
    assert.equal(this.ModelsTablePageObject.collapseRowButtons, 0, 'All rows are collapsed by default');

    await this.ModelsTablePageObject.expandAllRows();
    assert.equal(rows.filterBy('expanded').length, 10, 'All rows are expanded');
    assert.deepEqual(this.ModelsTablePageObject.rowExpands.mapBy('id'), oneTenArrayDig, 'Expanded rows content is valid');

    await this.ModelsTablePageObject.collapseAllRows();
    assert.equal(rows.filterBy('expanded').length, 0, 'All rows are collapsed');

    await this.ModelsTablePageObject.expandAllRows();
    await navigation.goToNextPage();
    assert.equal(rows.filterBy('expanded').length, 0, 'All rows on the second page are collapsed');

  });

  test('expandable rows (multipleExpand = false)', async function (assert) {

    let columns = generateColumns(['id']);
    columns.splice(0, 0, {
      component: 'models-table/expand-toggle',
      mayBeHidden: false
    });
    this.setProperties({
      columns,
      data: generateContent(30, 1)
    });

    await render(
      hbs`<ModelsTable @columns={{columns}} @data={{data}} @expandedRowComponent={{component "expanded-row"}} @multipleExpand={{false}} />`
    );

    assert.equal(this.ModelsTablePageObject.collapseRowButtons, 0, 'All rows are collapsed by default');

    await rows.objectAt(0).expand();
    assert.ok(rows.objectAt(0).expanded, 'First row is expanded');
    assert.equal(this.ModelsTablePageObject.rowExpands.objectAt(0).id, '1', 'Expanded row content is valid');

    await rows.objectAt(1).expand();
    assert.ok(rows.objectAt(0).collapsed, 'First row is collapsed');
    assert.ok(rows.objectAt(1).expanded, 'Second row is expanded');

    await rows.objectAt(1).collapse();
    assert.ok(rows.objectAt(1).collapsed, 'Second row is collapsed');

    await rows.objectAt(0).expand();
    await navigation.goToNextPage();
    assert.ok(rows.objectAt(0).collapsed, 'First row on the second page is collapsed');

  });

  test('#251 expand is dropped if expanded row is filtered out', async function (assert) {
    let columns = generateColumns(['id']);
    columns.splice(0, 0, {
      component: 'models-table/expand-toggle',
      mayBeHidden: false
    });
    this.setProperties({
      columns,
      data: generateContent(30, 1)
    });

    await render(
      hbs`<ModelsTable @columns={{columns}} @data={{data}} @expandedRowComponent={{component "expanded-row"}} @multipleExpand={{false}} />`
    );

    assert.equal(this.ModelsTablePageObject.collapseRowButtons, 0, 'All rows are collapsed by default');

    await rows.objectAt(0).expand();
    assert.ok(rows.objectAt(0).expanded, 'First row is expanded');

    await filters.objectAt(1).inputFilter('4');

    assert.equal(this.ModelsTablePageObject.rowExpands.length, 0, 'Expanded row is filtered out');

    await filters.objectAt(1).clearFilter();
    assert.ok(rows.objectAt(0).expanded, 'First row is expanded after filter is dropped');
  });

  test('selectable rows (multipleSelect = true)', async function (assert) {

    const checkboxColumn = {
      component: 'models-table/row-select-checkbox',
      useFilter: false,
      mayBeHidden: false,
      componentForSortCell: 'models-table/row-select-all-checkbox'
    };

    const columns = generateColumns(['id']);
    columns.unshift(checkboxColumn);

    this.setProperties({
      data: generateContent(30, 1),
      columns
    });
    await render(hbs`<ModelsTable @data={{data}} @columns={{columns}} @multipleSelect={{true}} />`);

    assert.equal(rows.filterBy('selected').length, 0, 'No selected rows by default');

    await rows.objectAt(0).click();
    assert.ok(rows.objectAt(0).selected, 'First row is selected');

    await rows.objectAt(1).click();
    assert.ok(rows.objectAt(0).selected, 'First row is still selected');
    assert.ok(rows.objectAt(1).selected, 'Second row is selected');

    await rows.objectAt(0).click();
    assert.notOk(rows.objectAt(0).selected, 'First row is not selected');
    assert.ok(rows.objectAt(1).selected, 'Second row is selected');

    await rows.objectAt(1).click();
    assert.notOk(rows.objectAt(0).selected, 'First row still is not selected');
    assert.notOk(rows.objectAt(1).selected, 'Second row is not selected');

    await this.ModelsTablePageObject.toggleAllSelection();
    assert.equal(rows.filter(r => r.selected).length, 10, 'All rows are selected');

    await this.ModelsTablePageObject.toggleAllSelection();
    assert.equal(rows.filter(r => r.selected).length, 0, 'All rows are not selected');

  });

  test('selectable rows (multipleSelect = false)', async function (assert) {

    this.setProperties({
      data: generateContent(30, 1),
      columns: generateColumns(['id'])
    });
    await render(hbs`<ModelsTable @data={{data}} @columns={{columns}} @multipleSelect={{false}} />`);

    assert.equal(rows.filterBy('selected').length, 0, 'No selected rows by default');

    await rows.objectAt(0).click();
    assert.ok(rows.objectAt(0).selected, 'First row is selected');

    await rows.objectAt(1).click();
    assert.notOk(rows.objectAt(0).selected, 'First row is not selected');
    assert.ok(rows.objectAt(1).selected, 'Second row is selected');

    await rows.objectAt(0).click();
    assert.ok(rows.objectAt(0).selected, 'First row is selected');
    assert.notOk(rows.objectAt(1).selected, 'Second row is not selected');

    await rows.objectAt(1).click();
    assert.notOk(rows.objectAt(0).selected, 'First row is not selected');
    assert.ok(rows.objectAt(1).selected, 'Second row is selected');

  });

  test('row-expand should trigger select/deselect row', async function (assert) {

    let columns = generateColumns(['index']);
    columns = [{
      component: 'models-table/expand-toggle',
      mayBeHidden: false
    }, ...columns];
    this.setProperties({
      columns,
      data: generateContent(30, 1)
    });

    await render(hbs`<ModelsTable @data={{data}} @columns={{columns}} @expandedRowComponent={{component "expanded-row"}} />`);

    await rows.objectAt(0).expand();
    await rows.objectAt(0).click();
    assert.ok(rows.objectAt(0).expanded, 'First row is expanded');
    assert.ok(this.ModelsTablePageObject.rowExpands.objectAt(0).selected, 'First row expand is selected');
    assert.ok(rows.objectAt(0).selected, 'First row is selected');

    await this.ModelsTablePageObject.rowExpands.objectAt(0).click();
    assert.notOk(rows.objectAt(0).selected, 'First row is not selected');
    assert.notOk(this.ModelsTablePageObject.rowExpands.objectAt(0).selected, 'First row expand is not selected');

    await this.ModelsTablePageObject.rowExpands.objectAt(0).click();
    assert.ok(rows.objectAt(0).selected, 'First row is selected');
    assert.ok(this.ModelsTablePageObject.rowExpands.objectAt(0).selected, 'First row expand is selected');

  });

  test('rows may be preselected with `selectedItems`', async function (assert) {
    const data = generateContent(30, 1);
    defineProperty(this, 'selectedItems', computed('flag', 'data.@each.index1', function () {
      return get(this, 'flag') ? get(this, 'data').filter((itemn, index) => index % 2 === 0) : A([]);
    }).readOnly());

    this.setProperties({
      columns: generateColumns(['index1', 'index2']),
      flag: true,
      data
    });

    await render(hbs`<ModelsTable @data={{data}} @columns={{columns}} @selectedItems={{selectedItems}} />`);

    assert.equal(rows.filterBy('selected').length, 5, 'rows are initially selected correctly');

    await rows.objectAt(1).click();
    assert.equal(rows.filterBy('selected').length, 6, 'One more row become selected');

    await rows.objectAt(0).click();
    assert.equal(rows.filterBy('selected').length, 5, 'One row become deselected');

    this.set('flag', false);
    assert.equal(rows.filterBy('selected').length, 0, 'All rows are deselected after dropping `selectedItems`');
  });

  test('rows may be expanded initially with `expandedItems`', async function (assert) {
    const data = generateContent(30, 1);
    defineProperty(this, 'expandedItems', computed('flag', 'data.@each.index1', function () {
      return get(this, 'flag') ? get(this, 'data').filter((itemn, index) => index % 2 === 0) : A([]);
    }).readOnly());
    const columns = generateColumns(['index1', 'index2']);
    columns.splice(0, 0, {
      component: 'models-table/expand-toggle',
      mayBeHidden: false
    });
    this.setProperties({
      columns,
      flag: true,
      data
    });

    await render(hbs`<ModelsTable @data={{data}} @columns={{columns}} @expandedItems={{expandedItems}} />`);

    assert.equal(rows.filterBy('expanded').length, 5, 'rows are initially expanded correctly');

    await rows.objectAt(1).expand();
    assert.equal(rows.filterBy('expanded').length, 6, 'One more row become expanded');

    await rows.objectAt(0).collapse();
    assert.equal(rows.filterBy('expanded').length, 5, 'One row become collapsed');

    this.set('flag', false);
    assert.equal(rows.filterBy('expanded').length, 0, 'All rows are collapsed after dropping `expandedItems`');
  });

  test('columns column contains original definition as a nested property', async function (assert) {

    const columns = generateColumns(['index1', 'index2']);
    columns[0].componentForSortCell = 'custom-sort-cell';
    columns[0].CustomColumString = 'custom-column-string';
    columns[0].CustomColumObject = {name: 'custom-column-object'};
    columns[0].CustomColumBool = true;
    columns[0].CustomColumNumber = 1;

    this.setProperties({
      columns,
      data: generateContent(10, 1)
    });
    await render(hbs`<ModelsTable @columns={{columns}} @data={{data}} @multipleColumnsSorting={{false}} />`);

    assert.deepEqual(sorting.mapBy('title'), ['custom-column-string|custom-column-object|true|1', 'index2'],
      'Custom column properties present in originalDefinition property in processedColumns');
  });

  test('#event on user interaction (row double-click)', async function (assert) {

    assert.expect(2);

    const data = generateContent(10, 1);
    this.setProperties({
      data,
      columns: generateColumns(['index'])
    });

    const indx = 4;

    this.actions.rowDoubleClick = function (index, row) {
      assert.equal(index, indx, 'row is double-clicked');
      assert.deepEqual(row, data[indx]);
    };

    await render(hbs`<ModelsTable @data={{data}} @columns={{columns}} @rowDoubleClickAction={{action "rowDoubleClick"}} />`);
    await rows.objectAt(indx).dbClick();

  });

  skip('#event on user interaction (row hover/out)', async function (assert) {

    assert.expect(6);

    const data = generateContent(10, 1);
    this.setProperties({
      data,
      columns: generateColumns(['index'])
    });

    const indx = 4;
    let fl = false;

    this.set('rowHover', (index, row) => {
      const i = fl ? indx + 1 : indx;
      assert.equal(index, i, 'row is hovered');
      assert.deepEqual(row, data[i]);
      fl = true;
    });

    this.set('rowOut', (index, row) => {
      assert.equal(index, indx, 'row is hover-out');
      assert.deepEqual(row, data[indx]);
    });

    await render(
      hbs`<ModelsTable @data={{data}} @columns={{columns}} @rowHoverAction={{action rowHover}} @rowOutAction={{action rowOut}} />`
    );
    await triggerEvent(rows.objectAt(indx).getSelf(), 'mouseenter');
    await triggerEvent(rows.objectAt(indx).getSelf(), 'mouseleave');
    await triggerEvent(rows.objectAt(indx + 1).getSelf(), 'mouseenter');
  });

  test('#grouped-rows #row group value is shown', async function (assert) {
    const columns = generateColumns(['index', 'firstName', 'lastName']);
    const data = generateContent(50, 1);

    this.setProperties({
      dataGroupProperties: ['firstName', 'lastName'],
      data,
      columns
    });

    await render(hbs`<ModelsTable
      @data={{data}}
      @columns={{columns}}
      @useDataGrouping={{true}}
      @currentGroupingPropertyName="firstName"
      @displayGroupedValueAs="row"
      @pageSize=50
      @dataGroupProperties={{dataGroupProperties}} />`);
    assert.equal(rows.length, 50, 'table has 50 rows with data');
    assert.deepEqual(groupingRowsByRow.map(r => r.cell.content), data.uniqBy('firstName').mapBy('firstName').sort(), 'grouping rows have valid content');
  });

  test('#grouped-rows #row group may be collapsed initially', async function (assert) {
    const columns = generateColumns(['index', 'firstName', 'lastName']);
    const data = generateContent(50, 1);

    defineProperty(this, 'collapsedGroupValues', computed('flag', function () {
      return get(this, 'flag') ? A([firstNames[0]]) : A([]);
    }).readOnly());

    defineProperty(this, 'selectedItems', computed('flag', 'data.@each.firstName', function () {
      return get(this, 'flag') ? get(this, 'data').filter((itemn, index) => index % 2 === 0) : A([]);
    }).readOnly());

    this.setProperties({
      dataGroupProperties: ['firstName', 'lastName'],
      flag: true,
      data,
      columns
    });

    await render(hbs`<ModelsTable
      @data={{data}}
      @columns={{columns}}
      @useDataGrouping={{true}}
      @currentGroupingPropertyName="firstName"
      @displayGroupedValueAs="row"
      @pageSize=50
      @groupingRowComponent={{component "custom-row-group-toggle"}}
      @multipleSelect={{true}}
      @selectedItems={{selectedItems}}
      @collapsedGroupValues={{collapsedGroupValues}}
      @dataGroupProperties={{dataGroupProperties}} />`);

    assert.equal(rows.length, 50 - data.filterBy('firstName', firstNames[0]).length, 'rows for first grouped value are hidden');
    await groupingRowsByRow.objectAt(0).cell.toggleGroup();
    assert.equal(rows.length, 50, 'All rows are shown after second click');
    await groupingRowsByRow.objectAt(0).cell.toggleGroup();
    assert.equal(rows.length, 50 - data.filterBy('firstName', firstNames[0]).length, 'rows for first grouped value are hidden (2)');

    this.set('flag', false);
    assert.equal(rows.length, 50, 'All rows are shown after dropping `collapsedGroupValues`');

    await groupingRowsByRow.objectAt(0).cell.toggleSelection();
    const rowsInGroup = this.ModelsTablePageObject.getRowsFromGroupRow(0);
    assert.ok(rowsInGroup.length > 0);
    assert.ok(rowsInGroup.every(r => r.selected), 'All rows for rows group become selected');
  });

  test('#grouped-rows #row grouping-field dropdown has valid options', async function (assert) {
    const columns = generateColumns(['index', 'firstName', 'lastName']);
    const data = generateContent(50, 1);

    this.setProperties({
      dataGroupProperties: [{value: 'firstName', label: 'F Name'}, {value: 'lastName', label: 'L Name'}],
      data,
      columns
    });

    await render(hbs`<ModelsTable
      @data={{data}}
      @columns={{columns}}
      @useDataGrouping={{true}}
      @currentGroupingPropertyName="firstName"
      @displayGroupedValueAs="row"
      @pageSize=50
      @dataGroupProperties={{dataGroupProperties}} />`);
    await this.ModelsTablePageObject.focusGroupByField();
    assert.deepEqual(this.ModelsTablePageObject.groupByFieldOptions.map(o => o.label), ['F Name', 'L Name']);
  });

  test('#grouped-rows #row cells have valid colspan', async function (assert) {
    const columns = generateColumns(['index', 'firstName', 'lastName']);
    const data = generateContent(50, 1);

    this.setProperties({
      dataGroupProperties: ['firstName', 'lastName'],
      data,
      columns
    });

    await render(hbs`<ModelsTable
      @data={{data}}
      @columns={{columns}}
      @useDataGrouping={{true}}
      @currentGroupingPropertyName="firstName"
      @displayGroupedValueAs="row"
      @pageSize=50
      @dataGroupProperties={{dataGroupProperties}} />`);
    assert.ok(groupingRowsByRow.toArray().every(r => r.cell.colspan === '3'), 'each grouping cell has colspan equal to the table columns count');
    await this.ModelsTablePageObject.toggleColumnDropDown();
    await columnsDropDown.objectAt(5).click();
    assert.ok(groupingRowsByRow.toArray().every(r => r.cell.colspan === '2'), 'one column becomes hidden, so colspan is changed');
  });

  test('#grouped-rows #row clicking on grouped values hide grouped', async function (assert) {
    const columns = generateColumns(['index', 'firstName', 'lastName']);
    const data = generateContent(50, 1);

    this.setProperties({
      dataGroupProperties: ['firstName', 'lastName'],
      data,
      columns
    });

    await render(hbs`<ModelsTable
      @data={{data}}
      @columns={{columns}}
      @useDataGrouping={{true}}
      @currentGroupingPropertyName="firstName"
      @displayGroupedValueAs="row"
      @pageSize=50
      @dataGroupProperties={{dataGroupProperties}} />`);
    await groupingRowsByRow.objectAt(0).cell.toggleGroup();
    assert.equal(rows.length, 50 - data.filterBy('firstName', firstNames[0]).length, 'rows for first grouped value are hidden');
    await groupingRowsByRow.objectAt(0).cell.toggleGroup();
    assert.equal(rows.length, 50, 'All rows are shown after second click');
  });

  test('#grouped-rows #row sorting is done for each group separately', async function (assert) {
    const columns = generateColumns(['index', 'firstName', 'lastName']);
    const data = generateContent(50, 1);
    const columnToSort = 2;

    this.setProperties({
      dataGroupProperties: ['firstName', 'lastName'],
      data,
      columns
    });

    await render(hbs`<ModelsTable
      @data={{data}}
      @columns={{columns}}
      @useDataGrouping={{true}}
      @currentGroupingPropertyName="firstName"
      @displayGroupedValueAs="row"
      @pageSize=50
      @dataGroupProperties={{dataGroupProperties}} />`);
    await sorting.objectAt(columnToSort).click();
    data.uniqBy('firstName').sort().forEach((record, index) => {
      const {first, last} = this.ModelsTablePageObject.getRowsIndexesFromGroupRow(index);
      const values = this.ModelsTablePageObject.getColumnCells(columnToSort, first, last);
      assert.deepEqual(A(values).mapBy('id'), A([...values].sort()).mapBy('id'), `group #${index} is sorted`);
    });
    const wholeColumn = this.ModelsTablePageObject.getColumnCells(columnToSort);
    assert.notDeepEqual(wholeColumn, [...wholeColumn].sort(), 'Column is not sorted overall (only its part are sorted)');
  });

  test('#grouped-rows #row grouped property may be changed', async function (assert) {
    const columns = generateColumns(['index', 'firstName', 'lastName']);
    const data = generateContent(50, 1);

    this.setProperties({
      dataGroupProperties: ['firstName', 'lastName'],
      data,
      columns
    });

    await render(hbs`<ModelsTable
      @data={{data}}
      @columns={{columns}}
      @useDataGrouping={{true}}
      @currentGroupingPropertyName="firstName"
      @displayGroupedValueAs="row"
      @pageSize=50
      @dataGroupProperties={{dataGroupProperties}} />`);
    assert.deepEqual(groupingRowsByRow.map(r => r.cell.content), data.uniqBy('firstName').mapBy('firstName').sort(), 'grouping rows have valid content (firstName)');

    await this.ModelsTablePageObject.changeGroupByField('lastName', undefined, {valueToUse: 'Last name'});
    assert.equal(rows.length, 50, 'table has 50 rows with data');
    assert.deepEqual(groupingRowsByRow.map(r => r.cell.content), data.uniqBy('lastName').mapBy('lastName').sort(), 'grouping rows have valid content (lastName)');
  });

  test('#grouped-rows #row order of grouped values may be changed', async function (assert) {
    const columns = generateColumns(['index', 'firstName', 'lastName']);
    const data = generateContent(50, 1);

    this.setProperties({
      dataGroupProperties: ['firstName', 'lastName'],
      data,
      columns
    });

    await render(hbs`<ModelsTable
      @data={{data}}
      @columns={{columns}}
      @useDataGrouping={{true}}
      @currentGroupingPropertyName="firstName"
      @displayGroupedValueAs="row"
      @pageSize=50
      @dataGroupProperties={{dataGroupProperties}} />`);
    assert.deepEqual(groupingRowsByRow.map(r => r.cell.content), data.uniqBy('firstName').mapBy('firstName').sort(), 'grouping rows have valid content (firstName)');
    await this.ModelsTablePageObject.sortByGroupedBy();
    assert.equal(rows.length, 50, 'table has 50 rows with data');
    assert.deepEqual(groupingRowsByRow.map(r => r.cell.content), data.uniqBy('firstName').mapBy('firstName').sort().reverse(), 'grouping rows have valid sorted content (firstName)');
  });

  test('#grouped-rows #row filtered out groups are hidden', async function (assert) {
    const columns = generateColumns(['index', 'firstName', 'lastName']);
    const data = generateContent(50, 1);

    this.setProperties({
      dataGroupProperties: ['firstName', 'lastName'],
      data,
      columns
    });

    await render(hbs`<ModelsTable
      @data={{data}}
      @columns={{columns}}
      @useDataGrouping={{true}}
      @currentGroupingPropertyName="firstName"
      @displayGroupedValueAs="row"
      @pageSize=50
      @dataGroupProperties={{dataGroupProperties}} />`);

    await this.ModelsTablePageObject.doGlobalFilter(firstNames[0]);
    assert.equal(groupingRowsByRow.length, 1, 'only one group is shown');
    assert.equal(rows.length, data.filterBy('firstName', firstNames[0]).length, 'rows for first group are shown');
  });

  test('#grouped-rows #row only message about no data is shown if All rows are filtered out', async function (assert) {
    const columns = generateColumns(['index', 'firstName', 'lastName']);
    const data = generateContent(50, 1);

    this.setProperties({
      dataGroupProperties: ['firstName', 'lastName'],
      data,
      columns
    });

    await render(hbs`<ModelsTable
      @data={{data}}
      @columns={{columns}}
      @useDataGrouping={{true}}
      @currentGroupingPropertyName="firstName"
      @displayGroupedValueAs="row"
      @pageSize=50
      @dataGroupProperties={{dataGroupProperties}} />`);

    await this.ModelsTablePageObject.doGlobalFilter('some random fake string');
    assert.equal(rows.length, 1, '1 row is shown');
    assert.equal(rows.objectAt(0).cells.length, 1, 'with 1 cell');
    assert.equal(rows.objectAt(0).cells.objectAt(0).content, 'No records to show', 'with correct message');
    assert.equal(groupingRowsByRow.length, 0, 'no grouped rows are shown');
  });

  test('#grouped-rows #row only message about hidden columns is shown if all columns are hidden', async function (assert) {
    const columns = generateColumns(['index', 'firstName', 'lastName']);
    const data = generateContent(50, 1);

    this.setProperties({
      dataGroupProperties: ['firstName', 'lastName'],
      data,
      columns
    });

    await render(hbs`<ModelsTable
      @data={{data}}
      @columns={{columns}}
      @useDataGrouping={{true}}
      @currentGroupingPropertyName="firstName"
      @displayGroupedValueAs="row"
      @pageSize=50
      @dataGroupProperties={{dataGroupProperties}} />`);

    await this.ModelsTablePageObject.toggleColumnDropDown();
    await columnsDropDown.objectAt(1).click();
    assert.equal(rows.length, 1, '1 row is shown');
    assert.equal(rows.objectAt(0).cells.length, 1, 'with 1 cell');
    assert.ok(rows.objectAt(0).cells.objectAt(0).content.indexOf('All columns are hidden') !== -1, 'with correct message');
    assert.equal(groupingRowsByRow.length, 0, 'no grouped rows are shown');
    assert.equal(filters.length, 0, 'no filter-th shown');
    assert.equal(sorting.length, 0, 'no sorting-th shown');
  });

  test('#grouped-rows #row custom group-cell component content', async function (assert) {
    const columns = generateColumns(['index', 'firstName', 'lastName']);
    const data = generateContent(50, 1);

    this.setProperties({
      dataGroupProperties: ['firstName', 'lastName'],
      data,
      columns
    });

    await render(hbs`<ModelsTable
      @data={{data}}
      @columns={{columns}}
      @useDataGrouping={{true}}
      @currentGroupingPropertyName="firstName"
      @displayGroupedValueAs="row"
      @groupingRowComponent={{component "custom-row-group-toggle"}}
      @pageSize=50
      @dataGroupProperties={{dataGroupProperties}} />`);
    const fNamesCount = data.filterBy('firstName', firstNames[0]).length;
    assert.equal(groupingRowsByRow.objectAt(0).cell.toggleText, `firstName: ${firstNames[0]} (${fNamesCount}). expanded`, 'custom component content is valid');
    await groupingRowsByRow.objectAt(0).cell.toggleGroup();
    assert.equal(groupingRowsByRow.objectAt(0).cell.toggleText, `firstName: ${firstNames[0]} (${fNamesCount}). collapsed`, 'custom component content is updated');
    await this.ModelsTablePageObject.changeGroupByField('lastName', undefined, {valueToUse: 'Last name'});
    const lNamesCount = data.filterBy('lastName', lastNames[0]).length;
    assert.equal(groupingRowsByRow.objectAt(0).cell.toggleText, `lastName: ${lastNames[0]} (${lNamesCount}). expanded`, 'custom component content is updated (2)');
  });

  test('#grouped-rows #row custom group-cell component actions', async function (assert) {

    assert.expect(10);

    const columns = generateColumns(['index', 'firstName', 'lastName']);
    const data = generateContent(50, 1);

    this.actions.displayDataChanged = function () {
      assert.ok(true);
    };

    this.setProperties({
      dataGroupProperties: ['firstName', 'lastName'],
      data,
      columns
    });

    await render(hbs`<ModelsTable
      @data={{data}}
      @columns={{columns}}
      @useDataGrouping={{true}}
      @currentGroupingPropertyName="firstName"
      @expandedRowComponent={{component "expanded-row"}}
      @displayGroupedValueAs="row"
      @multipleSelect={{true}}
      @multipleExpand={{true}}
      @groupingRowComponent={{component "custom-row-group-toggle"}}
      @pageSize=50
      @displayDataChangedAction={{action "displayDataChanged"}}
      @dataGroupProperties={{dataGroupProperties}} />`);
    const firstGroupRowsCount = this.ModelsTablePageObject.getRowsFromGroupRow(0).length;
    assert.ok(this.ModelsTablePageObject.getRowsFromGroupRow(0).every(r => !r.selected), 'All rows for rows group are not selected by default');
    assert.equal(groupingRowsByRow.objectAt(0).cell.selectedCountText, '0');
    await groupingRowsByRow.objectAt(0).cell.toggleSelection();
    assert.ok(this.ModelsTablePageObject.getRowsFromGroupRow(0).every(r => r.selected), 'All rows for rows group become selected');
    assert.equal(groupingRowsByRow.objectAt(0).cell.selectedCountText, firstGroupRowsCount);

    assert.ok(this.ModelsTablePageObject.getRowsFromGroupRow(0).every(r => !r.expanded), 'All rows for rows group are not expanded by default');
    assert.equal(groupingRowsByRow.objectAt(0).cell.expandedCountText, '0');
    await groupingRowsByRow.objectAt(0).cell.toggleExpands();

    assert.ok(this.ModelsTablePageObject.getRowsFromGroupRow(0).every(r => r.expanded), 'All rows for rows group become expanded');
    assert.equal(groupingRowsByRow.objectAt(0).cell.expandedCountText, firstGroupRowsCount);
  });

  test('#grouped-rows #row component for group summary', async function (assert) {
    const columns = generateColumns(['index', 'firstName', 'lastName']);
    const data = generateContent(50, 1);

    this.setProperties({
      dataGroupProperties: ['firstName', 'lastName'],
      data,
      columns
    });

    await render(hbs`{<ModelsTable
      @data={{data}}
      @columns={{columns}}
      @useDataGrouping={{true}}
      @currentGroupingPropertyName="firstName"
      @groupSummaryRowComponent={{component "group-summary-row"}}
      @displayGroupedValueAs="row"
      @pageSize=50
      @dataGroupProperties={{dataGroupProperties}} />`);

    const groupRows = this.ModelsTablePageObject.getRowsFromGroupRow(0);
    const rowsInGroup = data.filterBy('firstName', firstNames[0]);
    assert.equal(groupRows.length, rowsInGroup.length + 1, 'rows for first group are shown with summary row');
    const firstGroupRowCell = groupRows[groupRows.length - 1].cells.objectAt(0);
    assert.equal(firstGroupRowCell.groupSummaryVisible, rowsInGroup.length, 'visible rows are bound correctly');

    assert.equal(firstGroupRowCell.groupSummarySelected, 0, 'selected rows are bound correctly');
    await rows.objectAt(0).click();
    assert.equal(firstGroupRowCell.groupSummarySelected, 1, 'selected rows are bound correctly (2)');
  });

  test('#grouped-rows #column group value is shown', async function (assert) {
    const columns = generateColumns(['index', 'firstName', 'lastName']);
    const data = generateContent(50, 1);

    this.setProperties({
      dataGroupProperties: ['firstName', 'lastName'],
      data,
      columns
    });

    await render(hbs`<ModelsTable
      @data={{data}}
      @columns={{columns}}
      @useDataGrouping={{true}}
      @currentGroupingPropertyName="firstName"
      @displayGroupedValueAs="column"
      @pageSize=50
      @dataGroupProperties={{dataGroupProperties}} />`);
    assert.equal(rows.length, 50, 'table has 50 rows with data');
    assert.deepEqual(groupingRowsByColumn.toArray().mapBy('content'), data.uniqBy('firstName').mapBy('firstName').sort(), 'grouping cell have valid content');
  });

  test('#grouped-rows #column group may be collapsed initially', async function (assert) {
    const columns = generateColumns(['index', 'firstName', 'lastName']);
    const data = generateContent(50, 1);

    defineProperty(this, 'collapsedGroupValues', computed('flag', function () {
      return get(this, 'flag') ? A([firstNames[0]]) : A([]);
    }).readOnly());

    defineProperty(this, 'selectedItems', computed('flag', 'data.@each.firstName', function () {
      return get(this, 'flag') ? get(this, 'data').filter((itemn, index) => index % 2 === 0) : A([]);
    }).readOnly());

    this.setProperties({
      dataGroupProperties: ['firstName', 'lastName'],
      flag: true,
      data,
      columns
    });

    await render(hbs`<ModelsTable
      @data={{data}}
      @columns={{columns}}
      @useDataGrouping={{true}}
      @currentGroupingPropertyName="firstName"
      @displayGroupedValueAs="column"
      @selectedItems={{selectedItems}}
      @pageSize=50
      @groupingRowComponent={{component "custom-row-group-toggle"}}
      @multipleSelect={{true}}
      @collapsedGroupValues={{collapsedGroupValues}}
      @dataGroupProperties={{dataGroupProperties}} />`);

    assert.equal(rows.length, 50 - data.filterBy('firstName', firstNames[0]).length, 'rows for first grouped value are hidden');
    await groupingRowsByColumn.objectAt(0).toggleGroup();
    assert.equal(rows.length, 50, 'All rows are shown after second click');

    await groupingRowsByColumn.objectAt(0).toggleGroup();
    assert.equal(rows.length, 50 - data.filterBy('firstName', firstNames[0]).length, 'rows for first grouped value are hidden (2)');

    this.set('flag', false);
    assert.equal(rows.length, 50, 'All rows are shown after dropping `collapsedGroupValues`');

    await groupingRowsByColumn.objectAt(0).toggleSelection();
    assert.ok(this.ModelsTablePageObject.getRowsFromGroupColumn(0).every(r => r.selected), 'All rows for rows group become selected');
  });

  test('#grouped-rows #column grouping-field dropdown has valid options', async function (assert) {
    const columns = generateColumns(['index', 'firstName', 'lastName']);
    const data = generateContent(50, 1);

    this.setProperties({
      dataGroupProperties: [{value: 'firstName', label: 'F Name'}, {value: 'lastName', label: 'L Name'}],
      data,
      columns
    });

    await render(hbs`<ModelsTable
      @data={{data}}
      @columns={{columns}}
      @useDataGrouping={{true}}
      @currentGroupingPropertyName="firstName"
      @displayGroupedValueAs="column"
      @pageSize=50
      @dataGroupProperties={{dataGroupProperties}} />`);
    await this.ModelsTablePageObject.focusGroupByField();
    assert.deepEqual(this.ModelsTablePageObject.groupByFieldOptions.map(o => o.label), ['F Name', 'L Name']);
  });

  test('#grouped-rows #column cells have valid rowspan', async function (assert) {
    const columns = generateColumns(['index', 'firstName', 'lastName']);
    const data = generateContent(50, 1);

    this.setProperties({
      dataGroupProperties: ['firstName', 'lastName'],
      data,
      columns
    });

    await render(hbs`<ModelsTable
      @data={{data}}
      @columns={{columns}}
      @useDataGrouping={{true}}
      @currentGroupingPropertyName="firstName"
      @displayGroupedValueAs="column"
      @pageSize=50
      @dataGroupProperties={{dataGroupProperties}} />`);
    const rowspans = data.uniqBy('firstName').sort().map((record, index) => {
      const {first, last} = this.ModelsTablePageObject.getRowsIndexesFromGroupColumn(index);
      return String(last - first + 1);
    });
    assert.deepEqual(groupingRowsByColumn.toArray().mapBy('rowspan'), rowspans, 'each grouping cell has rowspan equal to the group rows count');
    assert.ok(groupingRowsByRow.toArray().every(r => r.cell.colspan === '2'), 'one column becomes hidden, so colspan is changed');
  });

  test('#grouped-rows #column clicking on grouped values hide grouped', async function (assert) {
    const columns = generateColumns(['index', 'firstName', 'lastName']);
    const data = generateContent(50, 1);

    this.setProperties({
      dataGroupProperties: ['firstName', 'lastName'],
      data,
      columns
    });

    await render(hbs`<ModelsTable
      @data={{data}}
      @columns={{columns}}
      @useDataGrouping={{true}}
      @currentGroupingPropertyName="firstName"
      @displayGroupedValueAs="column"
      @pageSize=50
      @dataGroupProperties={{dataGroupProperties}} />`);
    await groupingRowsByColumn.objectAt(0).toggleGroup();
    assert.equal(rows.length, 50 - data.filterBy('firstName', firstNames[0]).length, 'rows for first grouped value are hidden');
    await groupingRowsByColumn.objectAt(0).toggleGroup();
    assert.equal(rows.length, 50, 'All rows are shown after second click');
  });

  test('#grouped-rows #column sorting is done for each group separately', async function (assert) {
    const columns = generateColumns(['index', 'firstName', 'lastName']);
    const data = generateContent(50, 1);
    const columnToSort = 3;

    this.setProperties({
      dataGroupProperties: ['firstName', 'lastName'],
      data,
      columns
    });

    await render(hbs`<ModelsTable
      @data={{data}}
      @columns={{columns}}
      @useDataGrouping={{true}}
      @currentGroupingPropertyName="firstName"
      @displayGroupedValueAs="column"
      @pageSize=50
      @dataGroupProperties={{dataGroupProperties}} />`);
    await sorting.objectAt(columnToSort).click();
    data.uniqBy('firstName').forEach((name, index) => {
      const {first, last} = this.ModelsTablePageObject.getRowsIndexesFromGroupColumn(index);
      const values = this.ModelsTablePageObject.getColumnCells(-1, first, last);
      assert.deepEqual(values, [...values].sort(), `group #${index} is sorted`);
    });
    const wholeColumn = this.ModelsTablePageObject.getColumnCells(-1);
    assert.notDeepEqual(wholeColumn, [...wholeColumn].sort(), 'Column is not sorted overall (only its part are sorted)');
  });

  test('#grouped-rows #column grouped property may be changed', async function (assert) {
    const columns = generateColumns(['index', 'firstName', 'lastName']);
    const data = generateContent(50, 1);

    this.setProperties({
      dataGroupProperties: ['firstName', 'lastName'],
      data,
      columns
    });

    await render(hbs`<ModelsTable
      @data={{data}}
      @columns={{columns}}
      @useDataGrouping={{true}}
      @currentGroupingPropertyName="firstName"
      @displayGroupedValueAs="column"
      @pageSize=50
      @dataGroupProperties={{dataGroupProperties}} />`);
    assert.deepEqual(groupingRowsByColumn.map(r => r.content), data.uniqBy('firstName').mapBy('firstName').sort(), 'grouping columns have valid content (firstName)');
    await this.ModelsTablePageObject.changeGroupByField('lastName', undefined, {valueToUse: 'Last name'});
    assert.equal(rows.length, 50, 'table has 50 rows with data');
    assert.deepEqual(groupingRowsByColumn.map(r => r.content), data.uniqBy('lastName').mapBy('lastName').sort(), 'grouping columns have valid content (lastName)');
  });

  test('#grouped-rows #column order of grouped values may be changed', async function (assert) {
    const columns = generateColumns(['index', 'firstName', 'lastName']);
    const data = generateContent(50, 1);

    this.setProperties({
      dataGroupProperties: ['firstName', 'lastName'],
      data,
      columns
    });

    await render(hbs`<ModelsTable
      @data={{data}}
      @columns={{columns}}
      @useDataGrouping={{true}}
      @currentGroupingPropertyName="firstName"
      @displayGroupedValueAs="column"
      @pageSize=50
      @dataGroupProperties={{dataGroupProperties}} />`);
    assert.deepEqual(groupingRowsByColumn.map(r => r.content), data.uniqBy('firstName').mapBy('firstName').sort(), 'grouping columns have valid content (firstName)');
    await this.ModelsTablePageObject.sortByGroupedBy();
    assert.equal(rows.length, 50, 'table has 50 rows with data');
    assert.deepEqual(groupingRowsByColumn.map(r => r.content), data.uniqBy('firstName').mapBy('firstName').sort().reverse(), 'grouping columns have valid sorted content (firstName)');
  });

  test('#grouped-rows #column filtered out groups are hidden', async function (assert) {
    const columns = generateColumns(['index', 'firstName', 'lastName']);
    const data = generateContent(50, 1);

    this.setProperties({
      dataGroupProperties: ['firstName', 'lastName'],
      data,
      columns
    });

    await render(hbs`<ModelsTable
      @data={{data}}
      @columns={{columns}}
      @useDataGrouping={{true}}
      @currentGroupingPropertyName="firstName"
      @displayGroupedValueAs="column"
      @pageSize=50
      @dataGroupProperties={{dataGroupProperties}} />`);

    await this.ModelsTablePageObject.doGlobalFilter(firstNames[0]);
    assert.equal(groupingRowsByColumn.length, 1, 'only one group is shown');
    assert.equal(rows.length, data.filterBy('firstName', firstNames[0]).length, 'rows for first group are shown');
  });

  test('#grouped-rows #column only message about no data is shown if All rows are filtered out', async function (assert) {
    const columns = generateColumns(['index', 'firstName', 'lastName']);
    const data = generateContent(50, 1);

    this.setProperties({
      dataGroupProperties: ['firstName', 'lastName'],
      data,
      columns
    });

    await render(hbs`<ModelsTable
      @data={{data}}
      @columns={{columns}}
      @useDataGrouping={{true}}
      @currentGroupingPropertyName="firstName"
      @displayGroupedValueAs="column"
      @pageSize=50
      @dataGroupProperties={{dataGroupProperties}} />`);

    await this.ModelsTablePageObject.doGlobalFilter('some random fake string');
    assert.equal(rows.length, 1, '1 row is shown');
    assert.equal(rows.objectAt(0).cells.length, 1, 'with 1 cell');
    assert.equal(rows.objectAt(0).cells.objectAt(0).content, 'No records to show', 'with correct message');
    assert.equal(groupingRowsByColumn.length, 0, 'no grouped rows are shown');
  });

  test('#grouped-rows #column only message about hidden columns is shown if all columns are hidden', async function (assert) {
    const columns = generateColumns(['index', 'firstName', 'lastName']);
    const data = generateContent(50, 1);

    this.setProperties({
      dataGroupProperties: ['firstName', 'lastName'],
      data,
      columns
    });

    await render(hbs`<ModelsTable
      @data={{data}}
      @columns={{columns}}
      @useDataGrouping={{true}}
      @currentGroupingPropertyName="firstName"
      @displayGroupedValueAs="column"
      @pageSize=50
      @dataGroupProperties={{dataGroupProperties}} />`);

    await this.ModelsTablePageObject.toggleColumnDropDown();
    await columnsDropDown.objectAt(1).click();
    assert.equal(rows.length, 1, '1 row is shown');
    assert.equal(rows.objectAt(0).cells.length, 1, 'with 1 cell');
    assert.ok(rows.objectAt(0).cells.objectAt(0).content.indexOf('All columns are hidden') !== -1, 'with correct message');
    assert.equal(groupingRowsByColumn.length, 0, 'no grouped rows are shown');
    assert.equal(filters.length, 0, 'no filter-th shown');
    assert.equal(sorting.length, 0, 'no sorting-th shown');
  });

  test('#grouped-rows #column row expands update rowspan for grouping cells', async function (assert) {
    const columns = generateColumns(['index', 'firstName', 'lastName']);
    const data = generateContent(50, 1);

    columns.splice(0, 0, {
      component: 'models-table/expand-toggle',
      mayBeHidden: false
    });

    this.setProperties({
      dataGroupProperties: ['firstName', 'lastName'],
      data,
      columns
    });

    await render(hbs`<ModelsTable
      @data={{data}}
      @columns={{columns}}
      @useDataGrouping={{true}}
      @currentGroupingPropertyName="firstName"
      @displayGroupedValueAs="column"
      @pageSize=50
      @dataGroupProperties={{dataGroupProperties}}
      @expandedRowComponent={{component "expanded-row"}}
      @multipleExpand={{true}} />`);
    const firstGroupRowspan = data.filterBy('firstName', firstNames[0]).length;
    assert.equal(groupingRowsByColumn.objectAt(0).rowspan, String(firstGroupRowspan), 'rows are collapsed');
    await rows.objectAt(0).expand();
    assert.equal(groupingRowsByColumn.objectAt(0).rowspan, String(firstGroupRowspan + 1), 'rowspan is updated after first row becomes expanded');
    await rows.objectAt(0).collapse();
    assert.equal(groupingRowsByColumn.objectAt(0).rowspan, String(firstGroupRowspan), 'rowspan is set to its default value');
  });

  test('#grouped-rows #column thead has extra cell in the each row', async function (assert) {
    const columns = generateColumns(['index', 'firstName', 'lastName']);
    const data = generateContent(50, 1);

    this.setProperties({
      groupedHeaders: [
        [{title: 'BigTitle', colspan: 3}],
        [{title: 'SubTitle1', colspan: 2}, {title: 'SubTitle2', colspan: 1}]
      ],
      dataGroupProperties: ['firstName', 'lastName'],
      data,
      columns
    });

    await render(hbs`<ModelsTable
      @data={{data}}
      @columns={{columns}}
      @useDataGrouping={{true}}
      @currentGroupingPropertyName="firstName"
      @displayGroupedValueAs="column"
      @pageSize=50
      @groupedHeaders={{groupedHeaders}}
      @dataGroupProperties={{dataGroupProperties}} />`);
    assert.equal(headers.length, 4, '4 rows in the header');
    assert.equal(headers.objectAt(0).cells.length, 2, 'first row has 2 cells');
    assert.equal(headers.objectAt(1).cells.length, 3, 'second row has 3 cells');
    assert.equal(headers.objectAt(2).cells.length, 4, 'third row has 4 cells');
    assert.equal(headers.objectAt(2).cells[0], 'First name', 'Cell contains property name used to group rows');
    assert.equal(headers.objectAt(3).cells.length, 4, 'fourth row has 4 cells');
  });

  test('#grouped-rows #column custom component for header cell', async function (assert) {
    const columns = generateColumns(['index', 'firstName', 'lastName']);
    const data = generateContent(50, 1);

    this.setProperties({
      dataGroupProperties: ['firstName', 'lastName'],
      data,
      columns
    });

    await render(hbs`<ModelsTable
      @data={{data}}
      @columns={{columns}}
      @useDataGrouping={{true}}
      @currentGroupingPropertyName="firstName"
      @displayGroupedValueAs="column"
      @groupingRowComponent={{component "custom-row-group-toggle"}}
      @groupHeaderCellComponent={{component "group-header-cell"}}
      @pageSize=50
      @dataGroupProperties={{dataGroupProperties}} />`);
    assert.equal(headers.objectAt(0).cells[0], '~firstName~', 'Cell contains property name used to group rows wrapped with ~');
  });

  test('#grouped-rows #column custom group-cell component content', async function (assert) {
    const columns = generateColumns(['index', 'firstName', 'lastName']);
    const data = generateContent(50, 1);

    this.setProperties({
      dataGroupProperties: ['firstName', 'lastName'],
      data,
      columns
    });

    await render(hbs`<ModelsTable
      @data={{data}}
      @columns={{columns}}
      @useDataGrouping={{true}}
      @currentGroupingPropertyName="firstName"
      @displayGroupedValueAs="column"
      @groupingRowComponent={{component "custom-row-group-toggle"}}
      @pageSize=50
      @dataGroupProperties={{dataGroupProperties}} />`);
    const fNamesCount = data.filterBy('firstName', firstNames[0]).length;
    assert.equal(groupingRowsByColumn.objectAt(0).toggleText, `firstName: ${firstNames[0]} (${fNamesCount}). expanded`, 'custom component content is valid');
    await groupingRowsByColumn.objectAt(0).toggleGroup();
    assert.equal(groupingRowsByColumn.objectAt(0).toggleText, `firstName: ${firstNames[0]} (${fNamesCount}). collapsed`, 'custom component content is updated');
    await this.ModelsTablePageObject.changeGroupByField('lastName', undefined, {valueToUse: 'Last name'});
    const lNamesCount = data.filterBy('lastName', lastNames[0]).length;
    assert.equal(groupingRowsByColumn.objectAt(0).toggleText, `lastName: ${lastNames[0]} (${lNamesCount}). expanded`, 'custom component content is updated (2)');
  });

  test('#grouped-rows #column custom group-cell component actions', async function (assert) {

    assert.expect(10);

    const columns = generateColumns(['index', 'firstName', 'lastName']);
    const data = generateContent(50, 1);

    this.setProperties({
      dataGroupProperties: ['firstName', 'lastName'],
      data,
      columns
    });

    this.actions.displayDataChanged = function () {
      assert.ok(true);
    };

    await render(hbs`<ModelsTable
      @data={{data}}
      @columns={{columns}}
      @useDataGrouping={{true}}
      @currentGroupingPropertyName="firstName"
      @expandedRowComponent={{component "expanded-row"}}
      @displayGroupedValueAs="row"
      @multipleSelect={{true}}
      @multipleExpand={{true}}
      @groupingRowComponent={{component "custom-row-group-toggle"}}
      @pageSize=50
      @displayDataChangedAction={{action "displayDataChanged"}}
      @dataGroupProperties={{dataGroupProperties}} />`);
    const firstGroupRowsCount = this.ModelsTablePageObject.getRowsFromGroupColumn(0).length;
    assert.ok(this.ModelsTablePageObject.getRowsFromGroupColumn(0).every(r => !r.selected), 'All rows for rows group are not selected by default');
    assert.equal(groupingRowsByColumn.objectAt(0).selectedCountText, '0');
    await groupingRowsByColumn.objectAt(0).toggleSelection();
    assert.ok(this.ModelsTablePageObject.getRowsFromGroupColumn(0).every(r => r.selected), 'All rows for rows group become selected');
    assert.equal(groupingRowsByColumn.objectAt(0).selectedCountText, firstGroupRowsCount);

    assert.ok(this.ModelsTablePageObject.getRowsFromGroupColumn(0).every(r => !r.expanded), 'All rows for rows group are not expanded by default');
    assert.equal(groupingRowsByColumn.objectAt(0).expandedCountText, '0');
    await groupingRowsByColumn.objectAt(0).toggleExpands();

    assert.ok(this.ModelsTablePageObject.getRowsFromGroupColumn(0).every(r => r.expanded), 'All rows for rows group become expanded');
    assert.equal(groupingRowsByColumn.objectAt(0).expandedCountText, firstGroupRowsCount);
  });

  test('#grouped-rows #column component for group summary', async function (assert) {
    const columns = generateColumns(['index', 'firstName', 'lastName']);
    const data = generateContent(50, 1);

    this.setProperties({
      dataGroupProperties: ['firstName', 'lastName'],
      data,
      columns
    });

    await render(hbs`<ModelsTable
      @data={{data}}
      @columns={{columns}}
      @useDataGrouping={{true}}
      @currentGroupingPropertyName="firstName"
      @groupSummaryRowComponent={{component "group-summary-row"}}
      @displayGroupedValueAs="column"
      @pageSize=50
      @dataGroupProperties={{dataGroupProperties}} />`);

    const groupRows = this.ModelsTablePageObject.getRowsFromGroupColumn(0);
    const rowsInGroup = data.filterBy('firstName', firstNames[0]);
    assert.equal(groupRows.length, rowsInGroup.length, 'rows for first group are shown with summary row');
    const firstGroupRowCell = this.ModelsTablePageObject.rows[groupRows.length].cells.objectAt(1);

    assert.equal(firstGroupRowCell.groupSummaryVisible, rowsInGroup.length, 'visible rows are bound correctly');

    assert.equal(firstGroupRowCell.groupSummarySelected, 0, 'selected rows are bound correctly');
    await rows.objectAt(0).click();
    assert.equal(firstGroupRowCell.groupSummarySelected, 1, 'selected rows are bound correctly (2)');
  });

  test('#block render data-group-by-select', async function (assert) {
    const columns = generateColumns(['index', 'firstName', 'lastName']);
    const data = generateContent(50, 1);

    this.setProperties({
      dataGroupProperties: ['firstName', 'lastName'],
      data,
      columns
    });

    await render(hbs`<ModelsTable
      @data={{data}}
      @columns={{columns}}
      @useDataGrouping={{true}}
      @currentGroupingPropertyName="firstName"
      @displayGroupedValueAs="column"
      @pageSize=50
      @dataGroupProperties={{dataGroupProperties}} as |MT|>
        <MT.DataGroupBySelect as |DGBS|>
          <label>{{MT.themeInstance.groupByLabelMsg}}</label>
          <DGBS.Select />
          <button
            class={{MT.themeInstance.sortGroupedPropertyBtn}}
            onclick={{action MT.sort}}>
            <i
              class={{if
                (is-equal MT.sortByGroupedFieldDirection "asc")
                MT.themeInstance.sortAscIcon
                MT.themeInstance.sortDescIcon}}>
            </i>
          </button>
        </MT.DataGroupBySelect>
      </ModelsTable>`);
    assert.ok(this.ModelsTablePageObject.groupByFieldExists);
  });

  test('#in-line edit: row is editable, column displays default edit component', async function (assert) {

    assert.expect(13);
    class StunCompEdit extends Component {
      classNames = ['cellInput'];
      layout = hbs`{{get record propertyName}}`;
    }
    this.owner.register('component:stub-comp-edit', StunCompEdit);

    const columns = generateColumns(['index', 'firstName', 'lastName']);
    columns[0].editable = false; // Index is not editable
    columns[1].componentForEdit = 'stub-comp-edit'; // Index is not editable

    this.setProperties({
      data: generateContent(5, 1),
      columns
    });

    await render(hbs`
      <ModelsTable @data={{data}} @columns={{columns}} as |MT|>
        <MT.Table as |Table|>
          <Table.Body as |Body|>
            {{#each MT.visibleContent as |record index|}}
              <Body.Row @record={{record}} @index={{index}} as |Row|>
                <div class="isEditRow">{{if Row.isEditRow "yes" "no"}}</div>
                <div class="actionEdit" {{action Row.editRow}}>Edit</div>
                <div class="actionSave" {{action Row.saveRow}}>Save</div>
                <div class="actionCancel" {{action Row.cancelEditRow}}>Cancel</div>
                {{#each MT.visibleProcessedColumns as |column|}}
                  <Row.Cell class="cell" @index={{index}} @column={{column}} />
                {{/each}}
              </Body.Row>
            {{/each}}
          </Table.Body>
        </MT.Table>
      </ModelsTable>
    `);

    assert.equal(this.element.querySelector('.isEditRow').textContent, 'no', 'Row is not editable');
    assert.equal(this.element.querySelectorAll('input').length, 0, 'There are no input fields');
    assert.equal(this.element.querySelectorAll('.cellInput').length, 0, 'There are no custom input fields');

    await click('.actionEdit');

    assert.equal(this.element.querySelector('.isEditRow').textContent, 'yes', 'Row is editable');
    assert.equal(this.element.querySelectorAll('input').length, 1, 'There are input fields');
    assert.equal(this.element.querySelectorAll('.cellInput').length, 1, 'Uses a custom Edit component');

    await click('.actionCancel');

    assert.equal(this.element.querySelector('.isEditRow').textContent, 'no', 'Row is not editable');
    assert.equal(this.element.querySelectorAll('input').length, 0, 'There are no input fields');
    assert.equal(this.element.querySelectorAll('.cellInput').length, 0, 'There are no custom input fields');

    await click('.actionEdit');

    assert.equal(this.element.querySelector('.isEditRow').textContent, 'yes', 'Row is editable');

    await click('.actionSave');

    assert.equal(this.element.querySelector('.isEditRow').textContent, 'no', 'Row is not editable');
    assert.equal(this.element.querySelectorAll('input').length, 0, 'There are no input fields');
    assert.equal(this.element.querySelectorAll('.cellInput').length, 0, 'There are no custom input fields');

  });

  test('#publicAPI: publicAPI is accessible ', async function (assert) {

    assert.expect(3);

    const columns = generateColumns(['index', 'someWord']);
    columns[1].componentForFilterCell = 'filter-cell-input';

    this.setProperties({
      data: generateContent(10, 1),
      columns
    });

    await render(hbs`
      <ModelsTable @data={{data}} @columns={{columns}} as |MT|>
        <div class="records-count">{{MT.publicAPI.recordsCount}}</div>
        <MT.Table/>
      </ModelsTable>
    `);

    assert.equal(this.element.querySelector('.records-count').textContent, '10', 'records count is accessible');

    await filters.objectAt(1).inputFilter('one');
    assert.equal(this.element.querySelector('.records-count').textContent, '1', 'records count is updated');

    await filters.objectAt(1).clearFilter();
    assert.equal(this.element.querySelector('.records-count').textContent, '10', 'records count is restored');

  });

  test('#292 rows grouping doesn\'t work if grouped values are not strings #row', async function (assert) {
    const columns = generateColumns(['index', 'firstName', 'lastName', 'age']);
    const data = generateContent(50, 1);

    this.setProperties({
      dataGroupProperties: ['age'],
      data,
      columns
    });

    await render(hbs`<ModelsTable
      @data={{data}}
      @columns={{columns}}
      @useDataGrouping={{true}}
      @currentGroupingPropertyName="age"
      @displayGroupedValueAs="row"
      @pageSize=50
      @dataGroupProperties={{dataGroupProperties}} />`);
    assert.equal(rows.length, 50, 'table has 50 rows with data');
    assert.deepEqual(groupingRowsByRow.map(r => r.cell.content), data.uniqBy('age').map(item => `${item.age}`).sort(), 'grouping rows have valid content');
  });

  test('#292 rows grouping doesn\'t work if grouped values are not strings #column', async function (assert) {
    const columns = generateColumns(['index', 'firstName', 'lastName', 'age']);
    const data = generateContent(50, 1);

    this.setProperties({
      dataGroupProperties: ['age'],
      data,
      columns
    });

    await render(hbs`<ModelsTable
      @data={{data}}
      @columns={{columns}}
      @useDataGrouping={{true}}
      @currentGroupingPropertyName="age"
      @displayGroupedValueAs="column"
      @pageSize=50
      @dataGroupProperties={{dataGroupProperties}} />`);
    assert.equal(rows.length, 50, 'table has 50 rows with data');
    assert.deepEqual(groupingRowsByColumn.toArray().mapBy('content'), data.uniqBy('age').map(item => `${item.age}`).sort(), 'grouping cell have valid content');
  });

  test('component in the table-footer cells', async function (assert) {
    const columns = generateColumns(['age', 'index']);
    columns[0].componentForFooterCell = 'models-table/cell-column-summary';

    this.setProperties({
      data: generateContent(10, 1),
      columns
    });

    await render(hbs`<ModelsTable @data={{data}} @columns={{columns}} />`);
    assert.deepEqual(this.ModelsTablePageObject.footer.cells.mapBy('isComponent'), [true, false], 'tfoot first cell has a component inside');
  });

  test('custom colspan for header cells', async function (assert) {

    const columns = generateColumns(['age', 'index', 'index2', 'indexWithHtml', 'firstName', 'lastName']);
    columns[1].colspanForFilterCell = 3;
    columns[1].colspanForSortCell = 3;

    this.setProperties({
      data: generateContent(10, 1),
      columns
    });

    await render(hbs`<ModelsTable @data={{data}} @columns={{columns}} />`);

    assert.equal(sorting.length, columns.length - 2, 'sorting row hash a correct columns number');
    assert.equal(filters.length, columns.length - 2, 'Filtering row hash a correct columns number');

    assert.equal(sorting.objectAt(1).colspan, 3, 'Colspan for second sort-cell is 3');
    assert.equal(filters.objectAt(1).colspan, 3, 'Colspan for second filter-cell is 3');

    await this.ModelsTablePageObject.toggleColumnDropDown();
    await columnsDropDown.objectAt(6).click(); // hide third column in the colspan

    assert.equal(sorting.objectAt(1).colspan, 2, 'Colspan for second sort-cell is 2');
    assert.equal(filters.objectAt(1).colspan, 2, 'Colspan for second filter-cell is 2');

    await this.ModelsTablePageObject.openColumnsDropDown();
    await columnsDropDown.objectAt(5).click(); // hide second column in the colspan

    assert.equal(sorting.objectAt(1).colspan, 1, 'Colspan for second sort-cell is 1');
    assert.equal(filters.objectAt(1).colspan, 1, 'Colspan for second filter-cell is 1');

    await this.ModelsTablePageObject.openColumnsDropDown();
    await columnsDropDown.objectAt(4).click(); // hide first column in the colspan

    assert.equal(sorting.length, columns.length - 3, 'sorting row hash a correct columns number (2)');
    assert.equal(filters.length, columns.length - 3, 'Filtering row hash a correct columns number (2)');

    await this.ModelsTablePageObject.openColumnsDropDown();
    await columnsDropDown.objectAt(5).click(); // show second column in the colspan

    assert.equal(sorting.length, columns.length - 2, 'sorting row hash a correct columns number (3)');
    assert.equal(filters.length, columns.length - 2, 'Filtering row hash a correct columns number (3)');

    await this.ModelsTablePageObject.openColumnsDropDown();
    await columnsDropDown.objectAt(6).click();// show third column in the colspan

    assert.equal(sorting.objectAt(1).colspan, 2, 'Colspan for second sort-cell is 2');
    assert.equal(filters.objectAt(1).colspan, 2, 'Colspan for second filter-cell is 2');

  });

  test('#325 toggle all selected works', async function (assert) {

    const columns = generateColumns(['age', 'index']);
    const owner = get(this, 'owner');

    owner.register('model:test325', TestModel);
    const store = owner.lookup('service:store');
    store.createRecord('test325', {});

    columns.unshiftObject({
      component: 'models-table/row-select-checkbox',
      useFilter: false,
      mayBeHidden: false,
      componentForSortCell: 'models-table/row-select-all-checkbox'
    });
    this.setProperties({
      data: store.peekAll('test325'), // data must be a result from `store` (peekAll, findAll, query - what ever)
      columns
    });

    await render(hbs`<ModelsTable @data={{data}} @columns={{columns}} />`);

    await this.ModelsTablePageObject.toggleAllSelection();
    assert.equal(rows.filter(r => r.selected).length, 1, 'All rows are selected');

    await this.ModelsTablePageObject.toggleAllSelection();
    assert.equal(rows.filter(r => r.selected).length, 0, 'All rows are not selected');
  });

  test('#342 properly destroy columns when models-table is destroyed', async function (assert) {
    const columns = generateColumns(['index']);
    columns[0].filterWithSelect = true;
    columns[0].sortFilterOptions = true;

    const data = generateContent(10);
    this.setProperties({
      data,
      columns
    });

    await render(hbs`<ModelsTable @data={{data}} @columns={{columns}} />`);
    await clearRender();

    run(() => set(data[0], 'index', 100500));
    assert.ok(true);
  });

  test('A11y', async function (assert) {
    const columns = generateColumns(['index', 'reversedIndex']);
    columns[0].filterWithSelect = true;

    const data = generateContent(10);
    this.setProperties({
      data,
      columns
    });

    await render(hbs`<ModelsTable @data={{data}} @columns={{columns}} />`);
    await a11yAudit('.models-table-wrapper');
    assert.ok(true, 'no a11y errors found');
  });

  test('#block render page-size-select', async function (assert) {
    this.set('data', generateContent(50, 1));
    await render(hbs`<ModelsTable @data={{data}} as |MT|>
      <MT.Footer as |Footer|>
        <Footer.PageSizeSelect as |SizeSelectBlock|>
          <SizeSelectBlock.Select />
        </Footer.PageSizeSelect>
      </MT.Footer>
    </ModelsTable>`);
    assert.equal(this.ModelsTablePageObject.pageSize, '10');
  });

  test('#block render pagination-numeric', async function (assert) {

    this.setProperties({
      columns: generateColumns(['index', 'index2', 'reversedIndex', 'indexWithHtml', 'someWord']),
      data: generateContent(50, 1)
    });

    await render(hbs`<ModelsTable @data={{data}} @columns={{columns}} as |MT|>
      <MT.Footer as |Footer|>
        <Footer.PaginationNumeric as |PN|>
          {{#each PN.visiblePageNumbers as |page|}}
            {{#if page.isLink}}
              <button
                class="{{MT.themeInstance.paginationNumericItem}} {{if page.isActive MT.themeInstance.paginationNumericItemActive}} {{MT.themeInstance.buttonDefault}}"
                {{action MT.goToPage page.label}}>
                {{page.label}}
              </button>
            {{else}}
              <button
                type="button"
                class="{{MT.themeInstance.buttonDefault}} {{MT.themeInstance.paginationNumericItem}}"
                disabled="disabled">
                {{page.label}}
              </button>
            {{/if}}
          {{/each}}
          <PN.PageNumberSelect />
        </Footer.PaginationNumeric>
      </MT.Footer>
    </ModelsTable>`);
    assert.deepEqual(this.ModelsTablePageObject.numericNavigation.mapBy('text'), ['1', '2', '...', '5']);
    assert.ok(navigation.selectPageNumberExists);
  });

  test('#block render pagination-simple', async function (assert) {
    this.setProperties({
      columns: generateColumns(['index', 'index2', 'reversedIndex', 'indexWithHtml', 'someWord']),
      data: generateContent(50, 1)
    });

    await render(hbs`<ModelsTable @data={{data}} @columns={{columns}} as |MT|>
      <MT.Footer as |Footer|>
        <Footer.PaginationSimple as |PS|>
          <button
          class="{{if PS.goToBackEnabled "enabled" "disabled"}} {{MT.themeInstance.buttonDefault}}"
          {{action PS.goToFirst}}>
          <i class={{MT.themeInstance.navFirstIcon}}></i>
        </button>
        <button
          class="{{if PS.goToBackEnabled "enabled" "disabled"}} {{MT.themeInstance.buttonDefault}}"
          {{action PS.goToPrev}}>
          <i class={{MT.themeInstance.navPrevIcon}}></i>
        </button>
        <button
          class="{{if PS.goToForwardEnabled "enabled" "disabled"}} {{MT.themeInstance.buttonDefault}}"
          {{action PS.goToNext}}>
          <i class={{MT.themeInstance.navNextIcon}}></i>
        </button>
        <button
          class="{{if PS.goToForwardEnabled "enabled" "disabled"}} {{MT.themeInstance.buttonDefault}}"
          {{action PS.goToLast}}>
          <i class={{MT.themeInstance.navLastIcon}}></i>
        </button>
          <PS.PageNumberSelect/>
        </Footer.PaginationSimple>
      </MT.Footer>
    </ModelsTable>`);

    assert.notOk(navigation.goToNextPageDisabled, 'next enabled');
    assert.notOk(navigation.goToLastPageDisabled, 'last enabled');
    assert.ok(navigation.goToPrevPageDisabled, 'prev disabled');
    assert.ok(navigation.goToFirstPageDisabled, 'first disabled');
    assert.ok(navigation.selectPageNumberExists);
  });

  test('#block render whole table with custom markup', async function (assert) {
    this.setProperties({
      useDataGrouping: true,
      dataGroupProperties: ['age', 'city', 'country'],
      currentGroupingPropertyName: 'country',
      displayGroupedValueAs: 'row',
      columns: generateColumns(['index', 'index2', 'reversedIndex', 'indexWithHtml', 'someWord']),
      data: generateContent(50, 1)
    });
    this.render(hbs`
      <ModelsTable
        @data={{data}}
        @columns={{columns}}
        @groupedHeaders={{groupedHeaders}}
        @multipleExpand={{true}}
        @multipleSelect={{true}}
        @useDataGrouping={{useDataGrouping}}
        @dataGroupProperties={{dataGroupProperties}}
        @currentGroupingPropertyName={{currentGroupingPropertyName}}
        @useNumericPagination={{useNumericPagination}}
        @displayGroupedValueAs="column"
        @pageSize={{25}} as |MT|>
        <MT.GlobalFilter>
          {{input value=MT.globalFilter}}
          <button disabled={{unless MT.globalFilterUsed "disabled"}} {{action (mut MT.globalFilter) ""}}>&times;</button>
        </MT.GlobalFilter>
        {{#if MT.useDataGrouping}}
          <MT.DataGroupBySelect as |DGBS|>
            <span>&nbsp;Group By:</span>
            <ModelsTable::Select
              @value={{MT.currentGroupingPropertyName}}
              @options={{MT.dataGroupOptions}}/>
            <button {{action DGBS.sort}}>
              {{#if (is-equal MT.sortByGroupedFieldDirection "asc")}}
                &uarr;
              {{else}}
                &darr;
              {{/if}}
            </button>
          </MT.DataGroupBySelect>
        {{/if}}
        <MT.ColumnsDropdown>
          <button {{action MT.showAllColumns}}>Show All</button>
          <button {{action MT.hideAllColumns}}>Hide All</button>
          <button {{action MT.restoreDefaultVisibility}}>Restore defaults</button>
          {{#each MT.processedColumns as |column|}}
            {{#if column.mayBeHidden}}
              <button {{action MT.toggleColumnVisibility column}}>
                {{#if column.isVisible}}
                  &#9745;
                {{else}}
                  &#9744;
                {{/if}}
                {{column.title}}
              </button>
            {{/if}}
          {{/each}}
        </MT.ColumnsDropdown>
        <MT.Table as |Table|>
          <Table.Header as |Header|>
            {{#each MT.groupedHeaders as |groupedHeader|}}
              <Header.GroupedHeader @groupedHeader={{groupedHeader}} as |GroupedHeader|>
                {{#if GroupedHeader.shouldAddExtraColumn}}
                  <th></th>
                {{/if}}
                {{#each GroupedHeader.groupedHeader as |cell|}}
                  <th colspan={{cell.colspan}} rowspan={{cell.rowspan}}>{{cell.title}}</th>
                {{/each}}
              </Header.GroupedHeader>
            {{/each}}
            <Header.RowSorting as |RowSorting|>
              {{#if RowSorting.shouldAddExtraColumn}}
                <th></th>
              {{/if}}
              {{#each MT.visibleProcessedColumns as |column|}}
                <RowSorting.RowSortingCell @column={{column}} />
              {{/each}}
            </Header.RowSorting>
            <Header.RowFiltering as |RowFiltering|>
              {{#if RowFiltering.shouldAddExtraColumn}}
                <th></th>
              {{/if}}
              {{#each MT.visibleProcessedColumns as |column|}}
                <RowFiltering.RowFilteringCell @column={{column}} as |RowFilteringCell|>
                  {{#if column.componentForFilterCell}}
                    <RowFilteringCell/>
                  {{else}}
                    {{#if column.useFilter}}
                      {{#if column.filterWithSelect}}
                        <ModelsTable::Select
                          @type="number"
                          @value={{column.filterString}}
                          @options={{column.filterOptions}}/>
                      {{else}}
                        {{input value=column.filterString}}
                      {{/if}}
                      <button disabled={{unless column.filterUsed "disabled"}} {{action (mut column.filterString) ""}}>&times;</button>
                    {{/if}}
                  {{/if}}
                </RowFiltering.RowFilteringCell>
              {{/each}}
            </Header.RowFiltering>
          </Table.Header>
          <Table.Body as |Body|>
            {{#if MT.allColumnsAreHidden}}
              <Body.ColumnsHidden/>
            {{else}}
              {{#if MT.useDataGrouping}}
                {{#each MT.groupedVisibleContentValuesOrder as |groupedValue groupedIndex|}}
                  {{#let (filter-by MT.currentGroupingPropertyName groupedValue MT.groupedArrangedContent) as |groupedItems|}}
                    {{#let (object-at groupedIndex MT.groupedVisibleContent) as |visibleGroupedItems|}}
                      {{#let
                        (component Body.RowGrouping
                          groupedValue=groupedValue
                          groupedLength=groupedItems.length
                          groupedItems=groupedItems
                          visibleGroupedItems=visibleGroupedItems
                          visibleGroupedLength=visibleGroupedItems.length
                        )
                      as |RowGrouping|}}
                        {{#if (is-equal MT.displayGroupedValueAs "row")}}
                          <RowGrouping @groupIsCollapsed={{exists-in MT.collapsedGroupValues groupedValue}}/>
                        {{/if}}
                        {{#if (exists-in MT.collapsedGroupValues groupedValue)}}
                          {{#if (is-equal MT.displayGroupedValueAs "column")}}
                            <RowGrouping @groupIsCollapsed={{true}}/>
                          {{/if}}
                        {{else}}
                          {{#each visibleGroupedItems as |record index|}}
                            <Body.Row
                              @record={{record}}
                              @index={{index}}
                              @groupedValue={{groupedValue}}
                              @visibleGroupedItems={{visibleGroupedItems}}
                            />
                            {{#if (exists-in MT.expandedItems record)}}
                              <Body.RowExpand @record={{record}} @index={{index}}>
                                Row for Record #{{record.id}} is expanded. Row index is {{index}}
                              </Body.RowExpand>
                            {{/if}}
                          {{/each}}
                        {{/if}}
                      {{/let}}
                    {{/let}}
                  {{/let}}
                {{/each}}
              {{else}}
                {{#each MT.visibleContent as |record index|}}
                  <Body.Row @record={{record}} @index={{index}}/>
                  {{#if (exists-in MT.expandedItems record)}}
                    <Body.RowExpand @record={{record}} @index={{index}}>
                      Row for Record #{{record.id}} is expanded. Row index is {{index}}
                    </Body.RowExpand>
                  {{/if}}
                {{else}}
                  <Body.NoData/>
                {{/each}}
              {{/if}}
            {{/if}}
          </Table.Body>
          <Table.Footer as |Footer|>
            <tr>
              <td colspan={{if Footer.shouldAddExtraColumn (inc MT.visibleProcessedColumns.length) MT.visibleProcessedColumns.length}}>
                Some custom summary for table can be shown in the <code>tfoot</code>
              </td>
            </tr>
          </Table.Footer>
        </MT.Table>
        <div class={{MT.themeInstance.tfooterInternalWrapper}}>
          <MT.Summary>
            Show: {{MT.firstIndex}} - {{MT.lastIndex}} of {{MT.recordsCount}}
            <button disabled={{unless MT.anyFilterUsed "disabled"}} {{action MT.clearFilters}}>&times;</button>
          </MT.Summary>
          <div class={{MT.themeInstance.pageSizeWrapper}}>
            Rows:
            <ModelsTable::Select
              @type="number"
              @value={{MT.pageSize}}
              @options={{MT.pageSizeOptions}}/>
          </div>
          {{#if useNumericPagination}}
            <MT.PaginationNumeric as |Pagination|>
              <div class={{MT.themeInstance.currentPageSizeSelectWrapper}}>
                {{#each Pagination.visiblePageNumbers as |page|}}
                  {{#if page.isLink}}
                    <button {{action MT.goToPage page.label}}>
                      {{page.label}}
                    </button>
                  {{else}}
                    <button disabled="disabled">
                      {{page.label}}
                    </button>
                  {{/if}}
                {{/each}}
              </div>
              <div class={{MT.themeInstance.currentPageSizeSelectWrapper}}>
                <ModelsTable::Select
                  @type="number"
                  @value={{MT.currentPageNumber}}
                  @options={{MT.currentPageNumberOptions}}/>
              </div>
            </MT.PaginationNumeric>
          {{else}}
            <MT.PaginationSimple as |Pagination|>
              <div class={{MT.themeInstance.currentPageSizeSelectWrapper}}>
                <button disabled={{unless Pagination.goToBackEnabled "disabled"}} {{action Pagination.goToFirst}}>
                  &lt;&lt;
                </button>
                <button disabled={{unless Pagination.goToBackEnabled "disabled"}} {{action Pagination.goToPrev}}>
                  &lt;
                </button>
                <button disabled={{unless Pagination.goToForwardEnabled "disabled"}} {{action Pagination.goToNext}}>
                  &gt;
                </button>
                <button disabled={{unless Pagination.goToForwardEnabled "disabled"}} {{action Pagination.goToLast}}>
                  &gt;&gt;
                </button>
              </div>
              <div class={{MT.themeInstance.currentPageSizeSelectWrapper}}>
                <ModelsTable::Select
                  @type="number"
                  @value={{MT.currentPageNumber}}
                  @options={{MT.currentPageNumberOptions}}/>
              </div>
            </MT.PaginationSimple>
          {{/if}}
        </div>
      </ModelsTable>`);
    assert.ok(true);
  });

});
