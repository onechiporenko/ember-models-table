// BEGIN-SNIPPET nested-table-controller
import Controller from '@ember/controller';
import {computed} from '@ember/object';
import {getOwner} from '@ember/application';
import {action} from '@ember/object';

export default class NestedTableController extends Controller {

  @computed
  get cellEditToggleComponent() {
    return getOwner(this)
      .lookup('component:models-table')
      .themeInstance.cellEditToggleComponent;
  }

  @computed
  get nestedColumns() {
    const theme = getOwner(this)
      .lookup('component:models-table').themeInstance;
    return [
      {
        component: theme.rowSelectCheckboxComponent,
        useFilter: false,
        mayBeHidden: false,
        componentForSortCell: theme.rowSelectAllCheckboxComponent,
        editable: false
      },
      {propertyName: 'id', filterWithSelect: true, editable: false},
      {propertyName: 'date', editable: false},
      {propertyName: 'text'},
      {
        title: 'Edit',
        component: 'editRow',
        editable: false
      }
    ];
  }

  @action
  onSaveRow(param) {
    return param.record.save();
  }

  @action
  onCancelRow({record}) {
    record.rollbackAttributes();
    return true;
  }
}
// END-SNIPPET
