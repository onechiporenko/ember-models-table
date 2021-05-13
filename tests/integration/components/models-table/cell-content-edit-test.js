import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module(
  'Integration | Component | models table/cell content edit',
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
        hbs`<ModelsTable::CellContentEdit @record={{this.record}} @column={{this.column}} @themeInstance={{this.themeInstance}}/>`
      );

      assert.equal(
        this.element.querySelector('input').value,
        this.get('record.title')
      );
    });
  }
);
