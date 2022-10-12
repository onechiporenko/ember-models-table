import Component from '@glimmer/component';
import { action } from '@ember/object';
import { resolve } from 'rsvp';
import DefaultTheme from '../../../../services/emt-themes/default';
import { ModelsTableDataItem } from '../../../models-table';

export interface RowActionPayload {
  record: ModelsTableDataItem;
}

export interface CellEditToggleArgs {
  /**
   * Bound from {@link DefaultTheme.CellArgs.themeInstance | CellArgs.themeInstance}
   */
  themeInstance: DefaultTheme;
  /**
   * One item of {@link Core.ModelsTable.data | ModelsTable.data}
   */
  record: ModelsTableDataItem;
  /**
   * Bound from {@link DefaultTheme.CellArgs.isEditRow | CellArgs.isEditRow}
   */
  isEditRow: boolean;
  /**
   * Bound from {@link DefaultTheme.CellArgs.editRow | CellArgs.editRow}
   *
   * @event editRow
   */
  editRow: () => void;
  /**
   * Bound from {@link DefaultTheme.CellArgs.saveRow | CellArgs.saveRow}
   *
   * @event saveRow
   */
  saveRow: () => void;
  /**
   * Bound from {@link DefaultTheme.CellArgs.cancelEditRow | CellArgs.cancelEditRow}
   *
   * @event cancelEditRow
   */
  cancelEditRow: () => void;
  /**
   * Action-handler bound in the {@link Core.ModelsTableArgs.columnComponents | columnComponents}-hash.
   *
   * It's called when edited row is started to save ("Save"-button is clicked)
   *
   * @event onSaveRow
   */
  onSaveRow: (payload: RowActionPayload) => boolean;
  /**
   * Action-handler bound in the {@link Core.ModelsTableArgs.columnComponents | columnComponents}-hash.
   *
   * It's called when edit row is started ("Edit"-button is clicked)
   *
   * @event onEditRow
   */
  onEditRow: (payload: RowActionPayload) => boolean;
  /**
   * Action-handler bound in the {@link Core.ModelsTableArgs.columnComponents | columnComponents}-hash.
   *
   * It's called when edit row is canceled ("Cancel"-button is clicked)
   *
   * @event onCancelRow
   */
  onCancelRow: (payload: RowActionPayload) => boolean;
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
export default class CellEditToggle extends Component<CellEditToggleArgs> {
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
