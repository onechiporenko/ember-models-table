import {
  moduleForComponent,
    test
} from 'ember-qunit';
import { generateContent, generateColumns } from '../../helpers/f';
import Ember from 'ember';
import resolver from '../../helpers/resolver';

var component;

moduleForComponent('models-table', 'ModelsTable', {

  needs: ['helper:object-property', 'helper:is-equal'],

  setup: function () {
    this.registry.register('template:custom/test', resolver.resolve('template:custom/test'));
    this.registry.register('template:custom/action', resolver.resolve('template:custom/action'));
    this.registry.register('template:custom/pagination', resolver.resolve('template:custom/pagination'));
    this.registry.register('template:components/models-table/simple-pagination', resolver.resolve('template:components/models-table/simple-pagination'));
  }

});

test('summary', function (assert) {

  var self = this;
  component = this.subject();
  assert.equal(component.get('summary'), 'Show 0 - 0 of 0', 'Empty content');

  Ember.A([
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
    Ember.run(function () {
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

  Ember.run(function () {
    component.set('currentPageNumber', 2);
  });
  assert.equal(component.get('gotoBackEnabled'), true, 'Disabled, if user isn\'t on the 1st page');

});

test('gotoForwardEnabled', function (assert) {

  component =  this.subject();
  Ember.A([
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
    Ember.run(function () {
      component.setProperties(test.c);
    });
    assert.equal(component.get('gotoForwardEnabled'), test.e, test.m);
  });

});

test('visibleContent', function (assert) {

  component =  this.subject();
  Ember.A([
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
    Ember.run(function () {
      component.setProperties(test.c);
      component.set('currentPageNumber', test.c.currentPageNumber); // after observers
    });
    assert.deepEqual(Ember.A(component.get('visibleContent')).mapBy('index'), test.e, test.m);
  });

});

test('pageSizeObserver', function (assert) {

  component = this.subject();
  assert.equal(component.get('currentPageNumber'), 1, 'init value');
  Ember.run(function () {
    component.set('currentPageNumber', 2);
  });
  assert.equal(component.get('currentPageNumber'), 2, 'value changed by user');
  Ember.run(function () {
    component.set('pageSize', 25);
  });
  assert.equal(component.get('currentPageNumber'), 1, 'value restored to 1');

});

test('basic render', function (assert) {

  component = this.subject();
  Ember.run(function () {
    component.setProperties({
      columns: generateColumns(['index', 'reversedIndex']),
      data: generateContent(10, 1)
    });
    component.trigger('init');
  });
  this.render();

  assert.equal(this.$().find('table').length, 1, 'Table exists');
  assert.equal(this.$().find('tbody tr').length, 10, 'Table has 10 rows');
  assert.equal(this.$().find('.table-summary').text().trim(), 'Show 1 - 10 of 10', 'Summary is valid');
  assert.deepEqual(this.$().find('.table-nav a').map((index, link) => $(link).prop('class')).get(), ['disabled', 'disabled', 'disabled', 'disabled'], 'All navigation buttons are disabled');
  assert.deepEqual(this.$().find('tbody tr td:nth-child(1)').map((index, cell) => $(cell).text().trim()).get(), ['1','2','3','4','5','6','7','8','9','10'], 'Content is valid');

});

test('basic render with data update', function (assert) {

  component = this.subject();
  var data = generateContent(10, 1);
  Ember.run(function () {
    component.setProperties({
      columns: generateColumns(['index', 'reversedIndex']),
      data: data
    });
    component.trigger('init');
  });
  this.render();

  assert.equal(this.$().find('table').length, 1, 'Table exists');
  assert.equal(this.$().find('tbody tr').length, 10, 'Table has 10 rows');
  assert.equal(this.$().find('.table-summary').text().trim(), 'Show 1 - 10 of 10', 'Summary is valid');
  assert.deepEqual(this.$().find('.table-nav a').map((index, link) => $(link).prop('class')).get(), ['disabled', 'disabled', 'disabled', 'disabled'], 'All navigation buttons are disabled');
  assert.deepEqual(this.$().find('tbody tr td:nth-child(1)').map((index, cell) => $(cell).text().trim()).get(), ['1','2','3','4','5','6','7','8','9','10'], 'Content is valid');

  Ember.run(function () {
    Ember.set(data[0], 'index', 11);
  });
  assert.deepEqual(this.$().find('tbody tr td:nth-child(1)').map((index, cell) => $(cell).text().trim()).get(), ['11','2','3','4','5','6','7','8','9','10'], 'Content is valid after update');

  Ember.run(function () {
    Ember.set(data[0], 'index', 12);
  });
  assert.deepEqual(this.$().find('tbody tr td:nth-child(1)').map((index, cell) => $(cell).text().trim()).get(), ['12','2','3','4','5','6','7','8','9','10'], 'Content is valid after second update');

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
  Ember.run(function () {
    component.setProperties({
      columns: generateColumns(['index', 'reversedIndex']),
      data: generateContent(20, 1)
    });
    component.trigger('init');
  });
  this.render();

  assert.deepEqual(this.$().find('.table-nav a').map((index, link) => $(link).prop('class')).get(), ['disabled', 'disabled', 'enabled', 'enabled'], '2 navigation buttons are disabled and 2 aren\'t');
  assert.equal(this.$().find('.table-summary').text().trim(), 'Show 1 - 10 of 20', 'Summary is valid');

  Ember.run(function () {
    component.send('gotoNext');
  });
  assert.deepEqual(this.$().find('tbody tr td:nth-child(1)').map((index, cell) => $(cell).text().trim()).get(), ['11','12','13','14','15','16','17','18','19','20'], 'Content is valid');
  assert.deepEqual(this.$().find('.table-nav a').map((index, link) => $(link).prop('class')).get(), ['enabled', 'enabled', 'disabled', 'disabled'], '2 navigation buttons are disabled and 2 aren\'t');

});

test('render cell with html', function (assert) {

  component = this.subject();
  Ember.run(function () {
    var columns = generateColumns(['index', 'indexWithHtml']);
    columns[1].isHtml = false;
    component.setProperties({
      data: generateContent(20, 1),
      columns: columns
    });
    component.trigger('init');
  });
  this.render();
  assert.deepEqual(this.$().find('tbody tr td:nth-child(2)').map((index, cell) => $(cell).html().trim()).get(), Ember.A(['1','2','3','4','5','6','7','8','9','10']).map(v => `&lt;i&gt;${v}&lt;/i&gt;`), 'Content is valid');

});

test('render custom template (file)', function (assert) {

  component = this.subject();
  Ember.run(function () {
    var columns = generateColumns(['index', 'indexWithHtml']);
    columns[1].template = 'custom/test';
    component.setProperties({
      data: generateContent(10, 1),
      columns: columns
    });
    component.trigger('init');
  });
  this.render();
  assert.deepEqual(this.$().find('tbody tr td:nth-child(2)').map((index, cell) => $(cell).html().trim()).get(), Ember.A(['1+10','2+9','3+8','4+7','5+6','6+5','7+4','8+3','9+2','10+1']), 'Content is valid');

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
    Ember.run(function () {
      component.setProperties({
        data: generateContent(10, 1),
        columns: generateColumns(['index']),
        currentPageNumber: test.currentPageNumber,
        pageSize: 1
      });
    });
    assert.deepEqual(component.get('visiblePageNumbers'), test.visiblePageNumbers, `10 pages, active is ${test.currentPageNumber}`);
  });

  Ember.run(function () {
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
  Ember.run(function () {
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

  component = this.subject();
  Ember.run(function () {
    component.setProperties({
      columns: generateColumns(['index', 'reversedIndex']),
      data: generateContent(10, 1)
    });
    component.trigger('init');
  });
  this.render();

  assert.equal(this.$().find('thead tr:eq(0) td').length, 2, '2 columns are shown (thead)');
  assert.equal(this.$().find('thead tr:eq(1) td').length, 2, '2 columns are shown (thead)');
  assert.equal(this.$().find('tbody tr:eq(0) td').length, 2, '2 columns are shown (tbody)');

  Ember.run(function () {
    component.send('toggleHidden', component.get('columns.firstObject'));
  });

  assert.equal(this.$().find('thead tr:eq(0) td').length, 1, '1 column is shown (thead)');
  assert.equal(this.$().find('thead tr:eq(1) td').length, 1, '1 column is shown (thead)');
  assert.equal(this.$().find('tbody tr:eq(0) td').length, 1, '1 column is shown (tbody)');
  assert.equal(this.$().find('thead tr td:eq(0)').text().trim(), 'reversedIndex', 'Valid column is shown (thead)');

  Ember.run(function () {
    component.send('toggleHidden', component.get('columns.firstObject'));
  });

  assert.equal(this.$().find('thead tr:eq(0) td').length, 2, '2 columns are shown (thead)');
  assert.equal(this.$().find('tbody tr:eq(0) td').length, 2, '2 columns are shown (tbody)');

  Ember.run(function () {
    component.send('toggleHidden', component.get('columns.lastObject'));
  });
  assert.equal(this.$().find('thead tr:eq(0) td').length, 1, '1 column is shown (thead)');
  assert.equal(this.$().find('tbody tr:eq(0) td').length, 1, '1 column is shown (tbody)');
  assert.equal(this.$().find('thead tr td:eq(0)').text().trim(), 'index', 'Valid column is shown (thead)');

  Ember.run(function () {
    component.send('toggleHidden', component.get('columns.firstObject'));
  });

  assert.equal(this.$().find('tbody tr').length, 1, '1 row is shown when all columns are hidden');
  assert.equal(this.$().find('tbody tr td').length, 1, 'with 1 cell');
  assert.equal(this.$().find('tbody tr td').attr('colspan'), component.get('columns.length'), 'it\'s colspan is equal to the columns count');
  assert.equal(this.$().find('tbody tr td').text().trim(), this.$('<div/>').html(component.get('messages.allColumnsAreHidden')).text(), 'correct message is shown');

});

test('render show/hide all columns', function(assert) {
  component = this.subject();
  Ember.run(function () {
    component.setProperties({
      columns: generateColumns(['index', 'reversedIndex']),
      data: generateContent(10, 1)
    });
    component.trigger('init');
  });
  this.render();

  assert.equal(this.$().find('thead tr:eq(0) td').length, 2, '2 columns are shown (thead)');
  assert.equal(this.$().find('thead tr:eq(1) td').length, 2, '2 columns are shown (thead)');
  assert.equal(this.$().find('tbody tr:eq(0) td').length, 2, '2 columns are shown (tbody)');

  Ember.run(function () {
    component.send('hideAllColumns');
  });

  assert.equal(this.$().find('tbody tr').length, 1, '1 row is shown when all columns are hidden');
  assert.equal(this.$().find('tbody tr td').length, 1, 'with 1 cell');
  assert.equal(this.$().find('tbody tr td').attr('colspan'), component.get('columns.length'), 'it\'s colspan is equal to the columns count');
  assert.equal(this.$().find('tbody tr td').text().trim(), this.$('<div/>').html(component.get('messages.allColumnsAreHidden')).text(), 'correct message is shown');

  Ember.run(function () {
    component.send('showAllColumns');
  });

  assert.equal(this.$().find('thead tr:eq(0) td').length, 2, '2 columns are shown (thead)');
  assert.equal(this.$().find('thead tr:eq(1) td').length, 2, '2 columns are shown (thead)');
  assert.equal(this.$().find('tbody tr:eq(0) td').length, 2, '2 columns are shown (tbody)');

});

test('global filtering', function(assert) {

  component = this.subject();
  Ember.run(function () {
    var columns = generateColumns(['index', 'reversedIndex']);
    columns[1].template = 'custom/test';
    component.setProperties({
      columns: columns,
      data: generateContent(10, 1)
    });
    component.trigger('init');
  });
  this.render();

  Ember.run(function () {
    component.set('filterString', '1');
  });

  assert.deepEqual(this.$().find('tbody tr td:nth-child(1)').map((index, cell) => $(cell).text().trim()).get(), ['1','10'], 'Content is filtered correctly');

  Ember.run(function () {
    component.set('filterString', '');
  });

  assert.deepEqual(this.$().find('tbody tr td:nth-child(1)').map((index, cell) => $(cell).text().trim()).get(), ['1','2', '3', '4', '5', '6','7', '8', '9', '10'], 'Filter is empty and all rows are shown');

  Ember.run(function () {
    component.set('filterString', 'invalid input');
  });

  assert.equal(this.$().find('tbody tr td:nth-child(1)').text().trim(), component.get('messages.noDataToShow'), 'All rows are filtered out and proper message is shown');

});

test('filtering by columns', function (assert) {

  component = this.subject();
  Ember.run(function () {
    var columns = generateColumns(['index', 'reversedIndex']);
    columns[1].template = 'custom/test';
    component.setProperties({
      columns: columns,
      data: generateContent(10, 1)
    });
    component.trigger('init');
  });
  this.render();

  Ember.run(function () {
    component.set('columns.firstObject.filterString', '1');
  });

  assert.deepEqual(this.$().find('tbody tr td:nth-child(1)').map((index, cell) => $(cell).text().trim()).get(), ['1','10'], 'Content is filtered correctly');

  Ember.run(function () {
    component.set('columns.firstObject.filterString', '');
  });

  assert.deepEqual(this.$().find('tbody tr td:nth-child(1)').map((index, cell) => $(cell).text().trim()).get(), ['1','2', '3', '4', '5', '6','7', '8', '9', '10'], 'Filter is empty and all rows are shown');

  Ember.run(function () {
    component.set('columns.firstObject.filterString', 'invalid input');
  });

  assert.equal(this.$().find('tbody tr td:nth-child(1)').text().trim(), component.get('messages.noDataToShow'), 'All rows are filtered out and proper message is shown');

  Ember.run(function () {
    component.set('useFilteringByColumns', false);
  });

  assert.deepEqual(this.$().find('tbody tr td:nth-child(1)').map((index, cell) => $(cell).text().trim()).get(), ['1','2', '3', '4', '5', '6','7', '8', '9', '10'], 'Filtering by columns is ignored');
  assert.equal(this.$().find('thead input').length, 0, 'Columns filters are hidden');

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

  Ember.run(function () {
    component.setProperties({
      columns: generateColumns(['index', 'reversedIndex']),
      data: generateContent(10, 1),
      customMessages: messages
    });
    component.trigger('init');
  });
  this.render();

  assert.equal(this.$().find('.table-summary').text().trim(), Ember.String.fmt(messages.tableSummary, 1, 10, 10), 'Summary is valid');
  assert.equal(this.$().find('.columns-dropdown button').text().trim(), messages['columns-title'], 'Columns-dropdown title is valid');
  assert.equal(this.$().find('.columns-dropdown .dropdown-menu li:eq(0)').text().trim(), messages['columns-showAll'], 'Columns-dropdown "showAll" is valid');
  assert.equal(this.$().find('.columns-dropdown .dropdown-menu li:eq(1)').text().trim(), messages['columns-hideAll'], 'Columns-dropdown "hideAll" is valid');
  assert.equal(this.$().find('.columns-dropdown .dropdown-menu li:eq(2)').text().trim(), messages['columns-restoreDefaults'], 'Columns-dropdown "restoreDefaults" is valid');
  assert.equal(this.$().find('.globalSearch label').text().trim(), messages.searchLabel, 'Global-search label is valid');

  Ember.run(function () {
    component.send('hideAllColumns');
  });

  assert.equal(this.$().find('tbody tr td').text().trim(), messages.allColumnsAreHidden, 'Message about all hidden columns is valid');

  Ember.run(function () {
    component.send('showAllColumns');
    component.set('filterString', 'invalid string');
  });

  assert.equal(this.$().find('tbody tr td:nth-child(1)').text().trim(), messages.noDataToShow, 'Message about no data is valid');

});

test('columns column cell classes', function (assert) {

  component = this.subject();
  Ember.run(function () {
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
