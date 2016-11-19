import Ember from 'ember';

import {
  moduleForComponent,
  test
} from 'ember-qunit';

import hbs from 'htmlbars-inline-precompile';

import {
  getEachAsString,
  getEachClassAsString,
  getCount,
  getEachValueAsString,
  getEachAttrAsString,
  nextPage,
  globalFilter,
  filterFirstColumn,
  filterSecondColumn,
  filterWithSelectFirstColumn,
  filterWithSelectSecondColumn,
  changePageSize,
  toggleFirstColumnVisibility,
  toggleSecondColumnVisibility,
  hideAllColumns,
  showAllColumns,
  sortFirstColumn,
  sortSecondColumn,
  expandFirstRow,
  expandSecondRow,
  collapseFirstRow,
  collapseSecondRow,
  firstRowIsExpanded,
  secondRowIsExpanded,
  firstRowIsCollapsed,
  secondRowIsCollapsed,
  firstRowIsSelected,
  secondRowIsSelected,
  getAllSelectedRows,
  clickOnRow,
  selectors
} from '../../helpers/dom';

import {
  generateContent,
  generateColumns
} from '../../helpers/f';

const {
  A,
  K,
  String: S,
  Object: O
} = Ember;

let _getEachAsString,
  _getEachClassAsString,
  _getCount,
  _getEachValueAsString,
  _getEachAttrAsString,
  _nextPage,
  _globalFilter,
  _filterFirstColumn,
  _filterSecondColumn,
  _filterWithSelectFirstColumn,
  _filterWithSelectSecondColumn,
  _changePageSize,
  _toggleFirstColumnVisibility,
  _toggleSecondColumnVisibility,
  _hideAllColumns,
  _showAllColumns,
  _sortFirstColumn,
  _sortSecondColumn,
  _collapseFirstRow,
  _collapseSecondRow,
  _expandFirstRow,
  _expandSecondRow,
  _firstRowIsExpanded,
  _secondRowIsExpanded,
  _firstRowIsCollapsed,
  _secondRowIsCollapsed,
  _firstRowIsSelected,
  _secondRowIsSelected,
  _getAllSelectedRows,
  _clickOnRow;

moduleForComponent('models-table', 'ModelsTable | Integration', {
  integration: true,

  beforeEach() {
    _getEachAsString = getEachAsString.bind(this);
    _getEachClassAsString = getEachClassAsString.bind(this);
    _getCount = getCount.bind(this);
    _getEachValueAsString = getEachValueAsString.bind(this);
    _getEachAttrAsString = getEachAttrAsString.bind(this);
    _nextPage = nextPage.bind(this);
    _globalFilter = globalFilter.bind(this);
    _filterFirstColumn = filterFirstColumn.bind(this);
    _filterSecondColumn = filterSecondColumn.bind(this);
    _filterWithSelectFirstColumn = filterWithSelectFirstColumn.bind(this);
    _filterWithSelectSecondColumn = filterWithSelectSecondColumn.bind(this);
    _changePageSize = changePageSize.bind(this);
    _toggleFirstColumnVisibility = toggleFirstColumnVisibility.bind(this);
    _toggleSecondColumnVisibility = toggleSecondColumnVisibility.bind(this);
    _hideAllColumns = hideAllColumns.bind(this);
    _showAllColumns = showAllColumns.bind(this);
    _sortFirstColumn = sortFirstColumn.bind(this);
    _sortSecondColumn = sortSecondColumn.bind(this);
    _collapseFirstRow = collapseFirstRow.bind(this);
    _collapseSecondRow = collapseSecondRow.bind(this);
    _expandFirstRow = expandFirstRow.bind(this);
    _expandSecondRow = expandSecondRow.bind(this);
    _firstRowIsExpanded = firstRowIsExpanded.bind(this);
    _secondRowIsExpanded = secondRowIsExpanded.bind(this);
    _firstRowIsCollapsed = firstRowIsCollapsed.bind(this);
    _secondRowIsCollapsed = secondRowIsCollapsed.bind(this);
    _firstRowIsSelected = firstRowIsSelected.bind(this);
    _secondRowIsSelected = secondRowIsSelected.bind(this);
    _getAllSelectedRows = getAllSelectedRows.bind(this);
    _clickOnRow = clickOnRow.bind(this);
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

  var data = A([]);
  this.setProperties({
    data: data,
    columns: generateColumns(['index'])
  });

  this.render(hbs`{{models-table data=data columns=columns}}`);
  assert.equal(_getEachAsString(selectors.summary), 'Show 0 - 0 of 0', 'Empty content');

  this.set('data', generateContent(10));
  assert.equal(_getEachAsString(selectors.summary), 'Show 1 - 10 of 10', 'Content for 1 page');

  this.set('data', generateContent(15));
  _nextPage();
  assert.equal(_getEachAsString(selectors.summary), 'Show 11 - 15 of 15', 'Content for 2 pages. Last page selected');

  this.set('data', generateContent(35));
  assert.equal(_getEachAsString(selectors.summary), 'Show 11 - 20 of 35', 'Content for 4 pages. Middle page selected');

});

test('basic render', function (assert) {

  this.setProperties({
    columns: generateColumns(['index', 'reversedIndex']),
    data: generateContent(10, 1)
  });

  this.render(hbs`{{models-table columns=columns data=data}}`);

  assert.equal(_getCount('table'), 1, 'Table exists');
  assert.equal(_getCount(selectors.allRows), 10, 'Table has 10 rows');
  assert.equal(_getEachAsString(selectors.summary), 'Show 1 - 10 of 10', 'Summary is valid');
  assert.equal(_getEachClassAsString(selectors.navigationLinks, '|'), 'disabled|disabled|disabled|disabled', 'All navigation buttons are disabled');
  assert.equal(_getEachAsString(selectors.firstColumn), '12345678910', 'Content is valid');

});

test('basic render with data update', function (assert) {
  this.set('data', generateContent(10, 1));
  this.set('columns', generateColumns(['index', 'reversedIndex']));

  this.render(hbs`{{models-table columns=columns data=data}}`);
  assert.equal(_getCount('table'), 1, 'Table exists');
  assert.equal(_getCount(selectors.allRows), 10, 'Table has 10 rows');
  assert.equal(_getEachAsString(selectors.summary), 'Show 1 - 10 of 10', 'Summary is valid');
  assert.equal(_getEachClassAsString(selectors.navigationLinks, '|'), 'disabled|disabled|disabled|disabled', 'All navigation buttons are disabled');
  assert.equal(_getEachAsString(selectors.firstColumn), '12345678910', 'Content is valid');

  this.set('data.0.index', 11);
  assert.equal(_getEachAsString(selectors.firstColumn), '112345678910', 'Content is valid after update');

  this.set('data.firstObject.index', 12);
  assert.equal(_getEachAsString(selectors.firstColumn), '122345678910', 'Content is valid after second update');

});

test('render without footer', function (assert) {

  this.set('showTableFooter', false);
  this.render(hbs`{{models-table showTableFooter=showTableFooter}}`);

  assert.equal(_getCount('.table-footer'), 0, 'table footer isn\'t rendered');

});

test('pageSizeObserver', function (assert) {

  this.set('data', generateContent(50, 1));
  this.render(hbs`{{models-table data=data}}`);

  assert.equal(_getEachAsString(selectors.summary), 'Show 1 - 10 of 50', 'init value');
  _nextPage();

  assert.equal(_getEachAsString(selectors.summary), 'Show 11 - 20 of 50', 'value changed by user');
  _changePageSize(25);

  assert.equal(_getEachAsString(selectors.summary), 'Show 1 - 25 of 50', 'value restored to 1');

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
  assert.equal(_getEachAsString(selectors.tbodyFirstColumnCells, '|'), generateContent(10).mapBy('index').join('|'), 'One page');

  this.setProperties({
    data: generateContent(25, 1),
    currentPageNumber: 2
  });
  assert.equal(_getEachAsString(selectors.tbodyFirstColumnCells, '|'), generateContent(10, 11).mapBy('index').join('|'), 'Second page');

  this.setProperties({
    data: generateContent(25, 1),
    currentPageNumber: 1,
    pageSize: 50
  });
  assert.equal(_getEachAsString(selectors.tbodyFirstColumnCells, '|'), generateContent(25, 1).mapBy('index').join('|'), 'One big page');

  this.setProperties({
    data: generateContent(25, 1),
    currentPageNumber: 3,
    pageSize: 10
  });
  _nextPage();
  _nextPage();
  assert.equal(_getEachAsString(selectors.tbodyFirstColumnCells, '|'), generateContent(5, 21).mapBy('index').join('|'), 'Last page');

});

test('visibleContent with page size changing and pagination', function (assert) {

  this.setProperties({
    data: generateContent(1000, 1),
    columns: generateColumns(['index'])
  });

  this.render(hbs`{{models-table data=data columns=columns}}`);

  _changePageSize(25);
  assert.equal(_getCount(selectors.tbodyAllRows), 25, '1st page has 25 rows');

  _nextPage();
  assert.equal(_getCount(selectors.tbodyAllRows), 25, '2nd page has 25 rows');

  _nextPage();
  assert.equal(_getCount(selectors.tbodyAllRows), 25, '3rd page has 25 rows');

});

test('gotoBackEnabled', function (assert) {

  this.setProperties({
    data: generateContent(25, 1),
    columns: generateColumns(['index'])
  });
  this.render(hbs`{{models-table data=data columns=columns}}`);

  assert.ok(_getEachClassAsString(selectors.tableNavBtnBack).indexOf('disabled') !== -1, 'Disabled, if user is on the 1st page');

  _nextPage();
  assert.equal(_getEachClassAsString(selectors.tableNavBtnBack).indexOf('disabled'), -1, `Enabled, if user isn't on the 1st page`);

});

test('gotoForwardEnabled', function (assert) {

  this.setProperties({
    data: generateContent(10),
    columns: generateColumns(['id'])
  });

  this.render(hbs`{{models-table data=data columns=columns}}`);
  assert.ok(_getEachClassAsString(selectors.tableNavBtnNext).indexOf('disabled') !== -1, 'One page only');

  this.set('data', generateContent(11));
  assert.equal(_getEachClassAsString(selectors.tableNavBtnNext).indexOf('disabled'), -1, `'One page + 1 record more`);

  this.setProperties({
    data: generateContent(25)
  });
  _nextPage();
  _nextPage();
  _nextPage();
  assert.ok(_getEachClassAsString(selectors.tableNavBtnNext).indexOf('disabled') !== -1, 'Three pages, last one selected');

});

test('render multi-pages table', function (assert) {

  this.setProperties({
    columns: generateColumns(['index', 'reversedIndex']),
    data: generateContent(20, 1)
  });
  this.render(hbs`{{models-table columns=columns data=data}}`);

  assert.equal(_getEachClassAsString(selectors.navigationLinks, '|'), 'disabled|disabled|enabled|enabled', '2 navigation buttons are disabled and 2 aren\'t');
  assert.equal(_getEachAsString(selectors.summary), 'Show 1 - 10 of 20', 'Summary is valid');

  _nextPage();

  assert.equal(_getEachAsString(selectors.firstColumn), '11121314151617181920', 'Content is valid');
  assert.equal(_getEachClassAsString(selectors.navigationLinks, '|'), 'enabled|enabled|disabled|disabled', '2 navigation buttons are disabled and 2 aren\'t');

});

test('render custom template (file)', function (assert) {

  var columns = generateColumns(['index', 'indexWithHtml']);
  columns[1].template = 'custom/test';
  this.setProperties({
    data: generateContent(10, 1),
    columns: columns
  });

  this.render(hbs`{{models-table columns=columns data=data}}`);
  assert.equal(_getEachAsString(selectors.secondColumn, '|'), '1+10|2+9|3+8|4+7|5+6|6+5|7+4|8+3|9+2|10+1', 'Content is valid');

});

test('render custom simple pagination', function (assert) {

  this.set('simplePaginationTemplate', 'custom/pagination');

  this.render(hbs`{{models-table simplePaginationTemplate=simplePaginationTemplate}}`);
  assert.equal(_getEachAsString('.table-nav').replace(/\s+/g, ' '), 'F P N L', 'Custom labels are used');

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

  assert.equal(_getCount(selectors.theadFirstRowCells), 2, '2 columns are shown (thead)');
  assert.equal(_getCount(selectors.theadSecondRowCells), 2, '2 columns are shown (thead)');
  assert.equal(_getCount(selectors.tbodyFirstRowCells), 2, '2 columns are shown (tbody)');

  _toggleFirstColumnVisibility();

  assert.equal(_getCount(selectors.theadFirstRowCells), 1, '1 column is shown (thead)');
  assert.equal(_getCount(selectors.theadSecondRowCells), 1, '1 column is shown (thead)');
  assert.equal(_getCount(selectors.tbodyFirstRowCells), 1, '1 column is shown (tbody)');
  assert.equal(_getEachAsString(selectors.theadFirstRowFirstCell), 'reversedIndex', 'Valid column is shown (thead)');
  assert.equal(this.$(firstColumnIconSelector).hasClass(uncheckedClass), true, 'First column is unchecked');
  assert.equal(this.$(secondColumnIconSelector).hasClass(checkedClass), true, 'Second column is checked');

  _toggleFirstColumnVisibility();

  assert.equal(_getCount(selectors.theadFirstRowCells), 2, '2 columns are shown (thead)');
  assert.equal(_getCount(selectors.tbodyFirstRowCells), 2, '2 columns are shown (tbody)');
  assert.equal(this.$(firstColumnIconSelector).hasClass(checkedClass), true, 'First column is checked');
  assert.equal(this.$(secondColumnIconSelector).hasClass(checkedClass), true, 'Second column is checked');

  _toggleSecondColumnVisibility();

  assert.equal(_getCount(selectors.theadFirstRowCells), 1, '1 column is shown (thead)');
  assert.equal(_getCount(selectors.tbodyFirstRowCells), 1, '1 column is shown (tbody)');
  assert.equal(_getEachAsString(selectors.theadFirstRowFirstCell), 'index', 'Valid column is shown (thead)');
  assert.equal(this.$(firstColumnIconSelector).hasClass(checkedClass), true, 'First column is checked');
  assert.equal(this.$(secondColumnIconSelector).hasClass(uncheckedClass), true, 'Second column is unchecked');

  _toggleFirstColumnVisibility();

  assert.equal(_getCount(selectors.allRows), 1, '1 row is shown when all columns are hidden');
  assert.equal(_getCount(selectors.tbodyAllCells), 1, 'with 1 cell');
  assert.equal(this.$(selectors.tbodyAllCells).attr('colspan'), 2, 'it\'s colspan is equal to the columns count');
  assert.equal(_getEachAsString(selectors.tbodyAllCells), 'All columns are hidden. Use columns-dropdown to show some of them', 'correct message is shown');
  assert.equal(this.$(firstColumnIconSelector).hasClass(uncheckedClass), true, 'First column is unchecked');
  assert.equal(this.$(secondColumnIconSelector).hasClass(uncheckedClass), true, 'Second column is unchecked');

});

test('render show/hide all columns', function(assert) {
  this.setProperties({
    columns: generateColumns(['index', 'reversedIndex']),
    data: generateContent(10, 1)
  });

  this.render(hbs`{{models-table columns=columns data=data}}`);
  assert.equal(_getCount(selectors.theadFirstRowCells), 2, '2 columns are shown (thead)');
  assert.equal(_getCount(selectors.theadSecondRowCells), 2, '2 columns are shown (thead)');
  assert.equal(_getCount(selectors.tbodyFirstRowCells), 2, '2 columns are shown (tbody)');

  _hideAllColumns();

  assert.equal(_getCount(selectors.allRows), 1, '1 row is shown when all columns are hidden');
  assert.equal(_getCount(selectors.tbodyAllCells), 1, 'with 1 cell');
  assert.equal(_getEachAsString(selectors.tbodyAllCells), 'All columns are hidden. Use columns-dropdown to show some of them', 'correct message is shown');

  _showAllColumns();

  assert.equal(_getCount(selectors.theadFirstRowCells), 2, '2 columns are shown (thead)');
  assert.equal(_getCount(selectors.theadSecondRowCells), 2, '2 columns are shown (thead)');
  assert.equal(_getCount(selectors.tbodyFirstRowCells), 2, '2 columns are shown (tbody)');

});

test('render columns-dropdown with mayBeHidden = false for some columns', function (assert) {

    var columns = generateColumns(['index', 'reversedIndex']);
    columns[0].mayBeHidden = false;
    this.setProperties({
      columns: columns,
      data: generateContent(10, 1)
    });

  this.render(hbs`{{models-table columns=columns data=data}}`);
  assert.equal(_getEachAsString('.columns-dropdown li a').replace(/\s+/g, ''), ('Show All' + 'Hide All' + 'Restore Defaults' + 'reversedIndex').replace(/\s+/g, ''), 'Column with mayBeHidden = false is not shown in the columns dropdown');

  _toggleFirstColumnVisibility();

  assert.equal(_getCount(selectors.theadFirstRowCells), 1, '1 column is shown (thead)');
  assert.equal(_getCount(selectors.theadSecondRowCells), 1, '1 column is shown (thead)');
  assert.equal(_getCount(selectors.tbodyFirstRowCells), 1, '1 column is shown (tbody)');
  assert.equal(_getEachAsString(selectors.theadFirstRowCells).replace(/\s+/g,''), 'index', 'Valid column is shown (thead)');

});

test('global filtering (ignore case OFF)', function(assert) {

  var columns = generateColumns(['index', 'reversedIndex']);
  columns[1].template = 'custom/test';
  this.setProperties({
    columns: columns,
    data: generateContent(10, 1)
  });
  this.render(hbs`{{models-table data=data columns=columns}}`);

  _globalFilter('1');

  assert.equal(_getEachAsString(selectors.firstColumn, '|'), '1|10', 'Content is filtered correctly');

  _globalFilter('');

  assert.equal(_getEachAsString(selectors.firstColumn), '12345678910', 'Filter is empty and all rows are shown');

  _globalFilter('invalid input');

  assert.equal(_getEachAsString(selectors.firstColumn), 'No records to show', 'All rows are filtered out and proper message is shown');
  assert.equal(_getEachAttrAsString(selectors.firstColumn, 'colspan'), columns.length, 'cell with message has correct colspan');

});

test('global filtering (ignore case ON)', function(assert) {

  var columns = generateColumns(['index', 'someWord']);
  this.setProperties({
      filteringIgnoreCase: true,
      columns: columns,
      data: generateContent(10, 1)
  });
  this.render(hbs`{{models-table columns=columns data=data filteringIgnoreCase=filteringIgnoreCase}}`);

  _globalFilter('One');

  assert.equal(_getEachAsString(selectors.tbodyFirstRowCells), '1one', 'Content is filtered correctly');

  _globalFilter('');

  assert.equal(_getEachAsString(selectors.firstColumn), '12345678910', 'Filter is empty and all rows are shown');

  _globalFilter('invalid input');

  assert.equal(_getEachAsString(selectors.firstColumn), 'No records to show', 'All rows are filtered out and proper message is shown');
  assert.equal(_getEachAttrAsString(selectors.firstColumn, 'colspan'), columns.length, 'cell with message has correct colspan');

  _globalFilter('');
  _sortFirstColumn();
  _sortFirstColumn();

  _globalFilter('One');

  assert.equal(_getEachAsString(selectors.tbodySecondColumnCells), 'one', 'Content is filtered correctly when sorting is not done');

});

test('filtering by columns (ignore case OFF)', function (assert) {

  var columns = generateColumns(['index', 'reversedIndex']);
  columns[1].template = 'custom/test';
  columns[0].filterPlaceholder = 'custom placeholder';
  this.setProperties({
    columns: columns,
    data: generateContent(10, 1),
    useFilteringByColumns: true
  });

  this.render(hbs`{{models-table data=data columns=columns useFilteringByColumns=useFilteringByColumns}}`);
  _filterFirstColumn('1');

  assert.equal(_getEachAsString(selectors.firstColumn, '|'), '1|10', 'Content is filtered correctly');

  _filterFirstColumn('');

  assert.equal(_getEachAsString(selectors.firstColumn), '12345678910', 'Filter is empty and all rows are shown');

  _filterFirstColumn('invalid input');

  assert.equal(_getEachAsString(selectors.firstColumn), 'No records to show', 'All rows are filtered out and proper message is shown');
  assert.equal(_getEachAttrAsString(selectors.firstColumn, 'colspan'), columns.length, 'cell with message has correct colspan');

  assert.equal(_getEachAttrAsString(selectors.theadSecondRowFirstColumnFilter, 'placeholder'), 'custom placeholder', 'Placeholder is correct');

  this.set('useFilteringByColumns', false);

  assert.equal(_getEachAsString(selectors.firstColumn), '12345678910', 'Filtering by columns is ignored');
  assert.equal(_getCount('thead input'), 0, 'Columns filters are hidden');

});

test('filtering by columns (ignore case ON)', function (assert) {

  var columns = generateColumns(['index', 'someWord']);
  this.setProperties({
    filteringIgnoreCase: true,
    useFilteringByColumns: true,
    columns: columns,
    data: generateContent(10, 1)
  });

  this.render(hbs`{{models-table filteringIgnoreCase=filteringIgnoreCase columns=columns data=data useFilteringByColumns=useFilteringByColumns}}`);
  _filterSecondColumn('One');
  assert.equal(_getEachAsString(selectors.tbodyFirstRowCells), '1one', 'Content is filtered correctly');

  _filterSecondColumn('');

  assert.equal(_getEachAsString(selectors.firstColumn), '12345678910', 'Filter is empty and all rows are shown');

  _filterSecondColumn('invalid input');

  assert.equal(_getEachAsString(selectors.firstColumn), 'No records to show', 'All rows are filtered out and proper message is shown');
  assert.equal(_getEachAttrAsString(selectors.firstColumn, 'colspan'), columns.length, 'cell with message has correct colspan');

  _filterSecondColumn('');

  _filterSecondColumn('One');
  assert.equal(_getEachAsString(selectors.tbodySecondColumnCells), 'one', 'Content is filtered correctly when sorting is not done');

  this.set('useFilteringByColumns', false);

  assert.equal(_getEachAsString(selectors.firstColumn), '12345678910', 'Filtering by columns is ignored');
  assert.equal(_getCount('thead input'), 0, 'Columns filters are hidden');

});

test('filtering by columns with custom functions', function (assert) {

  var columns = generateColumns(['index', 'someWord']);
  columns[0].filterFunction = signFilter;

  this.setProperties({
    useFilteringByColumns: true,
    columns: columns,
    data: generateContent(10, 1)
  });

  this.render(hbs`{{models-table columns=columns data=data useFilteringByColumns=useFilteringByColumns}}`);
  _filterFirstColumn('=1');
  assert.equal(_getEachAsString(selectors.tbodyFirstColumnCells), '1', `Content is filtered correctly (with '=1')`);

  _filterFirstColumn('>5');
  assert.equal(_getEachAsString(selectors.tbodyFirstColumnCells), '678910', `Content is filtered correctly (with '>5')`);

  _filterFirstColumn('<6');
  assert.equal(_getEachAsString(selectors.tbodyFirstColumnCells), '12345', `Content is filtered correctly (with '<6')`);

});

test('filtering by columns with custom functions and predefined filter options', function (assert) {

  var columns = generateColumns(['index', 'someWord']);
  columns[0].filterFunction = signFilter;
  columns[0].filterWithSelect = true;
  columns[0].predefinedFilterOptions = ['=1', '>5', '<6'];

  this.setProperties({
    useFilteringByColumns: true,
    columns: columns,
    data: generateContent(10, 1)
  });

  this.render(hbs`{{models-table columns=columns data=data useFilteringByColumns=useFilteringByColumns}}`);
  _filterWithSelectFirstColumn('=1');
  assert.equal(_getEachAsString(selectors.tbodyFirstColumnCells), '1', `Content is filtered correctly (with '=1')`);

  _filterWithSelectFirstColumn('>5');
  assert.equal(_getEachAsString(selectors.tbodyFirstColumnCells), '678910', `Content is filtered correctly (with '>5')`);

  _filterWithSelectFirstColumn('<6');
  assert.equal(_getEachAsString(selectors.tbodyFirstColumnCells), '12345', `Content is filtered correctly (with '<6')`);

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

  assert.equal(_getCount(`${selectSelector}  option`), 10, 'Empty data-value was excluded');
  assert.equal(_getEachAsString(`${selectSelector}  option:last-child`), 'nine', 'Last option is not empty string');

  assert.ok(this.$(selectSelector), 'Select-box for column with `filterWithSelect` exists');
  assert.equal(_getEachAsString(`${selectSelector}  option`).replace(/\s+/g, ''), concatenatedWords, 'Options for select are valid');

  _filterWithSelectSecondColumn('one');

  assert.equal(_getCount(selectors.allRows), 1, 'Only one row exist after filtering');

  this.set('data.0.someWord', 'not a number');

  assert.equal(this.$(selectSelector + ' option:selected').val(), '', 'Filter is reverted to the default value');

  _filterWithSelectSecondColumn('');

  assert.equal(_getCount(selectors.allRows), 10, 'All rows are shown after clear filter');

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
  assert.equal(_getEachAsString(`${selectSelector} option`).replace(/\s+/g, ''), 'onetwo', 'Options for select are valid');

  _filterWithSelectSecondColumn('one');
  assert.equal(this.$(selectSelector + ' option:selected').val(), 'one', 'Proper option is selected');
  assert.equal(_getCount(selectors.allRows), 1, 'Only one row exist after filtering');

  this.set('data', generateContent(9, 2));

  assert.equal(this.$(selectSelector + ' option:selected').val(), 'one', 'Filter is not reverted to the default value');
  assert.equal(_getEachAsString(`${selectSelector} option`).replace(/\s+/g, ''), 'onetwo', 'Options for select are valid');

  _filterWithSelectSecondColumn('');

  assert.equal(_getCount(selectors.allRows), 9, 'All rows are shown after clear filter');

});

test('filtering with `filteredBy`', function (assert) {

  var columns = generateColumns(['index', 'index']);
  delete columns[0].propertyName;
  columns[0].template = 'custom/test';
  columns[0].filteredBy = 'index';
  this.setProperties({
    columns: columns,
    data: generateContent(10, 1),
    useFilteringByColumns: true
  });
  this.render(hbs`{{models-table data=data columns=columns useFilteringByColumns=useFilteringByColumns}}`);

  _filterSecondColumn('1');
  assert.equal(_getEachAsString(selectors.secondColumn, '|'), '1|10', 'Content is filtered correctly');

  _filterSecondColumn('');
  assert.equal(_getEachAsString(selectors.secondColumn), '12345678910', 'Filter is empty and all rows are shown');

});

test('`filteredBy` hash higher priority than `propertyName`', function (assert) {

  var columns = generateColumns(['someWord']);
  columns[0].filteredBy = 'index';
  this.setProperties({
    columns: columns,
    data: generateContent(10, 1)
  });
  this.render(hbs`{{models-table data=data columns=columns}}`);
  _globalFilter('2');
  assert.equal(_getEachAsString(selectors.firstColumn), 'two', 'Content is filtered correctly (global filter)');

  _globalFilter('');
  _filterFirstColumn('2');
  assert.equal(_getEachAsString(selectors.firstColumn), 'two', 'Content is filtered correctly (filter by column)');

});

test('custom messages', function (assert) {

  var messages = O.create({
    searchLabel: 'Se@rch:',
    'columns-title': 'ColumnZ',
    'columns-showAll': 'Show Me All!',
    'columns-hideAll': 'Hide All!',
    'columns-restoreDefaults': 'Restore My Columns',
    tableSummary: 'Now are showing %@ - %@ of %@',
    allColumnsAreHidden: 'No visible columns, dude!',
    noDataToShow: 'No data. Sorry, bro...'
  });

  var messages2 = O.create({
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

  assert.equal(_getEachAsString(selectors.summary), S.fmt(messages.tableSummary, 1, 10, 10), 'Summary is valid');
  assert.equal(_getEachAsString('.columns-dropdown button'), messages['columns-title'], 'Columns-dropdown title is valid');
  assert.equal(_getEachAsString('.columns-dropdown .dropdown-menu li:eq(0)'), messages['columns-showAll'], 'Columns-dropdown "showAll" is valid');
  assert.equal(_getEachAsString('.columns-dropdown .dropdown-menu li:eq(1)'), messages['columns-hideAll'], 'Columns-dropdown "hideAll" is valid');
  assert.equal(_getEachAsString('.columns-dropdown .dropdown-menu li:eq(2)'), messages['columns-restoreDefaults'], 'Columns-dropdown "restoreDefaults" is valid');
  assert.equal(_getEachAsString('.globalSearch label'), messages.searchLabel, 'Global-search label is valid');

  _hideAllColumns();

  assert.equal(_getEachAsString(selectors.tbodyAllCells), messages.allColumnsAreHidden, 'Message about all hidden columns is valid');

  _showAllColumns();
  _globalFilter('invalid string');


  assert.equal(_getEachAsString(selectors.firstColumn), messages.noDataToShow, 'Message about no data is valid');

  this.set('customMessages', messages2);

  _globalFilter('');

  assert.equal(_getEachAsString(selectors.summary), S.fmt(messages2.tableSummary, 1, 10, 10), 'Summary is valid (2)');
  assert.equal(_getEachAsString('.columns-dropdown button'), messages2['columns-title'], 'Columns-dropdown title is valid (2)');
  assert.equal(_getEachAsString('.columns-dropdown .dropdown-menu li:eq(0)'), messages2['columns-showAll'], 'Columns-dropdown "showAll" is valid (2)');
  assert.equal(_getEachAsString('.columns-dropdown .dropdown-menu li:eq(1)'), messages2['columns-hideAll'], 'Columns-dropdown "hideAll" is valid (2)');
  assert.equal(_getEachAsString('.columns-dropdown .dropdown-menu li:eq(2)'), messages2['columns-restoreDefaults'], 'Columns-dropdown "restoreDefaults" is valid (2)');
  assert.equal(_getEachAsString('.globalSearch label'), messages2.searchLabel, 'Global-search label is valid (2)');

  _hideAllColumns();

  assert.equal(_getEachAsString(selectors.tbodyAllCells), messages2.allColumnsAreHidden, 'Message about all hidden columns is valid (2)');

  _showAllColumns();
  _globalFilter('invalid string');

  assert.equal(_getEachAsString(selectors.firstColumn), messages2.noDataToShow, 'Message about no data is valid (2)');

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
  _sortFirstColumn();

  assert.equal(_getCount('.sort-asc'), 1, 'sort asc 1 column');

  _sortSecondColumn();
  assert.equal(_getCount('.sort-asc'), 2, 'sort asc 2 columns');

  _sortSecondColumn();
  assert.equal(_getCount('.sort-asc'), 1, 'sort asc 1 column');
  assert.equal(_getCount('.sort-desc'), 1, 'sort desc 1 column');

  assert.equal(_getCount(`${selectors.columnsDropdown} .column-visible`), 2, 'all columns are visible');

  _toggleFirstColumnVisibility();
  assert.equal(_getCount(`${selectors.columnsDropdown} .column-visible`), 1, '1 column is visible');
  assert.equal(_getCount(`${selectors.columnsDropdown} .column-hidden`), 1, '1 column is hidden');

  assert.equal(_getEachClassAsString(`${selectors.tableNavBtnFirst} span`), 'nav-first', 'First-button has valid class');
  assert.equal(_getEachClassAsString(`${selectors.tableNavBtnBack} span`), 'nav-prev', 'Prev-button has valid class');
  assert.equal(_getEachClassAsString(`${selectors.tableNavBtnNext} span`), 'nav-next', 'Next-button has valid class');
  assert.equal(_getEachClassAsString(`${selectors.tableNavBtnLast} span`), 'nav-last', 'Last-button has valid class');

});

test('columns column cell classes', function (assert) {

  var columns = generateColumns(['index', 'reversedIndex']);
  columns[0].className = 'custom-column-class';
  this.setProperties({
    columns: columns,
    data: generateContent(10, 1)
  });
  this.render(hbs`{{models-table columns=columns data=data}}`);

  assert.equal(_getCount('tbody .custom-column-class'), 10, 'Custom column class exists on each column cell');

});

test('column title auto generation', function (assert) {

  var columns = generateColumns(['index', 'reversedIndex']);
  columns.setEach('title', null);
  this.setProperties({
    columns: columns,
    data: generateContent(10, 1)
  });
  this.render(hbs`{{models-table columns=columns data=data}}`);

  assert.equal(_getEachAsString('thead th:eq(0)'), 'Index', 'Title for one word is correct');
  assert.equal(_getEachAsString('thead th:eq(1)'), 'Reversed index', 'Title for camelCase is correct');

});

test('`sortedBy` has higher priority than `propertyName`', function (assert) {

  var columns = generateColumns(['someWord', 'index']);
  columns[0].sortedBy = 'index';
  this.setProperties({
    columns: columns,
    data: generateContent(10, 1)
  });
  this.render(hbs`{{models-table columns=columns data=data}}`);

  _sortSecondColumn();
  assert.equal(_getEachAsString(selectors.secondColumn), '12345678910', 'Content is valid (sorting by `index` desc)');

  _sortSecondColumn();
  assert.equal(_getEachAsString(selectors.secondColumn), '10987654321', 'Content is valid (sorting by `index` asc)');

});

test('sorting (multi `true`)', function (assert) {

  this.setProperties({
    columns: generateColumns(['index', 'index2']),
    data: generateContent(10, 1)
  });
  this.render(hbs`{{models-table columns=columns data=data}}`);
  _sortFirstColumn();

  assert.equal(_getEachAsString(selectors.firstColumn), '12345678910', 'Content is valid (sorting 1st column asc)');

  _sortFirstColumn();

  assert.equal(_getEachAsString(selectors.firstColumn), '10987654321', 'Content is valid (sorting 1st column desc)');

  _sortFirstColumn();
  _sortSecondColumn();

  assert.equal(_getEachAsString(selectors.firstColumn), '12345678910', 'Content is valid (sorting 1st column asc) - restore defaults');
  assert.equal(_getEachAsString(selectors.secondColumn), '1122334455', 'Content is valid (sorting 2nd column asc) - restore defaults');

  _sortFirstColumn();
  _sortFirstColumn();

  assert.equal(_getEachAsString(selectors.firstColumn), '21436587109', 'Content is valid (sorting 1st column desc)');
  assert.equal(_getEachAsString(selectors.secondColumn), '1122334455', 'Content is valid (sorting 2nd column asc)');

});

test('sorting (multi `false`)', function (assert) {

  this.setProperties({
    columns: generateColumns(['index', 'index2']),
    data: generateContent(10, 1)
  });
  this.render(hbs`{{models-table columns=columns data=data multipleColumnsSorting=false}}`);
  _sortFirstColumn();

  assert.equal(_getEachAsString(selectors.firstColumn), '12345678910', 'Content is valid (sorting 1st column asc)');

  _sortFirstColumn();

  assert.equal(_getEachAsString(selectors.firstColumn), '10987654321', 'Content is valid (sorting 1st column desc)');

  _sortFirstColumn();
  _sortSecondColumn();

  assert.equal(_getEachAsString(selectors.firstColumn), '12345678910', 'Content is valid (sorting 1st column asc) - restore defaults');
  assert.equal(_getEachAsString(selectors.secondColumn), '1122334455', 'Content is valid (sorting 2nd column asc) - restore defaults');

  _sortFirstColumn();
  _sortFirstColumn();

  assert.equal(_getEachAsString(selectors.firstColumn), '10987654321', 'Content is valid (sorting 1st column desc)');
  assert.equal(_getEachAsString(selectors.secondColumn), '5544332211', 'Content is valid (sorting 2nd reverted)');

});

test('column is sorted with `sortedBy` when `propertyName` is not provided', function (assert) {

  var columns = generateColumns(['index', 'index2']);
  columns[1].sortedBy = 'index';
  delete columns[1].propertyName;
  columns[1].template = 'custom/test';

  this.setProperties({
    columns: columns,
    data: generateContent(3, 1).reverse()
  });
  this.render(hbs`{{models-table columns=columns data=data multipleColumnsSorting=false}}`);

  _sortSecondColumn();

  assert.equal(_getEachAsString(selectors.secondColumn, '|'), '1+3|2+2|3+1', 'Content is sorted by `index`');

});

test('table is not sorted by first column with `propertyName` or `sortedBy` by default', function (assert) {

  var data = generateContent(10, 1).reverse();
  var columns = generateColumns(['indexWithHtml', 'index']);
  delete columns[0].propertyName;
  columns[0].template = 'custom/delete';

  this.setProperties({
    data: data,
    columns: columns
  });
  this.on('deleteRecord', K);
  this.render(hbs`{{models-table data=data columns=columns delete='deleteRecord'}}`);

  assert.equal(_getEachAsString(selectors.secondColumn), '10987654321', 'Content is sorted correctly');

});

test('sendAction can trigger actions outside the component', function (assert) {

  var columns = generateColumns(['index', 'indexWithHtml']);
  columns[1].template = 'custom/action';

  this.on('externalAction', function () {
    assert.ok(true, 'external Action was called!');
  });

  this.setProperties({
    data: generateContent(10, 1),
    columns: columns,
    action: 'externalAction'
  });
  this.render(hbs`{{models-table data=data columns=columns action=action}}`);

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
    assert.equal(_getEachAsString(selectors.navigationButtons,'|'), A(test.visiblePageNumbers).mapBy('label').join('|'), `10 pages, active is ${test.currentPageNumber}`);
  }, this);

  this.set('data', generateContent(10, 1));
  this.set('pageSize', 10);

  assert.equal(_getEachAsString(selectors.navigationButtons,'|'), '1', 'Only 1 page');

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
  _filterSecondColumn('One');

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
  _globalFilter('One');
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
  _sortFirstColumn();
});

test('event on user interaction (expanding rows)', function (assert) {

  let columns = generateColumns(['id']);
  columns.splice(0, 0, {
    template: 'components/models-table/expand-row-cell',
    mayBeHidden: false
  });
  this.setProperties({
    columns: columns,
    expandedRowTemplate: 'custom/expanded-row',
    data: generateContent(30, 1),
    displayDataChangedAction: 'displayDataChanged',
    sendDisplayDataChangedAction: true
  });

  this.on('displayDataChanged', function () {
    assert.ok(true, '`displayDataChanged`-action was called!');
  });

  this.render(hbs`{{models-table columns=columns data=data displayDataChangedAction=displayDataChangedAction sendDisplayDataChangedAction=sendDisplayDataChangedAction expandedRowTemplate=expandedRowTemplate}}`);
  _expandFirstRow();

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

  this.render(hbs`{{models-table columns=columns data=data displayDataChangedAction=displayDataChangedAction sendDisplayDataChangedAction=sendDisplayDataChangedAction expandedRowTemplate=expandedRowTemplate}}`);
  _clickOnRow(0);

});

test('show first page if for some reasons there is no content for current page, but table data exists', function (assert) {

  assert.expect(1);

  var data = generateContent(11, 1);
  var columns = generateColumns(['index', 'indexWithHtml']);
  columns[1].template = 'custom/delete';
  var self = this;
  this.setProperties({
    data: data,
    columns: columns
  });
  this.on('deleteRecord', function (record) {
    self.set('data', data.without(record));
  });
  this.render(hbs`{{models-table data=data columns=columns delete='deleteRecord'}}`);
  // move to the 2nd page and delete 1 row there
  _nextPage();
  this.$('td button').first().click();
  assert.equal(_getEachAsString(selectors.summary), 'Show 1 - 10 of 10', 'First page is shown');
});

test('row deleted in the middle page', function (assert) {

  assert.expect(1);

  var data = generateContent(31, 1);
  var columns = generateColumns(['index', 'indexWithHtml']);
  columns[1].template = 'custom/delete';
  var self = this;
  this.setProperties({
    data: data,
    columns: columns
  });
  this.on('deleteRecord', function (record) {
    self.set('data', data.without(record));
  });
  this.render(hbs`{{models-table data=data columns=columns delete='deleteRecord'}}`);
  // move to the 2nd page and delete 1 row there
  _nextPage();
  this.$('td button').first().click();
  assert.equal(_getEachAsString(selectors.summary), 'Show 11 - 20 of 30', 'Second page is shown');
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
  _filterFirstColumn('1');
  _sortFirstColumn();
  assert.equal(_getEachAsString(selectors.theadFirstRowCells, '|'), 'index|someWord', 'two columns are shown');
  assert.equal(_getEachAsString(selectors.columnsDropdown, '|'), 'Show All|Hide All|Restore Defaults||index|someWord', 'two columns are in columns dropdown');

  this.set('columns', columns2);
  assert.equal(_getEachAsString(selectors.theadFirstRowCells, '|'), 'index|someWord', 'columns are not updated');
  assert.equal(_getEachAsString(selectors.columnsDropdown, '|'), 'Show All|Hide All|Restore Defaults||index|someWord', 'columns dropdown is not updated');
  assert.equal(_getEachValueAsString(selectors.theadSecondRowFirstColumnFilter), '1', 'column filter was not dropped');
  assert.equal(_getEachClassAsString(selectors.theadFirstRowFirstCellSort), 'glyphicon glyphicon-triangle-bottom', 'column sorting was not dropped');
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
  assert.equal(_getEachAsString(selectors.theadFirstRowCells, '|'), 'index|someWord', 'two columns are shown');
  assert.equal(_getEachAsString(selectors.columnsDropdown, '|'), 'Show All|Hide All|Restore Defaults||index|someWord', 'two columns are in columns dropdown');
  _filterFirstColumn('1');
  _sortFirstColumn();

  this.set('columns', columns2);
  assert.equal(_getEachAsString(selectors.theadFirstRowCells, '|'), 'index|index2|someWord', 'columns are updated');
  assert.equal(_getEachAsString(selectors.columnsDropdown, '|'), 'Show All|Hide All|Restore Defaults||index|index2|someWord', 'columns dropdown is updated');
  assert.equal(_getEachValueAsString(selectors.theadSecondRowFirstColumnFilter), '', 'column filter was dropped');

});

test('filtering with `doFilteringByHiddenColumns` = false', function (assert) {

  this.setProperties({
    columns: generateColumns(['index', 'someWord']),
    data: generateContent(10, 1),
    doFilteringByHiddenColumns: false
  });

  this.render(hbs`{{models-table columns=columns data=data doFilteringByHiddenColumns=doFilteringByHiddenColumns}}`);

  _toggleSecondColumnVisibility();
  _globalFilter('one');

  assert.equal(_getEachAsString(selectors.tbodyFirstColumnCells), '12345678910', 'Content is not changed');

  this.set('doFilteringByHiddenColumns', true);
  assert.equal(_getEachAsString(selectors.tbodyFirstColumnCells), '12345678910', 'Content is not changed after `doFilteringByHiddenColumns` updating');

  _globalFilter('');
  _globalFilter('one');

  assert.equal(_getEachAsString(selectors.tbodyFirstColumnCells), '1', 'Content is filtered');

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

  assert.equal(_getEachAsString(selectors.theadFirstRowCells), 'BigTitle', '');
  assert.equal(_getEachAttrAsString(selectors.theadFirstRowCells, 'colspan'), '5', '');

  assert.equal(_getEachAsString(selectors.theadSecondRowCells, '|'), 'SubTitle1|SubTitle2', '');
  assert.equal(_getEachAttrAsString(selectors.theadSecondRowCells, 'colspan', '|'), '2|3', '');

});

test('expandable rows (multipleExpand = true)', function (assert) {

  let columns = generateColumns(['id']);
  columns.splice(0, 0, {
    template: 'components/models-table/expand-row-cell',
    mayBeHidden: false
  });
  this.setProperties({
    columns: columns,
    expandedRowTemplate: 'custom/expanded-row',
    data: generateContent(30, 1)
  });

  this.render(hbs`{{models-table columns=columns data=data expandedRowTemplate=expandedRowTemplate multipleExpand=true}}`);

  assert.equal(_getCount(selectors.collapseRow), 0, 'All rows are collapsed by default');

  _expandFirstRow();
  assert.ok(_firstRowIsExpanded(), 'First row is expanded');
  assert.equal(_getCount('.expand-0'), 1, 'Expanded row content exists');
  assert.equal(_getEachAsString('.expand-0 .id'), 1, 'Expanded row content is valid');

  _expandSecondRow();
  assert.ok(_firstRowIsExpanded(), 'First row is still expanded');
  assert.ok(_secondRowIsExpanded(), 'Second row is expanded');

  _collapseFirstRow();
  assert.ok(_firstRowIsCollapsed(), 'First row is collapsed');
  assert.ok(_secondRowIsExpanded(), 'Second row is still expanded');

  _collapseSecondRow();
  assert.ok(_secondRowIsCollapsed(), 'Second row is collapsed');

  _expandFirstRow();
  _nextPage();
  assert.ok(_firstRowIsCollapsed(), 'First row on the second page is collapsed');

});

test('expandable rows (multipleExpand = false)', function (assert) {

  let columns = generateColumns(['id']);
  columns.splice(0, 0, {
    template: 'components/models-table/expand-row-cell',
    mayBeHidden: false
  });
  this.setProperties({
    columns: columns,
    expandedRowTemplate: 'custom/expanded-row',
    data: generateContent(30, 1)
  });

  this.render(hbs`{{models-table columns=columns data=data expandedRowTemplate=expandedRowTemplate multipleExpand=false}}`);

  assert.equal(_getCount(selectors.collapseRow), 0, 'All rows are collapsed by default');

  _expandFirstRow();
  assert.ok(_firstRowIsExpanded(), 'First row is expanded');
  assert.equal(_getCount('.expand-0'), 1, 'Expanded row content exists');
  assert.equal(_getEachAsString('.expand-0 .id'), 1, 'Expanded row content is valid');

  _expandSecondRow();
  assert.ok(_firstRowIsCollapsed(), 'First row is collapsed');
  assert.ok(_secondRowIsExpanded(), 'Second row is expanded');

  _collapseSecondRow();
  assert.ok(_secondRowIsCollapsed(), 'Second row is collapsed');

  _expandFirstRow();
  _nextPage();
  assert.ok(_firstRowIsCollapsed(), 'First row on the second page is collapsed');

});

test('selectable rows (multipleSelect = true)', function (assert) {

  this.setProperties({
    data: generateContent(30, 1),
    columns: generateColumns(['id'])
  });
  this.render(hbs`{{models-table data=data column=columns multipleSelect=true}}`);

  assert.equal(_getAllSelectedRows(), 0, 'No selected rows by default');

  _clickOnRow(0);
  assert.ok(_firstRowIsSelected(), 'First row is selected');

  _clickOnRow(1);
  assert.ok(_firstRowIsSelected(), 'First row is still selected');
  assert.ok(_secondRowIsSelected(), 'Second row is selected');

  _clickOnRow(0);
  assert.notOk(_firstRowIsSelected(), 'First row is not selected');
  assert.ok(_secondRowIsSelected(), 'Second row is selected');

  _clickOnRow(1);
  assert.notOk(_firstRowIsSelected(), 'First row still is not selected');
  assert.notOk(_secondRowIsSelected(), 'Second row is not selected');

});

test('selectable rows (multipleSelect = false)', function (assert) {

  this.setProperties({
    data: generateContent(30, 1),
    columns: generateColumns(['id'])
  });
  this.render(hbs`{{models-table data=data column=columns multipleSelect=false}}`);

  assert.equal(_getAllSelectedRows(), 0, 'No selected rows by default');

  _clickOnRow(0);
  assert.ok(_firstRowIsSelected(), 'First row is selected');

  _clickOnRow(1);
  assert.notOk(_firstRowIsSelected(), 'First row is not selected');
  assert.ok(_secondRowIsSelected(), 'Second row is selected');

  _clickOnRow(0);
  assert.ok(_firstRowIsSelected(), 'First row is selected');
  assert.notOk(_secondRowIsSelected(), 'Second row is not selected');

  _clickOnRow(1);
  assert.notOk(_firstRowIsSelected(), 'First row is not selected');
  assert.ok(_secondRowIsSelected(), 'Second row is selected');

});