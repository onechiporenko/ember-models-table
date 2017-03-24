import Ember from 'ember';

import {
  moduleForComponent,
  test
} from 'ember-qunit';

import hbs from 'htmlbars-inline-precompile';

import * as dom from '../../helpers/dom';

import {
  generateContent,
  generateColumns
} from '../../helpers/f';

const {
  A,
  typeOf,
  Object: O
} = Ember;

let selectors;

const oneTen = 'one|two|three|four|five|six|seven|eight|nine|ten';
const oneTenAsc = 'eight|five|four|nine|one|seven|six|ten|three|two';
const oneTenDesc = 'two|three|ten|six|seven|one|nine|four|five|eight';

moduleForComponent('models-table', 'ModelsTable | Integration', {
  integration: true,

  beforeEach() {
    Object.keys(dom).forEach(m => {
      let f = dom[m];
      if ('function' === typeOf(f)) {
        this[m] = f.bind(this);
      }
    });
    selectors = dom.selectors;
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
  assert.equal(this.getEachAsString(selectors.summary), 'Show 0 - 0 of 0', 'Empty content');

  this.set('data', generateContent(10));
  assert.equal(this.getEachAsString(selectors.summary), 'Show 1 - 10 of 10', 'Content for 1 page');

  this.set('data', generateContent(15));
  this.nextPage();
  assert.equal(this.getEachAsString(selectors.summary), 'Show 11 - 15 of 15', 'Content for 2 pages. Last page selected');

  this.set('data', generateContent(35));
  assert.equal(this.getEachAsString(selectors.summary), 'Show 11 - 20 of 35', 'Content for 4 pages. Middle page selected');

});

test('basic render', function (assert) {

  this.setProperties({
    columns: generateColumns(['index', 'reversedIndex']),
    data: generateContent(10, 1)
  });

  this.render(hbs`{{models-table columns=columns data=data}}`);

  assert.equal(this.getCount('table'), 1, 'Table exists');
  assert.equal(this.getCount(selectors.allRows), 10, 'Table has 10 rows');
  assert.equal(this.getEachAsString(selectors.summary), 'Show 1 - 10 of 10', 'Summary is valid');
  assert.equal(this.getCount(`${selectors.navigationLinks}.disabled`, '|'), 4, 'All navigation buttons are disabled');
  assert.equal(this.getEachAsString(selectors.firstColumn), '12345678910', 'Content is valid');

});

test('basic render with data update', function (assert) {
  this.set('data', generateContent(10, 1));
  this.set('columns', generateColumns(['index', 'reversedIndex']));

  this.render(hbs`{{models-table columns=columns data=data}}`);
  assert.equal(this.getCount('table'), 1, 'Table exists');
  assert.equal(this.getCount(selectors.allRows), 10, 'Table has 10 rows');
  assert.equal(this.getEachAsString(selectors.summary), 'Show 1 - 10 of 10', 'Summary is valid');
  assert.equal(this.getCount(`${selectors.navigationLinks}.disabled`, '|'), 4, 'All navigation buttons are disabled');
  assert.equal(this.getEachAsString(selectors.firstColumn), '12345678910', 'Content is valid');

  this.set('data.0.index', 11);
  assert.equal(this.getEachAsString(selectors.firstColumn), '112345678910', 'Content is valid after update');

  this.set('data.firstObject.index', 12);
  assert.equal(this.getEachAsString(selectors.firstColumn), '122345678910', 'Content is valid after second update');

});

test('render without footer', function (assert) {

  this.set('showComponentFooter', false);
  this.render(hbs`{{models-table showComponentFooter=showComponentFooter}}`);

  assert.equal(this.getCount('.table-footer'), 0, 'table footer isn\'t rendered');

});

test('pageSizeObserver', function (assert) {

  this.set('data', generateContent(50, 1));
  this.render(hbs`{{models-table data=data}}`);

  assert.equal(this.getEachAsString(selectors.summary), 'Show 1 - 10 of 50', 'init value');
  this.nextPage();

  assert.equal(this.getEachAsString(selectors.summary), 'Show 11 - 20 of 50', 'value changed by user');
  this.changePageSize(25);

  assert.equal(this.getEachAsString(selectors.summary), 'Show 1 - 25 of 50', 'value restored to 1');

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
  assert.equal(this.getEachAsString(selectors.tbodyFirstColumnCells, '|'), generateContent(10).mapBy('index').join('|'), 'One page');

  this.setProperties({
    data: generateContent(25, 1),
    currentPageNumber: 2
  });
  assert.equal(this.getEachAsString(selectors.tbodyFirstColumnCells, '|'), generateContent(10, 11).mapBy('index').join('|'), 'Second page');

  this.setProperties({
    data: generateContent(25, 1),
    currentPageNumber: 1,
    pageSize: 50
  });
  assert.equal(this.getEachAsString(selectors.tbodyFirstColumnCells, '|'), generateContent(25, 1).mapBy('index').join('|'), 'One big page');

  this.setProperties({
    data: generateContent(25, 1),
    currentPageNumber: 3,
    pageSize: 10
  });
  this.nextPage();
  this.nextPage();
  assert.equal(this.getEachAsString(selectors.tbodyFirstColumnCells, '|'), generateContent(5, 21).mapBy('index').join('|'), 'Last page');

});

test('visibleContent with page size changing and pagination', function (assert) {

  this.setProperties({
    data: generateContent(1000, 1),
    columns: generateColumns(['index'])
  });

  this.render(hbs`{{models-table data=data columns=columns}}`);

  this.changePageSize(25);
  assert.equal(this.getCount(selectors.tbodyAllRows), 25, '1st page has 25 rows');

  this.nextPage();
  assert.equal(this.getCount(selectors.tbodyAllRows), 25, '2nd page has 25 rows');

  this.nextPage();
  assert.equal(this.getCount(selectors.tbodyAllRows), 25, '3rd page has 25 rows');

});

test('gotoBackEnabled', function (assert) {

  this.setProperties({
    data: generateContent(25, 1),
    columns: generateColumns(['index'])
  });
  this.render(hbs`{{models-table data=data columns=columns}}`);

  assert.ok(this.getEachClassAsString(selectors.tableNavBtnBack).indexOf('disabled') !== -1, 'Disabled, if user is on the 1st page');

  this.nextPage();
  assert.equal(this.getEachClassAsString(selectors.tableNavBtnBack).indexOf('disabled'), -1, `Enabled, if user isn't on the 1st page`);

});

test('gotoForwardEnabled', function (assert) {

  this.setProperties({
    data: generateContent(10),
    columns: generateColumns(['id'])
  });

  this.render(hbs`{{models-table data=data columns=columns}}`);
  assert.ok(this.getEachClassAsString(selectors.tableNavBtnNext).indexOf('disabled') !== -1, 'One page only');

  this.set('data', generateContent(11));
  assert.equal(this.getEachClassAsString(selectors.tableNavBtnNext).indexOf('disabled'), -1, `'One page + 1 record more`);

  this.setProperties({
    data: generateContent(25)
  });
  this.nextPage();
  this.nextPage();
  this.nextPage();
  assert.ok(this.getEachClassAsString(selectors.tableNavBtnNext).indexOf('disabled') !== -1, 'Three pages, last one selected');

});

test('render multi-pages table', function (assert) {

  this.setProperties({
    columns: generateColumns(['index', 'reversedIndex']),
    data: generateContent(20, 1)
  });
  this.render(hbs`{{models-table columns=columns data=data}}`);

  assert.equal(this.getCount(`${selectors.navigationLinks}.disabled`, '|'), 2, '2 navigation buttons are disabled');
  assert.equal(this.getCount(`${selectors.navigationLinks}.enabled`, '|'), 2, '2 navigation buttons are enabled');
  assert.equal(this.getEachAsString(selectors.summary), 'Show 1 - 10 of 20', 'Summary is valid');

  this.nextPage();

  assert.equal(this.getEachAsString(selectors.firstColumn), '11121314151617181920', 'Content is valid');
  assert.equal(this.getCount(`${selectors.navigationLinks}.disabled`, '|'), 2, '2 navigation buttons are disabled');
  assert.equal(this.getCount(`${selectors.navigationLinks}.enabled`, '|'), 2, '2 navigation buttons are enabled');

});

test('render custom template in the table cell', function (assert) {

  var columns = generateColumns(['index', 'indexWithHtml']);
  columns[1].template = 'custom/test';
  this.setProperties({
    data: generateContent(10, 1),
    columns: columns
  });

  this.render(hbs`{{models-table columns=columns data=data}}`);
  assert.equal(this.getEachAsString(selectors.secondColumn, '|'), '1+10|2+9|3+8|4+7|5+6|6+5|7+4|8+3|9+2|10+1', 'Content is valid');

});

test('render custom component in the table cell', function (assert) {

  var columns = generateColumns(['index', 'someWord']);
  columns[1].component = 'cell-component';
  this.setProperties({
    data: generateContent(20, 1),
    columns: columns
  });

  this.render(hbs`{{models-table columns=columns data=data}}`);
  assert.equal(this.getEachAsString(selectors.secondColumn, '|'), oneTen, 'Content is valid');

});

test('render custom template (input) in the filter cell', function (assert) {

  var columns = generateColumns(['index', 'someWord']);
  columns[1].templateForFilterCell = 'custom/filter-cell-input';
  this.setProperties({
    data: generateContent(10, 1),
    columns: columns
  });

  this.render(hbs`{{models-table columns=columns data=data}}`);
  assert.equal(this.getEachAsString(selectors.secondColumn, '|'), oneTen, 'Content is valid');

  this.filterSecondColumn('one');
  assert.equal(this.getEachAsString(selectors.secondColumn, ''), 'one', 'Content is filtered');

  this.clearSecondColumnFilterByIcon();
  assert.equal(this.getEachAsString(selectors.secondColumn, '|'), oneTen, 'Content is restored');

});

test('render custom template (select) in the filter cell', function (assert) {

  var columns = generateColumns(['index', 'someWord']);
  var data = generateContent(10, 1);
  columns[1].templateForFilterCell = 'custom/filter-cell-select';
  columns[1].filterWithSelect = true;
  this.setProperties({
    data: data,
    columns: columns
  });

  this.render(hbs`{{models-table columns=columns data=data}}`);
  assert.equal(this.getEachAsString(`${selectors.theadSecondRowSecondColumnFilterSelect} option`, '|'), `|${oneTen}`, 'Filter options are correct');
  assert.equal(this.getEachAsString(selectors.secondColumn, '|'), oneTen, 'Content is valid');

  this.filterWithSelectSecondColumn('one');
  assert.equal(this.getEachAsString(selectors.secondColumn, ''), 'one', 'Content is filtered');

  this.clearSecondColumnFilterByIcon();
  assert.equal(this.getEachAsString(selectors.secondColumn, '|'), oneTen, 'Content is restored');

});

test('render custom component (input) in the filter cell', function (assert) {

  var columns = generateColumns(['index', 'someWord']);
  columns[1].componentForFilterCell = 'filter-cell-input';

  this.setProperties({
    data: generateContent(10, 1),
    columns: columns
  });

  this.render(hbs`{{models-table data=data columns=columns}}`);
  assert.equal(this.getEachAsString(selectors.secondColumn, '|'), oneTen, 'Content is valid');

  this.filterSecondColumn('one');
  assert.equal(this.getEachAsString(selectors.secondColumn, ''), 'one', 'Content is filtered');

  this.clearSecondColumnFilterByIcon();
  assert.equal(this.getEachAsString(selectors.secondColumn, '|'), oneTen, 'Content is restored');

});

test('render custom component (select) in the filter cell', function (assert) {

  var columns = generateColumns(['index', 'someWord']);
  columns[1].componentForFilterCell = 'filter-cell-select';

  this.setProperties({
    data: generateContent(10, 1),
    columns: columns
  });

  this.render(hbs`{{models-table data=data columns=columns}}`);
  assert.equal(this.getEachAsString(`${selectors.theadSecondRowSecondColumnFilterSelect} option`, '|'), `|${oneTen}`, 'Filter options are correct');
  assert.equal(this.getEachAsString(selectors.secondColumn, '|'), oneTen, 'Content is valid');

  this.filterWithSelectSecondColumn('one');
  assert.equal(this.getEachAsString(selectors.secondColumn, ''), 'one', 'Content is filtered');

  this.clearSecondColumnFilterByIcon();
  assert.equal(this.getEachAsString(selectors.secondColumn, '|'), oneTen, 'Content is restored');

});

test('render custom template in the sort cell', function (assert) {

  var columns = generateColumns(['index', 'someWord']);
  columns[1].templateForSortCell = 'custom/sort-cell';

  this.setProperties({
    data: generateContent(10, 1),
    columns: columns
  });

  this.render(hbs`{{models-table columns=columns data=data multipleColumnsSorting=false}}`);

  this.sortSecondColumn();
  assert.equal(this.getEachAsString(selectors.secondColumn, '|'), oneTenAsc, 'Content is valid (sorting 2nd column asc)');

  this.sortSecondColumn();
  assert.equal(this.getEachAsString(selectors.secondColumn, '|'), oneTenDesc, 'Content is valid (sorting 2nd column desc)');

});

test('render custom component in the sort cell', function (assert) {

  var columns = generateColumns(['index', 'someWord']);
  columns[1].componentForSortCell = 'sort-cell';

  this.setProperties({
    data: generateContent(10, 1),
    columns: columns
  });

  this.render(hbs`{{models-table columns=columns data=data multipleColumnsSorting=false}}`);
  this.sortSecondColumn();
  assert.equal(this.getEachAsString(selectors.secondColumn, '|'), oneTenAsc, 'Content is valid (sorting 2nd column asc)');

  this.sortSecondColumn();
  assert.equal(this.getEachAsString(selectors.secondColumn, '|'), oneTenDesc, 'Content is valid (sorting 2nd column desc)');

});

test('render custom simple pagination', function (assert) {

  this.set('simplePaginationTemplate', 'custom/pagination');

  this.render(hbs`{{models-table simplePaginationTemplate=simplePaginationTemplate}}`);
  assert.equal(this.getEachAsString('.table-nav').replace(/\s+/g, ' '), 'F P N L', 'Custom labels are used');

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

  assert.equal(this.getCount(selectors.theadFirstRowCells), 2, '2 columns are shown (thead)');
  assert.equal(this.getCount(selectors.theadSecondRowCells), 2, '2 columns are shown (thead)');
  assert.equal(this.getCount(selectors.tbodyFirstRowCells), 2, '2 columns are shown (tbody)');

  this.toggleFirstColumnVisibility();

  assert.equal(this.getCount(selectors.theadFirstRowCells), 1, '1 column is shown (thead)');
  assert.equal(this.getCount(selectors.theadSecondRowCells), 1, '1 column is shown (thead)');
  assert.equal(this.getCount(selectors.tbodyFirstRowCells), 1, '1 column is shown (tbody)');
  assert.equal(this.getEachAsString(selectors.theadFirstRowFirstCell), 'reversedIndex', 'Valid column is shown (thead)');
  assert.equal(this.$(firstColumnIconSelector).hasClass(uncheckedClass), true, 'First column is unchecked');
  assert.equal(this.$(secondColumnIconSelector).hasClass(checkedClass), true, 'Second column is checked');

  this.toggleFirstColumnVisibility();

  assert.equal(this.getCount(selectors.theadFirstRowCells), 2, '2 columns are shown (thead)');
  assert.equal(this.getCount(selectors.tbodyFirstRowCells), 2, '2 columns are shown (tbody)');
  assert.equal(this.$(firstColumnIconSelector).hasClass(checkedClass), true, 'First column is checked');
  assert.equal(this.$(secondColumnIconSelector).hasClass(checkedClass), true, 'Second column is checked');

  this.toggleSecondColumnVisibility();

  assert.equal(this.getCount(selectors.theadFirstRowCells), 1, '1 column is shown (thead)');
  assert.equal(this.getCount(selectors.tbodyFirstRowCells), 1, '1 column is shown (tbody)');
  assert.equal(this.getEachAsString(selectors.theadFirstRowFirstCell), 'index', 'Valid column is shown (thead)');
  assert.equal(this.$(firstColumnIconSelector).hasClass(checkedClass), true, 'First column is checked');
  assert.equal(this.$(secondColumnIconSelector).hasClass(uncheckedClass), true, 'Second column is unchecked');

  this.toggleFirstColumnVisibility();

  assert.equal(this.getCount(selectors.allRows), 1, '1 row is shown when all columns are hidden');
  assert.equal(this.getCount(selectors.tbodyAllCells), 1, 'with 1 cell');
  assert.equal(this.$(selectors.tbodyAllCells).attr('colspan'), 2, 'it\'s colspan is equal to the columns count');
  assert.equal(this.getEachAsString(selectors.tbodyAllCells), 'All columns are hidden. Use columns-dropdown to show some of them', 'correct message is shown');
  assert.equal(this.$(firstColumnIconSelector).hasClass(uncheckedClass), true, 'First column is unchecked');
  assert.equal(this.$(secondColumnIconSelector).hasClass(uncheckedClass), true, 'Second column is unchecked');

});

test('render show/hide all columns', function(assert) {
  this.setProperties({
    columns: generateColumns(['index', 'reversedIndex']),
    data: generateContent(10, 1)
  });

  this.render(hbs`{{models-table columns=columns data=data}}`);
  assert.equal(this.getCount(selectors.theadFirstRowCells), 2, '2 columns are shown (thead)');
  assert.equal(this.getCount(selectors.theadSecondRowCells), 2, '2 columns are shown (thead)');
  assert.equal(this.getCount(selectors.tbodyFirstRowCells), 2, '2 columns are shown (tbody)');

  this.hideAllColumns();

  assert.equal(this.getCount(selectors.allRows), 1, '1 row is shown when all columns are hidden');
  assert.equal(this.getCount(selectors.tbodyAllCells), 1, 'with 1 cell');
  assert.equal(this.getEachAsString(selectors.tbodyAllCells), 'All columns are hidden. Use columns-dropdown to show some of them', 'correct message is shown');

  this.showAllColumns();

  assert.equal(this.getCount(selectors.theadFirstRowCells), 2, '2 columns are shown (thead)');
  assert.equal(this.getCount(selectors.theadSecondRowCells), 2, '2 columns are shown (thead)');
  assert.equal(this.getCount(selectors.tbodyFirstRowCells), 2, '2 columns are shown (tbody)');

});

test('render columns-dropdown with mayBeHidden = false for some columns', function (assert) {

    var columns = generateColumns(['index', 'reversedIndex']);
    columns[0].mayBeHidden = false;
    this.setProperties({
      columns: columns,
      data: generateContent(10, 1)
    });

  this.render(hbs`{{models-table columns=columns data=data}}`);
  assert.equal(this.getEachAsString('.columns-dropdown li a').replace(/\s+/g, ''), ('Show All' + 'Hide All' + 'Restore Defaults' + 'reversedIndex').replace(/\s+/g, ''), 'Column with mayBeHidden = false is not shown in the columns dropdown');

  this.toggleFirstColumnVisibility();

  assert.equal(this.getCount(selectors.theadFirstRowCells), 1, '1 column is shown (thead)');
  assert.equal(this.getCount(selectors.theadSecondRowCells), 1, '1 column is shown (thead)');
  assert.equal(this.getCount(selectors.tbodyFirstRowCells), 1, '1 column is shown (tbody)');
  assert.equal(this.getEachAsString(selectors.theadFirstRowCells).replace(/\s+/g,''), 'index', 'Valid column is shown (thead)');

});

test('global filtering (ignore case OFF)', function(assert) {

  var columns = generateColumns(['index', 'reversedIndex']);
  columns[1].template = 'custom/test';
  this.setProperties({
    columns: columns,
    data: generateContent(10, 1)
  });
  this.render(hbs`{{models-table data=data columns=columns}}`);

  this.globalFilter('1');

  assert.equal(this.getEachAsString(selectors.firstColumn, '|'), '1|10', 'Content is filtered correctly');

  this.globalFilter('');

  assert.equal(this.getEachAsString(selectors.firstColumn), '12345678910', 'Filter is empty and all rows are shown');

  this.globalFilter('invalid input');

  assert.equal(this.getEachAsString(selectors.firstColumn), 'No records to show', 'All rows are filtered out and proper message is shown');
  assert.equal(this.getEachAttrAsString(selectors.firstColumn, 'colspan'), columns.length, 'cell with message has correct colspan');

});

test('global filtering (ignore case ON)', function(assert) {

  var columns = generateColumns(['index', 'someWord']);
  this.setProperties({
      filteringIgnoreCase: true,
      columns: columns,
      data: generateContent(10, 1)
  });
  this.render(hbs`{{models-table columns=columns data=data filteringIgnoreCase=filteringIgnoreCase}}`);

  this.globalFilter('One');

  assert.equal(this.getEachAsString(selectors.tbodyFirstRowCells), '1one', 'Content is filtered correctly');

  this.globalFilter('');

  assert.equal(this.getEachAsString(selectors.firstColumn), '12345678910', 'Filter is empty and all rows are shown');

  this.globalFilter('invalid input');

  assert.equal(this.getEachAsString(selectors.firstColumn), 'No records to show', 'All rows are filtered out and proper message is shown');
  assert.equal(this.getEachAttrAsString(selectors.firstColumn, 'colspan'), columns.length, 'cell with message has correct colspan');

  this.globalFilter('');
  this.sortFirstColumn();
  this.sortFirstColumn();

  this.globalFilter('One');

  assert.equal(this.getEachAsString(selectors.tbodySecondColumnCells), 'one', 'Content is filtered correctly when sorting is not done');

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
  this.filterFirstColumn('1');

  assert.equal(this.getEachAsString(selectors.firstColumn, '|'), '1|10', 'Content is filtered correctly');

  this.filterFirstColumn('');

  assert.equal(this.getEachAsString(selectors.firstColumn), '12345678910', 'Filter is empty and all rows are shown');

  this.filterFirstColumn('invalid input');

  assert.equal(this.getEachAsString(selectors.firstColumn), 'No records to show', 'All rows are filtered out and proper message is shown');
  assert.equal(this.getEachAttrAsString(selectors.firstColumn, 'colspan'), columns.length, 'cell with message has correct colspan');

  assert.equal(this.getEachAttrAsString(selectors.theadSecondRowFirstColumnFilter, 'placeholder'), 'custom placeholder', 'Placeholder is correct');

  this.set('useFilteringByColumns', false);

  assert.equal(this.getEachAsString(selectors.firstColumn), '12345678910', 'Filtering by columns is ignored');
  assert.equal(this.getCount('thead input'), 0, 'Columns filters are hidden');

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
  this.filterSecondColumn('One');
  assert.equal(this.getEachAsString(selectors.tbodyFirstRowCells), '1one', 'Content is filtered correctly');

  this.filterSecondColumn('');

  assert.equal(this.getEachAsString(selectors.firstColumn), '12345678910', 'Filter is empty and all rows are shown');

  this.filterSecondColumn('invalid input');

  assert.equal(this.getEachAsString(selectors.firstColumn), 'No records to show', 'All rows are filtered out and proper message is shown');
  assert.equal(this.getEachAttrAsString(selectors.firstColumn, 'colspan'), columns.length, 'cell with message has correct colspan');

  this.filterSecondColumn('');

  this.filterSecondColumn('One');
  assert.equal(this.getEachAsString(selectors.tbodySecondColumnCells), 'one', 'Content is filtered correctly when sorting is not done');

  this.set('useFilteringByColumns', false);

  assert.equal(this.getEachAsString(selectors.firstColumn), '12345678910', 'Filtering by columns is ignored');
  assert.equal(this.getCount('thead input'), 0, 'Columns filters are hidden');

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
  this.filterFirstColumn('=1');
  assert.equal(this.getEachAsString(selectors.tbodyFirstColumnCells), '1', `Content is filtered correctly (with '=1')`);

  this.filterFirstColumn('>5');
  assert.equal(this.getEachAsString(selectors.tbodyFirstColumnCells), '678910', `Content is filtered correctly (with '>5')`);

  this.filterFirstColumn('<6');
  assert.equal(this.getEachAsString(selectors.tbodyFirstColumnCells), '12345', `Content is filtered correctly (with '<6')`);

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
  this.filterWithSelectFirstColumn('=1');
  assert.equal(this.getEachAsString(selectors.tbodyFirstColumnCells), '1', `Content is filtered correctly (with '=1')`);

  this.filterWithSelectFirstColumn('>5');
  assert.equal(this.getEachAsString(selectors.tbodyFirstColumnCells), '678910', `Content is filtered correctly (with '>5')`);

  this.filterWithSelectFirstColumn('<6');
  assert.equal(this.getEachAsString(selectors.tbodyFirstColumnCells), '12345', `Content is filtered correctly (with '<6')`);

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

  assert.equal(this.getCount(`${selectSelector}  option`), 10, 'Empty data-value was excluded');
  assert.equal(this.getEachAsString(`${selectSelector}  option:last-child`), 'nine', 'Last option is not empty string');

  assert.ok(this.$(selectSelector), 'Select-box for column with `filterWithSelect` exists');
  assert.equal(this.getEachAsString(`${selectSelector}  option`).replace(/\s+/g, ''), concatenatedWords, 'Options for select are valid');

  this.filterWithSelectSecondColumn('one');

  assert.equal(this.getCount(selectors.allRows), 1, 'Only one row exist after filtering');

  this.set('data.0.someWord', 'not a number');

  assert.equal(this.$(selectSelector + ' option:selected').val(), '', 'Filter is reverted to the default value');

  this.filterWithSelectSecondColumn('');

  assert.equal(this.getCount(selectors.allRows), 10, 'All rows are shown after clear filter');

});

test('filtering with filterWithSelect (without predefinedFilterOptions), `sortFilterOptions` is true', function (assert) {

  var selectSelector = `${selectors.theadSecondRowCells}:eq(1) select`;

  var columns = generateColumns(['index', 'someWord']);
  columns[1].filterWithSelect = true;
  columns[1].sortFilterOptions = true;
  var data = generateContent(10, 1);
  data[data.length - 1].someWord = '';
  var words = data.mapBy('someWord').sort();
  var concatenatedWords = words.join('');
  this.setProperties({
    columns: columns,
    data: data
  });
  this.render(hbs`{{models-table columns=columns data=data}}`);

  assert.ok(this.$(selectSelector), 'Select-box for column with `filterWithSelect` exists');
  assert.equal(this.getEachAsString(`${selectSelector}  option`).replace(/\s+/g, ''), concatenatedWords, 'Options for select are valid');

  this.filterWithSelectSecondColumn('one');

  assert.equal(this.getCount(selectors.allRows), 1, 'Only one row exist after filtering');

});

test('filtering with filterWithSelect (with predefinedFilterOptions as primitives)', function (assert) {

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
  assert.equal(this.getEachAsString(`${selectSelector} option`).replace(/\s+/g, ''), 'onetwo', 'Options for select are valid');

  this.filterWithSelectSecondColumn('one');
  assert.equal(this.$(selectSelector + ' option:selected').val(), 'one', 'Proper option is selected');
  assert.equal(this.getCount(selectors.allRows), 1, 'Only one row exist after filtering');

  this.set('data', generateContent(9, 2));

  assert.equal(this.$(selectSelector + ' option:selected').val(), 'one', 'Filter is not reverted to the default value');
  assert.equal(this.getEachAsString(`${selectSelector} option`).replace(/\s+/g, ''), 'onetwo', 'Options for select are valid');

  this.filterWithSelectSecondColumn('');

  assert.equal(this.getCount(selectors.allRows), 9, 'All rows are shown after clear filter');

});

test('filtering with filterWithSelect (with predefinedFilterOptions as objects)', function (assert) {

  var selectSelector = `${selectors.theadSecondRowCells}:eq(1) select`;

  var columns = generateColumns(['index', 'someWord']);
  columns[1].filterWithSelect = true;
  columns[1].predefinedFilterOptions = [{label: '1', value: 'one'}, {label: '2', value: 'two'}];
  var data = generateContent(10, 1);

  this.setProperties({
    columns: columns,
    data: data
  });
  this.render(hbs`{{models-table data=data columns=columns}}`);

  assert.ok(this.$(selectSelector), 'Select-box for column with `filterWithSelect` exists');
  assert.equal(this.getEachAsString(`${selectSelector} option`).replace(/\s+/g, ''), '12', 'Options for select are valid');

  this.filterWithSelectSecondColumn('one');
  assert.equal(this.$(selectSelector + ' option:selected').val(), 'one', 'Proper option is selected');
  assert.equal(this.getCount(selectors.allRows), 1, 'Only one row exist after filtering');

  this.set('data', generateContent(9, 2));

  assert.equal(this.$(selectSelector + ' option:selected').val(), 'one', 'Filter is not reverted to the default value');
  assert.equal(this.getEachAsString(`${selectSelector} option`).replace(/\s+/g, ''), '12', 'Options for select are valid');

  this.filterWithSelectSecondColumn('');

  assert.equal(this.getCount(selectors.allRows), 9, 'All rows are shown after clear filter');

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

  this.filterSecondColumn('1');
  assert.equal(this.getEachAsString(selectors.secondColumn, '|'), '1|10', 'Content is filtered correctly');

  this.filterSecondColumn('');
  assert.equal(this.getEachAsString(selectors.secondColumn), '12345678910', 'Filter is empty and all rows are shown');

});

test('`filteredBy` hash higher priority than `propertyName`', function (assert) {

  var columns = generateColumns(['someWord']);
  columns[0].filteredBy = 'index';
  this.setProperties({
    columns: columns,
    data: generateContent(10, 1)
  });
  this.render(hbs`{{models-table data=data columns=columns}}`);
  this.globalFilter('2');
  assert.equal(this.getEachAsString(selectors.firstColumn), 'two', 'Content is filtered correctly (global filter)');

  this.globalFilter('');
  this.filterFirstColumn('2');
  assert.equal(this.getEachAsString(selectors.firstColumn), 'two', 'Content is filtered correctly (filter by column)');

});

test('icons for clearing filters exist', function (assert) {

  var columns = generateColumns(['index', 'someWord']);
  columns[1].filterWithSelect = true;
  this.setProperties({
    columns: columns,
    data: generateContent(10, 1)
  });

  this.render(hbs`{{models-table data=data columns=columns}}`);
  assert.notOk(this.elementVisible(selectors.clearAllFilters), '`Clear all filters` icon does not exist');

  this.globalFilter(2);
  assert.ok(this.elementExist(selectors.filterStringClearIcon),'`Clear global filter` icon exists');
  assert.ok(this.elementVisible(selectors.clearAllFilters), '`Clear all filters` icon exists');
  this.globalFilter('');
  assert.notOk(this.elementExist(selectors.filterStringClearIcon), '`Clear global filter` icon does not exist');
  assert.notOk(this.elementVisible(selectors.clearAllFilters), '`Clear all filters` icon does not exist');

  this.filterFirstColumn(1);
  assert.ok(this.elementExist(selectors.theadSecondRowFirstColumnClearFilterIcon), '`Clear first column filter` icon exists');
  assert.ok(this.elementVisible(selectors.clearAllFilters), '`Clear all filters` icon exists');
  this.filterFirstColumn('');
  assert.notOk(this.elementExist(selectors.theadSecondRowFirstColumnClearFilterIcon), '`Clear first column filter` icon does not exist');
  assert.notOk(this.elementVisible(selectors.clearAllFilters), '`Clear all filters` icon does not exist');

  this.filterWithSelectSecondColumn('one');
  assert.ok(this.elementExist(selectors.theadSecondRowSecondColumnClearFilterIcon), '`Clear second column select filter` icon exists');
  assert.ok(this.elementVisible(selectors.clearAllFilters), '`Clear all filters` icon exists');
  this.filterWithSelectSecondColumn('');
  assert.notOk(this.elementExist(selectors.theadSecondRowSecondColumnClearFilterIcon), '`Clear second column select filter` icon does not exist');
  assert.notOk(this.elementVisible(selectors.clearAllFilters), '`Clear all filters` icon does not exist');

});

test('clear filters using icons', function (assert) {

  var columns = generateColumns(['index', 'someWord']);
  columns[1].filterWithSelect = true;
  var data = generateContent(10, 1);
  this.setProperties({
    columns: columns,
    data: data
  });

  this.render(hbs`{{models-table data=data columns=columns}}`);

  this.globalFilter(2);
  assert.equal(this.getCount(selectors.tbodyAllRows), 1, 'Global filter is used');
  this.clearGlobalFilterByIcon();
  assert.equal(this.getCount(selectors.tbodyAllRows), data.length, 'Global filter is clear (1)');

  this.globalFilter(2);
  assert.equal(this.getCount(selectors.tbodyAllRows), 1, 'Global filter is used');
  this.clearAllFiltersByIcon();
  assert.equal(this.getCount(selectors.tbodyAllRows), data.length, 'Global filter is clear (2)');

  this.filterFirstColumn(2);
  assert.equal(this.getCount(selectors.tbodyAllRows), 1, 'Filter for first column is used');
  this.clearFirstColumnFilterByIcon();
  assert.equal(this.getCount(selectors.tbodyAllRows), data.length, 'Filter for first column is clear (1)');

  this.filterFirstColumn(2);
  assert.equal(this.getCount(selectors.tbodyAllRows), 1, 'Filter for first column is used');
  this.clearAllFiltersByIcon();
  assert.equal(this.getCount(selectors.tbodyAllRows), data.length, 'Filter for first column is clear (2)');

  this.filterWithSelectSecondColumn('one');
  assert.equal(this.getCount(selectors.tbodyAllRows), 1, 'Filter for second column is used');
  this.clearSecondColumnFilterByIcon();
  assert.equal(this.getCount(selectors.tbodyAllRows), data.length, 'Filter for second column is clear (1)');

  this.filterWithSelectSecondColumn('one');
  assert.equal(this.getCount(selectors.tbodyAllRows), 1, 'Filter for second column is used');
  this.clearAllFiltersByIcon();
  assert.equal(this.getCount(selectors.tbodyAllRows), data.length, 'Filter for second column is clear (2)');

  this.globalFilter(2);
  this.filterFirstColumn(2);
  this.filterWithSelectSecondColumn('two');
  assert.equal(this.getCount(selectors.tbodyAllRows), 1, 'All filters are used, 1 row shown');
  this.clearAllFiltersByIcon();
  assert.equal(this.getCount(selectors.tbodyAllRows), data.length, 'All filters are clear');

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

  assert.equal(this.getEachAsString(selectors.summary), 'Now are showing 1 - 10 of 10', 'Summary is valid');
  assert.equal(this.getEachAsString('.columns-dropdown button'), messages['columns-title'], 'Columns-dropdown title is valid');
  assert.equal(this.getEachAsString('.columns-dropdown .dropdown-menu li:eq(0)'), messages['columns-showAll'], 'Columns-dropdown "showAll" is valid');
  assert.equal(this.getEachAsString('.columns-dropdown .dropdown-menu li:eq(1)'), messages['columns-hideAll'], 'Columns-dropdown "hideAll" is valid');
  assert.equal(this.getEachAsString('.columns-dropdown .dropdown-menu li:eq(2)'), messages['columns-restoreDefaults'], 'Columns-dropdown "restoreDefaults" is valid');
  assert.equal(this.getEachAsString('.globalSearch label'), messages.searchLabel, 'Global-search label is valid');

  this.hideAllColumns();

  assert.equal(this.getEachAsString(selectors.tbodyAllCells), messages.allColumnsAreHidden, 'Message about all hidden columns is valid');

  this.showAllColumns();
  this.globalFilter('invalid string');


  assert.equal(this.getEachAsString(selectors.firstColumn), messages.noDataToShow, 'Message about no data is valid');

  this.set('customMessages', messages2);

  this.globalFilter('');

  assert.equal(this.getEachAsString(selectors.summary), 'DISPLAY 1 - 10 OF 10', 'Summary is valid (2)');
  assert.equal(this.getEachAsString('.columns-dropdown button'), messages2['columns-title'], 'Columns-dropdown title is valid (2)');
  assert.equal(this.getEachAsString('.columns-dropdown .dropdown-menu li:eq(0)'), messages2['columns-showAll'], 'Columns-dropdown "showAll" is valid (2)');
  assert.equal(this.getEachAsString('.columns-dropdown .dropdown-menu li:eq(1)'), messages2['columns-hideAll'], 'Columns-dropdown "hideAll" is valid (2)');
  assert.equal(this.getEachAsString('.columns-dropdown .dropdown-menu li:eq(2)'), messages2['columns-restoreDefaults'], 'Columns-dropdown "restoreDefaults" is valid (2)');
  assert.equal(this.getEachAsString('.globalSearch label'), messages2.searchLabel, 'Global-search label is valid (2)');

  this.hideAllColumns();

  assert.equal(this.getEachAsString(selectors.tbodyAllCells), messages2.allColumnsAreHidden, 'Message about all hidden columns is valid (2)');

  this.showAllColumns();
  this.globalFilter('invalid string');

  assert.equal(this.getEachAsString(selectors.firstColumn), messages2.noDataToShow, 'Message about no data is valid (2)');

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
  this.sortFirstColumn();

  assert.equal(this.getCount('.sort-asc'), 1, 'sort asc 1 column');

  this.sortSecondColumn();
  assert.equal(this.getCount('.sort-asc'), 2, 'sort asc 2 columns');

  this.sortSecondColumn();
  assert.equal(this.getCount('.sort-asc'), 1, 'sort asc 1 column');
  assert.equal(this.getCount('.sort-desc'), 1, 'sort desc 1 column');

  assert.equal(this.getCount(`${selectors.columnsDropdown} .column-visible`), 2, 'all columns are visible');

  this.toggleFirstColumnVisibility();
  assert.equal(this.getCount(`${selectors.columnsDropdown} .column-visible`), 1, '1 column is visible');
  assert.equal(this.getCount(`${selectors.columnsDropdown} .column-hidden`), 1, '1 column is hidden');

  assert.equal(this.getEachClassAsString(`${selectors.tableNavBtnFirst} span`), 'nav-first', 'First-button has valid class');
  assert.equal(this.getEachClassAsString(`${selectors.tableNavBtnBack} span`), 'nav-prev', 'Prev-button has valid class');
  assert.equal(this.getEachClassAsString(`${selectors.tableNavBtnNext} span`), 'nav-next', 'Next-button has valid class');
  assert.equal(this.getEachClassAsString(`${selectors.tableNavBtnLast} span`), 'nav-last', 'Last-button has valid class');

});

test('columns column cell classes', function (assert) {

  var columns = generateColumns(['index', 'reversedIndex']);
  columns[0].className = 'custom-column-class';
  this.setProperties({
    columns: columns,
    data: generateContent(10, 1)
  });
  this.render(hbs`{{models-table columns=columns data=data}}`);

  assert.equal(this.getCount('tbody .custom-column-class'), 10, 'Custom column class exists on each column cell');

});

test('column title auto generation', function (assert) {

  var columns = generateColumns(['index', 'reversedIndex']);
  columns.setEach('title', null);
  this.setProperties({
    columns: columns,
    data: generateContent(10, 1)
  });
  this.render(hbs`{{models-table columns=columns data=data}}`);

  assert.equal(this.getEachAsString('thead th:eq(0)'), 'Index', 'Title for one word is correct');
  assert.equal(this.getEachAsString('thead th:eq(1)'), 'Reversed index', 'Title for camelCase is correct');

});

test('`sortedBy` has higher priority than `propertyName`', function (assert) {

  var columns = generateColumns(['someWord', 'index']);
  columns[0].sortedBy = 'index';
  this.setProperties({
    columns: columns,
    data: generateContent(10, 1)
  });
  this.render(hbs`{{models-table columns=columns data=data}}`);

  this.sortSecondColumn();
  assert.equal(this.getEachAsString(selectors.secondColumn), '12345678910', 'Content is valid (sorting by `index` desc)');

  this.sortSecondColumn();
  assert.equal(this.getEachAsString(selectors.secondColumn), '10987654321', 'Content is valid (sorting by `index` asc)');

});

test('sorting (multi `true`)', function (assert) {

  this.setProperties({
    columns: generateColumns(['index', 'index2']),
    data: generateContent(10, 1)
  });
  this.render(hbs`{{models-table columns=columns data=data}}`);
  this.sortFirstColumn();

  assert.equal(this.getEachAsString(selectors.firstColumn), '12345678910', 'Content is valid (sorting 1st column asc)');

  this.sortFirstColumn();

  assert.equal(this.getEachAsString(selectors.firstColumn), '10987654321', 'Content is valid (sorting 1st column desc)');

  this.sortFirstColumn();
  this.sortSecondColumn();

  assert.equal(this.getEachAsString(selectors.firstColumn), '12345678910', 'Content is valid (sorting 1st column asc) - restore defaults');
  assert.equal(this.getEachAsString(selectors.secondColumn), '1122334455', 'Content is valid (sorting 2nd column asc) - restore defaults');

  this.sortFirstColumn();
  this.sortFirstColumn();

  assert.equal(this.getEachAsString(selectors.firstColumn), '21436587109', 'Content is valid (sorting 1st column desc)');
  assert.equal(this.getEachAsString(selectors.secondColumn), '1122334455', 'Content is valid (sorting 2nd column asc)');

});

test('sorting (multi `false`)', function (assert) {

  this.setProperties({
    columns: generateColumns(['index', 'index2']),
    data: generateContent(10, 1)
  });
  this.render(hbs`{{models-table columns=columns data=data multipleColumnsSorting=false}}`);
  this.sortFirstColumn();

  assert.equal(this.getEachAsString(selectors.firstColumn), '12345678910', 'Content is valid (sorting 1st column asc)');

  this.sortFirstColumn();

  assert.equal(this.getEachAsString(selectors.firstColumn), '10987654321', 'Content is valid (sorting 1st column desc)');

  this.sortFirstColumn();
  this.sortSecondColumn();

  assert.equal(this.getEachAsString(selectors.firstColumn), '12345678910', 'Content is valid (sorting 1st column asc) - restore defaults');
  assert.equal(this.getEachAsString(selectors.secondColumn), '1122334455', 'Content is valid (sorting 2nd column asc) - restore defaults');

  this.sortFirstColumn();
  this.sortFirstColumn();

  assert.equal(this.getEachAsString(selectors.firstColumn), '10987654321', 'Content is valid (sorting 1st column desc)');
  assert.equal(this.getEachAsString(selectors.secondColumn), '5544332211', 'Content is valid (sorting 2nd reverted)');

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

  this.sortSecondColumn();

  assert.equal(this.getEachAsString(selectors.secondColumn, '|'), '1+3|2+2|3+1', 'Content is sorted by `index`');

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
  this.on('deleteRecord', function () {return this;});
  this.render(hbs`{{models-table data=data columns=columns delete='deleteRecord'}}`);

  assert.equal(this.getEachAsString(selectors.secondColumn), '10987654321', 'Content is sorted correctly');

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
    assert.equal(this.getEachAsString(selectors.navigationButtons,'|'), A(test.visiblePageNumbers).mapBy('label').join('|'), `10 pages, active is ${test.currentPageNumber}`);
  }, this);

  this.set('data', generateContent(10, 1));
  this.set('pageSize', 10);

  assert.equal(this.getEachAsString(selectors.navigationButtons,'|'), '1', 'Only 1 page');

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
  this.filterSecondColumn('One');

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
  this.globalFilter('One');
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
  this.sortFirstColumn();
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
  this.expandFirstRow();

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
  this.clickOnRow(0);

});

test('event on user interaction (clear all filters)', function (assert) {

  var calls = [
    // after render
    {
      filterString: '',
      columnFilters: {}
    },
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
  var indx = 0;
  this.setProperties({
    columns: generateColumns(['id']),
    data: generateContent(30, 1),
    displayDataChangedAction: 'displayDataChanged',
    sendDisplayDataChangedAction: true
  });

  this.on('displayDataChanged', function (settings) {
    var call = calls[indx];
    assert.equal(call.filterString, settings.filterString, `#${indx + 1}. filterString`);
    assert.deepEqual(call.columnFilters, settings.columnFilters, `#${indx + 1}. columnFilters`);
    indx++;
  });

  this.render(hbs`{{models-table columns=columns data=data displayDataChangedAction=displayDataChangedAction sendDisplayDataChangedAction=sendDisplayDataChangedAction expandedRowTemplate=expandedRowTemplate}}`);
  this.filterFirstColumn(1);
  this.globalFilter(1);
  this.clearAllFiltersByIcon();
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
  this.nextPage();
  this.$('td button').first().click();
  assert.equal(this.getEachAsString(selectors.summary), 'Show 1 - 10 of 10', 'First page is shown');
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
  this.nextPage();
  this.$('td button').first().click();
  assert.equal(this.getEachAsString(selectors.summary), 'Show 11 - 20 of 30', 'Second page is shown');
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
  this.filterFirstColumn('1');
  this.sortFirstColumn();
  assert.equal(this.getEachAsString(selectors.theadFirstRowCells, '|'), 'index|someWord', 'two columns are shown');
  assert.equal(this.getEachAsString(selectors.columnsDropdown, '|'), 'Show All|Hide All|Restore Defaults||index|someWord', 'two columns are in columns dropdown');

  this.set('columns', columns2);
  assert.equal(this.getEachAsString(selectors.theadFirstRowCells, '|'), 'index|someWord', 'columns are not updated');
  assert.equal(this.getEachAsString(selectors.columnsDropdown, '|'), 'Show All|Hide All|Restore Defaults||index|someWord', 'columns dropdown is not updated');
  assert.equal(this.getEachValueAsString(selectors.theadSecondRowFirstColumnFilter), '1', 'column filter was not dropped');
  assert.equal(this.getEachClassAsString(selectors.theadFirstRowFirstCellSort), 'glyphicon glyphicon-triangle-bottom', 'column sorting was not dropped');
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
  assert.equal(this.getEachAsString(selectors.theadFirstRowCells, '|'), 'index|someWord', 'two columns are shown');
  assert.equal(this.getEachAsString(selectors.columnsDropdown, '|'), 'Show All|Hide All|Restore Defaults||index|someWord', 'two columns are in columns dropdown');
  this.filterFirstColumn('1');
  this.sortFirstColumn();

  this.set('columns', columns2);
  assert.equal(this.getEachAsString(selectors.theadFirstRowCells, '|'), 'index|index2|someWord', 'columns are updated');
  assert.equal(this.getEachAsString(selectors.columnsDropdown, '|'), 'Show All|Hide All|Restore Defaults||index|index2|someWord', 'columns dropdown is updated');
  assert.equal(this.getEachValueAsString(selectors.theadSecondRowFirstColumnFilter), '', 'column filter was dropped');

});

test('filtering with `doFilteringByHiddenColumns` = false', function (assert) {

  this.setProperties({
    columns: generateColumns(['index', 'someWord']),
    data: generateContent(10, 1),
    doFilteringByHiddenColumns: false
  });

  this.render(hbs`{{models-table columns=columns data=data doFilteringByHiddenColumns=doFilteringByHiddenColumns}}`);

  this.toggleSecondColumnVisibility();
  this.globalFilter('one');

  assert.equal(this.getEachAsString(selectors.tbodyFirstColumnCells), '12345678910', 'Content is not changed');

  this.set('doFilteringByHiddenColumns', true);
  assert.equal(this.getEachAsString(selectors.tbodyFirstColumnCells), '12345678910', 'Content is not changed after `doFilteringByHiddenColumns` updating');

  this.globalFilter('');
  this.globalFilter('one');

  assert.equal(this.getEachAsString(selectors.tbodyFirstColumnCells), '1', 'Content is filtered');

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

  assert.equal(this.getEachAsString(selectors.theadFirstRowCells), 'BigTitle', '');
  assert.equal(this.getEachAttrAsString(selectors.theadFirstRowCells, 'colspan'), '5', '');

  assert.equal(this.getEachAsString(selectors.theadSecondRowCells, '|'), 'SubTitle1|SubTitle2', '');
  assert.equal(this.getEachAttrAsString(selectors.theadSecondRowCells, 'colspan', '|'), '2|3', '');

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

  assert.equal(this.getCount(selectors.collapseRow), 0, 'All rows are collapsed by default');

  this.expandFirstRow();
  assert.ok(this.firstRowIsExpanded(), 'First row is expanded');
  assert.equal(this.getCount('.expand-0'), 1, 'Expanded row content exists');
  assert.equal(this.getEachAsString('.expand-0 .id'), 1, 'Expanded row content is valid');

  this.expandSecondRow();
  assert.ok(this.firstRowIsExpanded(), 'First row is still expanded');
  assert.ok(this.secondRowIsExpanded(), 'Second row is expanded');

  this.collapseFirstRow();
  assert.ok(this.firstRowIsCollapsed(), 'First row is collapsed');
  assert.ok(this.secondRowIsExpanded(), 'Second row is still expanded');

  this.collapseSecondRow();
  assert.ok(this.secondRowIsCollapsed(), 'Second row is collapsed');

  this.expandFirstRow();
  this.nextPage();
  assert.ok(this.firstRowIsCollapsed(), 'First row on the second page is collapsed');

});

test('expandable rows (multipleExpand = true, expand all rows)', function (assert) {

  let columns = generateColumns(['id']);
  columns.splice(0, 0, {
    template: 'components/models-table/expand-row-cell',
    templateForFilterCell: 'components/models-table/expand-all-rows-cell',
    mayBeHidden: false
  });
  this.setProperties({
    columns: columns,
    expandedRowTemplate: 'custom/expanded-row',
    data: generateContent(30, 1)
  });

  this.render(hbs`{{models-table columns=columns data=data expandedRowTemplate=expandedRowTemplate multipleExpand=true}}`);

  assert.equal(this.getCount(selectors.collapseRow), 0, 'All rows are collapsed by default');

  this.expandAllRows();
  assert.equal(this.getCount('tr.expand-row'), 10, 'All rows are expanded');
  assert.equal(this.getEachAsString('.expand-row .id', '|'), '1|2|3|4|5|6|7|8|9|10', 'Expanded rows content is valid');

  this.collapseAllRows();
  assert.equal(this.getCount('tr.expand-row'), 0, 'All rows are collapsed');

  this.expandAllRows();
  this.nextPage();
  assert.equal(this.getCount('tr.expand-row'), 0, 'All rows on the second page are collapsed');

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

  assert.equal(this.getCount(selectors.collapseRow), 0, 'All rows are collapsed by default');

  this.expandFirstRow();
  assert.ok(this.firstRowIsExpanded(), 'First row is expanded');
  assert.equal(this.getCount('.expand-0'), 1, 'Expanded row content exists');
  assert.equal(this.getEachAsString('.expand-0 .id'), 1, 'Expanded row content is valid');

  this.expandSecondRow();
  assert.ok(this.firstRowIsCollapsed(), 'First row is collapsed');
  assert.ok(this.secondRowIsExpanded(), 'Second row is expanded');

  this.collapseSecondRow();
  assert.ok(this.secondRowIsCollapsed(), 'Second row is collapsed');

  this.expandFirstRow();
  this.nextPage();
  assert.ok(this.firstRowIsCollapsed(), 'First row on the second page is collapsed');

});

test('selectable rows (multipleSelect = true)', function (assert) {

  this.setProperties({
    data: generateContent(30, 1),
    columns: generateColumns(['id'])
  });
  this.render(hbs`{{models-table data=data column=columns multipleSelect=true}}`);

  assert.equal(this.getAllSelectedRows(), 0, 'No selected rows by default');

  this.clickOnRow(0);
  assert.ok(this.firstRowIsSelected(), 'First row is selected');

  this.clickOnRow(1);
  assert.ok(this.firstRowIsSelected(), 'First row is still selected');
  assert.ok(this.secondRowIsSelected(), 'Second row is selected');

  this.clickOnRow(0);
  assert.notOk(this.firstRowIsSelected(), 'First row is not selected');
  assert.ok(this.secondRowIsSelected(), 'Second row is selected');

  this.clickOnRow(1);
  assert.notOk(this.firstRowIsSelected(), 'First row still is not selected');
  assert.notOk(this.secondRowIsSelected(), 'Second row is not selected');

});

test('selectable rows (multipleSelect = false)', function (assert) {

  this.setProperties({
    data: generateContent(30, 1),
    columns: generateColumns(['id'])
  });
  this.render(hbs`{{models-table data=data column=columns multipleSelect=false}}`);

  assert.equal(this.getAllSelectedRows(), 0, 'No selected rows by default');

  this.clickOnRow(0);
  assert.ok(this.firstRowIsSelected(), 'First row is selected');

  this.clickOnRow(1);
  assert.notOk(this.firstRowIsSelected(), 'First row is not selected');
  assert.ok(this.secondRowIsSelected(), 'Second row is selected');

  this.clickOnRow(0);
  assert.ok(this.firstRowIsSelected(), 'First row is selected');
  assert.notOk(this.secondRowIsSelected(), 'Second row is not selected');

  this.clickOnRow(1);
  assert.notOk(this.firstRowIsSelected(), 'First row is not selected');
  assert.ok(this.secondRowIsSelected(), 'Second row is selected');

});

test('row-expand should trigger select/deselect row', function (assert) {

  let columns = generateColumns(['index']);
  columns = [{
    template: 'components/models-table/expand-row-cell',
    mayBeHidden: false
  }, ...columns];
  this.setProperties({
    columns: columns,
    expandedRowTemplate: 'custom/expanded-row',
    data: generateContent(30, 1)
  });

  this.render(hbs`{{models-table data=data columns=columns expandedRowTemplate=expandedRowTemplate}}`);

  this.expandFirstRow();
  this.clickOnRow(0);
  assert.ok(this.firstRowIsExpanded(), 'First row is expanded');
  assert.ok(this.firstRowIsSelected(), 'First row is selected');

  $(selectors.tbodyFirstRowExpand).click();
  assert.notOk(this.firstRowIsSelected(), 'First row is not selected');

  $(selectors.tbodyFirstRowExpand).click();
  assert.ok(this.firstRowIsSelected(), 'First row is selected');

});

test('columns column contains original definition as a nested property', function (assert) {

  var columns = generateColumns(['index1', 'index2']);
  columns[0].templateForSortCell = 'custom/sort-cell-original-definition';
  columns[0].CustomColumString = 'custom-column-string';
  columns[0].CustomColumObject = { name: 'custom-column-object' };
  columns[0].CustomColumBool = true;
  columns[0].CustomColumNumber = 1;

  this.setProperties({
    columns: columns,
    data: generateContent(10, 1)
  });
  this.render(hbs`{{models-table columns=columns data=data multipleColumnsSorting=false}}`);

  assert.equal(
    this.getEachAsString(selectors.theadFirstRowFirstCell),
    'custom-column-string|custom-column-object|true|1',
    'Custom column properties present in originalDefinition property in processedColumns');
});

test('rows may be preselected with `preselectedItems`', function (assert) {
  var data = generateContent(30, 1);
  this.setProperties({
    columns: generateColumns(['index1', 'index2']),
    data: data,
    preselectedItems: data.filter((itemn, index) => index % 2 === 0)
  });

  this.render(hbs`{{models-table data=data columns=columns preselectedItems=preselectedItems}}`);

  assert.equal(this.getAllSelectedRows(), 5, 'Rows are initially selected correctly');

  this.clickOnRow(1);
  assert.equal(this.getAllSelectedRows(), 6, 'One more row become selected');

  this.clickOnRow(0);
  assert.equal(this.getAllSelectedRows(), 5, 'One row become deselected');
});