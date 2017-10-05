import { A } from '@ember/array';
import O from '@ember/object';
import BootstrapTheme from 'ember-models-table/themes/bootstrap3';

import {
  moduleForComponent,
  test
} from 'ember-qunit';

import hbs from 'htmlbars-inline-precompile';

import {
  generateContent,
  generateColumns
} from '../../helpers/f';

import ModelsTableBs from '../../pages/models-table-bs';

const {
  rows,
  navigation,
  filters,
  sorting,
  headers,
  rowExpands,
  columnsDropDown
} = ModelsTableBs;

const oneTenArray = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten'];
const oneTenArrayDig = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];
const tenOneArrayDig = oneTenArrayDig.slice().reverse();
const oneTenAscArray = ['eight', 'five', 'four', 'nine', 'one', 'seven', 'six', 'ten', 'three', 'two'];
const oneTenDescArray = ['two', 'three', 'ten', 'six', 'seven', 'one', 'nine', 'four', 'five', 'eight'];

moduleForComponent('models-table', 'ModelsTable | Integration', {
  integration: true,

  beforeEach() {
    ModelsTableBs.setContext(this);
  },

  afterEach() {
    ModelsTableBs.removeContext();
  }

});

function signFilter (cellValue, neededString) {
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

test('summary', function (assert) {

  this.setProperties({
    data: A([]),
    columns: generateColumns(['index'])
  });

  this.render(hbs`{{models-table data=data columns=columns}}`);
  assert.equal(ModelsTableBs.summary, 'Show 0 - 0 of 0', 'Empty content');

  this.set('data', generateContent(10));
  assert.equal(ModelsTableBs.summary, 'Show 1 - 10 of 10', 'Content for 1 page');

  this.set('data', generateContent(15));
  navigation.goToNextPage();
  assert.equal(ModelsTableBs.summary, 'Show 11 - 15 of 15', 'Content for 2 pages. Last page selected');

  this.set('data', generateContent(35));
  assert.equal(ModelsTableBs.summary, 'Show 11 - 20 of 35', 'Content for 4 pages. Middle page selected');

});

test('basic render', function (assert) {

  this.setProperties({
    columns: generateColumns(['index', 'reversedIndex']),
    data: generateContent(10, 1)
  });

  this.render(hbs`{{models-table columns=columns data=data}}`);

  assert.equal(ModelsTableBs.tablesCount, 1, 'Table exists');
  assert.equal(rows().count, 10, 'Table has 10 rows');
  assert.equal(ModelsTableBs.summary, 'Show 1 - 10 of 10', 'Summary is valid');
  assert.equal(navigation.disabledNavigationLinksCount, 4, 'All navigation buttons are disabled');
  assert.deepEqual(ModelsTableBs.getColumnCells(0), oneTenArrayDig, 'Content is valid');

});

test('basic render with data update', function (assert) {
  this.set('data', generateContent(10, 1));
  this.set('columns', generateColumns(['index', 'reversedIndex']));

  this.render(hbs`{{models-table columns=columns data=data}}`);
  assert.equal(ModelsTableBs.tablesCount, 1, 'Table exists');
  assert.equal(rows().count, 10, 'Table has 10 rows');
  assert.equal(ModelsTableBs.summary, 'Show 1 - 10 of 10', 'Summary is valid');
  assert.equal(navigation.disabledNavigationLinksCount, 4, 'All navigation buttons are disabled');
  assert.deepEqual(ModelsTableBs.getColumnCells(0), oneTenArrayDig, 'Content is valid');

  this.set('data.0.index', 11);
  assert.deepEqual(ModelsTableBs.getColumnCells(0), ['11', '2', '3', '4', '5', '6', '7', '8', '9', '10'], 'Content is valid after update');

  this.set('data.firstObject.index', 12);
  assert.deepEqual(ModelsTableBs.getColumnCells(0), ['12', '2', '3', '4', '5', '6', '7', '8', '9', '10'], 'Content is valid after second update');

});

test('render without footer', function (assert) {

  this.set('showComponentFooter', false);
  this.render(hbs`{{models-table showComponentFooter=showComponentFooter}}`);

  assert.equal(ModelsTableBs.tableFooterCount, 0, 'table footer isn\'t rendered');

});

test('pageSizeObserver', function (assert) {

  this.set('data', generateContent(50, 1));
  this.render(hbs`{{models-table data=data}}`);

  assert.equal(ModelsTableBs.summary, 'Show 1 - 10 of 50', 'init value');
  navigation.goToNextPage();

  assert.equal(ModelsTableBs.summary, 'Show 11 - 20 of 50', 'value changed by user');
  ModelsTableBs.changePageSize(25);

  assert.equal(ModelsTableBs.summary, 'Show 1 - 25 of 50', 'value restored to 1');

});

test('visibleContent', function (assert) {

  this.setProperties({
    columns: generateColumns(['index']),
    data: generateContent(10),
    pageSize: 10,
    currentPageNumber: 1
  });

  this.render(hbs`{{models-table data=data currentPageNumber=currentPageNumber pageSize=pageSize columns=columns}}`);
  assert.deepEqual(ModelsTableBs.getColumnCells(0), generateContent(10).mapBy('index').map(c => `${c}`), 'One page');

  this.setProperties({
    data: generateContent(25, 1),
    currentPageNumber: 2
  });
  assert.deepEqual(ModelsTableBs.getColumnCells(0), generateContent(10, 11).mapBy('index').map(c => `${c}`), 'Second page');

  this.setProperties({
    data: generateContent(25, 1),
    currentPageNumber: 1,
    pageSize: 50
  });
  assert.deepEqual(ModelsTableBs.getColumnCells(0), generateContent(25, 1).mapBy('index').map(c => `${c}`), 'One big page');

  this.setProperties({
    data: generateContent(25, 1),
    currentPageNumber: 3,
    pageSize: 10
  });
  navigation.goToNextPage();
  navigation.goToNextPage();
  assert.deepEqual(ModelsTableBs.getColumnCells(0), generateContent(5, 21).mapBy('index').map(c => `${c}`), 'Last page');

});

test('visibleContent with page size changing and pagination', function (assert) {

  this.setProperties({
    data: generateContent(1000, 1),
    columns: generateColumns(['index'])
  });

  this.render(hbs`{{models-table data=data columns=columns}}`);

  ModelsTableBs.changePageSize(25);
  assert.equal(rows().count, 25, '1st page has 25 rows');

  navigation.goToNextPage();
  assert.equal(rows().count, 25, '2nd page has 25 rows');

  navigation.goToNextPage();
  assert.equal(rows().count, 25, '3rd page has 25 rows');

});

test('gotoBackEnabled', function (assert) {

  this.setProperties({
    data: generateContent(25, 1),
    columns: generateColumns(['index'])
  });
  this.render(hbs`{{models-table data=data columns=columns}}`);

  assert.ok(navigation.goToPrevPageDisabled, 'Disabled, if user is on the 1st page');

  navigation.goToNextPage();
  assert.notOk(navigation.goToPrevPageDisabled, `Enabled, if user isn't on the 1st page`);

});

test('gotoForwardEnabled', function (assert) {

  this.setProperties({
    data: generateContent(10),
    columns: generateColumns(['id'])
  });

  this.render(hbs`{{models-table data=data columns=columns}}`);
  assert.ok(navigation.goToNextPageDisabled, 'One page only');

  this.set('data', generateContent(11));
  assert.notOk(navigation.goToNextPageDisabled, `'One page + 1 record more`);

  this.setProperties({
    data: generateContent(25)
  });
  navigation.goToNextPage();
  navigation.goToNextPage();
  navigation.goToNextPage();
  assert.ok(navigation.goToNextPageDisabled, 'Three pages, last one selected');

});

test('render multi-pages table', function (assert) {

  this.setProperties({
    columns: generateColumns(['index', 'reversedIndex']),
    data: generateContent(20, 1)
  });
  this.render(hbs`{{models-table columns=columns data=data}}`);

  assert.notOk(navigation.goToNextPageDisabled, 'next enabled');
  assert.notOk(navigation.goToLastPageDisabled, 'last enabled');
  assert.ok(navigation.goToPrevPageDisabled, 'prev disabled');
  assert.ok(navigation.goToFirstPageDisabled, 'first disabled');
  assert.equal(ModelsTableBs.summary, 'Show 1 - 10 of 20', 'Summary is valid');

  navigation.goToNextPage();

  assert.deepEqual(ModelsTableBs.getColumnCells(0), ['11', '12', '13', '14', '15', '16', '17', '18', '19', '20'], 'Content is valid');
  assert.ok(navigation.goToNextPageDisabled, 'next disabled');
  assert.ok(navigation.goToLastPageDisabled, 'last disabled');
  assert.notOk(navigation.goToPrevPageDisabled, 'prev enabled');
  assert.notOk(navigation.goToFirstPageDisabled, 'first enabled');

});

test('render custom component in the table cell', function (assert) {

  const columns = generateColumns(['index', 'someWord']);
  columns[1].component = 'cell-component';
  this.setProperties({
    data: generateContent(20, 1),
    columns
  });

  this.render(hbs`{{models-table columns=columns data=data}}`);
  assert.deepEqual(ModelsTableBs.getColumnCells(1), oneTenArray, 'Content is valid');

});

test('render custom component (input) in the filter cell', function (assert) {

  const columns = generateColumns(['index', 'someWord']);
  columns[1].componentForFilterCell = 'filter-cell-input';

  this.setProperties({
    data: generateContent(10, 1),
    columns
  });

  this.render(hbs`{{models-table data=data columns=columns}}`);
  assert.deepEqual(ModelsTableBs.getColumnCells(1), oneTenArray, 'Content is valid');

  filters(1).inputFilter('one');
  assert.deepEqual(ModelsTableBs.getColumnCells(1), ['one'], 'Content is filtered');

  filters(1).clearFilter();
  assert.deepEqual(ModelsTableBs.getColumnCells(1), oneTenArray, 'Content is restored');

});

test('render custom component (select) in the filter cell', function (assert) {

  const columns = generateColumns(['index', 'someWord']);
  columns[1].componentForFilterCell = 'filter-cell-select';

  this.setProperties({
    data: generateContent(10, 1),
    columns
  });

  this.render(hbs`{{models-table data=data columns=columns}}`);
  assert.deepEqual(filters(1).selectOptions, ['', ...oneTenArray], 'Filter options are correct');
  assert.deepEqual(ModelsTableBs.getColumnCells(1), oneTenArray, 'Content is valid');

  filters(1).selectFilter('one');
  assert.deepEqual(ModelsTableBs.getColumnCells(1), ['one'], 'Content is filtered');

  filters(1).clearFilter();
  assert.deepEqual(ModelsTableBs.getColumnCells(1), oneTenArray, 'Content is restored');

});

test('render custom component in the sort cell', function (assert) {

  const columns = generateColumns(['index', 'someWord']);
  columns[1].componentForSortCell = 'sort-cell';

  this.setProperties({
    data: generateContent(10, 1),
    columns
  });

  this.render(hbs`{{models-table columns=columns data=data multipleColumnsSorting=false}}`);
  sorting(1).click();
  assert.deepEqual(ModelsTableBs.getColumnCells(1), oneTenAscArray, 'Content is valid (sorting 2nd column asc)');

  sorting(1).click();
  assert.deepEqual(ModelsTableBs.getColumnCells(1), oneTenDescArray, 'Content is valid (sorting 2nd column desc)');

});

test('custom cell component should prevent filtering and sorting if propertyName and sortedBy/filteredBy not provided', function (assert) {

  const columns = generateColumns(['index', 'someWord']);
  columns[1].component = 'cell-component';
  delete columns[1].propertyName;
  delete columns[1].filteredBy;
  this.setProperties({
    data: generateContent(20, 1),
    columns
  });

  this.render(hbs`{{models-table columns=columns data=data}}`);
  assert.equal(filters(1).content, '', 'Filter-cell is empty');
  sorting(1).click();
  assert.notOk(sorting(1).hasSortMarker, 'Not sorted');
  sorting(1).click();
  assert.notOk(sorting(1).hasSortMarker, 'Not sorted again');

});

test('render show/hide columns', function (assert) {

  const firstColumnIconSelector = '.columns-dropdown li:nth-child(5) a i';
  const secondColumnIconSelector = '.columns-dropdown li:nth-child(6) a i';
  const checkedClass = 'glyphicon-check';
  const uncheckedClass = 'glyphicon-unchecked';
  this.setProperties({
    columns: generateColumns(['index', 'reversedIndex']),
    data: generateContent(10, 1)
  });
  this.render(hbs`{{models-table data=data columns=columns}}`);

  assert.equal(sorting().count, 2, '2 columns are shown (thead)');
  assert.equal(filters().count, 2, '2 columns are shown (thead)');
  assert.equal(rows(0).cells().count, 2, '2 columns are shown (tbody)');

  columnsDropDown(3).click();

  assert.equal(sorting().count, 1, '1 column is shown (thead)');
  assert.equal(filters().count, 1, '1 column is shown (thead)');
  assert.equal(rows(0).cells().count, 1, '1 column is shown (tbody)');
  assert.deepEqual(sorting().mapBy('title'), ['reversedIndex'], 'Valid column is shown (thead)');
  assert.equal(this.$(firstColumnIconSelector).hasClass(uncheckedClass), true, 'First column is unchecked');
  assert.equal(this.$(secondColumnIconSelector).hasClass(checkedClass), true, 'Second column is checked');

  columnsDropDown(3).click();

  assert.equal(sorting().count, 2, '2 columns are shown (thead)');
  assert.equal(filters().count, 2, '2 columns are shown (tbody)');
  assert.equal(this.$(firstColumnIconSelector).hasClass(checkedClass), true, 'First column is checked');
  assert.equal(this.$(secondColumnIconSelector).hasClass(checkedClass), true, 'Second column is checked');

  columnsDropDown(4).click();

  assert.equal(sorting().count, 1, '1 column is shown (thead)');
  assert.equal(filters().count, 1, '1 column is shown (tbody)');
  assert.deepEqual(sorting().mapBy('title'), ['index'], 'Valid column is shown (thead)');
  assert.equal(this.$(firstColumnIconSelector).hasClass(checkedClass), true, 'First column is checked');
  assert.equal(this.$(secondColumnIconSelector).hasClass(uncheckedClass), true, 'Second column is unchecked');

  columnsDropDown(3).click();

  assert.equal(rows().count, 1, '1 row is shown when all columns are hidden');
  assert.equal(ModelsTableBs.getCellsCount(), 1, 'with 1 cell');
  assert.equal(rows(0).getCellColspans(), 2, 'it\'s colspan is equal to the columns count');
  assert.deepEqual(ModelsTableBs.getColumnCells(0), ['All columns are hidden. Use columns-dropdown to show some of them'], 'correct message is shown');
  assert.equal(this.$(firstColumnIconSelector).hasClass(uncheckedClass), true, 'First column is unchecked');
  assert.equal(this.$(secondColumnIconSelector).hasClass(uncheckedClass), true, 'Second column is unchecked');

});

test('render show/hide all columns', function(assert) {
  this.setProperties({
    columns: generateColumns(['index', 'reversedIndex']),
    data: generateContent(10, 1)
  });

  this.render(hbs`{{models-table columns=columns data=data}}`);
  assert.equal(sorting().count, 2, '2 columns are shown (thead)');
  assert.equal(filters().count, 2, '2 columns are shown (thead)');
  assert.equal(rows(0).cells().count, 2, '2 columns are shown (tbody)');

  columnsDropDown(1).click();

  assert.equal(rows().count, 1, '1 row is shown when all columns are hidden');
  assert.equal(ModelsTableBs.getCellsCount(), 1, 'with 1 cell');
  assert.deepEqual(ModelsTableBs.getColumnCells(0), ['All columns are hidden. Use columns-dropdown to show some of them'], 'correct message is shown');

  columnsDropDown(0).click();

  assert.equal(sorting().count, 2, '2 columns are shown (thead)');
  assert.equal(filters().count, 2, '2 columns are shown (thead)');
  assert.equal(rows(0).cells().count, 2, '2 columns are shown (tbody)');

});

test('render columns-dropdown with mayBeHidden = false for some columns', function (assert) {

  const columns = generateColumns(['index', 'reversedIndex']);
  columns[0].mayBeHidden = false;
  this.setProperties({
    columns,
    data: generateContent(10, 1)
  });

  this.render(hbs`{{models-table columns=columns data=data}}`);
  assert.deepEqual(columnsDropDown().mapBy('label'), ['Show All', 'Hide All', 'Restore Defaults', 'reversedIndex'], 'Column with mayBeHidden = false is not shown in the columns dropdown');

  columnsDropDown(3).click();

  assert.equal(sorting().count, 1, '1 column are shown (thead)');
  assert.equal(filters().count, 1, '1 column are shown (thead)');
  assert.equal(rows(0).cells().count, 1, '1 column are shown (tbody)');
  assert.deepEqual(sorting().mapBy('title'), ['index'], 'Valid column is shown (thead)');

  columnsDropDown(3).click();
  assert.equal(sorting().count, 2, '2 columns are shown (thead)');

  columnsDropDown(1).click();
  assert.equal(sorting().count, 1, '1 column are shown (thead)');
  assert.equal(filters().count, 1, '1 column are shown (thead)');
  assert.equal(rows(0).cells().count, 1, '1 column are shown (tbody)');
  assert.deepEqual(sorting().mapBy('title'), ['index'], 'Valid column is shown (thead)');

});

test('render columnSets in columns-dropdown', function(assert) {
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

  this.render(hbs`{{models-table columns=columns data=data columnSets=columnSets}}`);
  assert.equal(sorting().count, 4, '4 columns are shown (thead)');
  assert.equal(filters().count, 4, '4 columns are shown (thead)');
  assert.equal(rows(0).cells().count, 4, '4 columns are shown (tbody)');

  columnsDropDown(1).click();
  columnsDropDown(3).click();
  assert.equal(rows(0).cells().count, 2, '2 columns are shown for default settings');

  columnsDropDown(3).click();
  assert.equal(rows(0).cells().count, 2, '2 columns are still shown after repeated click');

  columnsDropDown(0).click();
  columnsDropDown(3).click();
  assert.equal(rows(0).cells().count, 2, 'other columns are hidden if hideOtherColumns=true');

  columnsDropDown(0).click();
  columnsDropDown(7).click(); // This is the first regular column
  columnsDropDown(4).click();
  assert.equal(rows(0).cells().count, 4, 'other columns are not hidden if hideOtherColumns=false');

  columnsDropDown(4).click();
  assert.equal(rows(0).cells().count, 4, 'columns remain visible after repeated click with hideOtherColumns=false');

  columnsDropDown(5).click();
  assert.equal(rows(0).cells().count, 2, 'columns are hidden if toggleSet=true and both columns are visible');

  columnsDropDown(5).click();
  assert.equal(rows(0).cells().count, 4, 'columns are shown if toggleSet=true and both columns are hidden');

  columnsDropDown(7).click(); // This is the first regular column
  columnsDropDown(5).click();
  assert.equal(rows(0).cells().count, 4, 'columns are shown if toggleSet=true and one of them is hidden');

  columnsDropDown(6).click();
  assert.ok(customFunctionCalled, 'custom function is called if showColumns is a function');
  assert.deepEqual(customFunctionCalled.mapBy('propertyName'), ['index', 'index2', 'reversedIndex', 'id'], 'custom function gets columns as argument');
});

test('global filtering (ignore case OFF)', function(assert) {

  const columns = generateColumns(['index', 'reversedIndex']);
  this.setProperties({
    columns,
    data: generateContent(10, 1)
  });
  this.render(hbs`{{models-table data=data columns=columns}}`);

  ModelsTableBs.doGlobalFilter('1');

  assert.deepEqual(ModelsTableBs.getColumnCells(0), ['1', '10'], 'Content is filtered correctly');

  ModelsTableBs.doGlobalFilter('');

  assert.deepEqual(ModelsTableBs.getColumnCells(0), oneTenArrayDig, 'Filter is empty and all rows are shown');

  ModelsTableBs.doGlobalFilter('invalid input');

  assert.deepEqual(ModelsTableBs.getColumnCells(0), ['No records to show'], 'All rows are filtered out and proper message is shown');
  assert.equal(rows(0).getCellColspans(), columns.length, 'cell with message has correct colspan');

});

test('global filtering (ignore case ON)', function(assert) {

  const columns = generateColumns(['index', 'someWord']);
  this.setProperties({
      filteringIgnoreCase: true,
      columns,
      data: generateContent(10, 1)
  });
  this.render(hbs`{{models-table columns=columns data=data filteringIgnoreCase=filteringIgnoreCase}}`);

  ModelsTableBs.doGlobalFilter('One');

  assert.deepEqual(rows(0).cells().mapBy('content'), ['1', 'one'], 'Content is filtered correctly');

  ModelsTableBs.doGlobalFilter('');

  assert.deepEqual(ModelsTableBs.getColumnCells(0), oneTenArrayDig, 'Filter is empty and all rows are shown');

  ModelsTableBs.doGlobalFilter('invalid input');

  assert.deepEqual(ModelsTableBs.getColumnCells(0), ['No records to show'], 'All rows are filtered out and proper message is shown');
  assert.equal(rows(0).getCellColspans(), columns.length, 'cell with message has correct colspan');

  ModelsTableBs.doGlobalFilter('');
  sorting(0).click();
  sorting(0).click();

  ModelsTableBs.doGlobalFilter('One');

  assert.deepEqual(ModelsTableBs.getColumnCells(1), ['one'], 'Content is filtered correctly when sorting is not done');

});

test('filtering by columns (ignore case OFF)', function (assert) {

  const columns = generateColumns(['index', 'reversedIndex']);
  columns[0].filterPlaceholder = 'custom placeholder';
  this.setProperties({
    columns,
    data: generateContent(10, 1),
    useFilteringByColumns: true
  });

  this.render(hbs`{{models-table data=data columns=columns useFilteringByColumns=useFilteringByColumns}}`);
  filters(0).inputFilter('1');

  assert.deepEqual(ModelsTableBs.getColumnCells(0), ['1', '10'], 'Content is filtered correctly');

  filters(0).inputFilter('');

  assert.deepEqual(ModelsTableBs.getColumnCells(0), oneTenArrayDig, 'Filter is empty and all rows are shown');

  filters(0).inputFilter('invalid input');

  assert.deepEqual(ModelsTableBs.getColumnCells(0), ['No records to show'], 'All rows are filtered out and proper message is shown');
  assert.equal(rows(0).getCellColspans(), columns.length, 'cell with message has correct colspan');

  assert.equal(filters(0).inputPlaceholder, 'custom placeholder', 'Placeholder is correct');

  this.set('useFilteringByColumns', false);

  assert.deepEqual(ModelsTableBs.getColumnCells(0), oneTenArrayDig, 'Filtering by columns is ignored');
  assert.equal($('thead input').length, 0, 'Columns filters are hidden');

});

test('filtering by columns (ignore case ON)', function (assert) {

  const columns = generateColumns(['index', 'someWord']);
  this.setProperties({
    filteringIgnoreCase: true,
    useFilteringByColumns: true,
    columns,
    data: generateContent(10, 1)
  });

  this.render(hbs`{{models-table filteringIgnoreCase=filteringIgnoreCase columns=columns data=data useFilteringByColumns=useFilteringByColumns}}`);
  filters(1).inputFilter('One');
  assert.deepEqual(rows(0).cells().mapBy('content'), ['1', 'one'], 'Content is filtered correctly');

  filters(1).inputFilter('');

  assert.deepEqual(ModelsTableBs.getColumnCells(0), oneTenArrayDig, 'Filter is empty and all rows are shown');

  filters(1).inputFilter('invalid input');

  assert.deepEqual(ModelsTableBs.getColumnCells(0), ['No records to show'], 'All rows are filtered out and proper message is shown');
  assert.equal(rows(0).getCellColspans(), columns.length, 'cell with message has correct colspan');

  filters(1).inputFilter('');

  filters(1).inputFilter('One');
  assert.deepEqual(ModelsTableBs.getColumnCells(1), ['one'], 'Content is filtered correctly when sorting is not done');

  this.set('useFilteringByColumns', false);

  assert.deepEqual(ModelsTableBs.getColumnCells(0), oneTenArrayDig, 'Filtering by columns is ignored');
  assert.equal(filters().count, 0, 'Columns filters are hidden');

});

test('filtering by columns with custom functions', function (assert) {

  const columns = generateColumns(['index', 'someWord']);
  columns[0].filterFunction = signFilter;

  this.setProperties({
    useFilteringByColumns: true,
    columns,
    data: generateContent(10, 1)
  });

  this.render(hbs`{{models-table columns=columns data=data useFilteringByColumns=useFilteringByColumns}}`);
  filters(0).inputFilter('=1');
  assert.deepEqual(ModelsTableBs.getColumnCells(0), ['1'], `Content is filtered correctly (with '=1')`);

  filters(0).inputFilter('>5');
  assert.deepEqual(ModelsTableBs.getColumnCells(0), ['6', '7', '8', '9', '10'], `Content is filtered correctly (with '>5')`);

  filters(0).inputFilter('<6');
  assert.deepEqual(ModelsTableBs.getColumnCells(0), ['1', '2', '3', '4', '5'], `Content is filtered correctly (with '<6')`);

});

test('filtering by columns with custom functions and predefined filter options', function (assert) {

  const columns = generateColumns(['index', 'someWord']);
  columns[0].filterFunction = signFilter;
  columns[0].filterWithSelect = true;
  columns[0].predefinedFilterOptions = ['=1', '>5', '<6'];

  this.setProperties({
    useFilteringByColumns: true,
    columns,
    data: generateContent(10, 1)
  });

  this.render(hbs`{{models-table columns=columns data=data useFilteringByColumns=useFilteringByColumns}}`);
  filters(0).selectFilter('=1');
  assert.deepEqual(ModelsTableBs.getColumnCells(0), ['1'], `Content is filtered correctly (with '=1')`);

  filters(0).selectFilter('>5');
  assert.deepEqual(ModelsTableBs.getColumnCells(0), ['6', '7', '8', '9', '10'], `Content is filtered correctly (with '>5')`);

  filters(0).selectFilter('<6');
  assert.deepEqual(ModelsTableBs.getColumnCells(0), ['1', '2', '3', '4', '5'], `Content is filtered correctly (with '<6')`);

});

test('filtering with filterWithSelect (without predefinedFilterOptions)', function (assert) {

  const columns = generateColumns(['index', 'someWord']);
  columns[1].filterWithSelect = true;
  const data = generateContent(10, 1);
  data[data.length - 1].someWord = '';
  this.setProperties({
    columns,
    data
  });
  this.render(hbs`{{models-table columns=columns data=data}}`);

  assert.equal(filters(1).selectOptions.length, 10, 'Empty data-value was excluded');

  assert.deepEqual(filters(1).selectOptions, ['', ...data.mapBy('someWord').slice(0, -1)], 'Options for select are valid');

  filters(1).selectFilter('one');

  assert.equal(rows().count, 1, 'Only one row exist after filtering');

  this.set('data.0.someWord', 'not a number');

  assert.equal(filters(1).selectValue, '', 'Filter is reverted to the default value');

  filters(1).selectFilter('');

  assert.equal(rows().count, 10, 'All rows are shown after clear filter');

});

test('filtering with filterWithSelect (without predefinedFilterOptions), `sortFilterOptions` is true', function (assert) {

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
  this.render(hbs`{{models-table columns=columns data=data}}`);

  assert.deepEqual(filters(1).selectOptions, words, 'Options for select are valid');

  filters(1).selectFilter('one');

  assert.equal(rows().count, 1, 'Only one row exist after filtering');

});

test('filtering with filterWithSelect (without predefinedFilterOptions), sort by property with boolean values', function (assert) {

  const columns = generateColumns(['index', 'rand']);
  columns[1].filterWithSelect = true;
  const data = generateContent(10, 1);
  this.setProperties({
    columns,
    data
  });
  this.render(hbs`{{models-table columns=columns data=data}}`);

  assert.equal(rows().count, 10, '10 rows exist before filtering');

  filters(1).selectFilter('true');
  assert.equal(rows().count, 5, '5 rows exist after filtering');
  assert.deepEqual(ModelsTableBs.getColumnCells(1), ['true', 'true', 'true', 'true', 'true'], 'valid rows are shown');

  filters(1).selectFilter('false');
  assert.equal(rows().count, 5, '5 rows exist after filtering (2)');
  assert.deepEqual(ModelsTableBs.getColumnCells(1), ['false', 'false', 'false', 'false', 'false'], 'valid rows are shown (2)');

});

test('filtering with filterWithSelect (with predefinedFilterOptions as primitives)', function (assert) {

  const columns = generateColumns(['index', 'someWord']);
  columns[1].filterWithSelect = true;
  columns[1].predefinedFilterOptions = ['one', 'two'];
  const data = generateContent(10, 1);

  this.setProperties({
    columns,
    data
  });
  this.render(hbs`{{models-table data=data columns=columns}}`);

  assert.deepEqual(filters(1).selectOptions, ['', 'one', 'two'], 'Options for select are valid');

  filters(1).selectFilter('one');
  assert.equal(filters(1).selectValue, 'one', 'Proper option is selected');
  assert.equal(rows().count, 1, 'Only one row exist after filtering');

  this.set('data', generateContent(9, 2));

  assert.equal(filters(1).selectValue, 'one', 'Filter is not reverted to the default value');
  assert.deepEqual(filters(1).selectOptions, ['', 'one', 'two'], 'Options for select are valid');

  filters(1).selectFilter('');

  assert.equal(rows().count, 9, 'All rows are shown after clear filter');

});

test('filtering with filterWithSelect (with predefinedFilterOptions as objects)', function (assert) {

  const columns = generateColumns(['index', 'someWord']);
  columns[1].filterWithSelect = true;
  columns[1].predefinedFilterOptions = [{label: '1', value: 'one'}, {label: '2', value: 'two'}];
  const data = generateContent(10, 1);

  this.setProperties({
    columns,
    data
  });
  this.render(hbs`{{models-table data=data columns=columns}}`);

  assert.deepEqual(filters(1).selectOptions, ['', '1', '2'], 'Options for select are valid');

  filters(1).selectFilter('one');
  assert.equal(filters(1).selectValue, 'one', 'Proper option is selected');
  assert.equal(rows().count, 1, 'Only one row exist after filtering');

  this.set('data', generateContent(9, 2));

  assert.equal(filters(1).selectValue, 'one', 'Filter is not reverted to the default value');
  assert.deepEqual(filters(1).selectOptions, ['', '1', '2'], 'Options for select are valid');

  filters(1).selectFilter('');

  assert.equal(rows().count, 9, 'All rows are shown after clear filter');

});

test('filtering with filterWithSelect (with predefinedFilterOptions as empty array)', function (assert) {

  const columns = generateColumns(['index', 'someWord']);
  columns[1].filterWithSelect = true;
  columns[1].predefinedFilterOptions = [];
  const data = generateContent(10, 1);

  this.setProperties({
    columns,
    data
  });
  this.render(hbs`{{models-table data=data columns=columns}}`);

  assert.notOk(filters(1).selectFilterExists, 'Select-box for column with `filterWithSelect` does not exist if empty predefinedFilterOptions are given');
});

test('filtering with `filteredBy`', function (assert) {

  const columns = generateColumns(['index', 'index']);
  delete columns[0].propertyName;
  columns[0].filteredBy = 'index';
  this.setProperties({
    columns,
    data: generateContent(10, 1),
    useFilteringByColumns: true
  });
  this.render(hbs`{{models-table data=data columns=columns useFilteringByColumns=useFilteringByColumns}}`);

  filters(1).inputFilter('1');
  assert.deepEqual(ModelsTableBs.getColumnCells(1), ['1', '10'], 'Content is filtered correctly');

  filters(1).inputFilter('');
  assert.deepEqual(ModelsTableBs.getColumnCells(1), oneTenArrayDig, 'Filter is empty and all rows are shown');

});

test('`filteredBy` has higher priority than `propertyName`', function (assert) {

  const columns = generateColumns(['someWord']);
  columns[0].filteredBy = 'index';
  this.setProperties({
    columns,
    data: generateContent(10, 1)
  });
  this.render(hbs`{{models-table data=data columns=columns}}`);
  ModelsTableBs.doGlobalFilter('2');
  assert.deepEqual(ModelsTableBs.getColumnCells(0), ['two'], 'Content is filtered correctly (global filter)');

  ModelsTableBs.doGlobalFilter('');
  filters(0).inputFilter('2');
  assert.deepEqual(ModelsTableBs.getColumnCells(0), ['two'], 'Content is filtered correctly (filter by column)');

});

test('icons for clearing filters exist', function (assert) {

  const columns = generateColumns(['index', 'someWord']);
  columns[1].filterWithSelect = true;
  this.setProperties({
    columns,
    data: generateContent(10, 1)
  });

  this.render(hbs`{{models-table data=data columns=columns}}`);
  assert.notOk(ModelsTableBs.clearAllFiltersExists, '`Clear all filters` icon does not exist');

  ModelsTableBs.doGlobalFilter(2);
  assert.ok(ModelsTableBs.clearGlobalFilterExists, '`Clear global filter` icon exists');
  assert.ok(ModelsTableBs.clearAllFiltersExists, '`Clear all filters` icon exists');
  ModelsTableBs.doGlobalFilter('');
  assert.notOk(ModelsTableBs.clearGlobalFilterExists, '`Clear global filter` icon does not exist');
  assert.notOk(ModelsTableBs.clearAllFiltersExists, '`Clear all filters` icon does not exist');

  filters(0).inputFilter(1);
  assert.ok(filters(0).clearFilterExists, '`Clear first column filter` icon exists');
  assert.ok(ModelsTableBs.clearAllFiltersExists, '`Clear all filters` icon exists');
  filters(0).inputFilter('');
  assert.notOk(filters(0).clearFilterExists, '`Clear first column filter` icon does not exist');
  assert.notOk(ModelsTableBs.clearAllFiltersExists, '`Clear all filters` icon does not exist');

  filters(1).selectFilter('one');
  assert.ok(filters(1).clearFilterExists, '`Clear second column select filter` icon exists');
  assert.ok(ModelsTableBs.clearAllFiltersExists, '`Clear all filters` icon exists');
  filters(1).selectFilter('');
  assert.notOk(filters(1).clearFilterExists, '`Clear second column select filter` icon does not exist');
  assert.notOk(ModelsTableBs.clearAllFiltersExists, '`Clear all filters` icon does not exist');

});

test('clear filters using icons', function (assert) {

  const columns = generateColumns(['index', 'someWord']);
  columns[1].filterWithSelect = true;
  const data = generateContent(10, 1);
  this.setProperties({
    columns,
    data
  });

  this.render(hbs`{{models-table data=data columns=columns}}`);

  ModelsTableBs.doGlobalFilter(2);
  assert.equal(rows().count, 1, 'Global filter is used');
  ModelsTableBs.clearGlobalFilter();
  assert.equal(rows().count, data.length, 'Global filter is clear (1)');

  ModelsTableBs.doGlobalFilter(2);
  assert.equal(rows().count, 1, 'Global filter is used');
  ModelsTableBs.clearAllFilters();
  assert.equal(rows().count, data.length, 'Global filter is clear (2)');

  filters(0).inputFilter(2);
  assert.equal(rows().count, 1, 'Filter for first column is used');
  ModelsTableBs.clearAllFilters();
  assert.equal(rows().count, data.length, 'Filter for first column is clear (1)');

  filters(0).inputFilter(2);
  assert.equal(rows().count, 1, 'Filter for first column is used');
  ModelsTableBs.clearAllFilters();
  assert.equal(rows().count, data.length, 'Filter for first column is clear (2)');

  filters(1).selectFilter('one');
  assert.equal(rows().count, 1, 'Filter for second column is used');
  filters(1).clearFilter();
  assert.equal(rows().count, data.length, 'Filter for second column is clear (1)');

  filters(1).selectFilter('one');
  assert.equal(rows().count, 1, 'Filter for second column is used');
  ModelsTableBs.clearAllFilters();
  assert.equal(rows().count, data.length, 'Filter for second column is clear (2)');

  ModelsTableBs.doGlobalFilter(2);
  filters(0).inputFilter(2);
  filters(1).selectFilter('two');
  assert.equal(rows().count, 1, 'All filters are used, 1 row shown');
  ModelsTableBs.clearAllFilters();
  assert.equal(rows().count, data.length, 'All filters are clear');

});

test('custom messages', function (assert) {

  const messages = O.create({
    searchLabel: 'Se@rch:',
    'columns-title': 'ColumnZ',
    'columns-showAll': 'Show Me All!',
    'columns-hideAll': 'Hide All!',
    'columns-restoreDefaults': 'Restore My Columns',
    tableSummary: 'Now are showing %@ - %@ of %@',
    allColumnsAreHidden: 'No visible columns, dude!',
    noDataToShow: 'No data. Sorry, bro...'
  });

  const messages2 = O.create({
    searchLabel: 'SEARCH',
    'columns-title': 'COLUMNS',
    'columns-showAll': 'SHOW All',
    'columns-hideAll': 'HIDE ALL',
    'columns-restoreDefaults': 'RESTORE MY COLUMNS',
    tableSummary: 'DISPLAY %@ - %@ OF %@',
    allColumnsAreHidden: 'NO COLUMNS',
    noDataToShow: 'NO DATA'
  });

  this.setProperties({
    columns: generateColumns(['index', 'reversedIndex']),
    data: generateContent(10, 1),
    customMessages: messages
  });

  this.render(hbs`{{models-table data=data columns=columns customMessages=customMessages}}`);

  assert.equal(ModelsTableBs.summary, 'Now are showing 1 - 10 of 10', 'Summary is valid');
  assert.equal(columnsDropDown().toggleLabel, messages['columns-title'], 'Columns-dropdown title is valid');
  assert.equal(columnsDropDown(0).label, messages['columns-showAll'], 'Columns-dropdown "showAll" is valid');
  assert.equal(columnsDropDown(1).label, messages['columns-hideAll'], 'Columns-dropdown "hideAll" is valid');
  assert.equal(columnsDropDown(2).label, messages['columns-restoreDefaults'], 'Columns-dropdown "restoreDefaults" is valid');
  assert.equal(ModelsTableBs.globalFilterLabel, messages.searchLabel, 'Global-search label is valid');

  columnsDropDown(1).click();

  assert.deepEqual(ModelsTableBs.getColumnCells(0), [messages.allColumnsAreHidden], 'Message about all hidden columns is valid');

  columnsDropDown(0).click();
  ModelsTableBs.doGlobalFilter('invalid string');


  assert.deepEqual(ModelsTableBs.getColumnCells(0), [messages.noDataToShow], 'Message about no data is valid');

  this.set('customMessages', messages2);

  ModelsTableBs.doGlobalFilter('');

  assert.equal(ModelsTableBs.summary, 'DISPLAY 1 - 10 OF 10', 'Summary is valid (2)');
  assert.equal(columnsDropDown().toggleLabel, messages2['columns-title'], 'Columns-dropdown title is valid (2)');
  assert.equal(columnsDropDown(0).label, messages2['columns-showAll'], 'Columns-dropdown "showAll" is valid (2)');
  assert.equal(columnsDropDown(1).label, messages2['columns-hideAll'], 'Columns-dropdown "hideAll" is valid (2)');
  assert.equal(columnsDropDown(2).label, messages2['columns-restoreDefaults'], 'Columns-dropdown "restoreDefaults" is valid (2)');
  assert.equal(ModelsTableBs.globalFilterLabel, messages2.searchLabel, 'Global-search label is valid (2)');

  columnsDropDown(1).click();

  assert.deepEqual(ModelsTableBs.getColumnCells(0), [messages2.allColumnsAreHidden], 'Message about all hidden columns is valid (2)');

  columnsDropDown(0).click();
  ModelsTableBs.doGlobalFilter('invalid string');

  assert.deepEqual(ModelsTableBs.getColumnCells(0), [messages2.noDataToShow], 'Message about no data is valid (2)');

});

test('custom icons', function (assert) {

  const customIcons = {
    'sort-asc': 'sort-asc',
    'sort-desc': 'sort-desc',
    'column-visible': 'column-visible',
    'column-hidden': 'column-hidden',
    'nav-first': 'nav-first',
    'nav-prev': 'nav-prev',
    'nav-next': 'nav-next',
    'nav-last': 'nav-last'
  };

  this.setProperties({
    columns: generateColumns(['index', 'reversedIndex']),
    data: generateContent(10, 1),
    themeInstance: BootstrapTheme.extend(customIcons).create()
  });

  this.render(hbs`{{models-table data=data columns=columns themeInstance=themeInstance}}`);
  sorting(0).click();

  assert.equal($('.sort-asc').length, 1, 'sort asc 1 column');

  sorting(1).click();

  sorting(1).click();
  assert.equal($('.sort-asc').length, 1, 'sort asc 1 column');
  assert.equal($('.sort-desc').length, 1, 'sort desc 1 column');

  assert.equal($('.columns-dropdown li .column-visible').length, 2, 'all columns are visible');

  columnsDropDown(3).click();
  assert.equal($('.columns-dropdown li .column-visible').length, 1, '1 column is visible');
  assert.equal($('.columns-dropdown li .column-hidden').length, 1, '1 column is hidden');

  assert.ok($(`.table-nav a:eq(0) i`).hasClass('nav-first'), 'First-button has valid class');
  assert.ok($(`.table-nav a:eq(1) i`).hasClass('nav-prev'), 'Prev-button has valid class');
  assert.ok($(`.table-nav a:eq(2) i`).hasClass('nav-next'), 'Next-button has valid class');
  assert.ok($(`.table-nav a:eq(3) i`).hasClass('nav-last'), 'Last-button has valid class');

});

test('columns column cell classes', function (assert) {

  const columns = generateColumns(['index', 'reversedIndex']);
  columns[0].className = 'custom-column-class';
  this.setProperties({
    columns,
    data: generateContent(10, 1)
  });
  this.render(hbs`{{models-table columns=columns data=data}}`);

  assert.equal($('tbody .custom-column-class').length, 10, 'Custom column class exists on each column cell');

});

test('column title auto generation', function (assert) {

  const columns = generateColumns(['index', 'reversedIndex']);
  columns.setEach('title', null);
  this.setProperties({
    columns,
    data: generateContent(10, 1)
  });
  this.render(hbs`{{models-table columns=columns data=data}}`);

  assert.deepEqual(sorting().mapBy('title'), ['Index', 'Reversed index']);

});

test('`sortedBy` has higher priority than `propertyName`', function (assert) {

  const columns = generateColumns(['someWord', 'index']);
  columns[0].sortedBy = 'index';
  this.setProperties({
    columns,
    data: generateContent(10, 1)
  });
  this.render(hbs`{{models-table columns=columns data=data}}`);

  sorting(1).click();
  assert.deepEqual(ModelsTableBs.getColumnCells(1), oneTenArrayDig, 'Content is valid (sorting by `index` desc)');

  sorting(1).click();
  assert.deepEqual(ModelsTableBs.getColumnCells(1), tenOneArrayDig, 'Content is valid (sorting by `index` asc)');

});

test('sorting (multi `true`)', function (assert) {

  this.setProperties({
    columns: generateColumns(['index', 'index2']),
    data: generateContent(10, 1)
  });
  this.render(hbs`{{models-table columns=columns data=data}}`);
  sorting(0).click();

  assert.deepEqual(ModelsTableBs.getColumnCells(0), oneTenArrayDig, 'Content is valid (sorting 1st column asc)');

  sorting(0).click();

  assert.deepEqual(ModelsTableBs.getColumnCells(0), tenOneArrayDig, 'Content is valid (sorting 1st column desc)');

  sorting(0).click();
  sorting(1).click();

  assert.deepEqual(ModelsTableBs.getColumnCells(0), oneTenArrayDig, 'Content is valid (sorting 1st column asc) - restore defaults');
  assert.deepEqual(ModelsTableBs.getColumnCells(1), ['1', '1', '2', '2', '3', '3', '4', '4', '5', '5'], 'Content is valid (sorting 2nd column asc) - restore defaults');

  sorting(0).click();
  sorting(0).click();

  assert.deepEqual(ModelsTableBs.getColumnCells(0), ['2', '1', '4', '3', '6', '5', '8', '7', '10', '9'], 'Content is valid (sorting 1st column desc)');
  assert.deepEqual(ModelsTableBs.getColumnCells(1), ['1', '1', '2', '2', '3', '3', '4', '4', '5', '5'], 'Content is valid (sorting 2nd column asc)');

});

test('sorting (multi `false`)', function (assert) {

  this.setProperties({
    columns: generateColumns(['index', 'index2']),
    data: generateContent(10, 1)
  });
  this.render(hbs`{{models-table columns=columns data=data multipleColumnsSorting=false}}`);
  sorting(0).click();

  assert.deepEqual(ModelsTableBs.getColumnCells(0), oneTenArrayDig, 'Content is valid (sorting 1st column asc)');

  sorting(0).click();

  assert.deepEqual(ModelsTableBs.getColumnCells(0), tenOneArrayDig, 'Content is valid (sorting 1st column desc)');

  sorting(0).click();
  sorting(1).click();

  assert.deepEqual(ModelsTableBs.getColumnCells(0), oneTenArrayDig, 'Content is valid (sorting 1st column asc) - restore defaults');
  assert.deepEqual(ModelsTableBs.getColumnCells(1), ['1', '1', '2', '2', '3', '3', '4', '4', '5', '5'], 'Content is valid (sorting 2nd column asc) - restore defaults');

  sorting(0).click();
  sorting(0).click();

  assert.deepEqual(ModelsTableBs.getColumnCells(0), tenOneArrayDig, 'Content is valid (sorting 1st column desc)');
  assert.deepEqual(ModelsTableBs.getColumnCells(1), ['5', '5', '4', '4', '3', '3', '2', '2', '1', '1'], 'Content is valid (sorting 2nd reverted)');

});

test('column is sorted with `sortedBy` when `propertyName` is not provided', function (assert) {

  const columns = generateColumns(['index', 'index2']);
  columns[1].sortedBy = 'index';
  delete columns[1].propertyName;
  columns[1].component = 'custom-concat';

  this.setProperties({
    columns,
    data: generateContent(3, 1).reverse()
  });
  this.render(hbs`{{models-table columns=columns data=data multipleColumnsSorting=false}}`);

  sorting(1).click();
  assert.deepEqual(ModelsTableBs.getColumnCells(1), ['1+3', '2+2', '3+1'], 'Content is sorted by `index`');

});

test('table is not sorted by first column with `propertyName` or `sortedBy` by default', function (assert) {

  const data = generateContent(10, 1).reverse();
  const columns = generateColumns(['indexWithHtml', 'index']);
  delete columns[0].propertyName;

  this.setProperties({
    data,
    columns
  });
  this.render(hbs`{{models-table data=data columns=columns}}`);

  assert.deepEqual(ModelsTableBs.getColumnCells(1), tenOneArrayDig, 'Content is sorted correctly');

});

test('sendAction can trigger actions outside the component (from row cell component)', function (assert) {

  assert.expect(1);
  const columns = generateColumns(['index', 'indexWithHtml']);
  columns[1].component = 'custom-action';

  this.on('externalAction', function () {
    assert.ok(true, 'external Action was called!');
  });

  this.setProperties({
    data: generateContent(10, 1),
    columns,
    action: 'externalAction'
  });
  this.render(hbs`{{models-table data=data columns=columns action=action}}`);

  this.$('.action').first().click();
});

test('sendAction can trigger actions outside the component (from row expand component)', function (assert) {

  assert.expect(1);
  let columns = generateColumns(['id']);
  columns.splice(0, 0, {
    component: 'expand-toggle',
    mayBeHidden: false
  });
  this.setProperties({
    columns,
    expandedRowComponent: 'custom-expand-row-action',
    data: generateContent(10, 1),
    externalAction: 'externalAction'
  });

  this.on('externalAction', function () {
    assert.ok(true, 'external Action was called!');
  });
  this.render(hbs`{{models-table columns=columns data=data expandedRowComponent=expandedRowComponent externalAction=externalAction}}`);
  rows(0).expand();
  this.$('.action').first().click();
});

test('sendAction can trigger actions outside the component (from sort cell component)', function (assert) {

  assert.expect(1);
  const columns = generateColumns(['index', 'indexWithHtml']);
  columns[0].componentForSortCell = 'custom-sort-cell-action';

  this.on('externalAction', function () {
    assert.ok(true, 'external Action was called!');
  });

  this.setProperties({
    data: generateContent(10, 1),
    columns,
    externalAction: 'externalAction'
  });
  this.render(hbs`{{models-table data=data columns=columns externalAction=externalAction}}`);

  this.$('.action').first().click();
});

test('sendAction can trigger actions outside the component (from filter cell component)', function (assert) {

  assert.expect(1);
  const columns = generateColumns(['index', 'indexWithHtml']);
  columns[0].componentForFilterCell = 'custom-filter-cell-action';

  this.on('externalAction', function () {
    assert.ok(true, 'external Action was called!');
  });

  this.setProperties({
    data: generateContent(10, 1),
    columns,
    externalAction: 'externalAction'
  });
  this.render(hbs`{{models-table data=data columns=columns externalAction=externalAction}}`);

  this.$('.action').first().click();
});

test('visiblePageNumbers', function (assert) {

  this.setProperties({
    data: generateContent(10, 1),
    columns: generateColumns(['index']),
    currentPageNumber: 1,
    useNumericPagination: true,
    pageSize: 1
  });

  this.render(hbs`{{models-table data=data columns=columns currentPageNumber=currentPageNumber pageSize=pageSize useNumericPagination=useNumericPagination}}`);

  A([
    {
      currentPageNumber: 1,
      visiblePageNumbers: [{label:1,isLink:true,isActive:true},{label:2,isLink:true,isActive:false},{label:'...',isLink:false,isActive:false},{label:10,isLink:true,isActive:false}]
    },
    {
      currentPageNumber: 2,
      visiblePageNumbers: [{label:1,isLink:true,isActive:false},{label:2,isLink:true,isActive:true},{label:3,isLink:true,isActive:false},{label:'...',isLink:false,isActive:false},{label:10,isLink:true,isActive:false}]
    },
    {
      currentPageNumber: 3,
      visiblePageNumbers: [{label:1,isLink:true,isActive:false},{label:2,isLink:true,isActive:false},{label:3,isLink:true,isActive:true},{label:4,isLink:true,isActive:false},{label:'...',isLink:false,isActive:false},{label:10,isLink:true,isActive:false}]
    },
    {
      currentPageNumber: 4,
      visiblePageNumbers: [{label:1,isLink:true,isActive:false},{label:'...',isLink:false,isActive:false},{label:3,isLink:true,isActive:false},{label:4,isLink:true,isActive:true},{label:5,isLink:true,isActive:false},{label:'...',isLink:false,isActive:false},{label:10,isLink:true,isActive:false}]
    },
    {
      currentPageNumber: 5,
      visiblePageNumbers: [{label:1,isLink:true,isActive:false},{label:'...',isLink:false,isActive:false},{label:4,isLink:true,isActive:false},{label:5,isLink:true,isActive:true},{label:6,isLink:true,isActive:false},{label:'...',isLink:false,isActive:false},{label:10,isLink:true,isActive:false}]
    },
    {
      currentPageNumber: 6,
      visiblePageNumbers: [{label:1,isLink:true,isActive:false},{label:'...',isLink:false,isActive:false},{label:5,isLink:true,isActive:false},{label:6,isLink:true,isActive:true},{label:7,isLink:true,isActive:false},{label:'...',isLink:false,isActive:false},{label:10,isLink:true,isActive:false}]
    },
    {
      currentPageNumber: 7,
      visiblePageNumbers: [{label:1,isLink:true,isActive:false},{label:'...',isLink:false,isActive:false},{label:6,isLink:true,isActive:false},{label:7,isLink:true,isActive:true},{label:8,isLink:true,isActive:false},{label:'...',isLink:false,isActive:false},{label:10,isLink:true,isActive:false}]
    },
    {
      currentPageNumber: 8,
      visiblePageNumbers: [{label:1,isLink:true,isActive:false},{label:'...',isLink:false,isActive:false},{label:7,isLink:true,isActive:false},{label:8,isLink:true,isActive:true},{label:9,isLink:true,isActive:false},{label:10,isLink:true,isActive:false}]
    },
    {
      currentPageNumber: 9,
      visiblePageNumbers: [{label:1,isLink:true,isActive:false},{label:'...',isLink:false,isActive:false},{label:8,isLink:true,isActive:false},{label:9,isLink:true,isActive:true},{label:10,isLink:true,isActive:false}]
    },
    {
      currentPageNumber: 10,
      visiblePageNumbers: [{label:1,isLink:true,isActive:false},{label:'...',isLink:false,isActive:false},{label:9,isLink:true,isActive:false},{label:10,isLink:true,isActive:true}]
    }
  ]).forEach(test => {
    this.set('currentPageNumber', test.currentPageNumber);
    assert.deepEqual(navigation.navigationButtons, A(test.visiblePageNumbers).mapBy('label').map(c => `${c}`), `10 pages, active is ${test.currentPageNumber}`);
  }, this);

  this.set('data', generateContent(10, 1));
  this.set('pageSize', 10);

  assert.deepEqual(navigation.navigationButtons, ['1'], 'Only 1 page');

});

test('event on user interaction (filtering by column)', function (assert) {

  this.setProperties({
    columns: generateColumns(['index', 'someWord']),
    data: generateContent(10, 1),
    displayDataChangedAction: 'displayDataChanged'
  });

  this.on('displayDataChanged', function () {
    assert.ok(true, '`displayDataChanged`-action was called!');
  });

  this.render(hbs`{{models-table columns=columns data=data displayDataChangedAction=displayDataChangedAction sendDisplayDataChangedAction=true}}`);
  filters(1).inputFilter('One');

});

test('event on user interaction (global filtering)', function (assert) {

  this.setProperties({
    columns: generateColumns(['index', 'someWord']),
    data: generateContent(10, 1),
    displayDataChangedAction: 'displayDataChanged'
  });

  this.on('displayDataChanged', function () {
    assert.ok(true, '`displayDataChanged`-action was called!');
  });

  this.render(hbs`{{models-table columns=columns data=data displayDataChangedAction=displayDataChangedAction sendDisplayDataChangedAction=true}}`);
  ModelsTableBs.doGlobalFilter('One');
});

test('event on user interaction (sorting)', function (assert) {

  this.setProperties({
    columns: generateColumns(['index', 'someWord']),
    data: generateContent(10, 1),
    displayDataChangedAction: 'displayDataChanged',
    sendDisplayDataChangedAction: true
  });

  this.on('displayDataChanged', function () {
    assert.ok(true, '`displayDataChanged`-action was called!');
  });

  this.render(hbs`{{models-table columns=columns data=data displayDataChangedAction=displayDataChangedAction sendDisplayDataChangedAction=sendDisplayDataChangedAction}}`);
  sorting(0).click();
});

test('event on user interaction (expanding rows)', function (assert) {

  const columns = generateColumns(['id']);
  columns.splice(0, 0, {
    component: 'expand-toggle',
    mayBeHidden: false
  });
  this.setProperties({
    columns,
    data: generateContent(30, 1),
    displayDataChangedAction: 'displayDataChanged',
    sendDisplayDataChangedAction: true,
    expandedRowComponent: 'expanded-row'
  });

  this.on('displayDataChanged', function () {
    assert.ok(true, '`displayDataChanged`-action was called!');
  });

  this.render(hbs`{{models-table columns=columns data=data displayDataChangedAction=displayDataChangedAction sendDisplayDataChangedAction=sendDisplayDataChangedAction expandedRowComponent=expandedRowComponent}}`);
  rows(0).expand();

});

test('event on user interaction (selecting rows)', function (assert) {

  this.setProperties({
    columns: generateColumns(['id']),
    data: generateContent(30, 1),
    displayDataChangedAction: 'displayDataChanged',
    sendDisplayDataChangedAction: true
  });

  this.on('displayDataChanged', function () {
    assert.ok(true, '`displayDataChanged`-action was called!');
  });

  this.render(hbs`{{models-table columns=columns data=data displayDataChangedAction=displayDataChangedAction sendDisplayDataChangedAction=sendDisplayDataChangedAction}}`);
  rows(0).click();

});

test('event on user interaction (clear all filters)', function (assert) {

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
    // after clear all filters
    {
      filterString: '',
      columnFilters: {}
    }
  ];
  let indx = 0;
  this.setProperties({
    columns: generateColumns(['id']),
    data: generateContent(30, 1),
    displayDataChangedAction: 'displayDataChanged',
    sendDisplayDataChangedAction: true
  });

  this.on('displayDataChanged', function (settings) {
    const call = calls[indx];
    assert.equal(call.filterString, settings.filterString, `#${indx + 1}. filterString`);
    assert.deepEqual(call.columnFilters, settings.columnFilters, `#${indx + 1}. columnFilters`);
    indx++;
  });

  this.render(hbs`{{models-table columns=columns data=data displayDataChangedAction=displayDataChangedAction sendDisplayDataChangedAction=sendDisplayDataChangedAction}}`);
  filters(0).inputFilter(1);
  ModelsTableBs.doGlobalFilter(1);
  ModelsTableBs.clearAllFilters();
});

test('show first page if for some reasons there is no content for current page, but table data exists', function (assert) {

  assert.expect(1);

  const data = generateContent(11, 1);
  const columns = generateColumns(['index', 'indexWithHtml']);
  columns[1].component = 'delete-row';
  const self = this;
  this.setProperties({
    data,
    columns
  });
  this.on('deleteRecord', function (record) {
    self.set('data', data.without(record));
  });
  this.render(hbs`{{models-table data=data columns=columns delete='deleteRecord'}}`);
  // move to the 2nd page and delete 1 row there
  navigation.goToNextPage();
  this.$('td button').first().click();
  assert.equal(ModelsTableBs.summary, 'Show 1 - 10 of 10', 'First page is shown');
});

test('row deleted in the middle page', function (assert) {

  assert.expect(1);

  const data = generateContent(31, 1);
  const columns = generateColumns(['index', 'indexWithHtml']);
  columns[1].component = 'delete-row';
  const self = this;
  this.setProperties({
    data,
    columns
  });
  this.on('deleteRecord', function (record) {
    self.set('data', data.without(record));
  });
  this.render(hbs`{{models-table data=data columns=columns delete='deleteRecord'}}`);
  // move to the 2nd page and delete 1 row there
  navigation.goToNextPage();
  this.$('td button').first().click();
  assert.equal(ModelsTableBs.summary, 'Show 11 - 20 of 30', 'Second page is shown');
});

test('updateable columns (disabled)', function (assert) {

  const columns1 = generateColumns(['index', 'someWord']);
  const columns2 = generateColumns(['index', 'index2', 'someWord']);

  this.setProperties({
    columns: columns1,
    data: generateContent(10, 1),
    columnsAreUpdateable: false
  });

  this.render(hbs`{{models-table columns=columns data=data columnsAreUpdateable=columnsAreUpdateable}}`);
  filters(0).inputFilter('1');
  sorting(0).click();
  assert.deepEqual(sorting().mapBy('title'), ['index', 'someWord'], 'two columns are shown');
  assert.deepEqual(columnsDropDown().mapBy('label'), ['Show All', 'Hide All', 'Restore Defaults', 'index', 'someWord'], 'two columns are in columns dropdown');

  this.set('columns', columns2);
  assert.deepEqual(sorting().mapBy('title'), ['index', 'someWord'], 'columns are not updated');
  assert.deepEqual(columnsDropDown().mapBy('label'), ['Show All', 'Hide All', 'Restore Defaults', 'index', 'someWord'], 'columns dropdown is not updated');
  assert.equal(filters(0).inputValue, '1', 'column filter was not dropped');
  assert.ok(sorting(0).isSorted, 'column sorting was not dropped');
});

test('updateable columns (enabled)', function (assert) {

  const columns1 = generateColumns(['index', 'someWord']);
  const columns2 = generateColumns(['index', 'index2', 'someWord']);

  this.setProperties({
    columns: columns1,
    data: generateContent(10, 1),
    columnsAreUpdateable: true
  });

  this.render(hbs`{{models-table columns=columns data=data columnsAreUpdateable=columnsAreUpdateable}}`);
  assert.deepEqual(sorting().mapBy('title'), ['index', 'someWord'], 'two columns are shown');
  assert.deepEqual(columnsDropDown().mapBy('label'), ['Show All', 'Hide All', 'Restore Defaults', 'index', 'someWord'], 'two columns are in columns dropdown');
  filters(0).inputFilter('1');
  sorting(0).click();

  this.set('columns', columns2);
  assert.deepEqual(sorting().mapBy('title'), ['index', 'index2', 'someWord'], 'columns are updated');
  assert.deepEqual(columnsDropDown().mapBy('label'), ['Show All', 'Hide All', 'Restore Defaults', 'index', 'index2', 'someWord'], 'columns dropdown is updated');
  assert.equal(filters(0).inputValue, '', 'column filter was dropped');

});

test('filtering with `doFilteringByHiddenColumns` = false', function (assert) {

  this.setProperties({
    columns: generateColumns(['index', 'someWord']),
    data: generateContent(10, 1),
    doFilteringByHiddenColumns: false
  });

  this.render(hbs`{{models-table columns=columns data=data doFilteringByHiddenColumns=doFilteringByHiddenColumns}}`);

  columnsDropDown(4).click();
  ModelsTableBs.doGlobalFilter('one');

  assert.deepEqual(ModelsTableBs.getColumnCells(0), ['No records to show'], 'Content is not changed');

  this.set('doFilteringByHiddenColumns', true);
  assert.deepEqual(ModelsTableBs.getColumnCells(0), ['No records to show'], 'Content is not changed after `doFilteringByHiddenColumns` updating');

  ModelsTableBs.doGlobalFilter('');
  ModelsTableBs.doGlobalFilter('one');

  assert.deepEqual(ModelsTableBs.getColumnCells(0), ['1'], 'Content is filtered');

});

test('grouped headers', function (assert) {

  this.setProperties({
    columns: generateColumns(['index', 'index2', 'reversedIndex', 'indexWithHtml', 'someWord']),
    data: generateContent(10, 1),
    groupedHeaders: [
      [{title: 'BigTitle', colspan: 5}],
      [{title: 'SubTitle1', colspan: 2}, {title: 'SubTitle2', colspan: 3}]
    ]
  });

  this.render(hbs`{{models-table columns=columns data=data groupedHeaders=groupedHeaders}}`);

  assert.deepEqual(headers(0).cells, ['BigTitle']);
  assert.deepEqual(headers(0).colspans, ['5']);

  assert.deepEqual(headers(1).cells, ['SubTitle1', 'SubTitle2']);
  assert.deepEqual(headers(1).colspans, ['2', '3']);

});

test('expandable rows (multipleExpand = true)', function (assert) {

  const columns = generateColumns(['id']);
  columns.splice(0, 0, {
    component: 'expand-toggle',
    mayBeHidden: false
  });
  this.setProperties({
    columns,
    expandedRowComponent: 'expanded-row',
    data: generateContent(30, 1)
  });

  this.render(hbs`{{models-table columns=columns data=data expandedRowComponent=expandedRowComponent multipleExpand=true}}`);

  assert.equal(ModelsTableBs.collapseRowButtons, 0, 'All rows are collapsed by default');

  rows(0).expand();
  assert.ok(rows(0).expanded, 'First row is expanded');
  assert.equal($('.expand-0').length, 1, 'Expanded row content exists');
  assert.equal($('.expand-0 .id').length, 1, 'Expanded row content is valid');

  rows(1).expand();
  assert.ok(rows(0).expanded, 'First row is still expanded');
  assert.ok(rows(1).expanded, 'Second row is expanded');

  rows(0).collapse();
  assert.ok(rows(0).collapsed, 'First row is collapsed');
  assert.ok(rows(1).expanded, 'Second row is still expanded');

  rows(1).collapse();
  assert.ok(rows(1).collapsed, 'Second row is collapsed');

  rows(0).expand();
  navigation.goToNextPage();
  assert.ok(rows(0).collapsed, 'First row on the second page is collapsed');

});

test('expandable rows (multipleExpand = true, expand all rows)', function (assert) {

  const columns = generateColumns(['id']);
  columns.splice(0, 0, {
    component: 'expand-toggle',
    componentForFilterCell: 'expand-all-toggle',
    mayBeHidden: false
  });
  this.setProperties({
    columns,
    expandedRowComponent: 'expanded-row',
    data: generateContent(30, 1)
  });

  this.render(hbs`{{models-table columns=columns data=data expandedRowComponent=expandedRowComponent multipleExpand=true}}`);
  assert.equal(ModelsTableBs.collapseRowButtons, 0, 'All rows are collapsed by default');

  ModelsTableBs.expandAllRows();
  assert.equal(rows().filterBy('expanded').length, 10, 'All rows are expanded');
  assert.deepEqual(rowExpands().mapBy('id'), oneTenArrayDig, 'Expanded rows content is valid');

  ModelsTableBs.collapseAllRows();
  assert.equal(rows().filterBy('expanded').length, 0, 'All rows are collapsed');

  ModelsTableBs.expandAllRows();
  navigation.goToNextPage();
  assert.equal(rows().filterBy('expanded').length, 0, 'All rows on the second page are collapsed');

});

test('expandable rows (multipleExpand = false)', function (assert) {

  let columns = generateColumns(['id']);
  columns.splice(0, 0, {
    component: 'expand-toggle',
    mayBeHidden: false
  });
  this.setProperties({
    columns,
    expandedRowComponent: 'expanded-row',
    data: generateContent(30, 1)
  });

  this.render(hbs`{{models-table columns=columns data=data expandedRowComponent=expandedRowComponent multipleExpand=false}}`);

  assert.equal(ModelsTableBs.collapseRowButtons, 0, 'All rows are collapsed by default');

  rows(0).expand();
  assert.ok(rows(0).expanded, 'First row is expanded');
  assert.equal(rowExpands(0).id, '1', 'Expanded row content is valid');

  rows(1).expand();
  assert.ok(rows(0).collapsed, 'First row is collapsed');
  assert.ok(rows(1).expanded, 'Second row is expanded');

  rows(1).collapse();
  assert.ok(rows(1).collapsed, 'Second row is collapsed');

  rows(0).expand();
  navigation.goToNextPage();
  assert.ok(rows(0).collapsed, 'First row on the second page is collapsed');

});

test('#251 expand is dropped if expanded row is filtered out', function (assert) {
  let columns = generateColumns(['id']);
  columns.splice(0, 0, {
    component: 'expand-toggle',
    mayBeHidden: false
  });
  this.setProperties({
    columns,
    expandedRowComponent: 'expanded-row',
    data: generateContent(30, 1)
  });

  this.render(hbs`{{models-table columns=columns data=data expandedRowComponent=expandedRowComponent multipleExpand=false}}`);

  assert.equal(ModelsTableBs.collapseRowButtons, 0, 'All rows are collapsed by default');

  rows(0).expand();
  assert.ok(rows(0).expanded, 'First row is expanded');

  filters(1).inputFilter('4');

  assert.equal(rowExpands().count, 0, 'Expanded row is filtered out');

  filters(1).clearFilter();
  assert.ok(rows(0).expanded, 'First row is expanded after filter is dropped');
});

test('selectable rows (multipleSelect = true)', function (assert) {

  this.setProperties({
    data: generateContent(30, 1),
    columns: generateColumns(['id'])
  });
  this.render(hbs`{{models-table data=data column=columns multipleSelect=true}}`);

  assert.equal(rows().filterBy('selected').length, 0, 'No selected rows by default');

  rows(0).click();
  assert.ok(rows(0).selected, 'First row is selected');

  rows(1).click();
  assert.ok(rows(0).selected, 'First row is still selected');
  assert.ok(rows(1).selected, 'Second row is selected');

  rows(0).click();
  assert.notOk(rows(0).selected, 'First row is not selected');
  assert.ok(rows(1).selected, 'Second row is selected');

  rows(1).click();
  assert.notOk(rows(0).selected, 'First row still is not selected');
  assert.notOk(rows(1).selected, 'Second row is not selected');

});

test('selectable rows (multipleSelect = false)', function (assert) {

  this.setProperties({
    data: generateContent(30, 1),
    columns: generateColumns(['id'])
  });
  this.render(hbs`{{models-table data=data column=columns multipleSelect=false}}`);

  assert.equal(rows().filterBy('selected').length, 0, 'No selected rows by default');

  rows(0).click();
  assert.ok(rows(0).selected, 'First row is selected');

  rows(1).click();
  assert.notOk(rows(0).selected, 'First row is not selected');
  assert.ok(rows(1).selected, 'Second row is selected');

  rows(0).click();
  assert.ok(rows(0).selected, 'First row is selected');
  assert.notOk(rows(1).selected, 'Second row is not selected');

  rows(1).click();
  assert.notOk(rows(0).selected, 'First row is not selected');
  assert.ok(rows(1).selected, 'Second row is selected');

});

test('row-expand should trigger select/deselect row', function (assert) {

  let columns = generateColumns(['index']);
  columns = [{
    component: 'expand-toggle',
    mayBeHidden: false
  }, ...columns];
  this.setProperties({
    columns,
    expandedRowComponent: 'expanded-row',
    data: generateContent(30, 1)
  });

  this.render(hbs`{{models-table data=data columns=columns expandedRowComponent=expandedRowComponent}}`);

  rows(0).expand();
  rows(0).click();
  assert.ok(rows(0).expanded, 'First row is expanded');
  assert.ok(rowExpands(0).selected, 'First row expand is selected');
  assert.ok(rows(0).selected, 'First row is selected');

  rowExpands(0).click();
  assert.notOk(rows(0).selected, 'First row is not selected');
  assert.notOk(rowExpands(0).selected, 'First row expand is not selected');

  rowExpands(0).click();
  assert.ok(rows(0).selected, 'First row is selected');
  assert.ok(rowExpands(0).selected, 'First row expand is selected');

});

test('rows may be preselected with `preselectedItems`', function (assert) {
  const data = generateContent(30, 1);
  this.setProperties({
    columns: generateColumns(['index1', 'index2']),
    data,
    preselectedItems: data.filter((itemn, index) => index % 2 === 0)
  });

  this.render(hbs`{{models-table data=data columns=columns preselectedItems=preselectedItems}}`);

  assert.equal(rows().filterBy('selected').length, 5, 'Rows are initially selected correctly');

  rows(1).click();
  assert.equal(rows().filterBy('selected').length, 6, 'One more row become selected');

  rows(0).click();
  assert.equal(rows().filterBy('selected').length, 5, 'One row become deselected');
});

test('columns column contains original definition as a nested property', function (assert) {

  const columns = generateColumns(['index1', 'index2']);
  columns[0].componentForSortCell = 'custom-sort-cell';
  columns[0].CustomColumString = 'custom-column-string';
  columns[0].CustomColumObject = { name: 'custom-column-object' };
  columns[0].CustomColumBool = true;
  columns[0].CustomColumNumber = 1;

  this.setProperties({
    columns,
    data: generateContent(10, 1)
  });
  this.render(hbs`{{models-table columns=columns data=data multipleColumnsSorting=false}}`);

  assert.deepEqual(sorting().mapBy('title'), ['custom-column-string|custom-column-object|true|1', 'index2'],
    'Custom column properties present in originalDefinition property in processedColumns');
});

test('#context-components render custom simple pagination', function (assert) {

  this.set('data', generateContent(30, 1));

  this.render(hbs`
    {{#models-table data=data as |c|}}
      {{c.table}}
      {{#c.footer as |f|}}
        {{f.summary}}
        {{f.size-select}}
        {{#f.pagination-simple}}
          <a href="#" {{action "gotoFirst"}} class={{gotoBackEnabled:enabled:disabled}}>F</a>&nbsp;
          <a href="#" {{action "gotoPrev"}} class={{gotoBackEnabled:enabled:disabled}}>P</a>&nbsp;
          <a href="#" {{action "gotoNext"}} class={{gotoForwardEnabled:enabled:disabled}}>N</a>&nbsp;
          <a href="#" {{action "gotoLast"}} class={{gotoForwardEnabled:enabled:disabled}}>L</a>
        {{/f.pagination-simple}}
      {{/c.footer}}
    {{/models-table}}
  `);
  assert.equal(navigation.text, 'F P N L', 'Custom labels are used');

});

test('#context-components sendAction from row cell component ', function(assert) {

  assert.expect(1);
  const columns = generateColumns(['index']);
  columns[0].component = 'custom-action';

  this.on('externalAction', function () {
    assert.ok(true, 'external Action was called!');
  });

  this.setProperties({
    data: generateContent(10, 1),
    columns,
    action: 'externalAction'
  });
  this.render(hbs`
    {{#models-table data=data columns=columns action=action as |c|}}
      {{#c.table as |table|}}
        {{#table.body as |body|}}
          {{#each body.visibleContent as |record index|}}
            {{#body.row record=record index=index as |row|}}
             {{#each body.visibleProcessedColumns as |column|}}
                {{#row.cell as |c|}}
                  {{custom-action record=c.record sendAction=c.sendAction}}
                {{/row.cell}}
              {{/each}}
            {{/body.row}}
          {{/each}}
        {{/table.body}}
      {{/c.table}}
    {{/models-table}}
    `);
  this.$('.action').first().click();
});

test('#context-components sendAction from row expand component ', function(assert) {

  assert.expect(1);
  const columns = generateColumns(['index']);
  columns.splice(0, 0, {
    component: 'expand-toggle',
    mayBeHidden: false
  });
  this.on('externalAction', function () {
    assert.ok(true, 'external Action was called!');
  });

  this.setProperties({
    data: generateContent(10, 1),
    columns,
    action: 'externalAction'
  });
  this.render(hbs`
    {{#models-table data=data columns=columns action=action as |c|}}
      {{#c.table as |table|}}
        {{#table.body as |body|}}
          {{#each body.visibleContent as |record index|}}
            {{body.row record=record index=index}}
            {{#if (exists-in body.expandedItems record)}}
              {{#body.row-expand record=record index=index as |re|}}
                <div class="action" {{action re.sendAction "action" re.record}}>{{re.record.index}}</div>
              {{/body.row-expand}}
            {{/if}}
          {{/each}}
        {{/table.body}}
      {{/c.table}}
    {{/models-table}}
    `);
  rows(0).expand();
  this.$('.action').first().click();
});

test('#context-components sendAction from sort cell ', function(assert) {

  assert.expect(1);
  const columns = generateColumns(['index']);

  this.on('externalAction', function () {
    assert.ok(true, 'external Action was called!');
  });

  this.setProperties({
    data: generateContent(10, 1),
    columns,
    action: 'externalAction'
  });
  this.render(hbs`
    {{#models-table data=data columns=columns action=action as |c|}}
      {{#c.table as |table|}}
        {{#table.header as |h|}}
          {{#h.row-sorting as |rs|}}
            {{#each rs.processedColumns as |column|}}
              {{#rs.row-sorting-cell column=column as |rsc|}}
                {{column.title}}
                <button class="action" {{action rsc.sendAction "action" column}}></button>
              {{/rs.row-sorting-cell}}
            {{/each}}
          {{/h.row-sorting}}
        {{/table.header}}
        {{table.body}}
      {{/c.table}}
    {{/models-table}}
    `);
  this.$('.action').first().click();
});

test('#context-components sendAction from filter cell', function(assert) {

  assert.expect(1);
  const columns = generateColumns(['index']);

  this.on('externalAction', function () {
    assert.ok(true, 'external Action was called!');
  });
  this.setProperties({
    data: generateContent(10, 1),
    columns,
    action: 'externalAction'
  });

  this.render(hbs`
    {{#models-table data=data columns=columns action=action as |c|}}
      {{#c.table as |table|}}
        {{#table.header as |h|}}
          {{#h.row-filtering as |rf|}}
            {{#each rf.processedColumns as |column|}}
              {{#rf.row-filtering-cell column=column as |rfc|}}
                {{column.title}}
                <button class="action" {{action rfc.sendAction "action" column}}></button>
              {{/rf.row-filtering-cell}}
            {{/each}}
          {{/h.row-filtering}}
        {{/table.header}}
      {{/c.table}}
    {{/models-table}}
    `);
  this.$('.action').first().click();
});