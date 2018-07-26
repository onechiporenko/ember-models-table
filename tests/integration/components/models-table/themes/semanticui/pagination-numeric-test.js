import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | models table/themes/semanticui/pagination numeric', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {

    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    await render(hbs`{{models-table/themes/semanticui/pagination-numeric}}`);

    assert.equal(this.$().text().trim(), '');

    // Template block usage:
    await render(hbs`
      {{#models-table/themes/semanticui/pagination-numeric}}
        template block text
      {{/models-table/themes/semanticui/pagination-numeric}}
    `);

    assert.equal(this.$().text().trim(), 'template block text');
  });
});