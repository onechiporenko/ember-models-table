import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module(
  'Integration | Component | models table/themes/bootstrap4/row filtering cell',
  function (hooks) {
    setupRenderingTest(hooks);

    test('it renders', async function (assert) {
      this.set('column', {});
      this.set('themeInstance', this.owner.lookup('service:fw').themeInstance);

      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.on('myAction', function(val) { ... });

      await render(
        hbs`<ModelsTable::Themes::Bootstrap4::RowFilteringCell @column={{this.column}} @themeInstance={{this.themeInstance}}/>`
      );

      assert.equal(this.element.textContent.trim(), '');

      // Template block usage:
      await render(hbs`
      <ModelsTable::Themes::Bootstrap4::RowFilteringCell @column={{this.column}} @themeInstance={{this.themeInstance}}>
        template block text
      </ModelsTable::Themes::Bootstrap4::RowFilteringCell>
    `);

      assert.equal(this.element.textContent.trim(), 'template block text');
    });
  }
);
