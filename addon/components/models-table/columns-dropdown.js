import Ember from 'ember';
import layout from '../../templates/components/models-table/columns-dropdown';

const {get} = Ember;

export default Ember.Component.extend({
  layout,
  processedColumns: null,
  columnDropdownOptions: null,
  showAllColumns: null,
  hideAllColumns: null,
  restoreDefaultVisibility: null,
  toggleColumnSet: null,
  themeInstance: null,
  actions: {
    showAllColumns() {
      get(this, 'showAllColumns')();
    },
    hideAllColumns() {
      get(this, 'hideAllColumns')();
    },
    restoreDefaultVisibility() {
      get(this, 'restoreDefaultVisibility')();
    },
    toggleColumnSet(columnSet) {
      get(this, 'toggleColumnSet')(columnSet);
    },
    toggleHidden(column) {
      get(this, 'toggleHidden')(column);
    }
  }
});
