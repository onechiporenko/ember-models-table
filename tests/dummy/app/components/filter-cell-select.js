import Component from '@ember/component';
import { get, computed } from '@ember/object';
import layout from '../templates/components/filter-cell-select';

export default Component.extend({
  layout,
  data: null,
  filterOptions: computed('data.[]', 'column.propertyName', function () {
    return [''].concat(get(this, 'data').mapBy(get(this, 'column.propertyName'))).map(option => {
      return {value: option, label: option};
    });
  })

});
