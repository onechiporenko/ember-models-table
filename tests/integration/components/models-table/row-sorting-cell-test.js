import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('models-table/row-sorting-cell', 'Integration | Component | models table/row sorting cell', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{models-table/row-sorting-cell}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#models-table/row-sorting-cell}}
      template block text
    {{/models-table/row-sorting-cell}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
