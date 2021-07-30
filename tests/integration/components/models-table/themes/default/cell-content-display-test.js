import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module(
  'Integration | Component | models table/cell content display',
  function (hooks) {
    setupRenderingTest(hooks);

    test('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.on('myAction', function(val) { ... });
      this.setProperties({
        themeInstance: this.owner.lookup('service:fw').themeInstance,
        record: {
          title: 'Hello',
        },
        column: {
          propertyName: 'title',
        },
      });

      await render(
        hbs`<ModelsTable::Themes::Default::CellContentDisplay @record={{this.record}} @column={{this.column}} @themeInstance={{this.themeInstance}}/>`
      );

      assert.equal(this.element.textContent.trim(), this.get('record.title'));
    });
  }
);
