import Ember from 'ember';

export function htmlSafe([str]/*, hash*/) {
  return Ember.String.htmlSafe(str || '');
}

export default Ember.Helper.helper(htmlSafe);
