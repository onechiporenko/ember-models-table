import Ember from 'ember';
import layout from '../../templates/components/models-table/summary';
import fmt from "../../utils/fmt";

const {computed, getProperties, get} = Ember;

export default Ember.Component.extend({
  layout,
  anyFilterUsed: false,
  clearFilters: null,
  firstIndex: 0,
  lastIndex: 0,
  recordsCount: 0,
  themeInstance: null,
  classNameBindings: ['themeInstance.footerSummary'],
  summary: computed('firstIndex', 'lastIndex', 'recordsCount', 'msg', function () {
    const {
      recordsCount,
      firstIndex,
      lastIndex
    } = getProperties(this, 'recordsCount', 'firstIndex', 'lastIndex');
    return fmt(get(this, 'messages.tableSummary'), firstIndex, lastIndex, recordsCount);
  }),
  actions: {
    clearFilters() {
      get(this, 'clearFilters')();
    }
  }
});
