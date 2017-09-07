import Ember from 'ember';
import layout from '../../templates/components/models-table/row-expand';

const {get, computed} = Ember;

export default Ember.Component.extend({
  layout,
  tagName: 'tr',
  classNames: ['expand-row'],
  classNameBindings: ['indexedClass', 'isSelected:selected-expand'],
  indexedClass: computed('index', function() {
    return `expand-${get(this, 'index')}`;
  }),
  isSelected: computed('selectedItems.[]', 'index', function() {
    return get(this, 'selectedItems').indexOf(get(this, 'index')) !== -1;
  }),
  themeInstance: null,
  clickOnRow: null,
  index: null,
  record: null,
  click() {
    get(this, 'clickOnRow')(get(this, 'index'), get(this, 'record'));
  }
});
