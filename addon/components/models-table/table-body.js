import Ember from 'ember';
import layout from '../../templates/components/models-table/table-body';

const {get} = Ember;

export default Ember.Component.extend({
  layout,
  tagName: 'tbody',
  columnsCount: null,
  visibleContent: null,
  selectedItems: null,
  expandedRowIndexes: null,
  clickOnRow: null,
  visibleProcessedColumns: null,
  allColumnsAreHidden: null,
  themeInstance: null,
  actions: {
    clickOnRow(index, row) {
      get(this, 'clickOnRow')(index, row);
    }
  }
});
