import Ember from 'ember';
import layout from '../templates/components/models-table-row';

const {get} = Ember;

export default Ember.Component.extend({
  layout,
  classNameBindings: ['isSelected:selected-row'],
  tagName: 'tr',
  visibleProcessedColumns: null,
  selectedItems: null,
  clickOnRow: null,
  record: null,
  index: null,
  themeInstance: null,
  click() {
    get(this, 'clickOnRow')(get(this, 'index'), get(this, 'record'));
  }
});
