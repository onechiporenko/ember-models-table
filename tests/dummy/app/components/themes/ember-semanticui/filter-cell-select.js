import Component from '@ember/component';
import layout from '../../../templates/components/themes/ember-semanticui/filter-cell-select';
import { computed } from '@ember/object';

export default Component.extend({
  layout,
  data: null,
  filterOptions: computed(function () {
    return [''].concat(['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten']).map(option => ({
      value: option,
      label: option
    }));
  })
});
