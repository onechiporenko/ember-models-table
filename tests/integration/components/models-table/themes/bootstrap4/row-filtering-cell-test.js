import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('models-table/themes/bootstrap4/row-filtering-cell', 'Integration | Component | models table/themes/bootstrap4/row filtering cell', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{models-table/themes/bootstrap4/row-filtering-cell}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#models-table/themes/bootstrap4/row-filtering-cell}}
      template block text
    {{/models-table/themes/bootstrap4/row-filtering-cell}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
