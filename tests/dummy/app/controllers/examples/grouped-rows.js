import Controller from '@ember/controller';
import {computed, get} from '@ember/object';

export default class GroupedRowsController extends Controller {
  @computed('displayGroupedValueAsToggle')
  get displayGroupedValueAs() {
    return get(this, 'displayGroupedValueAsToggle') ? 'row' : 'column';
  }

  displayGroupedValueAsToggle = false;
}