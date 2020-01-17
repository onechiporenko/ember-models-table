import {layout as templateLayout} from '@ember-decorators/component';
import Component from '@ember/component';
import {action} from '@ember/object';
import layout from '../templates/components/custom-row-group-toggle';

export default
@templateLayout(layout)
class CustomRowGroupToggleComponent extends Component {

  @action
  doToggleGroupedRows() {
    this.toggleGroupedRows(this.groupedValue);
    return false;
  }

  @action
  doToggleGroupedRowsSelection() {
    this.toggleGroupedRowsSelection(this.groupedValue);
    return false;
  }

  @action
  doToggleGroupedRowsExpands() {
    this.toggleGroupedRowsExpands(this.groupedValue);
    return false;
  }
}
