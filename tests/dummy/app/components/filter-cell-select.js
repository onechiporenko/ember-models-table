import Component from '@ember/component';
import {computed} from '@ember/object';
import layout from '../templates/components/filter-cell-select';

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
