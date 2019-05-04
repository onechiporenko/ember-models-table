import {layout as templateLayout} from '@ember-decorators/component';
import Component from '@ember/component';
import {action, get} from '@ember/object';
import layout from '../templates/components/select-all-rows-checkbox';

@templateLayout(layout)
export default class SelectAllRowsCheckboxComponent extends Component {

  @action
  doToggleAllSelection() {
    get(this, 'toggleAllSelection')();
  }
}
