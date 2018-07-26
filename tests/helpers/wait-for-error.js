/**
 * from https://github.com/workmanw/ember-qunit-assert-helpers/issues/18#issuecomment-390003905
 */
import {waitUntil} from 'ember-native-dom-helpers';
import Ember from 'ember';

export default function waitForError(opts) {
  const orig = Ember.onerror;
  let error = null;
  Ember.onerror = err => error = err;
  return waitUntil(() => error, opts).finally(() => Ember.onerror = orig);
}