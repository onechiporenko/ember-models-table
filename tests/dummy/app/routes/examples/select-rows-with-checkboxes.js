import ExampleRoute from './example';
import {get, set} from '@ember/object';

export default ExampleRoute.extend({

  setupController(controller) {
    this._super(...arguments);
    get(controller, 'columns').unshiftObject({
      component: 'select-row-checkbox',
      useFilter: false,
      mayBeHidden: false,
      componentForSortCell: 'select-all-rows-checkbox'
    });
  },

  actions: {
    didTransition() {
      set(this, 'controller.selectRowCheckboxTemplate', `<span class="{{if isSelected themeInstance.select-row themeInstance.deselect-row}}" onclick={{action "clickOnRow" index record}}></span>`);
      set(this, 'controller.selectAllRowsCheckboxTemplate', `<span {{action "toggleAllSelection"}} class="{{if (is-equal selectedItems.length data.length) themeInstance.select-all-rows themeInstance.deselect-all-rows}}"></span>`);
      return this._super(...arguments);
    }
  }

});
