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
    return !this.args.options || !this.args.options.length;
  }

  /**
   * @property clearable
   * @type boolean
   * @default false
   */
  get clearable() {
    return this.args.wide ?? false;
  }
  /**
   * @property wide
   * @type boolean
   * @default false
   */
  get wide() {
    return this.args.wide ?? false;
  }

  /**
   * @event updateValue
   * @param {*} val
   * @protected
   */
  @action
  updateValue(val) {
    let v = 'value' in val ? val.value : val;
    if (this.args.type === 'number') {
      v = +v;
    }
    this.args.changeValue(v);
  }
}
