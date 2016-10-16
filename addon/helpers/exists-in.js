import Ember from 'ember';

const {get, set, computed, observer} = Ember;

export default Ember.Helper.extend({
  content: computed('needle', 'haystack.[]', function() {
    let needle = get(this, 'needle');
    let haystack = get(this, 'haystack');
    return haystack.includes(needle);
  }).readOnly(),

  compute([haystack, needle]) {
    set(this, 'needle', needle);
    set(this, 'haystack', haystack);
    return get(this, 'content');
  },

  contentDidChange: observer('content', function() {
    this.recompute();
  })
});
