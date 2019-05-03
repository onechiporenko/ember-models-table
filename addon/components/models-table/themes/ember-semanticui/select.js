import { layout as templateLayout } from '@ember-decorators/component';
import { action } from '@ember-decorators/object';
import {get, set} from '@ember/object';
import Component from '@ember/component';
import layout from '../../../../templates/components/models-table/themes/ember-semanticui/select';

@templateLayout(layout)
export default class SelectComponent extends Component {
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
