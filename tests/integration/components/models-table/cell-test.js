import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
import getThemeClass from '../../../helpers/get-theme-class';

module('Integration | Component | models table/cell', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {

    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.setProperties({
      themeInstance: getThemeClass(this),
      record: {
        title: 'Hello'
      },
      column: {
        propertyName: 'title'
      }
    });

    await render(hbs`<ModelsTable::Cell @column={{column}} @record={{record}} @themeInstance={{themeInstance}}/>`);

    assert.equal(this.element.textContent.trim(), '');

    // Template block usage:
    await render(hbs`
      <ModelsTable::Cell @column={{column}} @record={{record}}>
        template block text
      </ModelsTable::Cell>
    `);

    assert.equal(this.element.textContent.trim(), 'template block text');
  });
});
