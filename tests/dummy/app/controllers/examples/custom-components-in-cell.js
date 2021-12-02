// BEGIN-SNIPPET table-with-custom-components
import { action } from '@ember/object';
import ExampleController from './example';

export default class CustomComponentInCellController extends ExampleController {
  @action
  deleteRecord(record) {
    record.destroyRecord();
  }
}
// END-SNIPPET
