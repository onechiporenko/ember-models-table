import { setupTest } from 'ember-qunit';
import { module, test } from 'qunit';

module('Unit | Service | emt-themes/ember-bootstrap-v5', function (hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function (assert) {
    const service = this.owner.lookup('service:emt-themes/ember-bootstrap-v5');
    assert.ok(service);
  });
});
