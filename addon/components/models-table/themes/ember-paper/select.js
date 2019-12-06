import {layout as templateLayout} from '@ember-decorators/component';
import {action, set} from '@ember/object';
import {empty} from '@ember/object/computed';
import Component from '@ember/component';
import layout from '../../../../templates/components/models-table/themes/ember-paper/select';

export default
@templateLayout(layout)
class SelectComponent extends Component {

  @empty('options') disabled;

  /**
   * @type string
   * @default ''
   */
  label = '';

  /**
   */
  clearable = false;

  /**
   */
  wide = false;

  @action
  updateValue(val) {
    let v = 'value' in val ? val.value : val;
    if (this.type === 'number') {
      v = +v;
    }
    set(this, 'value', v);
  }
}
