// BEGIN-SNIPPET table-with-inline-edit-controller
import { action } from '@ember/object';
import ExampleController from './example';

export default class InLineEditController extends ExampleController {

  @action
  onSaveRow(param) {
    return param.record.save();
  }

  @action
  onCancelRow({ record }) {
    record.rollbackAttributes();
    return true;
  }
}
// END-SNIPPET
