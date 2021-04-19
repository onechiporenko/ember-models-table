// BEGIN-SNIPPET table-with-inline-edit-controller
import Controller from '@ember/controller';
import { action } from '@ember/object';

export default class InLineEditController extends Controller {
  // custom component for different framework-based demos
  // you will provide your component directly in the template
  get cellEditToggleComponent() {
    if (this.fw.isPaper) {
      return 'models-table/themes/ember-paper/cell-edit-toggle';
    }
    return 'models-table/cell-edit-toggle';
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
