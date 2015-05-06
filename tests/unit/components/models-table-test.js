import {
  moduleForComponent,
    test
} from 'ember-qunit';
import { generateContent, generateColumns } from '../../helpers/f';
import startApp from '../../helpers/start-app';
import Ember from 'ember';

var App, component;

moduleForComponent('models-table', 'ModelsTable', {

  needs: ['helper:object-property'],

});

test('summary', function (assert) {

  component = this.subject();
  assert.equal(component.get('summary'), 'Show 0 - 0 of 0', 'Empty content');

  Ember.A([
    {
      c: {
        content: generateContent(10),
        pageSize: 10,
        currentPageNumber: 1
      },
      e: 'Show 1 - 10 of 10',
      m: 'Content for 1 page'
    },
    {
      c: {
        content: generateContent(15),
        pageSize: 10,
        currentPageNumber: 2
      },
      e: 'Show 11 - 15 of 15',
      m: 'Content for 2 pages. Last page selected'
    },
    {
      c: {
        content: generateContent(35),
        pageSize: 10,
        currentPageNumber: 2
      },
      e: 'Show 11 - 20 of 35',
      m: 'Content for 4 pages. Middle page selected'
    }
  ]).forEach((test) => {
    Ember.run(function () {
      component.setProperties(test.c);
    });
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
        content: generateContent(10),
        pageSize: 10,
        currentPageNumber: 1
      },
      e: false,
      m: 'One page only'
    },
    {
      c: {
        content: generateContent(11),
        pageSize: 10,
        currentPageNumber: 1
      },
      e: true,
      m: 'One page + 1 record more'
    },
    {
      c: {
        content: generateContent(25),
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
        content: generateContent(10),
        pageSize: 10,
        currentPageNumber: 1
      },
      e: generateContent(10).mapBy('index'),
      m: 'One page'
    },
    {
      c: {
        content: generateContent(25, 1),
        pageSize: 10,
        currentPageNumber: 2
      },
      e: generateContent(10, 11).mapBy('index'),
      m: 'Second page'
    },
    {
      c: {
        content: generateContent(25, 1),
        pageSize: 50,
        currentPageNumber: 1
      },
      e: generateContent(25, 1).mapBy('index'),
      m: 'One big page'
    },
    {
      c: {
        content: generateContent(25, 1),
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
      content: generateContent(10, 1)
    });
  });
  this.append();

  assert.equal(this.$().find('table').length, 1, 'Table exists');
  assert.equal(this.$().find('tbody tr').length, 10, 'Table has 10 rows');
  assert.equal(this.$().find('.table-summary').text().trim(), 'Show 1 - 10 of 10', 'Summary is valid');
  assert.deepEqual(this.$().find('.table-nav a').map((index, link) => $(link).prop('class')).get(), ['disabled', 'disabled', 'disabled', 'disabled'], 'All navigation buttons are disabled');
  assert.deepEqual(this.$().find('tbody tr td:nth-child(1)').map((index, cell) => $(cell).text().trim()).get(), ['1','2','3','4','5','6','7','8','9','10'], 'Content is valid');

});

test('render without footer', function (assert) {

  component = this.subject({
    showTableFooter: false
  });
  this.append();

  assert.equal(this.$().find('.table-footer').length, 0, 'table footer isn\'t rendered');

});

test('render multi-pages table', function (assert) {

  component = this.subject();
  Ember.run(function () {
    component.setProperties({
      columns: generateColumns(['index', 'reversedIndex']),
      content: generateContent(20, 1)
    });
  });
  this.append();

  assert.deepEqual(this.$().find('.table-nav a').map((index, link) => $(link).prop('class')).get(), ['disabled', 'disabled', 'enabled', 'enabled'], '2 navigation buttons are disabled and 2 aren\'t');
  assert.equal(this.$().find('.table-summary').text().trim(), 'Show 1 - 10 of 20', 'Summary is valid');

  Ember.run(function () {
    component.send('gotoNext');
  });
  assert.deepEqual(this.$().find('tbody tr td:nth-child(1)').map((index, cell) => $(cell).text().trim()).get(), ['11','12','13','14','15','16','17','18','19','20'], 'Content is valid');
  assert.deepEqual(this.$().find('.table-nav a').map((index, link) => $(link).prop('class')).get(), ['enabled', 'enabled', 'disabled', 'disabled'], '2 navigation buttons are disabled and 2 aren\'t');

});


test('render cell with html (isHtml = true)', function (assert) {

  component =this.subject();
  Ember.run(function () {
    var columns = generateColumns(['index', 'indexWithHtml']);
    columns[1].isHtml = true;
    component.setProperties({
      content: generateContent(20, 1),
      columns: columns
    });
  });
  this.append();
  assert.deepEqual(this.$().find('tbody tr td:nth-child(2)').map((index, cell) => $(cell).html().trim()).get(), Ember.A(['1','2','3','4','5','6','7','8','9','10']).map(v => `<i>${v}</i>`), 'Content is valid');

});

test('render cell with html (isHtml = false)', function (assert) {

  component =this.subject();
  Ember.run(function () {
    var columns = generateColumns(['index', 'indexWithHtml']);
    columns[1].isHtml = false;
    component.setProperties({
      content: generateContent(20, 1),
      columns: columns
    });
  });
  this.append();
  assert.deepEqual(this.$().find('tbody tr td:nth-child(2)').map((index, cell) => $(cell).html().trim()).get(), Ember.A(['1','2','3','4','5','6','7','8','9','10']).map(v => `&lt;i&gt;${v}&lt;/i&gt;`), 'Content is valid');

});