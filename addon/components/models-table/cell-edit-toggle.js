import Component from '@ember/component';
import layout from '../../templates/components/models-table/cell-edit-toggle';
import { get, computed } from '@ember/object';
import { resolve } from 'rsvp';

export default Component.extend({
  layout,

  record: null,

  /**
   * Bound from {{#crossLink "Components.ModelsTable/themeInstance:property"}}ModelsTable.themeInstance{{/crossLink}}
   *
   * @property themeInstance
   * @type object
   * @default null
   */
  themeInstance: null,

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
  editRowAction: null,

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
  saveRowAction: null,

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
  cancelRowAction: null,

  /**
   * The label for the Edit Button
   *
   * @property editButtonLabel
   * @type string
   * @default themeInstance.messages.editRowButtonLabel
   */
  editButtonLabel: computed({
    get() {
      return get(this, 'themeInstance.messages.editRowButtonLabel');
    },
    set(k, v) {
      return v;
    }
  }),

  /**
   * The label for the Cancel Button
   *
   * @property cancelButtonLabel
   * @type string
   * @default themeInstance.messages.cancelRowButtonLabel
   */
  cancelButtonLabel:computed({
    get() {
      return get(this, 'themeInstance.messages.cancelRowButtonLabel');
    },
    set(k, v) {
      return v;
    }
  }),

  /**
   * The label for the Save Button
   *
   * @property saveButtonLabel
   * @type string
   * @default themeInstance.messages.saveRowButtonLabel
   */
  saveButtonLabel: computed({
    get() {
      return get(this, 'themeInstance.messages.saveRowButtonLabel');
    },
    set(k, v) {
      return v;
    }
  }),

  click(event) {
    event.stopPropagation();
  },

  actions: {
    saveClicked() {
      let actionResult = true;
      let action = get(this, 'saveRowAction');
      if (action) {
        actionResult = action({ record: get(this, 'record') });
      }
      resolve(actionResult).then((result) => {
        if (result) {
          get(this, 'saveRow')();
        }
      });
    },

    editClicked() {
      let actionResult = true;
      let editRow = get(this, 'editRow');
      let action = get(this, 'editRowAction');
      if (action) {
        actionResult = action({ record: get(this, 'record') });
      }
      resolve(actionResult).then((result) => {
        if (result) {
          editRow();
        }
      });
    },

    cancelClicked() {
      let actionResult = true;
      let action = get(this, 'cancelRowAction');
      if (action) {
        actionResult = action({ record: get(this, 'record') });
      }
      resolve(actionResult).then((result) => {
        if (result) {
          get(this, 'cancelEditRow')();
        }
      });
    }

  }
});
