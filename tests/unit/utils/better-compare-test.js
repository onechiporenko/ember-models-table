import EmberObject from '@ember/object';
import betterCompare from 'ember-models-table/utils/better-compare';
import { module, test } from 'qunit';

module('Unit | Utility | better compare', function() {
  test('it works', function(assert) {
    let result = betterCompare(1, 2);
    assert.equal(result, -1, 'it works with numbers');

    result = betterCompare(2, 1);
    assert.equal(result, 1, 'it works with equal numbers');

    result = betterCompare(0, 0);
    assert.equal(result, 0, 'it works with equal numbers');

    result = betterCompare('aa', 'bb');
    assert.equal(result, -1, 'it works with strings');

    result = betterCompare('aa', 'aa');
    assert.equal(result, 0, 'it works with equal strings');

    result = betterCompare(true, false);
    assert.equal(result, 1, 'it works with booleans');

    result = betterCompare(true, true);
    assert.equal(result, 0, 'it works with equal booleans');

    result = betterCompare({}, {});
    assert.equal(result, 0, 'it works with empty objects');

    let a = EmberObject.create({});
    let b = EmberObject.create({});
    result = betterCompare(a, b);
    assert.equal(result, 0, 'it works with objects without valueOf method');

    a = EmberObject.create({
      valueOf() {
        return 2;
      }
    });
    b = EmberObject.create({
      valueOf() {
        return 1;
      }
    });
    result = betterCompare(a, b);
    assert.equal(result, 1, 'it works with objects with valueOf method');
  });
});