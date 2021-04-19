import { action } from '@ember/object';
import Component from '@glimmer/component';

/**
 * @class EpModelsTableSelect
 * @namespace Components
 * @extends Glimmer.Component
 */
export default class SelectComponent extends Component {
  /**
   * @property disabled
   * @type boolean
   * @default true
   * @protected
   */
  get disabled() {
    return !this.options || !this.options.length;
  }

  /**
   * @property label
   * @type string
   * @default ''
   */
  label = '';

  /**
   * @property clearable
   * @type boolean
   * @default false
   */
  clearable = false;

  /**
   * @property wide
   * @type boolean
   * @default false
   */
  wide = false;

  /**
   * @event changeValue
   * @protected
   */
  changeValue = null;

  /**
   * @event updateValue
   * @param {*} val
   * @protected
   */
  @action
  updateValue(val) {
    let v = 'value' in val ? val.value : val;
    if (this.type === 'number') {
      v = +v;
    }
    this.changeValue(v);
  }
}
