import { action } from '@ember/object';
import Component from '@glimmer/component';
import { resolve } from 'rsvp';

import { type CellEditToggleSignature } from '../../../../interfaces/components/models-table/themes/default/cell-edit-toggle-signature.interface';
import { type ModelsTableDataItem } from '../../../../types/models-table-data-item.type';

export interface RowActionPayload {
  record: ModelsTableDataItem;
}

/**
 * Component for cells used as toggle for edit-mode.
 *
 * Properties and event-handlers from {@link DefaultTheme.Cell | Cell} are bound here
 *
 * Usage example:
 *
 * ```html
 * <ModelsTable
 *   @data={{this.data}}
 *   @columns={{this.columns}}
 *   @columnComponents={{hash
 *     editRow=(component
 *       "models-table/cell-edit-toggle"
 *       onSaveRow=this.onSaveRow
 *       onCancelRow=this.onCancelRow"
 *   )}}
 * />
 * ```
 *
 * ```js
 * import Controller from '@ember/controller';
 * import {action} from '@ember/object';
 *
 * export default class InLineEditController extends Controller {
 *
 *   data = [];
 *
 *   columns = [
 *     {propertyName: 'firstName'},
 *     {propertyName: 'lastName'},
 *     {
 *       title: 'Edit',
 *       component: 'editRow',
 *       editable: false // <--- IMPORTANT
 *     }
 *   ];
 *
 *   @action
 *   onSaveRow(param) {
 *     return param.record.save();
 *   }
 *
 *   @action
 *   onCancelRow({record}) {
 *     record.rollbackAttributes();
 *     return true;
 *   }
 * }
 * ```
 */
export default class CellEditToggle extends Component<CellEditToggleSignature> {
  @action
  protected onClick(event: Event): void {
    event?.stopPropagation();
  }

  /**
   * Fires when "Save" button is clicked. Edit-mode for row is turned off
   *
   * @event saveClicked
   */
  @action
  protected saveClicked(): void {
    let actionResult = true;
    if (this.args.onSaveRow) {
      actionResult = this.args.onSaveRow({ record: this.args.record });
    }
    resolve(actionResult).then((result) => {
      if (result) {
        this.args.saveRow();
      }
    });
  }

  /**
   * Fires when "Edit" button is clicked. Edit-mode for row is turned on
   *
   * @event editClicked
   */
  @action
  protected editClicked(): void {
    let actionResult = true;
    if (this.args.onEditRow) {
      actionResult = this.args.onEditRow({ record: this.args.record });
    }
    resolve(actionResult).then((result) => {
      if (result) {
        this.args.editRow();
      }
    });
  }

  /**
   * Fires when "Cancel Edit" button is clicked. Edit-mode for row is turned off
   *
   * @event cancelClicked
   */
  @action
  protected cancelClicked(): void {
    let actionResult = true;
    if (this.args.onCancelRow) {
      actionResult = this.args.onCancelRow({ record: this.args.record });
    }
    resolve(actionResult).then((result) => {
      if (result) {
        this.args.cancelEditRow();
      }
    });
  }
}
