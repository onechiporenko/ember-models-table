import Ember from 'ember';
import HoverDelaySupportMixin from 'ember-models-table/mixins/hover-support';
import { module, test } from 'qunit';

module('Unit | Mixin | hover support');

// Replace this with your real tests.
test('it works', function(assert) {
  let HoverDelaySupportObject = Ember.Object.extend(HoverDelaySupportMixin);
  let subject = HoverDelaySupportObject.create();
  assert.ok(subject);
});
