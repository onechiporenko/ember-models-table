import Component from '@ember/component';
import {action, get} from '@ember/object';
import layout from '../templates/components/select-all-rows-checkbox';

export default class SelectAllRowsCheckboxComponent extends Component {
  layout = layout;

  @action
  doToggleAllSelection() {
    get(this, 'toggleAllSelection')();
  }
}
