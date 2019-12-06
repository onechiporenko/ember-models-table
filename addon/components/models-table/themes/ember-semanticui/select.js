import {layout as templateLayout} from '@ember-decorators/component';
import {action} from '@ember/object';
import {set} from '@ember/object';
import Component from '@ember/component';
import layout from '../../../../templates/components/models-table/themes/ember-semanticui/select';

export default
@templateLayout(layout)
class SelectComponent extends Component {
  /**
   */
  clearable = false;

  /**
   */
  wide = false;

  @action
  updateValue(val) {
    if (this.type === 'number') {
      val = +val;
    }
    set(this, 'value', val);
  }
}
