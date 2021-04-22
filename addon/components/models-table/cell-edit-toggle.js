import Component from '@glimmer/component';
import { action } from '@ember/object';
import { resolve } from 'rsvp';

/**
 * Component for cells used as toggle for edit-mode.
 *
 * Properties and event-handlers from [models-table/cell](Components.ModelsTableCell.html) are bound here
 *
 * Usage example:
 *
 * ```hbs
 * <ModelsTable
 *   @data={{data}}
 *   @columns={{columns}}
 *   @columnComponents={{hash
 *     editRow=(component
 *       "models-table/cell-edit-toggle"
 *       onSaveRow=(action "onSaveRow")
 *       onCancelRow=(action "onCancelRow")
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
 *
 * @namespace Components
 * @class ModelsTableCellEditToggle
 * @extends Glimmer.Component
 */
export default class CellEditToggleComponent extends Component {
  @action
  onClick(event) {
    event?.stopPropagation();
  }

  /**
   * Fires when "Save" button is clicked. Edit-mode for row is turned off
   *
   * @event saveClicked
   * @protected
   */
  @action
  saveClicked() {
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
   * @protected
   */
  @action
  editClicked() {
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
   * @protected
   */
  @action
  cancelClicked() {
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
