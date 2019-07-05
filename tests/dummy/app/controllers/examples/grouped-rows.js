import Controller from '@ember/controller';
import {computed, get} from '@ember/object';
import {inject as service} from '@ember/service';

export default class GroupedRowsController extends Controller {

  @service() fw;

  @computed('displayGroupedValueAsToggle')
  get displayGroupedValueAs() {
    return get(this, 'displayGroupedValueAsToggle') ? 'row' : 'column';
  }

  displayGroupedValueAsToggle = false;
}