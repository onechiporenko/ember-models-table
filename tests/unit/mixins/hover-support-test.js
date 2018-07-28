import EmberObject from '@ember/object';
import HoverDelaySupportMixin from 'ember-models-table/mixins/hover-support';
import { module, test } from 'qunit';

module('Unit | Mixin | hover support', function() {
  // Replace this with your real tests.
  test('it works', function(assert) {
    let HoverDelaySupportObject = EmberObject.extend(HoverDelaySupportMixin);
    let subject = HoverDelaySupportObject.create();
    assert.ok(subject);
  });
});