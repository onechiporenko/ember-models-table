import Component from '@glimmer/component';
import { type CellContentEditSignature } from '../../../../interfaces/components/models-table/themes/default/cell-content-edit-signature.interface';
import { action, set } from '@ember/object';

/**
 * Component for cells in the edit-mode.
 *
 * Properties and event-handlers from [models-table/cell](Components.ModelsTableCell.html) are bound here
 */
export default class CellContentEdit extends Component<CellContentEditSignature> {
  @action
  updateProperty(value: string): void {
    if (!this.args.column.propertyName) {
      return;
    }
    set(this.args.record, this.args.column.propertyName, value);
  }
}
