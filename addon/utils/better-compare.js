import Ember from 'ember';

const {
  typeOf,
  compare,
  Comparable
} = Ember;

/**
 * This is a better version of Ember.compare.
 * Sadly, Ember.compare() will always return 0 when comparing two instances of JavaScript objects that do not
 * implement the Comparable-mixin.
 * This function will compare instances via their `valueOf()` method if available.
 *
 * @param {Mixed} v
 * @param {Mixed} w
 * @returns {number}
 */
export default function betterCompare(v, w) {
  let type1 = typeOf(v);
  let type2 = typeOf(w);

  if (Comparable) {
    if (type1 === 'instance' && Comparable.detect(v) && v.constructor.compare) {
      return v.constructor.compare(v, w);
    }

    if (type2 === 'instance' && Comparable.detect(w) && w.constructor.compare) {
      return w.constructor.compare(w, v) * -1;
    }
  }

  if ((type1 === 'instance' && type2 === 'instance') || (type1 === 'object' && type2 === 'object')) {
    if (typeOf(v.compare) === 'function' && typeOf(w.compare) === 'function') {
      return v.compare(v, w);
    }
    if (typeOf(v.valueOf) === 'function' && typeOf(w.valueOf) === 'function') {
      return compare(v.valueOf(), w.valueOf());
    }
  }

  return compare(v, w);
}
