import { action, set } from '@ember/object';
import Component from '@glimmer/component';

import { type CellContentEditSignature } from '../../../../interfaces/components/models-table/themes/default/cell-content-edit-signature.interface';

/**
 * Component for cells in the edit-mode.
 *
 * Properties and event-handlers from [models-table/cell](Components.ModelsTableCell.html) are bound here
 */
export default class CellContentEdit extends Component<CellContentEditSignature> {
  @action
  updateProperty(e: Event): void {
    if (!this.args.column.propertyName) {
      return;
    }
    const target = e.target as HTMLButtonElement;
    set(this.args.record, this.args.column.propertyName, target.value);
  }
}
