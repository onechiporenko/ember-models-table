import fmt from 'ember-models-table/utils/emt/fmt';
import { module, test } from 'qunit';

module('Unit | Utility | fmt', function () {
  // Replace this with your real tests.
  test('it works', function (assert) {
    const result = fmt('Hi %@, Im %@', 'John', 'Nico');
    assert.strictEqual(result, 'Hi John, Im Nico');
  });
});
