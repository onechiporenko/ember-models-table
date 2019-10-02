import {layout as templateLayout} from '@ember-decorators/component';
import Component from '@ember/component';
import {action, get} from '@ember/object';
import {inject as service} from '@ember/service';
import layout from '../templates/components/select-row-checkbox';

@templateLayout(layout)
export default class SelectRowCheckboxComponent extends Component {

  @service() fw;

  @action
  doClickOnRow(index, record, event) {
    get(this, 'clickOnRow')(index, record);
    event.stopPropagation();
  }
}
