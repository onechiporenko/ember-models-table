import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Helper | not-eq', function(hooks) {
  setupRenderingTest(hooks);

  // Replace this with your real tests.
  test('it renders', async function(assert) {
    this.set('inputValue', '1234');

    await render(hbs`{{#if (not-eq inputValue '1234')}}not-eq{{else}}eq{{/if}}`);

    assert.equal(this.element.textContent.trim(), 'eq');

    this.set('inputValue', '4321');
    assert.equal(this.element.textContent.trim(), 'not-eq');
  });
});
