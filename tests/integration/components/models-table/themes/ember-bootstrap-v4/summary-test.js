import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | models-table/themes/ember-bootstrap-v4/summary', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`{{models-table/themes/ember-bootstrap-v4/summary}}`);

    assert.equal(this.element.textContent.trim(), '');

    // Template block usage:
    await render(hbs`
      {{#models-table/themes/ember-bootstrap-v4/summary}}
        template block text
      {{/models-table/themes/ember-bootstrap-v4/summary}}
    `);

    assert.equal(this.element.textContent.trim(), 'template block text');
  });
});
