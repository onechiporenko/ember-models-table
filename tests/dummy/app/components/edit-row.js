import Component from '@ember/component';
import {get} from '@ember/object';
import layout from '../templates/components/delete-row-comp';

export default Component.extend({
  layout,

  record: null,

  onEditRow: null,
  onSaveRow: null,
  onCancelRow: null,

  editLabel: 'Edit',
  cancelLabel: 'Cancel',
  saveLabel: 'Save',

  click(event) {
    event.stopPropagation();
  },

  actions: {
    saveClicked() {
      let actionResult = false;
      let action = get(this, 'onSave');
      if (action) {
        actionResult = action(get(this, 'record'));
      }
      if (actionResult !== true) {
        get(this, 'saveRow')();
      }
    },
    editClicked() {
      get(this, 'editRow')();
    },
    cancelClicked() {
      let actionResult = false;
      let action = get(this, 'onCancel');
      if (action) {
        actionResult = action(get(this, 'record'));
      }
      if (actionResult !== true) {
        get(this, 'cancelEditRow')();
      }
    }
  }
});
