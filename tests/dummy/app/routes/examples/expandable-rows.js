import ExampleRoute from './example';
import {set, get} from '@ember/object';

export default ExampleRoute.extend({

  setupController(controller) {
    this._super(...arguments);
    get(controller, 'columns').unshiftObject({
      component: 'expand-toggle',
      componentForFilterCell: 'expand-all-toggle',
      mayBeHidden: false
    });
    set(controller, 'expandedRowComponent', 'expanded-row');
  },

  actions: {
    didTransition() {
      set(this, 'controller.expandAllToggleTemplate', `<a href="#" {{action "expandAllRows" bubbles=false}} class={{themeInstance.expandAllRows}}>
  <i class="{{themeInstance.expand-all-rows}}"></i>
</a><br />
<a href="#" {{action "collapseAllRows" bubbles=false}} class={{themeInstance.collapseAllRows}}>
  <i class="{{themeInstance.collapse-all-rows}}"></i>
</a>`);
      set(this, 'controller.expandToggleTemplate', `{{#if isExpanded}}
  <a href="#" {{action "collapseRow" index record bubbles=false}} class={{themeInstance.collapseRow}}>
    <i class="{{themeInstance.collapse-row}}"></i>
  </a>
{{else}}
  <a href="#" {{action "expandRow" index record bubbles=false}} class={{themeInstance.expandRow}}>
    <i class="{{themeInstance.expand-row}}"></i>
  </a>
{{/if}}
{{yield}}`);
      return this._super(...arguments);
    }
  }

});
