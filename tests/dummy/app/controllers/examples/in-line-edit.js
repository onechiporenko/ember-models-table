// BEGIN-SNIPPET table-with-inline-edit-controller
import { ensureSafeComponent } from '@embroider/util';
import { action } from '@ember/object';
import ExampleController from './example';
import CellEditToggle from 'ember-models-table/components/themes/default/cell-edit-toggle';

export default class InLineEditController extends ExampleController {
  // custom component for different framework-based demos
  // you will provide your component directly in the template
  get cellEditToggleComponent() {
    return ensureSafeComponent(CellEditToggle, this);
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
