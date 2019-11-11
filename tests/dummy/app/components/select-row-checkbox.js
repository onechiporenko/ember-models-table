import {layout as templateLayout} from '@ember-decorators/component';
import Component from '@ember/component';
import {action} from '@ember/object';
import {inject as service} from '@ember/service';
import layout from '../templates/components/select-row-checkbox';

export default
@templateLayout(layout)
class SelectRowCheckboxComponent extends Component {

  @service() fw;

  @action
  doClickOnRow(index, record, event) {
    this.clickOnRow(index, record);
    event.stopPropagation();
  }
}
