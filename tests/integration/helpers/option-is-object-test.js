import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Helper | option-is-object', function(hooks) {
  setupRenderingTest(hooks);

  // Replace this with your real tests.
  test('it renders', async function(assert) {
    this.set('inputValue', {value: 1234});

    await render(hbs`{{option-is-object inputValue}}`);

    assert.equal(this.element.textContent.trim(), 'true');
  });
});
