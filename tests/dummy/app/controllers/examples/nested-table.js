// BEGIN-SNIPPET nested-table-controller
import { action } from '@ember/object';
import ExampleController from './example';

export default class NestedTableController extends ExampleController {
  get cellEditToggleComponent() {
    return this.fw.themeInstance.cellEditToggleComponent;
  }

  get nestedColumns() {
    return [
      {
        component: this.fw.themeInstance.rowSelectCheckboxComponent,
        disableFiltering: true,
        mayBeHidden: false,
        componentForSortCell:
          this.fw.themeInstance.rowSelectAllCheckboxComponent,
        editable: false,
      },
      { propertyName: 'id', filterWithSelect: true, editable: false },
      { propertyName: 'date', editable: false },
      { propertyName: 'text' },
      {
        title: 'Edit',
        component: 'editRow',
        editable: false,
      },
    ];
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
