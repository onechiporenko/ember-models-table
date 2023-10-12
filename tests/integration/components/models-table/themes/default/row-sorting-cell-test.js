import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module(
  'Integration | Component | models table/row sorting cell',
  function (hooks) {
    setupRenderingTest(hooks);

    test('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.on('myAction', function(val) { ... });

      await render(hbs`<ModelsTable::Themes::Default::RowSortingCell/>`);

      assert.strictEqual(this.element.textContent.trim(), '');

      // Template block usage:
      await render(hbs`
      <ModelsTable::Themes::Default::RowSortingCell>
        template block text
      </ModelsTable::Themes::Default::RowSortingCell>
    `);

      assert.strictEqual(
        this.element.textContent.trim(),
        'template block text',
      );
    });
  },
);
