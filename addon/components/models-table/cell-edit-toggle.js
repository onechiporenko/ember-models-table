import {layout as templateLayout} from '@ember-decorators/component';
import Component from '@ember/component';
import layout from '../../templates/components/models-table/cell-edit-toggle';
import {action} from '@ember/object';
import {alias} from '@ember/object/computed';
import {resolve} from 'rsvp';

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
 *       saveRowAction=(action "onSaveRow")
 *       cancelRowAction=(action "onCancelRow")
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
 * @extends Ember.Component
 */
export default
@templateLayout(layout)
class CellEditToggleComponent extends Component {

  /**
   * Closure action sent on Edit Button being clicked
   *
   * Action will send one parameter - object with fields:
   *
   * * `record` - The record to be edited
   *
   * @event editRowAction
   * @return Must return a truthy value to allow the row to enter the Edit state. May return a Promise.
   */
  editRowAction = null;

  /**
   * Closure action sent on Save Button being clicked
   *
   * Action will send one parameter - object with fields:
   *
   * * `record` - The record to be saved
   *
   * @event saveRowAction
   * @return Must return a truthy value to allow the row to exit the Edit state. May return a Promise.
   */
  saveRowAction = null;

  /**
   * Closure action sent on Cancel Button being clicked
   *
   * Action will send one parameter - object with fields:
   *
   * * `record` - The record currently being edited
   *
   * @event cancelRowAction
   * @return Must return a truthy value to allow the row to exit the Edit state. May return a Promise.
   */
  cancelRowAction = null;

  /**
   * One of the [data](Components.ModelsTable.html#property_data)
   *
   * @default null
   * @property record
   * @type object
   */
  record = null;

  /**
   * Row's index where current cell is
   *
   * @property index
   * @default null
   * @type number
   */
  index = null;

  /**
   * @property column
   * @default null
   * @type Utils.ModelsTableColumn
   */
  column = null;

  /**
   * @property isEditRow
   * @default null
   * @protected
   * @type boolean
   */
  isEditRow = null;

  /**
   * @property groupedLength
   * @type number
   * @default null
   */
  groupedLength = null;

  /**
   * Closure action [ModelsTable.expandRow](Components.ModelsTable.html#event_expandRow)
   *
   * @event expandRow
   */
  expandRow = null;

  /**
   * Closure action [ModelsTable.collapseRow](Components.ModelsTable.html#event_collapseRow)
   *
   * @event collapseRow
   */
  collapseRow = null;

  /**
   * Closure action [ModelsTable.expandAllRows](Components.ModelsTable.html#event_expandAllRows)
   *
   * @event expandAllRows
   */
  expandAllRows = null;

  /**
   * Closure action [ModelsTable.collapseAllRows](Components.ModelsTable.html#event_collapseAllRows)
   *
   * @event collapseAllRows
   */
  collapseAllRows = null;

  /**
   * Closure action [ModelsTableRow.editRow](Components.ModelsTableRow.html#event_editRow)
   *
   * @event editRow
   */
  editRow = null;

  /**
   * Closure action [ModelsTableRow.saveRow](Components.ModelsTableRow.html#event_saveRow)
   *
   * @event saveRow
   */
  saveRow = null;

  /**
   * Closure action [ModelsTableRow.cancelEditRow](Components.ModelsTableRow.html#event_cancelEditRow)
   *
   * @event cancelEditRow
   */
  cancelEditRow = null;

  /**
   * Bound from [ModelsTable.themeInstance](Components.ModelsTable.html#property_themeInstance)
   *
   * @property themeInstance
   * @type object
   * @default null
   */
  themeInstance = null;

  /**
   * Is current row expanded or not
   *
   * @default null
   * @property isExpanded
   * @type boolean
   */
  isExpanded = null;

  /**
   * Is current row selected or not
   *
   * @default null
   * @property isSelected
   * @type boolean
   */
  isSelected = null;

  /**
   * @property isColumnEditable
   * @type boolean
   * @default false
   */
  isColumnEditable = false;

  /**
   * The label for the Edit Button
   *
   * @property editButtonLabel
   * @type string
   * @default themeInstance.editRowButtonLabelMsg
   * @protected
   */
  @alias('themeInstance.editRowButtonLabelMsg')
  editButtonLabel;

  /**
   * The label for the Cancel Button
   *
   * @property cancelButtonLabel
   * @type string
   * @default themeInstance.cancelRowButtonLabelMsg
   * @protected
   */
  @alias('themeInstance.cancelRowButtonLabelMsg')
  cancelButtonLabel;

  /**
   * The label for the Save Button
   *
   * @property saveButtonLabel
   * @type string
   * @default themeInstance.saveRowButtonLabelMsg
   * @protected
   */
  @alias('themeInstance.saveRowButtonLabelMsg')
  saveButtonLabel;

  click(event) {
    event.stopPropagation();
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
    if (this.saveRowAction) {
      actionResult = this.saveRowAction({record: this.record});
    }
    resolve(actionResult).then((result) => {
      if (result) {
        this.saveRow();
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
    if (this.editRowAction) {
      actionResult = this.editRowAction({record: this.record});
    }
    resolve(actionResult).then((result) => {
      if (result) {
        this.editRow();
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
    if (this.cancelRowAction) {
      actionResult = this.cancelRowAction({record: this.record});
    }
    resolve(actionResult).then((result) => {
      if (result) {
        this.cancelEditRow();
      }
    });
  }
}
