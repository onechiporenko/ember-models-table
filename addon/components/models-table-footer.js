import Ember from 'ember';
import layout from '../templates/components/models-table-footer';

export default Ember.Component.extend({
  layout,
  firstIndex: null,
  lastIndex: null,
  recordsCount: null,
  anyFilterUsed: null,
  pageSizeOptions: null,
  pageSize: null,
  currentPageNumber: null,
  goToPage: null,
  showPageSize: null,
  useNumericPagination: null,
  themeInstance: null,
  classNameBindings: ['themeInstance.tfooterWrapper']
});
