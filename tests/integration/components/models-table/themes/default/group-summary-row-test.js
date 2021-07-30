import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module(
  'Integration | Component | models-table/group-summary-row',
  function (hooks) {
    setupRenderingTest(hooks);

    test('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });

      await render(hbs`<ModelsTable::Themes::Default::GroupSummaryRow/>`);

      assert.equal(this.element.textContent.trim(), '');

      // Template block usage:
      await render(hbs`
      <ModelsTable::Themes::Default::GroupSummaryRow>
        template block text
      </ModelsTable::Themes::Default::GroupSummaryRow>
    `);

      assert.equal(this.element.textContent.trim(), 'template block text');
    });
  }
);
