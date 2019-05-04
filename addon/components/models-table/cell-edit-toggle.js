import {layout as templateLayout} from '@ember-decorators/component';
import Component from '@ember/component';
import layout from '../../templates/components/models-table/cell-edit-toggle';
import {action, computed, get} from '@ember/object';
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
@templateLayout(layout)
export default class CellEditToggleComponent extends Component {

  record = null;

  /**
   * Bound from {{#crossLink "Components.ModelsTable/themeInstance:property"}}ModelsTable.themeInstance{{/crossLink}}
   *
   * @property themeInstance
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
   * @property editButtonLabel
   * @type string
   * @default themeInstance.messages.editRowButtonLabel
   */
  @computed('themeInstance.messages.editRowButtonLabel')
  get editButtonLabel() {
    return get(this, 'themeInstance.messages.editRowButtonLabel');
  }

  /**
   * The label for the Cancel Button
   *
   * @property cancelButtonLabel
   * @type string
   * @default themeInstance.messages.cancelRowButtonLabel
   */
  @computed('themeInstance.messages.cancelRowButtonLabel')
  get cancelButtonLabel() {
    return get(this, 'themeInstance.messages.cancelRowButtonLabel');
  }

  /**
   * The label for the Save Button
   *
   * @property saveButtonLabel
   * @type string
   * @default themeInstance.messages.saveRowButtonLabel
   */
  @computed('themeInstance.messages.saveRowButtonLabel')
  get saveButtonLabel() {
    return get(this, 'themeInstance.messages.saveRowButtonLabel');
  }

  click(event) {
    event.stopPropagation();
  }

  @action
  saveClicked() {
    let actionResult = true;
    let saveRowAction = get(this, 'saveRowAction');
    if (saveRowAction) {
      actionResult = saveRowAction({record: get(this, 'record')});
    }
    resolve(actionResult).then((result) => {
      if (result) {
        get(this, 'saveRow')();
      }
    });
  }

  @action
  editClicked() {
    let actionResult = true;
    let editRow = get(this, 'editRow');
    let editRowAction = get(this, 'editRowAction');
    if (editRowAction) {
      actionResult = editRowAction({record: get(this, 'record')});
    }
    resolve(actionResult).then((result) => {
      if (result) {
        editRow();
      }
    });
  }

  @action
  cancelClicked() {
    let actionResult = true;
    let cancelRowAction = get(this, 'cancelRowAction');
    if (cancelRowAction) {
      actionResult = cancelRowAction({record: get(this, 'record')});
    }
    resolve(actionResult).then((result) => {
      if (result) {
        get(this, 'cancelEditRow')();
      }
    });
  }
}
