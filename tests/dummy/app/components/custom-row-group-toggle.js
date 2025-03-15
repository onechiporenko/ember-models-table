import { action } from '@ember/object';
import Component from '@glimmer/component';

export default class CustomRowGroupToggleComponent extends Component {
  @action
  doToggleGroupedRows(e) {
    this.args.toggleGroupedRows(this.args.groupedValue);
    e?.stopPropagation?.();
    return false;
  }

  @action
  doToggleGroupedRowsSelection(e) {
    this.args.toggleGroupedRowsSelection(this.args.groupedValue);
    e?.stopPropagation?.();
    return false;
  }

  @action
  doToggleGroupedRowsExpands(e) {
    this.args.toggleGroupedRowsExpands(this.args.groupedValue);
    e?.stopPropagation?.();
    return false;
  }
}
