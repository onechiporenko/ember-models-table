import { tracked } from '@glimmer/tracking';
import ExampleController from './example';

export default class BlockUsageController extends ExampleController {
  useDataGrouping = true;
  dataGroupProperties = ['age', 'city', 'country'];
  currentGroupingPropertyName = 'country';
  displayGroupedValueAs = 'row';

  @tracked
  pageSize = 25;

  get columnsForSecondTable() {
    return this.columns.slice(2);
  }
}
