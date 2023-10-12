import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module(
  'Integration | Component | models table/row group toggle',
  function (hooks) {
    setupRenderingTest(hooks);

    test('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.on('myAction', function(val) { ... });

      await render(hbs`<ModelsTable::Themes::Default::RowGroupToggle/>`);

      assert.strictEqual(this.element.textContent.trim(), '');

      // Template block usage:
      await render(hbs`
      <ModelsTable::Themes::Default::RowGroupToggle>
        template block text
      </ModelsTable::Themes::Default::RowGroupToggle>
    `);

      assert.strictEqual(
        this.element.textContent.trim(),
        'template block text',
      );
    });
  },
);
