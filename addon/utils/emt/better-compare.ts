import { compare } from '@ember/utils';

/*
 * This is a better version of Ember.compare.
 * Sadly, Ember.compare() will always return 0 when comparing two instances of JavaScript objects that do not
 * implement the Comparable-mixin.
 * This function will compare instances via their `valueOf()` method if available.
 */
export default function betterCompare(v: any, w: any): number { // eslint-disable-line
  if (!v || !w) {
    return compare(v, w);
  }
  if (typeof v.compare === 'function' && typeof w.compare === 'function') {
    return v.compare(v, w);
  }
  if (typeof v.valueOf === 'function' && typeof w.valueOf === 'function') {
    return compare(v.valueOf(), w.valueOf());
  }
  return compare(v, w);
}
