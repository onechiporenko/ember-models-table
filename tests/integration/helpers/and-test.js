
import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('and', 'helper:and', {
  integration: true
});

// Replace this with your real tests.
test('it renders', function(assert) {
  this.set('inputValue', true);

  this.render(hbs`{{#if (and inputValue)}}1234{{/if}}`);

  assert.equal(this.$().text().trim(), '1234');
});

