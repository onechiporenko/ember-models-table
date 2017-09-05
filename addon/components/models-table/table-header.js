import Ember from 'ember';
import layout from '../../templates/components/models-table/table-header';

const {get} = Ember;

export default Ember.Component.extend({
  layout,
  tagName: 'thead',
  classNameBindings: ['noHeaderFilteringAndSorting:table-header-no-filtering-and-sorting'],
  noHeaderFilteringAndSorting: false,
  sort: null,
  groupedHeaders: null,
  processedColumns: null,
  useFilteringByColumns: null,
  themeInstance: null,
  actions: {
    sort(column) {
      get(this, 'sort')(column);
    }
  }
});
