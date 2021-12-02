import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import ExampleController from './example';

export default class GroupedRowsController extends ExampleController {
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
  onDisplayDataChanged(displayData) {
    this.pageSize = displayData.pageSize;
    this.currentGroupingPropertyName = displayData.currentGroupingPropertyName;
  }
}
