import {layout as templateLayout} from '@ember-decorators/component';
import {action, get, set} from '@ember/object';
import {empty} from '@ember/object/computed';
import Component from '@ember/component';
import layout from '../../../../templates/components/models-table/themes/ember-paper/select';

export default
@templateLayout(layout)
class SelectComponent extends Component {

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

  @action
  updateValue(val) {
    let v = 'value' in val ? val.value : val;
    if (get(this, 'type') === 'number') {
      v = +v;
    }
    set(this, 'value', v);
  }
}
