import {
  moduleForComponent,
  test
} from 'ember-qunit';

import hbs from 'htmlbars-inline-precompile';

import {
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
