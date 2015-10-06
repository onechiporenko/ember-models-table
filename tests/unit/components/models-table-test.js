import {
  moduleForComponent,
    test
} from 'ember-qunit';
import { generateContent, generateColumns } from '../../helpers/f';
import Ember from 'ember';
import resolver from '../../helpers/resolver';

var component;

const {
  set,
  run,
  A
} = Ember;

let selectors = {
  firstColumn: 'tbody tr td:nth-child(1)',
  secondColumn: 'tbody tr td:nth-child(2)',
  allRows: 'tbody tr',
  summary: '.table-summary',
  navigationLinks: '.table-nav a',
  theadSecondRowCells: 'thead tr:eq(1) td',
  theadFirstRowFirstCell: 'thead tr td:eq(0)',
  theadFirstRowSecondCell: 'thead tr td:eq(1)',
  theadFirstRowCells: 'thead tr:eq(0) td',
  tbodyFirstRowCells: 'tbody tr:eq(0) td',
  tbodyAllCells: 'tbody tr td'
};

moduleForComponent('models-table', 'ModelsTable', {

  needs: ['helper:object-property', 'helper:is-equal'],

  setup: function () {
    this.registry.register('template:custom/test', resolver.resolve('template:custom/test'));
    this.registry.register('template:custom/action', resolver.resolve('template:custom/action'));
    this.registry.register('template:custom/pagination', resolver.resolve('template:custom/pagination'));
    this.registry.register('template:components/models-table/simple-pagination', resolver.resolve('template:components/models-table/simple-pagination'));
    this.registry.register('template:components/models-table/numeric-pagination', resolver.resolve('template:components/models-table/numeric-pagination'));
    this.registry.register('template:components/models-table/table-footer', resolver.resolve('template:components/models-table/table-footer'));
    this.registry.register('template:components/models-table/global-filter', resolver.resolve('template:components/models-table/global-filter'));
    this.registry.register('template:components/models-table/columns-dropdown', resolver.resolve('template:components/models-table/columns-dropdown'));
  }

});

test('summary', function (assert) {

  var self = this;
  component = this.subject();
  assert.equal(component.get('summary'), 'Show 0 - 0 of 0', 'Empty content');

  A([
    {
      c: {
        data: generateContent(10),
        pageSize: 10,
        currentPageNumber: 1
      },
      e: 'Show 1 - 10 of 10',
      m: 'Content for 1 page'
    },
    {
      c: {
        data: generateContent(15),
        pageSize: 10,
        currentPageNumber: 2
      },
      e: 'Show 11 - 15 of 15',
      m: 'Content for 2 pages. Last page selected'
    },
    {
      c: {
        data: generateContent(35),
        pageSize: 10,
        currentPageNumber: 2
      },
      e: 'Show 11 - 20 of 35',
      m: 'Content for 4 pages. Middle page selected'
    }
  ]).forEach((test) => {
    run(function () {
      component = self.subject();
      component.setProperties(test.c);
      component.trigger('init');
    });
    self.render();
    assert.equal(component.get('summary'), test.e, test.m);
  });

});

test('gotoBackEnabled', function (assert) {

  component = this.subject({
    currentPageNumber: 1
  });
  assert.equal(component.get('gotoBackEnabled'), false, 'Disabled, if user is on the 1st page');

  run(function () {
    component.set('currentPageNumber', 2);
  });
  assert.equal(component.get('gotoBackEnabled'), true, 'Disabled, if user isn\'t on the 1st page');

});

test('gotoForwardEnabled', function (assert) {

  component =  this.subject();
  A([
    {
      c: {
        data: generateContent(10),
        pageSize: 10,
        currentPageNumber: 1
      },
      e: false,
      m: 'One page only'
    },
    {
      c: {
        data: generateContent(11),
        pageSize: 10,
        currentPageNumber: 1
      },
      e: true,
      m: 'One page + 1 record more'
    },
    {
      c: {
        data: generateContent(25),
        pageSize: 10,
        currentPageNumber: 3
      },
      e: false,
      m: 'Three pages, last one selected'
    }
  ]).forEach(function (test) {
    run(function () {
      component.setProperties(test.c);
    });
    assert.equal(component.get('gotoForwardEnabled'), test.e, test.m);
  });

});

test('visibleContent', function (assert) {

  component =  this.subject();
  A([
    {
      c: {
        data: generateContent(10),
        pageSize: 10,
        currentPageNumber: 1
      },
      e: generateContent(10).mapBy('index'),
      m: 'One page'
    },
    {
      c: {
        data: generateContent(25, 1),
        pageSize: 10,
        currentPageNumber: 2
      },
      e: generateContent(10, 11).mapBy('index'),
      m: 'Second page'
    },
    {
      c: {
        data: generateContent(25, 1),
        pageSize: 50,
        currentPageNumber: 1
      },
      e: generateContent(25, 1).mapBy('index'),
      m: 'One big page'
    },
    {
      c: {
        data: generateContent(25, 1),
        pageSize: 10,
        currentPageNumber: 3
      },
      e: generateContent(5, 21).mapBy('index'),
      m: 'Last page'
    }
  ]).forEach(function (test) {
    run(function () {
      component.setProperties(test.c);
      component.set('currentPageNumber', test.c.currentPageNumber); // after observers
    });
    assert.deepEqual(A(component.get('visibleContent')).mapBy('index'), test.e, test.m);
  });

});

test('pageSizeObserver', function (assert) {

  component = this.subject();
  assert.equal(component.get('currentPageNumber'), 1, 'init value');
  run(function () {
    component.set('currentPageNumber', 2);
  });
  assert.equal(component.get('currentPageNumber'), 2, 'value changed by user');
  run(function () {
    component.set('pageSize', 25);
  });
  assert.equal(component.get('currentPageNumber'), 1, 'value restored to 1');

});

test('basic render', function (assert) {

  component = this.subject();
  run(function () {
    component.setProperties({
      columns: generateColumns(['index', 'reversedIndex']),
      data: generateContent(10, 1)
    });
    component.trigger('init');
  });
  this.render();

  assert.equal(this.$().find('table').length, 1, 'Table exists');
  assert.equal(this.$().find(selectors.allRows).length, 10, 'Table has 10 rows');
  assert.equal(this.$().find(selectors.summary).text().trim(), 'Show 1 - 10 of 10', 'Summary is valid');
  assert.deepEqual(this.$().find(selectors.navigationLinks).map((index, link) => $(link).prop('class')).get(), ['disabled', 'disabled', 'disabled', 'disabled'], 'All navigation buttons are disabled');
  assert.equal(this.$().find(selectors.firstColumn).map((index, cell) => $(cell).text().trim()).get().join(''), '12345678910', 'Content is valid');

});

test('basic render with data update', function (assert) {

  component = this.subject();
  var data = generateContent(10, 1);
  run(function () {
    component.setProperties({
      columns: generateColumns(['index', 'reversedIndex']),
      data: data
    });
    component.trigger('init');
  });
  this.render();

  assert.equal(this.$().find('table').length, 1, 'Table exists');
  assert.equal(this.$().find(selectors.allRows).length, 10, 'Table has 10 rows');
  assert.equal(this.$().find(selectors.summary).text().trim(), 'Show 1 - 10 of 10', 'Summary is valid');
  assert.deepEqual(this.$().find(selectors.navigationLinks).map((index, link) => $(link).prop('class')).get(), ['disabled', 'disabled', 'disabled', 'disabled'], 'All navigation buttons are disabled');
  assert.equal(this.$().find(selectors.firstColumn).map((index, cell) => $(cell).text().trim()).get().join(''), '12345678910', 'Content is valid');

  run(function () {
    set(data[0], 'index', 11);
  });
  assert.equal(this.$().find(selectors.firstColumn).map((index, cell) => $(cell).text().trim()).get().join(''), '112345678910', 'Content is valid after update');

  run(function () {
    set(data[0], 'index', 12);
  });
  assert.equal(this.$().find(selectors.firstColumn).map((index, cell) => $(cell).text().trim()).get().join(''), '122345678910', 'Content is valid after second update');

});

test('render without footer', function (assert) {

  component = this.subject({
    showTableFooter: false
  });
  this.render();

  assert.equal(this.$().find('.table-footer').length, 0, 'table footer isn\'t rendered');

});

test('render multi-pages table', function (assert) {

  component = this.subject();
  run(function () {
    component.setProperties({
      columns: generateColumns(['index', 'reversedIndex']),
      data: generateContent(20, 1)
    });
    component.trigger('init');
  });
  this.render();

  assert.deepEqual(this.$().find(selectors.navigationLinks).map((index, link) => $(link).prop('class')).get(), ['disabled', 'disabled', 'enabled', 'enabled'], '2 navigation buttons are disabled and 2 aren\'t');
  assert.equal(this.$().find(selectors.summary).text().trim(), 'Show 1 - 10 of 20', 'Summary is valid');

  run(function () {
    component.send('gotoNext');
  });
  assert.deepEqual(this.$().find(selectors.firstColumn).map((index, cell) => $(cell).text().trim()).get(), ['11','12','13','14','15','16','17','18','19','20'], 'Content is valid');
  assert.deepEqual(this.$().find(selectors.navigationLinks).map((index, link) => $(link).prop('class')).get(), ['enabled', 'enabled', 'disabled', 'disabled'], '2 navigation buttons are disabled and 2 aren\'t');

});

test('render cell with html', function (assert) {

  component = this.subject();
  run(function () {
    var columns = generateColumns(['index', 'indexWithHtml']);
    columns[1].isHtml = false;
    component.setProperties({
      data: generateContent(20, 1),
      columns: columns
    });
    component.trigger('init');
  });
  this.render();
  assert.deepEqual(this.$().find(selectors.secondColumn).map((index, cell) => $(cell).html().trim()).get(), A(['1','2','3','4','5','6','7','8','9','10']).map(v => `&lt;i&gt;${v}&lt;/i&gt;`), 'Content is valid');

});

test('render custom template (file)', function (assert) {

  component = this.subject();
  run(function () {
    var columns = generateColumns(['index', 'indexWithHtml']);
    columns[1].template = 'custom/test';
    component.setProperties({
      data: generateContent(10, 1),
      columns: columns
    });
    component.trigger('init');
  });
  this.render();
  assert.deepEqual(this.$().find(selectors.secondColumn).map((index, cell) => $(cell).html().trim()).get(), A(['1+10','2+9','3+8','4+7','5+6','6+5','7+4','8+3','9+2','10+1']), 'Content is valid');

});

test('render custom simple pagination', function (assert) {

  component = this.subject({
    simplePaginationTemplate: 'custom/pagination'
  });
  this.render();
  assert.equal(this.$().find('.table-nav').text().trim().replace(/\s+/g, ' '), 'F P N L', 'Custom labels are used');

});

test('visiblePageNumbers', function (assert) {

  component = this.subject();

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
    run(function () {
      component.setProperties({
        data: generateContent(10, 1),
        columns: generateColumns(['index']),
        currentPageNumber: test.currentPageNumber,
        pageSize: 1
      });
    });
    assert.deepEqual(component.get('visiblePageNumbers'), test.visiblePageNumbers, `10 pages, active is ${test.currentPageNumber}`);
  });

  run(function () {
    component.setProperties({
      data: generateContent(10, 1),
      pageSize: 10
    });
  });
  assert.deepEqual(component.get('visiblePageNumbers'), [{label:1,isLink:true,isActive:true}], 'Only 1 page');

});

test('sendAction can trigger actions outside the component', function (assert) {
  assert.expect(1);

  component = this.subject();
  run(function () {
    var columns = generateColumns(['index', 'indexWithHtml']);
    columns[1].template = 'custom/action';
    component.setProperties({
      data: generateContent(10, 1),
      columns: columns
    });
    component.trigger('init');
  });
  this.render();

  var targetObject = {
    externalAction: function() {
      assert.ok(true, 'external Action was called!');
    }
  };

  component.set('action', 'externalAction');
  component.set('targetObject', targetObject);

  this.$().find('.action').first().click();
});

test('render show/hide columns', function (assert) {

  var firstColumnIconSelector = '.columns-dropdown li:nth-child(5) a span';
  var secondColumnIconSelector = '.columns-dropdown li:nth-child(6) a span';
  var checkedClass = 'glyphicon-check';
  var uncheckedClass = 'glyphicon-unchecked';
  component = this.subject();
  run(function () {
    component.setProperties({
      columns: generateColumns(['index', 'reversedIndex']),
      data: generateContent(10, 1)
    });
    component.trigger('init');
  });
  this.render();

  assert.equal(this.$().find(selectors.theadFirstRowCells).length, 2, '2 columns are shown (thead)');
  assert.equal(this.$().find(selectors.theadSecondRowCells).length, 2, '2 columns are shown (thead)');
  assert.equal(this.$().find(selectors.tbodyFirstRowCells).length, 2, '2 columns are shown (tbody)');

  run(function () {
    component.send('toggleHidden', component.get('processedColumns.firstObject'));
  });

  assert.equal(this.$().find(selectors.theadFirstRowCells).length, 1, '1 column is shown (thead)');
  assert.equal(this.$().find(selectors.theadSecondRowCells).length, 1, '1 column is shown (thead)');
  assert.equal(this.$().find(selectors.tbodyFirstRowCells).length, 1, '1 column is shown (tbody)');
  assert.equal(this.$().find(selectors.theadFirstRowFirstCell).text().trim(), 'reversedIndex', 'Valid column is shown (thead)');
  assert.equal(this.$().find(firstColumnIconSelector).hasClass(uncheckedClass), true, 'First column is unchecked');
  assert.equal(this.$().find(secondColumnIconSelector).hasClass(checkedClass), true, 'Second column is checked');

  run(function () {
    component.send('toggleHidden', component.get('processedColumns.firstObject'));
  });

  assert.equal(this.$().find(selectors.theadFirstRowCells).length, 2, '2 columns are shown (thead)');
  assert.equal(this.$().find(selectors.tbodyFirstRowCells).length, 2, '2 columns are shown (tbody)');
  assert.equal(this.$().find(firstColumnIconSelector).hasClass(checkedClass), true, 'First column is checked');
  assert.equal(this.$().find(secondColumnIconSelector).hasClass(checkedClass), true, 'Second column is checked');

  run(function () {
    component.send('toggleHidden', component.get('processedColumns.lastObject'));
  });
  assert.equal(this.$().find(selectors.theadFirstRowCells).length, 1, '1 column is shown (thead)');
  assert.equal(this.$().find(selectors.tbodyFirstRowCells).length, 1, '1 column is shown (tbody)');
  assert.equal(this.$().find(selectors.theadFirstRowFirstCell).text().trim(), 'index', 'Valid column is shown (thead)');
  assert.equal(this.$().find(firstColumnIconSelector).hasClass(checkedClass), true, 'First column is checked');
  assert.equal(this.$().find(secondColumnIconSelector).hasClass(uncheckedClass), true, 'Second column is unchecked');

  run(function () {
    component.send('toggleHidden', component.get('processedColumns.firstObject'));
  });

  assert.equal(this.$().find(selectors.allRows).length, 1, '1 row is shown when all columns are hidden');
  assert.equal(this.$().find(selectors.tbodyAllCells).length, 1, 'with 1 cell');
  assert.equal(this.$().find(selectors.tbodyAllCells).attr('colspan'), component.get('columns.length'), 'it\'s colspan is equal to the columns count');
  assert.equal(this.$().find(selectors.tbodyAllCells).text().trim(), this.$('<div/>').html(component.get('messages.allColumnsAreHidden')).text(), 'correct message is shown');
  assert.equal(this.$().find(firstColumnIconSelector).hasClass(uncheckedClass), true, 'First column is unchecked');
  assert.equal(this.$().find(secondColumnIconSelector).hasClass(uncheckedClass), true, 'Second column is unchecked');

});

test('render show/hide all columns', function(assert) {
  component = this.subject();
  run(function () {
    component.setProperties({
      columns: generateColumns(['index', 'reversedIndex']),
      data: generateContent(10, 1)
    });
    component.trigger('init');
  });
  this.render();

  assert.equal(this.$().find(selectors.theadFirstRowCells).length, 2, '2 columns are shown (thead)');
  assert.equal(this.$().find(selectors.theadSecondRowCells).length, 2, '2 columns are shown (thead)');
  assert.equal(this.$().find(selectors.tbodyFirstRowCells).length, 2, '2 columns are shown (tbody)');

  run(function () {
    component.send('hideAllColumns');
  });

  assert.equal(this.$().find(selectors.allRows).length, 1, '1 row is shown when all columns are hidden');
  assert.equal(this.$().find(selectors.tbodyAllCells).length, 1, 'with 1 cell');
  assert.equal(this.$().find(selectors.tbodyAllCells).attr('colspan'), component.get('columns.length'), 'it\'s colspan is equal to the columns count');
  assert.equal(this.$().find(selectors.tbodyAllCells).text().trim(), this.$('<div/>').html(component.get('messages.allColumnsAreHidden')).text(), 'correct message is shown');

  run(function () {
    component.send('showAllColumns');
  });

  assert.equal(this.$().find(selectors.theadFirstRowCells).length, 2, '2 columns are shown (thead)');
  assert.equal(this.$().find(selectors.theadSecondRowCells).length, 2, '2 columns are shown (thead)');
  assert.equal(this.$().find(selectors.tbodyFirstRowCells).length, 2, '2 columns are shown (tbody)');

});

test('render columns-dropdown with mayBeHidden = false for some columns', function (assert) {

  component = this.subject();
  run(function () {
    let columns = generateColumns(['index', 'reversedIndex']);
    columns[0].mayBeHidden = false;
    component.setProperties({
      columns: columns,
      data: generateContent(10, 1)
    });
    component.trigger('init');
  });
  this.render();
  let messages = component.get('messages');
  assert.equal(this.$().find('.columns-dropdown li a').text().trim().replace(/\s+/g, ''), (messages['columns-showAll'] + messages['columns-hideAll'] + messages['columns-restoreDefaults'] + 'reversedIndex').replace(/\s+/g, ''), 'Column with mayBeHidden = false is not shown in the columns dropdown');

  run(function () {
    component.send('toggleHidden', component.get('processedColumns.firstObject'));
  });

  assert.equal(this.$().find(selectors.theadFirstRowCells).length, 2, '2 columns are shown (thead)');
  assert.equal(this.$().find(selectors.theadSecondRowCells).length, 2, '2 columns are shown (thead)');
  assert.equal(this.$().find(selectors.tbodyFirstRowCells).length, 2, '2 columns are shown (tbody)');
  assert.equal(this.$().find(selectors.theadFirstRowCells).text().trim().replace(/\s+/g,''), 'indexreversedIndex', 'Valid columns are shown (thead)');

});

test('global filtering (ignore case OFF)', function(assert) {

  component = this.subject();
  run(function () {
    var columns = generateColumns(['index', 'reversedIndex']);
    columns[1].template = 'custom/test';
    component.setProperties({
      columns: columns,
      data: generateContent(10, 1)
    });
    component.trigger('init');
  });
  this.render();

  run(function () {
    component.set('filterString', '1');
  });

  assert.deepEqual(this.$().find(selectors.firstColumn).map((index, cell) => $(cell).text().trim()).get(), ['1','10'], 'Content is filtered correctly');

  run(function () {
    component.set('filterString', '');
  });

  assert.equal(this.$().find(selectors.firstColumn).map((index, cell) => $(cell).text().trim()).get().join(''), '12345678910', 'Filter is empty and all rows are shown');

  run(function () {
    component.set('filterString', 'invalid input');
  });

  assert.equal(this.$().find(selectors.firstColumn).text().trim(), component.get('messages.noDataToShow'), 'All rows are filtered out and proper message is shown');

});

test('global filtering (ignore case ON)', function(assert) {

  component = this.subject();
  run(function () {
    var columns = generateColumns(['index', 'someWord']);
    component.setProperties({
      filteringIgnoreCase: true,
      columns: columns,
      data: generateContent(10, 1)
    });
    component.trigger('init');
  });
  this.render();

  run(function () {
    component.set('filterString', 'One');
  });

  assert.deepEqual(this.$().find(selectors.tbodyFirstRowCells).map((index, cell) => $(cell).text().trim()).get(), ['1', 'one'], 'Content is filtered correctly');

  run(function () {
    component.set('filterString', '');
  });

  assert.equal(this.$().find(selectors.firstColumn).map((index, cell) => $(cell).text().trim()).get().join(''), '12345678910', 'Filter is empty and all rows are shown');

  run(function () {
    component.set('filterString', 'invalid input');
  });

  assert.equal(this.$().find(selectors.firstColumn).text().trim(), component.get('messages.noDataToShow'), 'All rows are filtered out and proper message is shown');

});

test('filtering by columns (ignore case OFF)', function (assert) {

  component = this.subject();
  run(function () {
    var columns = generateColumns(['index', 'reversedIndex']);
    columns[1].template = 'custom/test';
    component.setProperties({
      columns: columns,
      data: generateContent(10, 1)
    });
    component.trigger('init');
  });
  this.render();

  run(function () {
    component.set('processedColumns.firstObject.filterString', '1');
  });

  assert.deepEqual(this.$().find(selectors.firstColumn).map((index, cell) => $(cell).text().trim()).get(), ['1','10'], 'Content is filtered correctly');

  run(function () {
    component.set('processedColumns.firstObject.filterString', '');
  });

  assert.equal(this.$().find(selectors.firstColumn).map((index, cell) => $(cell).text().trim()).get().join(''), '12345678910', 'Filter is empty and all rows are shown');

  run(function () {
    component.set('processedColumns.firstObject.filterString', 'invalid input');
  });

  assert.equal(this.$().find(selectors.firstColumn).text().trim(), component.get('messages.noDataToShow'), 'All rows are filtered out and proper message is shown');

  run(function () {
    component.set('useFilteringByColumns', false);
  });

  assert.equal(this.$().find(selectors.firstColumn).map((index, cell) => $(cell).text().trim()).get().join(''), '12345678910', 'Filtering by columns is ignored');
  assert.equal(this.$().find('thead input').length, 0, 'Columns filters are hidden');

});

test('filtering by columns (ignore case ON)', function (assert) {

  component = this.subject();
  run(function () {
    var columns = generateColumns(['index', 'someWord']);
    component.setProperties({
      filteringIgnoreCase: true,
      columns: columns,
      data: generateContent(10, 1)
    });
    component.trigger('init');
  });
  this.render();

  run(function () {
    component.set('processedColumns.lastObject.filterString', 'One');
  });

  assert.deepEqual(this.$().find(selectors.tbodyFirstRowCells).map((index, cell) => $(cell).text().trim()).get(), ['1','one'], 'Content is filtered correctly');

  run(function () {
    component.set('processedColumns.lastObject.filterString', '');
  });

  assert.equal(this.$().find(selectors.firstColumn).map((index, cell) => $(cell).text().trim()).get().join(''), '12345678910', 'Filter is empty and all rows are shown');

  run(function () {
    component.set('processedColumns.lastObject.filterString', 'invalid input');
  });

  assert.equal(this.$().find(selectors.firstColumn).text().trim(), component.get('messages.noDataToShow'), 'All rows are filtered out and proper message is shown');

  run(function () {
    component.set('useFilteringByColumns', false);
  });

  assert.equal(this.$().find(selectors.firstColumn).map((index, cell) => $(cell).text().trim()).get().join(''), '12345678910', 'Filtering by columns is ignored');
  assert.equal(this.$().find('thead input').length, 0, 'Columns filters are hidden');

});

test('filtering with filterWithSelect (without predefinedFilterOptions)', function (assert) {

  component = this.subject();

  let selectSelector = `${selectors.theadSecondRowCells}:eq(1) select`;

  let columns = generateColumns(['index', 'someWord']);
  columns[1].filterWithSelect = true;
  let data = generateContent(10, 1);
  data[data.length - 1].someWord = '';
  let concatenatedWords = data.mapBy('someWord').join('');
  var self = this;
  run(function () {
    component.setProperties({
      columns: columns,
      data: data
    });
    component.trigger('init');
  });
  this.render();

  assert.equal(this.$(`${selectSelector}  option`).length, 10, 'Empty data-value was excluded');
  assert.equal(this.$(`${selectSelector}  option:last-child`).text().trim(), 'nine', 'Last option is not empty string');

  assert.ok(this.$(selectSelector), 'Select-box for column with `filterWithSelect` exists');
  assert.equal(this.$(`${selectSelector}  option`).text().replace(/\s+/g, ''), concatenatedWords, 'Options for select are valid');

  run(function () {
     self.$(selectSelector).val('one');
    component.send('changeFilterForColumn', component.get('processedColumns.lastObject'));
  });

  assert.equal(this.$(selectors.allRows).length, 1, 'Only one row exist after filtering');

  run(function () {
    component.set('data', generateContent(9, 2));
    //console.log(component.get('data'));
  });

  assert.equal(this.$(selectSelector).val(), '', 'Filter is reverted to the default value');

  run(function () {
    self.$(selectSelector).val('');
    component.send('changeFilterForColumn', component.get('processedColumns.lastObject'));
  });

  assert.equal(this.$(selectors.allRows).length, 9, 'All rows are shown after clear filter');

});

test('filtering with filterWithSelect (with predefinedFilterOptions)', function (assert) {

  component = this.subject();

  let selectSelector = `${selectors.theadSecondRowCells}:eq(1) select`;

  let columns = generateColumns(['index', 'someWord']);
  columns[1].filterWithSelect = true;
  columns[1].predefinedFilterOptions = ['one', 'two'];
  let data = generateContent(10, 1);
  var self = this;
  run(function () {
    component.setProperties({
      columns: columns,
      data: data
    });
    component.trigger('init');
  });
  this.render();

  assert.ok(this.$(selectSelector), 'Select-box for column with `filterWithSelect` exists');
  assert.equal(this.$(`${selectSelector}  option`).text().replace(/\s+/g, ''), 'onetwo', 'Options for select are valid');

  run(function () {
    self.$(selectSelector).val('one');
    component.send('changeFilterForColumn', component.get('processedColumns.lastObject'));
  });

  assert.equal(this.$(selectors.allRows).length, 1, 'Only one row exist after filtering');

  run(function () {
    component.set('data', generateContent(9, 2));
    //console.log(component.get('data'));
  });

  assert.equal(this.$(selectSelector).val(), 'one', 'Filter is not reverted to the default value');
  assert.equal(this.$(`${selectSelector}  option`).text().replace(/\s+/g, ''), 'onetwo', 'Options for select are valid');

  run(function () {
    self.$(selectSelector).val('');
    component.send('changeFilterForColumn', component.get('processedColumns.lastObject'));
  });

  assert.equal(this.$(selectors.allRows).length, 9, 'All rows are shown after clear filter');

});

test('custom messages', function (assert) {

  component = this.subject();
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

  run(function () {
    component.setProperties({
      columns: generateColumns(['index', 'reversedIndex']),
      data: generateContent(10, 1),
      customMessages: messages
    });
    component.trigger('init');
  });
  this.render();

  assert.equal(this.$().find(selectors.summary).text().trim(), Ember.String.fmt(messages.tableSummary, 1, 10, 10), 'Summary is valid');
  assert.equal(this.$().find('.columns-dropdown button').text().trim(), messages['columns-title'], 'Columns-dropdown title is valid');
  assert.equal(this.$().find('.columns-dropdown .dropdown-menu li:eq(0)').text().trim(), messages['columns-showAll'], 'Columns-dropdown "showAll" is valid');
  assert.equal(this.$().find('.columns-dropdown .dropdown-menu li:eq(1)').text().trim(), messages['columns-hideAll'], 'Columns-dropdown "hideAll" is valid');
  assert.equal(this.$().find('.columns-dropdown .dropdown-menu li:eq(2)').text().trim(), messages['columns-restoreDefaults'], 'Columns-dropdown "restoreDefaults" is valid');
  assert.equal(this.$().find('.globalSearch label').text().trim(), messages.searchLabel, 'Global-search label is valid');

  run(function () {
    component.send('hideAllColumns');
  });

  assert.equal(this.$().find(selectors.tbodyAllCells).text().trim(), messages.allColumnsAreHidden, 'Message about all hidden columns is valid');

  run(function () {
    component.send('showAllColumns');
    component.set('filterString', 'invalid string');
  });

  assert.equal(this.$().find(selectors.firstColumn).text().trim(), messages.noDataToShow, 'Message about no data is valid');

});

test('columns column cell classes', function (assert) {

  component = this.subject();
  run(function () {
    var columns = generateColumns(['index', 'reversedIndex']);
    columns[0].className = 'custom-column-class';
    component.setProperties({
      columns: columns,
      data: generateContent(10, 1)
    });
    component.trigger('init');
  });
  this.render();

  assert.equal(this.$().find('.custom-column-class').length, 10, 'Custom column class exists on each column cell');

});

test('column title auto generation', function (assert) {

  component = this.subject();
  run(function () {
    var columns = generateColumns(['index', 'reversedIndex']);
    columns.setEach('title', null);
    component.setProperties({
      columns: columns,
      data: generateContent(10, 1)
    });
    component.trigger('init');
  });
  this.render();

  assert.equal(this.$().find('thead td:eq(0)').text().trim(), 'Index', 'Title for one word is correct');
  assert.equal(this.$().find('thead td:eq(1)').text().trim(), 'Reversed index', 'Title for camelCase is correct');

});

test('sorting', function (assert) {

  component = this.subject();

  run(function () {
    component.setProperties({
      columns: generateColumns(['index', 'index2']),
      data: generateContent(10, 1)
    });
    component.trigger('init');
  });
  this.render();

  run(function () {
    component.send('sort', component.get('processedColumns.firstObject'));
  });

  assert.equal(this.$().find(selectors.firstColumn).map((index, cell) => $(cell).text().trim()).get().join(''), '12345678910', 'Content is valid (sorting 1st column asc)');

  run(function () {
    component.send('sort', component.get('processedColumns.firstObject'));
  });

  assert.equal(this.$().find(selectors.firstColumn).map((index, cell) => $(cell).text().trim()).get().join(''), '10987654321', 'Content is valid (sorting 1st column desc)');

  run(function () {
    component.send('sort', component.get('processedColumns.firstObject'));
    component.send('sort', component.get('processedColumns.lastObject'));
  });

  assert.equal(this.$().find(selectors.firstColumn).map((index, cell) => $(cell).text().trim()).get().join(''), '12345678910', 'Content is valid (sorting 1st column asc) - restore defaults');
  assert.equal(this.$().find(selectors.secondColumn).map((index, cell) => $(cell).text().trim()).get().join(''), '1122334455', 'Content is valid (sorting 2nd column asc) - restore defaults');

  run(function () {
    component.send('sort', component.get('processedColumns.firstObject'));
    component.send('sort', component.get('processedColumns.firstObject'));
  });

  assert.equal(this.$().find(selectors.firstColumn).map((index, cell) => $(cell).text().trim()).get().join(''), '21436587109', 'Content is valid (sorting 1st column desc)');
  assert.equal(this.$().find(selectors.secondColumn).map((index, cell) => $(cell).text().trim()).get().join(''), '1122334455', 'Content is valid (sorting 2nd column asc)');

});