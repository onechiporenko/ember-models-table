import Helper from '@ember/component/helper';
import {isArray} from '@ember/array';
import { observer, computed, set, get } from '@ember/object';

export default Helper.extend({
  content: computed('needle', 'haystack.[]', function() {
    let needle = get(this, 'needle');
    let haystack = get(this, 'haystack');
    return isArray(haystack) ? haystack.includes(needle) : false;
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
