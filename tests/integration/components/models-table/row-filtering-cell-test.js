import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
import getThemeClass from '../../../helpers/get-theme-class';

module('Integration | Component | models table/row filtering cell', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {

    this.set('column', {});
    this.set('themeInstance', getThemeClass(this));

    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    await render(hbs`<ModelsTable::RowFilteringCell @column={{column}} @themeInstance={{themeInstance}}/>`);

    assert.equal(this.element.textContent.trim(), '');

    // Template block usage:
    await render(hbs`
      <ModelsTable::RowFilteringCell @column={{column}} @themeInstance={{themeInstance}}>
        template block text
      </ModelsTable::RowFilteringCell>
    `);

    assert.equal(this.element.textContent.trim(), 'template block text');
  });
});
