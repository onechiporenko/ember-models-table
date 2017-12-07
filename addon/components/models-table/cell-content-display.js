import Component from '@ember/component';
import layout from '../../templates/components/models-table/cell-content-display';
import { get, set } from '@ember/object';

export default Component.extend({
  layout,

  init() {
    set(this, 'tagName', get(this, 'themeInstance.tagNames.cell-content'));
    this._super(...arguments);
  }
});
