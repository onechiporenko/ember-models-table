import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('helper:and', function(hooks) {
  setupRenderingTest(hooks);

  // Replace this with your real tests.
  test('it renders', async function(assert) {
    this.set('inputValue', true);

    await render(hbs`{{#if (and inputValue)}}1234{{/if}}`);

    assert.equal(this.$().text().trim(), '1234');
  });
});