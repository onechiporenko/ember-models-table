import Controller from '@ember/controller';
import {computed, get} from '@ember/object';

export default Controller.extend({
  currentGroupingPropertyName: 'country',
  displayGroupedValueAs: computed('displayGroupedValueAsToggle', function () {
    return get(this, 'displayGroupedValueAsToggle') ? 'row' : 'column';
  }),
  displayGroupedValueAsToggle: false
});
