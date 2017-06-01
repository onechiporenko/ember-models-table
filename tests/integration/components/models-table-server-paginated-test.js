import {
  moduleForComponent,
  test
} from 'ember-qunit';

import hbs from 'htmlbars-inline-precompile';

import {
  generateContent,
  generateColumns
} from '../../helpers/f';


moduleForComponent('models-table-server-paginated', 'ModelsTableServerPaginated | Integration', {
  integration: true
});

test('should render without data', function (assert) {
  let data = {};
  this.setProperties({
    data: data,
    columns: generateColumns(['index'])
  });

  this.render(hbs`{{models-table-server-paginated data=data columns=columns}}`);
  assert.ok(this.$().text());
});

test('should render with data', function (assert) {
  let data = generateContent(10, 1);
  let columns = generateColumns(['index', 'indexWithHtml']);

  this.setProperties({
    data: data,
    columns: generateColumns(['index'])
  });

  this.render(hbs`{{models-table-server-paginated data=data columns=columns}}`);

  let text = this.$().text();
  assert.ok(text.match(/Show 1 - 10 of 10/));
});
