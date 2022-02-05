// BEGIN-SNIPPET table-with-inline-edit-controller
import { inject as service } from '@ember/service';
import { action } from '@ember/object';
import ExampleController from './example';

export default class InLineEditController extends ExampleController {
  @service() fw;

  get cellEditToggleComponent() {
    return this.fw.themeInstance.cellEditToggleComponent;
  }

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
