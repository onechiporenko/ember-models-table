import { compare, typeOf } from '@ember/utils';

/*
 * This is a better version of Ember.compare.
 * Sadly, Ember.compare() will always return 0 when comparing two instances of JavaScript objects that do not
 * implement the Comparable-mixin.
 * This function will compare instances via their `valueOf()` method if available.
 *
 * @param {Mixed} v
 * @param {Mixed} w
 * @return number
 */
export default function betterCompare(v, w) {
  let type1 = typeOf(v);
  let type2 = typeOf(w);

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
