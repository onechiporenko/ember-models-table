// BEGIN-SNIPPET nested-table-controller
import { getOwner } from '@ember/application';
import { action } from '@ember/object';
import ExampleController from './example';

export default class NestedTableController extends ExampleController {
  get cellEditToggleComponent() {
    return getOwner(this).lookup('component:models-table').themeInstance
      .cellEditToggleComponent;
  }

  get nestedColumns() {
    const theme = getOwner(this).lookup('component:models-table').themeInstance;
    return [
      {
        component: theme.rowSelectCheckboxComponent,
        disableFiltering: true,
        mayBeHidden: false,
        componentForSortCell: theme.rowSelectAllCheckboxComponent,
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
