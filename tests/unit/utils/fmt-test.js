import fmt from '../../../utils/fmt';
import { module, test } from 'qunit';

module('Unit | Utility | fmt');

// Replace this with your real tests.
test('it works', function(assert) {
  var result = fmt('Hi %@, I\'m %@', 'John', 'Nico');
  assert.equal(result, 'Hi John, I\'m Nico');
});
