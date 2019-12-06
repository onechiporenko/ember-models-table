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
 * @namespace Components
 * @class ModelsTableCellEditToggle
 * @extends Ember.Component
 */
export default
@templateLayout(layout)
class CellEditToggleComponent extends Component {

  record = null;

  /**
   * Bound from {{#crossLink "Components.ModelsTable/themeInstance:property"}}ModelsTable.themeInstance{{/crossLink}}
   *
   * @type object
   * @default null
   */
  themeInstance = null;

  /**
   * Closure action sent on Edit Button being clicked
   *
   * Action will send one parameter - object with fields:
   *
   * * `record` - The record to be edited
   *
   * @type function
   * @event editRowAction
   * @default null
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
   * @type function
   * @event saveRowAction
   * @default null
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
   * @type function
   * @event cancelRowAction
   * @default null
   * @return Must return a truthy value to allow the row to exit the Edit state. May return a Promise.
   */
  cancelRowAction = null;

  /**
   * The label for the Edit Button
   *
   * @type string
   * @default themeInstance.editRowButtonLabelMsg
   */
  @alias('themeInstance.editRowButtonLabelMsg')
  editButtonLabel;

  /**
   * The label for the Cancel Button
   *
   * @type string
   * @default themeInstance.cancelRowButtonLabelMsg
   */
  @alias('themeInstance.cancelRowButtonLabelMsg')
  cancelButtonLabel;

  /**
   * The label for the Save Button
   *
   * @type string
   * @default themeInstance.saveRowButtonLabelMsg
   */
  @alias('themeInstance.saveRowButtonLabelMsg')
  saveButtonLabel;

  click(event) {
    event.stopPropagation();
  }

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
