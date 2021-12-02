import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Service | emt-themes/ember-bootstrap-v3', function (hooks) {
  setupTest(hooks);

  // TODO: Replace this with your real tests.
  test('it exists', function (assert) {
    let service = this.owner.lookup('service:emt-themes/ember-bootstrap-v3');
    assert.ok(service);
  });
});
