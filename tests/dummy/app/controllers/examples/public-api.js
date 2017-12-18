import Controller from '@ember/controller';
import { get } from '@ember/object';

export default Controller.extend({
  showComponentFooter: true,
  showColumnsDropdown: true,
  useFilteringByColumns: true,
  showGlobalFilter: true,
  useNumericPagination: false,
  doFilteringByHiddenColumns: false,
  filteringIgnoreCase: false,
  multipleColumnsSorting: true,
  showPageSize: true,

  modelsTablePubicApi: null,

  actions: {
    selectFirstRecord() {
      let record = get(this, 'data.firstObject');
      get(this, 'modelsTablePubicAPI.selectedItems').add(record);
    },
    unselectFirstRecord() {
      let record = get(this, 'data.firstObject');
      get(this, 'modelsTablePubicAPI.selectedItems').remove(record);
    },
    clearSelectedRecords() {
      get(this, 'modelsTablePubicAPI.selectedItems').clear();
    }
  }
});
