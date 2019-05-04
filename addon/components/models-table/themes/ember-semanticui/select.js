import {action} from '@ember/object';
import {get, set} from '@ember/object';
import Component from '@ember/component';
import layout from '../../../../templates/components/models-table/themes/ember-semanticui/select';

export default class SelectComponent extends Component {

  layout = layout;

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
    if (get(this, 'type') === 'number') {
      val = +val;
    }
    set(this, 'value', val);
  }
}
