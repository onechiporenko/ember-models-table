import Ember from 'ember';
import layout from '../../templates/components/models-table/table';

const {get} = Ember;

export default Ember.Component.extend({
  layout,
  tagName: 'table',
  classNameBindings: ['themeInstance.table'],
  noHeaderFilteringAndSorting: null,
  groupedHeaders: null,
  processedColumns: null,
  sort: null,
  columnsCount: null,
  visibleContent: null,
  selectedItems: null,
  expandedRowIndexes: null,
  visibleProcessedColumns: null,
  allColumnsAreHidden: null,
  data: null,
  clickOnRow: null,
  themeInstance: null,
  goToPage: null,
  actions: {
    sort(column) {
      get(this, 'sort')(column);
    },
    clickOnRow(index, row) {
      get(this, 'clickOnRow')(index, row);
    }
  }
});
