import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('models-table/cell-content-edit', 'Integration | Component | models table/cell content edit', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });
  this.setProperties({
    record: {
      title: "Hello"
    },
    column: {
      propertyName: "title"
    }
  });

  this.render(hbs`{{models-table/cell-content-edit record=record column=column}}`);

  assert.equal(this.$("input")[0].value, this.get("record.title"));

});
