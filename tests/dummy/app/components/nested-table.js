// BEGIN-SNIPPET nested-table-component
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import Component from '@glimmer/component';

export default class NestedTableComponent extends Component {
  fw = service();
  get cellEditToggleComponent() {
    return this.fw.themeInstance.cellEditToggleComponent;
  }

  get columns() {
    const theme = this.fw.themeInstance;
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
