import Ember from 'ember';
import layout from '../templates/components/models-table-row-expand';

const {get} = Ember;

export default Ember.Component.extend({
  layout,
  tagName: 'tr',
  themeInstance: null,
  clickOnRow: null,
  index: null,
  record: null,
  click() {
    get(this, 'clickOnRow')(get(this, 'index'), get(this, 'record'));
  }
});
