import {layout as templateLayout} from '@ember-decorators/component';
import {action, set} from '@ember/object';
import {empty} from '@ember/object/computed';
import Component from '@ember/component';
import layout from '../../../../templates/components/models-table/themes/ember-paper/select';

/**
 * @class EpModelsTableSelect
 * @namespace Components
 * @extends Ember.Component
 */
export default
@templateLayout(layout)
class SelectComponent extends Component {

  /**
   * @property disabled
   * @type boolean
   * @default true
   * @protected
   */
  @empty('options') disabled;

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
    set(this, 'value', v);
  }
}
