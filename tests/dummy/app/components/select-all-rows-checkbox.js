import {layout as templateLayout} from '@ember-decorators/component';
import Component from '@ember/component';
import {action, get} from '@ember/object';
import {inject as service} from '@ember/service';
import layout from '../templates/components/select-all-rows-checkbox';

export default
@templateLayout(layout)
class SelectAllRowsCheckboxComponent extends Component {

  @service() fw;

  @action
  doToggleAllSelection() {
    get(this, 'toggleAllSelection')();
  }
}
