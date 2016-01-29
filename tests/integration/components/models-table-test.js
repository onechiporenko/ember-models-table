import Ember from 'ember';
import {
  moduleForComponent,
  test
} from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import { getEachAsString, getEachClassAsString, getCount, getEachValueAsString } from '../../helpers/dom';
import { generateContent, generateColumns } from '../../helpers/f';

var selectors = {
  firstColumn: 'tbody tr td:nth-child(1)',
  secondColumn: 'tbody tr td:nth-child(2)',
  allRows: 'tbody tr',
  summary: '.table-summary',
  filterString: '.filterString',
  navigationLinks: '.table-nav a',
  navigationButtons: '.table-nav button',
  theadSecondRowCells: 'thead tr:eq(1) th',
  theadSecondRowFirstColumnFilter: 'thead tr:eq(1) th:eq(0) input',
  theadSecondRowSecondColumnFilter: 'thead tr:eq(1) th:eq(1) input',
  theadFirstRowFirstCell: 'thead tr th:eq(0)',
  theadFirstRowFirstCellSort: 'thead tr th:eq(0) span',
  theadFirstRowSecondCell: 'thead tr th:eq(1)',
  theadFirstRowCells: 'thead tr:eq(0) th',
  tbodyFirstRowCells: 'tbody tr:eq(0) td',
  tbodyFirstColumnCells: 'tbody td:first-child',
  tbodyAllCells: 'tbody tr td',
  columnsDropdown: '.columns-dropdown li',
  tableNavBtnLast: '.table-nav a:eq(3)',
  tableNavBtnNext: '.table-nav a:eq(2)',
  tableNavBtnBack: '.table-nav a:eq(1)',
  tableNavBtnFirst: '.table-nav a:eq(0)',
  pageSizeDropdown: 'select.changePageSize'
};

moduleForComponent('models-table', 'ModelsTable | Integration', {

  integration: true

});

test('summary', function (assert) {

  var data = Ember.A([]);
  var currentPageNumber = 1;
  this.setProperties({
    data: data,
    currentPageNumber: currentPageNumber
  });

  this.render(hbs`{{models-table data=data currentPageNumber=currentPageNumber}}`);
  assert.equal(getEachAsString.call(this, selectors.summary), 'Show 0 - 0 of 0', 'Empty content');

  this.set('data', generateContent(10));
  assert.equal(getEachAsString.call(this, selectors.summary), 'Show 1 - 10 of 10', 'Content for 1 page');

  this.set('data', generateContent(15));
  this.set('currentPageNumber', 2);
  assert.equal(getEachAsString.call(this, selectors.summary), 'Show 11 - 15 of 15', 'Content for 2 pages. Last page selected');

  this.set('data', generateContent(35));
  assert.equal(getEachAsString.call(this, selectors.summary), 'Show 11 - 20 of 35', 'Content for 4 pages. Middle page selected');

});

test('basic render', function (assert) {

  this.setProperties({
    columns: generateColumns(['index', 'reversedIndex']),
    data: generateContent(10, 1)
  });

  this.render(hbs`{{models-table columns=columns data=data}}`);

  assert.equal(getCount.call(this, 'table'), 1, 'Table exists');
  assert.equal(getCount.call(this, selectors.allRows), 10, 'Table has 10 rows');
  assert.equal(getEachAsString.call(this, selectors.summary), 'Show 1 - 10 of 10', 'Summary is valid');
  assert.equal(getEachClassAsString.call(this, selectors.navigationLinks, '|'), 'disabled|disabled|disabled|disabled', 'All navigation buttons are disabled');
  assert.equal(getEachAsString.call(this, selectors.firstColumn), '12345678910', 'Content is valid');

});

test('basic render with data update', function (assert) {
  this.set('data', generateContent(10, 1));
  this.set('columns', generateColumns(['index', 'reversedIndex']));

  this.render(hbs`{{models-table columns=columns data=data}}`);
  assert.equal(getCount.call(this, 'table'), 1, 'Table exists');
  assert.equal(getCount.call(this, selectors.allRows), 10, 'Table has 10 rows');
  assert.equal(getEachAsString.call(this, selectors.summary), 'Show 1 - 10 of 10', 'Summary is valid');
  assert.equal(getEachClassAsString.call(this, selectors.navigationLinks, '|'), 'disabled|disabled|disabled|disabled', 'All navigation buttons are disabled');
  assert.equal(getEachAsString.call(this, selectors.firstColumn), '12345678910', 'Content is valid');

  this.set('data.0.index', 11);
  assert.equal(getEachAsString.call(this, selectors.firstColumn), '112345678910', 'Content is valid after update');

  this.set('data.firstObject.index', 12);
  assert.equal(getEachAsString.call(this, selectors.firstColumn), '122345678910', 'Content is valid after second update');

});

test('render without footer', function (assert) {

  this.set('showTableFooter', false);
  this.render(hbs`{{models-table showTableFooter=showTableFooter}}`);

  assert.equal(getCount.call(this, '.table-footer'), 0, 'table footer isn\'t rendered');

});

test('pageSizeObserver', function (assert) {

  this.set('data', generateContent(50, 1));
  this.render(hbs`{{models-table data=data}}`);

  assert.equal(getEachAsString.call(this, selectors.summary), 'Show 1 - 10 of 50', 'init value');
  this.$(selectors.tableNavBtnNext).click();

  assert.equal(getEachAsString.call(this, selectors.summary), 'Show 11 - 20 of 50', 'value changed by user');
  this.$(selectors.pageSizeDropdown).val(25);
  this.$(selectors.pageSizeDropdown).change();

  assert.equal(getEachAsString.call(this, selectors.summary), 'Show 1 - 25 of 50', 'value restored to 1');

});

test('visibleContent', function (assert) {

  var currentPageNumber = 1;
  var data = generateContent(10);
  var columns = generateColumns(['index']);
  this.setProperties({
    columns: columns,
    data: data,
    pageSize: 10,
    currentPageNumber: currentPageNumber
  });

  this.render(hbs`{{models-table data=data currentPageNumber=currentPageNumber pageSize=pageSize columns=columns}}`);
  assert.equal(getEachAsString.call(this, selectors.tbodyFirstColumnCells, '|'), generateContent(10).mapBy('index').join('|'), 'One page');

  this.setProperties({
    data: generateContent(25, 1),
    currentPageNumber: 2
  });
  assert.equal(getEachAsString.call(this, selectors.tbodyFirstColumnCells, '|'), generateContent(10, 11).mapBy('index').join('|'), 'Second page');

  this.setProperties({
    data: generateContent(25, 1),
    currentPageNumber: 1,
    pageSize: 50
  });
  assert.equal(getEachAsString.call(this, selectors.tbodyFirstColumnCells, '|'), generateContent(25, 1).mapBy('index').join('|'), 'One big page');

  this.setProperties({
    data: generateContent(25, 1),
    currentPageNumber: 3,
    pageSize: 10
  });
  this.$(selectors.tableNavBtnNext).click();
  this.$(selectors.tableNavBtnNext).click();
  assert.equal(getEachAsString.call(this, selectors.tbodyFirstColumnCells, '|'), generateContent(5, 21).mapBy('index').join('|'), 'Last page');

});

test('gotoBackEnabled', function (assert) {

  this.setProperties({
    data: generateContent(25, 1),
    columns: generateColumns(['index'])
  });
  this.render(hbs`{{models-table data=data columns=columns currentPageNumber=currentPageNumber}}`);

  assert.ok(getEachClassAsString.call(this, selectors.tableNavBtnBack).indexOf('disabled') !== -1, 'Disabled, if user is on the 1st page');

  this.set('currentPageNumber', 2);
  assert.equal(getEachClassAsString.call(this, selectors.tableNavBtnBack).indexOf('disabled'), -1, `Enabled, if user isn't on the 1st page`);

});

test('gotoForwardEnabled', function (assert) {

  this.setProperties({
    data: generateContent(10),
    currentPageNumber: 1
  });

  this.render(hbs`{{models-table data=data currentPageNumber=currentPageNumber}}`);
  assert.ok(getEachClassAsString.call(this, selectors.tableNavBtnNext).indexOf('disabled') !== -1, 'One page only');

  this.set('data', generateContent(11));
  assert.equal(getEachClassAsString.call(this, selectors.tableNavBtnNext).indexOf('disabled'), -1, `'One page + 1 record more`);

  this.setProperties({
    data: generateContent(25),
    currentPageNumber: 3
  });
  assert.ok(getEachClassAsString.call(this, selectors.tableNavBtnNext).indexOf('disabled') !== -1, 'Three pages, last one selected');

});

test('render multi-pages table', function (assert) {

  this.setProperties({
    columns: generateColumns(['index', 'reversedIndex']),
    data: generateContent(20, 1)
  });
  this.render(hbs`{{models-table columns=columns data=data}}`);

  assert.equal(getEachClassAsString.call(this, selectors.navigationLinks, '|'), 'disabled|disabled|enabled|enabled', '2 navigation buttons are disabled and 2 aren\'t');
  assert.equal(getEachAsString.call(this, selectors.summary), 'Show 1 - 10 of 20', 'Summary is valid');

  this.$(selectors.tableNavBtnNext).click();

  assert.equal(getEachAsString.call(this, selectors.firstColumn), '11121314151617181920', 'Content is valid');
  assert.equal(getEachClassAsString.call(this, selectors.navigationLinks, '|'), 'enabled|enabled|disabled|disabled', '2 navigation buttons are disabled and 2 aren\'t');

});

test('render custom template (file)', function (assert) {

  var columns = generateColumns(['index', 'indexWithHtml']);
  columns[1].template = 'custom/test';
  this.setProperties({
    data: generateContent(10, 1),
    columns: columns
  });

  this.render(hbs`{{models-table columns=columns data=data}}`);
  assert.equal(getEachAsString.call(this, selectors.secondColumn, '|'), '1+10|2+9|3+8|4+7|5+6|6+5|7+4|8+3|9+2|10+1', 'Content is valid');

});

test('render custom simple pagination', function (assert) {

  this.set('simplePaginationTemplate', 'custom/pagination');

  this.render(hbs`{{models-table simplePaginationTemplate=simplePaginationTemplate}}`);
  assert.equal(getEachAsString.call(this, '.table-nav').replace(/\s+/g, ' '), 'F P N L', 'Custom labels are used');

});

test('render show/hide columns', function (assert) {

  var firstColumnIconSelector = '.columns-dropdown li:nth-child(5) a span';
  var secondColumnIconSelector = '.columns-dropdown li:nth-child(6) a span';
  var checkedClass = 'glyphicon-check';
  var uncheckedClass = 'glyphicon-unchecked';
  this.setProperties({
    columns: generateColumns(['index', 'reversedIndex']),
    data: generateContent(10, 1)
  });
  this.render(hbs`{{models-table data=data columns=columns}}`);

  assert.equal(getCount.call(this, selectors.theadFirstRowCells), 2, '2 columns are shown (thead)');
  assert.equal(getCount.call(this, selectors.theadSecondRowCells), 2, '2 columns are shown (thead)');
  assert.equal(getCount.call(this, selectors.tbodyFirstRowCells), 2, '2 columns are shown (tbody)');

  this.$(`${selectors.columnsDropdown}:eq(4) a`).click();

  assert.equal(getCount.call(this, selectors.theadFirstRowCells), 1, '1 column is shown (thead)');
  assert.equal(getCount.call(this, selectors.theadSecondRowCells), 1, '1 column is shown (thead)');
  assert.equal(getCount.call(this, selectors.tbodyFirstRowCells), 1, '1 column is shown (tbody)');
  assert.equal(getEachAsString.call(this, selectors.theadFirstRowFirstCell), 'reversedIndex', 'Valid column is shown (thead)');
  assert.equal(this.$(firstColumnIconSelector).hasClass(uncheckedClass), true, 'First column is unchecked');
  assert.equal(this.$(secondColumnIconSelector).hasClass(checkedClass), true, 'Second column is checked');

  this.$(`${selectors.columnsDropdown}:eq(4) a`).click();

  assert.equal(getCount.call(this, selectors.theadFirstRowCells), 2, '2 columns are shown (thead)');
  assert.equal(getCount.call(this, selectors.tbodyFirstRowCells), 2, '2 columns are shown (tbody)');
  assert.equal(this.$(firstColumnIconSelector).hasClass(checkedClass), true, 'First column is checked');
  assert.equal(this.$(secondColumnIconSelector).hasClass(checkedClass), true, 'Second column is checked');

  this.$(`${selectors.columnsDropdown}:eq(5) a`).click();

  assert.equal(getCount.call(this, selectors.theadFirstRowCells), 1, '1 column is shown (thead)');
  assert.equal(getCount.call(this, selectors.tbodyFirstRowCells), 1, '1 column is shown (tbody)');
  assert.equal(getEachAsString.call(this, selectors.theadFirstRowFirstCell), 'index', 'Valid column is shown (thead)');
  assert.equal(this.$(firstColumnIconSelector).hasClass(checkedClass), true, 'First column is checked');
  assert.equal(this.$(secondColumnIconSelector).hasClass(uncheckedClass), true, 'Second column is unchecked');

  this.$(`${selectors.columnsDropdown}:eq(4) a`).click();

  assert.equal(getCount.call(this, selectors.allRows), 1, '1 row is shown when all columns are hidden');
  assert.equal(getCount.call(this, selectors.tbodyAllCells), 1, 'with 1 cell');
  assert.equal(this.$(selectors.tbodyAllCells).attr('colspan'), 2, 'it\'s colspan is equal to the columns count');
  assert.equal(getEachAsString.call(this, selectors.tbodyAllCells), 'All columns are hidden. Use columns-dropdown to show some of them', 'correct message is shown');
  assert.equal(this.$(firstColumnIconSelector).hasClass(uncheckedClass), true, 'First column is unchecked');
  assert.equal(this.$(secondColumnIconSelector).hasClass(uncheckedClass), true, 'Second column is unchecked');

});

test('render show/hide all columns', function(assert) {
  this.setProperties({
    columns: generateColumns(['index', 'reversedIndex']),
    data: generateContent(10, 1)
  });

  this.render(hbs`{{models-table columns=columns data=data}}`);
  assert.equal(getCount.call(this, selectors.theadFirstRowCells), 2, '2 columns are shown (thead)');
  assert.equal(getCount.call(this, selectors.theadSecondRowCells), 2, '2 columns are shown (thead)');
  assert.equal(getCount.call(this, selectors.tbodyFirstRowCells), 2, '2 columns are shown (tbody)');

  this.$(`${selectors.columnsDropdown}:eq(1) a`).click();

  assert.equal(getCount.call(this, selectors.allRows), 1, '1 row is shown when all columns are hidden');
  assert.equal(getCount.call(this, selectors.tbodyAllCells), 1, 'with 1 cell');
  assert.equal(this.$(selectors.tbodyAllCells).attr('colspan'), 2, 'it\'s colspan is equal to the columns count');
  assert.equal(getEachAsString.call(this, selectors.tbodyAllCells), 'All columns are hidden. Use columns-dropdown to show some of them', 'correct message is shown');

  this.$(`${selectors.columnsDropdown}:eq(0) a`).click();

  assert.equal(getCount.call(this, selectors.theadFirstRowCells), 2, '2 columns are shown (thead)');
  assert.equal(getCount.call(this, selectors.theadSecondRowCells), 2, '2 columns are shown (thead)');
  assert.equal(getCount.call(this, selectors.tbodyFirstRowCells), 2, '2 columns are shown (tbody)');

});

test('render columns-dropdown with mayBeHidden = false for some columns', function (assert) {

    var columns = generateColumns(['index', 'reversedIndex']);
    columns[0].mayBeHidden = false;
    this.setProperties({
      columns: columns,
      data: generateContent(10, 1)
    });

  this.render(hbs`{{models-table columns=columns data=data}}`);
  assert.equal(getEachAsString.call(this, '.columns-dropdown li a').replace(/\s+/g, ''), ('Show All' + 'Hide All' + 'Restore Defaults' + 'reversedIndex').replace(/\s+/g, ''), 'Column with mayBeHidden = false is not shown in the columns dropdown');

  this.$(`${selectors.columnsDropdown}:eq(4) a`).click();

  assert.equal(getCount.call(this, selectors.theadFirstRowCells), 1, '1 column is shown (thead)');
  assert.equal(getCount.call(this, selectors.theadSecondRowCells), 1, '1 column is shown (thead)');
  assert.equal(getCount.call(this, selectors.tbodyFirstRowCells), 1, '1 column is shown (tbody)');
  assert.equal(getEachAsString.call(this, selectors.theadFirstRowCells).replace(/\s+/g,''), 'index', 'Valid column is shown (thead)');

});

test('global filtering (ignore case OFF)', function(assert) {

  var columns = generateColumns(['index', 'reversedIndex']);
  columns[1].template = 'custom/test';
  this.setProperties({
    columns: columns,
    data: generateContent(10, 1)
  });
  this.render(hbs`{{models-table data=data columns=columns}}`);

  this.$(selectors.filterString).val('1');
  this.$(selectors.filterString).change();

  assert.equal(getEachAsString.call(this, selectors.firstColumn, '|'), '1|10', 'Content is filtered correctly');

  this.$(selectors.filterString).val('');
  this.$(selectors.filterString).change();

  assert.equal(getEachAsString.call(this, selectors.firstColumn), '12345678910', 'Filter is empty and all rows are shown');

  this.$(selectors.filterString).val('invalid input');
  this.$(selectors.filterString).change();

  assert.equal(getEachAsString.call(this, selectors.firstColumn), 'No records to show', 'All rows are filtered out and proper message is shown');

});

test('global filtering (ignore case ON)', function(assert) {

  this.setProperties({
      filteringIgnoreCase: true,
      columns: generateColumns(['index', 'someWord']),
      data: generateContent(10, 1)
  });
  this.render(hbs`{{models-table columns=columns data=data filteringIgnoreCase=filteringIgnoreCase}}`);

  this.$(selectors.filterString).val('One');
  this.$(selectors.filterString).change();

  assert.equal(getEachAsString.call(this, selectors.tbodyFirstRowCells), '1one', 'Content is filtered correctly');

  this.$(selectors.filterString).val('');
  this.$(selectors.filterString).change();

  assert.equal(getEachAsString.call(this, selectors.firstColumn), '12345678910', 'Filter is empty and all rows are shown');

  this.$(selectors.filterString).val('invalid input');
  this.$(selectors.filterString).change();

  assert.equal(getEachAsString.call(this, selectors.firstColumn), 'No records to show', 'All rows are filtered out and proper message is shown');

});

test('filtering by columns (ignore case OFF)', function (assert) {

  var columns = generateColumns(['index', 'reversedIndex']);
  columns[1].template = 'custom/test';
  this.setProperties({
    columns: columns,
    data: generateContent(10, 1),
    useFilteringByColumns: true
  });

  this.render(hbs`{{models-table data=data columns=columns useFilteringByColumns=useFilteringByColumns}}`);
  this.$(selectors.theadSecondRowFirstColumnFilter).val('1');
  this.$(selectors.theadSecondRowFirstColumnFilter).change();

  assert.equal(getEachAsString.call(this, selectors.firstColumn, '|'), '1|10', 'Content is filtered correctly');

  this.$(selectors.theadSecondRowFirstColumnFilter).val('');
  this.$(selectors.theadSecondRowFirstColumnFilter).change();

  assert.equal(getEachAsString.call(this, selectors.firstColumn), '12345678910', 'Filter is empty and all rows are shown');

  this.$(selectors.theadSecondRowFirstColumnFilter).val('invalid input');
  this.$(selectors.theadSecondRowFirstColumnFilter).change();

  assert.equal(getEachAsString.call(this, selectors.firstColumn), 'No records to show', 'All rows are filtered out and proper message is shown');

  this.set('useFilteringByColumns', false);

  assert.equal(getEachAsString.call(this, selectors.firstColumn), '12345678910', 'Filtering by columns is ignored');
  assert.equal(getCount.call(this, 'thead input'), 0, 'Columns filters are hidden');

});

test('filtering by columns (ignore case ON)', function (assert) {

  this.setProperties({
    filteringIgnoreCase: true,
    useFilteringByColumns: true,
    columns: generateColumns(['index', 'someWord']),
    data: generateContent(10, 1)
  });

  this.render(hbs`{{models-table filteringIgnoreCase=filteringIgnoreCase columns=columns data=data useFilteringByColumns=useFilteringByColumns}}`);
  this.$(selectors.theadSecondRowSecondColumnFilter).val('One');
  this.$(selectors.theadSecondRowSecondColumnFilter).change();
  assert.equal(getEachAsString.call(this, selectors.tbodyFirstRowCells), '1one', 'Content is filtered correctly');

  this.$(selectors.theadSecondRowSecondColumnFilter).val('');
  this.$(selectors.theadSecondRowSecondColumnFilter).change();

  assert.equal(getEachAsString.call(this, selectors.firstColumn), '12345678910', 'Filter is empty and all rows are shown');

  this.$(selectors.theadSecondRowSecondColumnFilter).val('invalid input');
  this.$(selectors.theadSecondRowSecondColumnFilter).change();

  assert.equal(getEachAsString.call(this, selectors.firstColumn), 'No records to show', 'All rows are filtered out and proper message is shown');

  this.set('useFilteringByColumns', false);

  assert.equal(getEachAsString.call(this, selectors.firstColumn), '12345678910', 'Filtering by columns is ignored');
  assert.equal(getCount.call(this, 'thead input'), 0, 'Columns filters are hidden');

});

test('filtering by columns with custom functions', function (assert) {

  var columns = generateColumns(['index', 'someWord']);
  columns[0].filterFunction = function (cellValue, neededString) {
    var signs = ['<', '>', '='];
    var neededNumber = neededString;
    var sign = '=';
    if (-1 !== signs.indexOf(neededString[0])) {
      sign = neededString[0];
      neededNumber = parseInt(neededString.substring(1), 10);
    }
    if ('=' === sign) {
      return parseInt(cellValue, 10) === neededNumber;
    }
    if ('>' === sign) {
      return parseInt(cellValue, 10) > neededNumber;
    }
    if ('<' === sign) {
      return parseInt(cellValue, 10) < neededNumber;
    }
    return cellValue === neededNumber;
  };

  this.setProperties({
    useFilteringByColumns: true,
    columns: columns,
    data: generateContent(10, 1)
  });

  this.render(hbs`{{models-table columns=columns data=data useFilteringByColumns=useFilteringByColumns}}`);
  this.$(selectors.theadSecondRowFirstColumnFilter).val('=1');
  this.$(selectors.theadSecondRowFirstColumnFilter).change();
  assert.equal(getEachAsString.call(this, selectors.tbodyFirstColumnCells), '1', `Content is filtered correctly (with '=1')`);

  this.$(selectors.theadSecondRowFirstColumnFilter).val('>5');
  this.$(selectors.theadSecondRowFirstColumnFilter).change();
  assert.equal(getEachAsString.call(this, selectors.tbodyFirstColumnCells), '678910', `Content is filtered correctly (with '>5')`);

  this.$(selectors.theadSecondRowFirstColumnFilter).val('<6');
  this.$(selectors.theadSecondRowFirstColumnFilter).change();
  assert.equal(getEachAsString.call(this, selectors.tbodyFirstColumnCells), '12345', `Content is filtered correctly (with '<6')`);

});

test('filtering with filterWithSelect (without predefinedFilterOptions)', function (assert) {

  var selectSelector = `${selectors.theadSecondRowCells}:eq(1) select`;

  var columns = generateColumns(['index', 'someWord']);
  columns[1].filterWithSelect = true;
  var data = generateContent(10, 1);
  data[data.length - 1].someWord = '';
  var concatenatedWords = data.mapBy('someWord').join('');
  this.setProperties({
    columns: columns,
    data: data
  });
  this.render(hbs`{{models-table columns=columns data=data}}`);

  assert.equal(getCount.call(this, `${selectSelector}  option`), 10, 'Empty data-value was excluded');
  assert.equal(getEachAsString.call(this, `${selectSelector}  option:last-child`), 'nine', 'Last option is not empty string');

  assert.ok(this.$(selectSelector), 'Select-box for column with `filterWithSelect` exists');
  assert.equal(getEachAsString.call(this, `${selectSelector}  option`).replace(/\s+/g, ''), concatenatedWords, 'Options for select are valid');

  this.$(selectSelector).val('one');
  this.$(selectSelector).change();
  assert.equal(getCount.call(this, selectors.allRows), 1, 'Only one row exist after filtering');

  this.set('data', generateContent(9, 2));

  assert.equal(this.$(selectSelector).val(), '', 'Filter is reverted to the default value');

  this.$(selectSelector).val('');
  this.$(selectSelector).change();

  assert.equal(getCount.call(this, selectors.allRows), 9, 'All rows are shown after clear filter');

});

test('filtering with filterWithSelect (with predefinedFilterOptions)', function (assert) {

  var selectSelector = `${selectors.theadSecondRowCells}:eq(1) select`;

  var columns = generateColumns(['index', 'someWord']);
  columns[1].filterWithSelect = true;
  columns[1].predefinedFilterOptions = ['one', 'two'];
  var data = generateContent(10, 1);

  this.setProperties({
    columns: columns,
    data: data
  });
  this.render(hbs`{{models-table data=data columns=columns}}`);

  assert.ok(this.$(selectSelector), 'Select-box for column with `filterWithSelect` exists');
  assert.equal(getEachAsString.call(this, `${selectSelector}  option`).replace(/\s+/g, ''), 'onetwo', 'Options for select are valid');

  this.$(selectSelector).val('one');
  this.$(selectSelector).change();

  assert.equal(getCount.call(this, selectors.allRows), 1, 'Only one row exist after filtering');

  this.set('data', generateContent(9, 2));

  assert.equal(this.$(selectSelector).val(), 'one', 'Filter is not reverted to the default value');
  assert.equal(getEachAsString.call(this, `${selectSelector}  option`).replace(/\s+/g, ''), 'onetwo', 'Options for select are valid');

  this.$(selectSelector).val('');
  this.$(selectSelector).change();

  assert.equal(getCount.call(this, selectors.allRows), 9, 'All rows are shown after clear filter');

});

test('custom messages', function (assert) {

  var messages = Ember.Object.create({
    searchLabel: 'Se@rch:',
    'columns-title': 'ColumnZ',
    'columns-showAll': 'Show Me All!',
    'columns-hideAll': 'Hide All!',
    'columns-restoreDefaults': 'Restore My Columns',
    tableSummary: 'Now are showing %@ - %@ of %@',
    allColumnsAreHidden: 'No visible columns, dude!',
    noDataToShow: 'No data. Sorry, bro...'
  });

  var messages2 = Ember.Object.create({
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

  assert.equal(getEachAsString.call(this, selectors.summary), Ember.String.fmt(messages.tableSummary, 1, 10, 10), 'Summary is valid');
  assert.equal(getEachAsString.call(this, '.columns-dropdown button'), messages['columns-title'], 'Columns-dropdown title is valid');
  assert.equal(getEachAsString.call(this, '.columns-dropdown .dropdown-menu li:eq(0)'), messages['columns-showAll'], 'Columns-dropdown "showAll" is valid');
  assert.equal(getEachAsString.call(this, '.columns-dropdown .dropdown-menu li:eq(1)'), messages['columns-hideAll'], 'Columns-dropdown "hideAll" is valid');
  assert.equal(getEachAsString.call(this, '.columns-dropdown .dropdown-menu li:eq(2)'), messages['columns-restoreDefaults'], 'Columns-dropdown "restoreDefaults" is valid');
  assert.equal(getEachAsString.call(this, '.globalSearch label'), messages.searchLabel, 'Global-search label is valid');

  this.$(`${selectors.columnsDropdown}:eq(1) a`).click();

  assert.equal(getEachAsString.call(this, selectors.tbodyAllCells), messages.allColumnsAreHidden, 'Message about all hidden columns is valid');

  this.$(`${selectors.columnsDropdown}:eq(0) a`).click();
  this.$(selectors.filterString).val('invalid string');
  this.$(selectors.filterString).change();

  assert.equal(getEachAsString.call(this, selectors.firstColumn), messages.noDataToShow, 'Message about no data is valid');

  this.set('customMessages', messages2);

  this.$(selectors.filterString).val('');
  this.$(selectors.filterString).change();

  assert.equal(getEachAsString.call(this, selectors.summary), Ember.String.fmt(messages2.tableSummary, 1, 10, 10), 'Summary is valid (2)');
  assert.equal(getEachAsString.call(this, '.columns-dropdown button'), messages2['columns-title'], 'Columns-dropdown title is valid (2)');
  assert.equal(getEachAsString.call(this, '.columns-dropdown .dropdown-menu li:eq(0)'), messages2['columns-showAll'], 'Columns-dropdown "showAll" is valid (2)');
  assert.equal(getEachAsString.call(this, '.columns-dropdown .dropdown-menu li:eq(1)'), messages2['columns-hideAll'], 'Columns-dropdown "hideAll" is valid (2)');
  assert.equal(getEachAsString.call(this, '.columns-dropdown .dropdown-menu li:eq(2)'), messages2['columns-restoreDefaults'], 'Columns-dropdown "restoreDefaults" is valid (2)');
  assert.equal(getEachAsString.call(this, '.globalSearch label'), messages2.searchLabel, 'Global-search label is valid (2)');

  this.$(`${selectors.columnsDropdown}:eq(1) a`).click();

  assert.equal(getEachAsString.call(this, selectors.tbodyAllCells), messages2.allColumnsAreHidden, 'Message about all hidden columns is valid (2)');

  this.$(`${selectors.columnsDropdown}:eq(0) a`).click();
  this.$(selectors.filterString).val('invalid string');
  this.$(selectors.filterString).change();

  assert.equal(getEachAsString.call(this, selectors.firstColumn), messages2.noDataToShow, 'Message about no data is valid (2)');

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
    customIcons: customIcons
  });

  this.render(hbs`{{models-table data=data columns=columns customIcons=customIcons}}`);

  this.$(selectors.theadFirstRowFirstCell).click();
  assert.equal(getCount.call(this, '.sort-asc'), 1, 'sort asc 1 column');

  this.$(selectors.theadFirstRowSecondCell).click();
  assert.equal(getCount.call(this, '.sort-asc'), 2, 'sort asc 2 columns');

  this.$(selectors.theadFirstRowSecondCell).click();
  assert.equal(getCount.call(this, '.sort-asc'), 1, 'sort asc 1 column');
  assert.equal(getCount.call(this, '.sort-desc'), 1, 'sort desc 1 column');

  assert.equal(getCount.call(this, `${selectors.columnsDropdown} .column-visible`), 2, 'all columns are visible');

  this.$(`${selectors.columnsDropdown}:eq(4) a`).click();
  assert.equal(getCount.call(this, `${selectors.columnsDropdown} .column-visible`), 1, '1 column is visible');
  assert.equal(getCount.call(this, `${selectors.columnsDropdown} .column-hidden`), 1, '1 column is hidden');

  assert.equal(getEachClassAsString.call(this, `${selectors.tableNavBtnFirst} span`), 'nav-first', 'First-button has valid class');
  assert.equal(getEachClassAsString.call(this, `${selectors.tableNavBtnBack} span`), 'nav-prev', 'Prev-button has valid class');
  assert.equal(getEachClassAsString.call(this, `${selectors.tableNavBtnNext} span`), 'nav-next', 'Next-button has valid class');
  assert.equal(getEachClassAsString.call(this, `${selectors.tableNavBtnLast} span`), 'nav-last', 'Last-button has valid class');

});

test('columns column cell classes', function (assert) {

  var columns = generateColumns(['index', 'reversedIndex']);
  columns[0].className = 'custom-column-class';
  this.setProperties({
    columns: columns,
    data: generateContent(10, 1)
  });
  this.render(hbs`{{models-table columns=columns data=data}}`);

  assert.equal(getCount.call(this, 'tbody .custom-column-class'), 10, 'Custom column class exists on each column cell');

});

test('column title auto generation', function (assert) {

  var columns = generateColumns(['index', 'reversedIndex']);
  columns.setEach('title', null);
  this.setProperties({
    columns: columns,
    data: generateContent(10, 1)
  });
  this.render(hbs`{{models-table columns=columns data=data}}`);

  assert.equal(getEachAsString.call(this, 'thead th:eq(0)'), 'Index', 'Title for one word is correct');
  assert.equal(getEachAsString.call(this, 'thead th:eq(1)'), 'Reversed index', 'Title for camelCase is correct');

});

test('sorting (multi `true`)', function (assert) {

  this.setProperties({
    columns: generateColumns(['index', 'index2']),
    data: generateContent(10, 1)
  });
  this.render(hbs`{{models-table columns=columns data=data}}`);

  this.$(selectors.theadFirstRowFirstCell).click();

  assert.equal(getEachAsString.call(this, selectors.firstColumn), '12345678910', 'Content is valid (sorting 1st column asc)');

  this.$(selectors.theadFirstRowFirstCell).click();

  assert.equal(getEachAsString.call(this, selectors.firstColumn), '10987654321', 'Content is valid (sorting 1st column desc)');

  this.$(selectors.theadFirstRowFirstCell).click();
  this.$(selectors.theadFirstRowSecondCell).click();

  assert.equal(getEachAsString.call(this, selectors.firstColumn), '12345678910', 'Content is valid (sorting 1st column asc) - restore defaults');
  assert.equal(getEachAsString.call(this, selectors.secondColumn), '1122334455', 'Content is valid (sorting 2nd column asc) - restore defaults');

  this.$(selectors.theadFirstRowFirstCell).click();
  this.$(selectors.theadFirstRowFirstCell).click();

  assert.equal(getEachAsString.call(this, selectors.firstColumn), '21436587109', 'Content is valid (sorting 1st column desc)');
  assert.equal(getEachAsString.call(this, selectors.secondColumn), '1122334455', 'Content is valid (sorting 2nd column asc)');

});

test('sorting (multi `false`)', function (assert) {

  this.setProperties({
    columns: generateColumns(['index', 'index2']),
    data: generateContent(10, 1)
  });
  this.render(hbs`{{models-table columns=columns data=data multipleColumnsSorting=false}}`);

  this.$(selectors.theadFirstRowFirstCell).click();

  assert.equal(getEachAsString.call(this, selectors.firstColumn), '12345678910', 'Content is valid (sorting 1st column asc)');

  this.$(selectors.theadFirstRowFirstCell).click();

  assert.equal(getEachAsString.call(this, selectors.firstColumn), '10987654321', 'Content is valid (sorting 1st column desc)');

  this.$(selectors.theadFirstRowFirstCell).click();
  this.$(selectors.theadFirstRowSecondCell).click();

  assert.equal(getEachAsString.call(this, selectors.firstColumn), '12345678910', 'Content is valid (sorting 1st column asc) - restore defaults');
  assert.equal(getEachAsString.call(this, selectors.secondColumn), '1122334455', 'Content is valid (sorting 2nd column asc) - restore defaults');

  this.$(selectors.theadFirstRowFirstCell).click();
  this.$(selectors.theadFirstRowFirstCell).click();

  assert.equal(getEachAsString.call(this, selectors.firstColumn), '10987654321', 'Content is valid (sorting 1st column desc)');
  assert.equal(getEachAsString.call(this, selectors.secondColumn), '5544332211', 'Content is valid (sorting 2nd reverted)');

});

test('sendAction can trigger actions outside the component', function (assert) {

  var columns = generateColumns(['index', 'indexWithHtml']);
  columns[1].template = 'custom/action';
  var targetObject = {
    externalAction: function() {
      assert.ok(true, 'external Action was called!');
    }
  };
  this.setProperties({
    data: generateContent(10, 1),
    columns: columns,
    action: 'externalAction',
    targetObject: targetObject
  });
  this.render(hbs`{{models-table data=data columns=columns action=action targetObject=targetObject}}`);

  this.$('.action').first().click();
});

test('visiblePageNumbers', function (assert) {

  this.setProperties({
    data: generateContent(10, 1),
    columns: generateColumns(['index']),
    currentPageNumber: test.currentPageNumber,
    useNumericPagination: true,
    pageSize: 1
  });

  this.render(hbs`{{models-table data=data columns=columns currentPageNumber=currentPageNumber pageSize=pageSize useNumericPagination=useNumericPagination}}`);

  Ember.A([
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
    this.setProperties({
      currentPageNumber: test.currentPageNumber,
      pageSize: 1
    });
    assert.equal(getEachAsString.call(this, selectors.navigationButtons,'|'), Ember.A(test.visiblePageNumbers).mapBy('label').join('|'), `10 pages, active is ${test.currentPageNumber}`);
  }, this);

  this.setProperties({
    data: generateContent(10, 1),
    pageSize: 10
  });
  assert.equal(getEachAsString.call(this, selectors.navigationButtons,'|'), '1', 'Only 1 page');

});

test('event on user interaction (filtering by column)', function (assert) {

  var targetObject = {
    displayDataChanged: function() {
      assert.ok(true, '`displayDataChanged`-action was called!');
    }
  };

  this.setProperties({
    useFilteringByColumns: true,
    columns: generateColumns(['index', 'someWord']),
    data: generateContent(10, 1),
    displayDataChangedAction: 'displayDataChanged',
    sendDisplayDataChangedAction: true,
    targetObject: targetObject
  });

  this.render(hbs`{{models-table columns=columns data=data displayDataChangedAction=displayDataChangedAction useFilteringByColumns=useFilteringByColumns targetObject=targetObject sendDisplayDataChangedAction=sendDisplayDataChangedAction}}`);
  this.$(selectors.theadSecondRowSecondColumnFilter).val('One');
  this.$(selectors.theadSecondRowSecondColumnFilter).change();
});

test('event on user interaction (global filtering)', function (assert) {

  var targetObject = {
    displayDataChanged: function() {
      assert.ok(true, '`displayDataChanged`-action was called!');
    }
  };

  this.setProperties({
    columns: generateColumns(['index', 'someWord']),
    data: generateContent(10, 1),
    displayDataChangedAction: 'displayDataChanged',
    sendDisplayDataChangedAction: true,
    targetObject: targetObject
  });

  this.render(hbs`{{models-table columns=columns data=data displayDataChangedAction=displayDataChangedAction targetObject=targetObject sendDisplayDataChangedAction=sendDisplayDataChangedAction}}`);
  this.$(selectors.filterString).val('One');
  this.$(selectors.filterString).change();
});

test('event on user interaction (sorting)', function (assert) {

  var targetObject = {
    displayDataChanged: function() {
      assert.ok(true, '`displayDataChanged`-action was called!');
    }
  };

  this.setProperties({
    columns: generateColumns(['index', 'someWord']),
    data: generateContent(10, 1),
    displayDataChangedAction: 'displayDataChanged',
    sendDisplayDataChangedAction: true,
    targetObject: targetObject
  });

  this.render(hbs`{{models-table columns=columns data=data displayDataChangedAction=displayDataChangedAction targetObject=targetObject sendDisplayDataChangedAction=sendDisplayDataChangedAction}}`);
  this.$(selectors.theadFirstRowFirstCell).click();
});

test('show first page if for some reasons there is no content for current page, but table data exists', function (assert) {

  assert.expect(1);

  var data = generateContent(11, 1);
  var columns = generateColumns(['index', 'indexWithHtml']);
  columns[1].template = 'custom/delete';
  var self = this;
  var targetObject = {
    deleteRecord (record) {
      data = data.without(record);
      self.set('data', data);
    }
  };
  this.setProperties({
    data: data,
    columns: columns,
    targetObject: targetObject
  });
  this.render(hbs`{{models-table data=data columns=columns targetObject=targetObject delete='deleteRecord'}}`);
  // move to the 2nd page and delete 1 row there
  Ember.run.next(function () {
    this.$(selectors.tableNavBtnNext).click();
    this.$('td button').first().click();
    assert.equal(getEachAsString.call(this, selectors.summary), 'Show 1 - 10 of 10', 'First page is shown');
  });
});

test('row deleted in the middle page', function (assert) {

  assert.expect(1);

  var data = generateContent(31, 1);
  var columns = generateColumns(['index', 'indexWithHtml']);
  columns[1].template = 'custom/delete';
  var self = this;
  var targetObject = {
    deleteRecord (record) {
      data = data.without(record);
      self.set('data', data);
    }
  };
  this.setProperties({
    data: data,
    columns: columns,
    targetObject: targetObject
  });
  this.render(hbs`{{models-table data=data columns=columns targetObject=targetObject delete='deleteRecord'}}`);
  // move to the 2nd page and delete 1 row there
  Ember.run.next(function () {
    this.$(selectors.tableNavBtnNext).click();
    this.$('td button').first().click();
    assert.equal(getEachAsString.call(this, selectors.summary), 'Show 11 - 20 of 30', 'Second page is shown');
  });
});

test('updateable columns (disabled)', function (assert) {

  var columns1 = generateColumns(['index', 'someWord']);
  var columns2 = generateColumns(['index', 'index2', 'someWord']);

  this.setProperties({
    columns: columns1,
    data: generateContent(10, 1),
    columnsAreUpdateable: false
  });

  this.render(hbs`{{models-table columns=columns data=data columnsAreUpdateable=columnsAreUpdateable}}`);
  this.$(selectors.theadSecondRowFirstColumnFilter).val('1');
  this.$(selectors.theadSecondRowFirstColumnFilter).change();
  this.$(selectors.theadFirstRowFirstCell).click();
  assert.equal(getEachAsString.call(this, selectors.theadFirstRowCells, '|'), 'index|someWord', 'two columns are shown');
  assert.equal(getEachAsString.call(this, selectors.columnsDropdown, '|'), 'Show All|Hide All|Restore Defaults||index|someWord', 'two columns are in columns dropdown');

  this.set('columns', columns2);
  assert.equal(getEachAsString.call(this, selectors.theadFirstRowCells, '|'), 'index|someWord', 'columns are not updated');
  assert.equal(getEachAsString.call(this, selectors.columnsDropdown, '|'), 'Show All|Hide All|Restore Defaults||index|someWord', 'columns dropdown is not updated');
  assert.equal(getEachValueAsString.call(this, selectors.theadSecondRowFirstColumnFilter), '1', 'column filter was not dropped');
  assert.equal(getEachClassAsString.call(this, selectors.theadFirstRowFirstCellSort), 'glyphicon glyphicon-triangle-bottom', 'column sorting was not dropped');
});

test('updateable columns (enabled)', function (assert) {

  var columns1 = generateColumns(['index', 'someWord']);
  var columns2 = generateColumns(['index', 'index2', 'someWord']);

  this.setProperties({
    columns: columns1,
    data: generateContent(10, 1),
    columnsAreUpdateable: true
  });

  this.render(hbs`{{models-table columns=columns data=data columnsAreUpdateable=columnsAreUpdateable}}`);
  assert.equal(getEachAsString.call(this, selectors.theadFirstRowCells, '|'), 'index|someWord', 'two columns are shown');
  assert.equal(getEachAsString.call(this, selectors.columnsDropdown, '|'), 'Show All|Hide All|Restore Defaults||index|someWord', 'two columns are in columns dropdown');
  this.$(selectors.theadSecondRowFirstColumnFilter).val('1');
  this.$(selectors.theadSecondRowFirstColumnFilter).change();
  this.$(selectors.theadFirstRowFirstCell).click();

  this.set('columns', columns2);
  Ember.run(function () {
    assert.equal(getEachAsString.call(this, selectors.theadFirstRowCells, '|'), 'index|index2|someWord', 'columns are updated');
    assert.equal(getEachAsString.call(this, selectors.columnsDropdown, '|'), 'Show All|Hide All|Restore Defaults||index|index2|someWord', 'columns dropdown is updated');
    assert.equal(getEachValueAsString.call(this, selectors.theadSecondRowFirstColumnFilter), '', 'column filter was dropped');
    assert.equal(getEachClassAsString.call(this, selectors.theadFirstRowFirstCellSort), '', 'column sorting was dropped');
  });

});