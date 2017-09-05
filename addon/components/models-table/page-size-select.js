import Ember from 'ember';
import layout from '../../templates/components/models-table/page-size-select';

export default Ember.Component.extend({
  layout,
  pageSizeOptions: null,
  pageSize: null,
  themeInstance: null
});
