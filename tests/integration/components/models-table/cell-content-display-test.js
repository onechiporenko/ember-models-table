import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('models-table/cell-content-display', 'Integration | Component | models table/cell content display', {
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

  this.render(hbs`{{models-table/cell-content-display record=record column=column}}`);

  assert.equal(this.$().text().trim(), this.get("record.title"));

});
