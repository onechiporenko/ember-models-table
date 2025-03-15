import { setupTest } from 'ember-qunit';
import { module, test } from 'qunit';

module('Unit | Service | emt-themes/default', function (hooks) {
  setupTest(hooks);

  // TODO: Replace this with your real tests.
  test('it exists', function (assert) {
    let service = this.owner.lookup('service:emt-themes/default');
    assert.ok(service);
  });
});
