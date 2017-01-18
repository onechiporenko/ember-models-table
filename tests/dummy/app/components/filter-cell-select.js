import Ember from 'ember';
import layout from '../templates/components/filter-cell-select';

const {computed, get} = Ember;

export default Ember.Component.extend({
  layout,

  filterOptions: computed('data.[]', 'column.propertyName', function () {
    return [''].concat(get(this, 'data').mapBy(get(this, 'column.propertyName'))).map(option => {
      return {value: option, label: option};
    });
  })

});
