// BEGIN-SNIPPET nested-table-component
import {layout as templateLayout} from '@ember-decorators/component';
import {getOwner} from '@ember/application';
import {action, computed} from '@ember/object';
import Component from '@ember/component';
import layout from '../templates/components/nested-table';

export default
@templateLayout(layout)
class NestedTableComponent extends Component {
  record = null;

  @computed
  get cellEditToggleComponent() {
    return getOwner(this)
      .lookup('component:models-table')
      .themeInstance.cellEditToggleComponent;
  }

  @computed
  get columns() {
    const owner = getOwner(this);
    const theme = owner.lookup('component:models-table').themeInstance;
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
