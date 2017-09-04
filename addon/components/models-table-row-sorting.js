import Ember from 'ember';
import layout from '../templates/components/models-table-row-sorting';

const {get} = Ember;

export default Ember.Component.extend({
  layout,
  tagName: 'tr',
  processedColumns: null,
  sort: null,
  themeInstance: null,
  actions: {
    sort(column) {
      get(this, 'sort')(column);
    }
  }
});
