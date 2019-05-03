import Component from '@ember/component';
import {action, get} from '@ember/object';
import layout from '../templates/components/select-row-checkbox';

export default class SelectRowCheckboxComponent extends Component {

  layout = layout;

  @action
  doClickOnRow(index, record, event) {
    get(this, 'clickOnRow')(index, record);
    event.stopPropagation();
  }
}