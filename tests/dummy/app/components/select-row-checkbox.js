import {layout as templateLayout} from '@ember-decorators/component';
import Component from '@ember/component';
import {action, get} from '@ember/object';
import layout from '../templates/components/select-row-checkbox';

@templateLayout(layout)
export default class SelectRowCheckboxComponent extends Component {

  @action
  doClickOnRow(index, record, event) {
    get(this, 'clickOnRow')(index, record);
    event.stopPropagation();
  }
}
