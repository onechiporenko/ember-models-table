import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class GroupedRowsController extends Controller {
  @service() fw;

  get displayGroupedValueAs() {
    return this.displayGroupedValueAsToggle ? 'row' : 'column';
  }

  @tracked
  displayGroupedValueAsToggle = false;

  @tracked
  pageSize = 25;

  @tracked
  dataGroupProperties = ['age', 'city', 'country'];

  @tracked
  currentGroupingPropertyName = 'country';

  @action
  updateArgs(k, v) {
    this[k] = v;
  }
}
