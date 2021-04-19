// BEGIN-SNIPPET table-with-custom-components
import Controller from '@ember/controller';
import { action } from '@ember/object';

export default class CustomComponentInCellController extends Controller {
  @action
  deleteRecord(record) {
    record.destroyRecord();
  }
}
// END-SNIPPET
