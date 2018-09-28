import EmberObject from '@ember/object';
import NoOpMixin from 'ember-models-table/mixins/no-op';
import { module, test } from 'qunit';

module('Unit | Mixin | no-op', function() {
  // Replace this with your real tests.
  test('it works', function (assert) {
    let NoOpObject = EmberObject.extend(NoOpMixin);
    let subject = NoOpObject.create();
    assert.ok(subject);
  });
});
