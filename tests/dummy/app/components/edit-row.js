import Component from '@ember/component';
import {get, set } from '@ember/object';
import layout from '../templates/components/delete-row-comp';

export default Component.extend({
  layout,

  record: null,

  onEditRow: null,


  publicRowApi: null,

  editLabel: "Edit",
  cancelLabel: "Cancel",
  saveLabel: "Save",

  _eventHash(event) {
    let modelTableApi = this.modelTableApi();
    set(modelTableApi, "event", event);
    return modelTableApi;
  },

  click(event) {
    event.stopPropagation();
  },

  actions: {
    saveClicked() {
      let actionResult = false;
      let api = get(this, "publicRowApi");
      let action = get(this, "onSave");
      if (action) {
        actionResult = action(get(this, "record"), api)
      }
      if (actionResult !== true) {
        api.saveRow();
      }
    },
    editClicked() {
      let actionResult = false;
      let api = get(this, "publicRowApi");
      let action = get(this, "onEdit");
      if (action) {
        actionResult = action(get(this, "record"), api)
      }
      if (actionResult !== true) {
        api.editRow();
      }
    },
    cancelClicked() {
      let actionResult = false;
      let api = get(this, "publicRowApi");
      let action = get(this, "onCancel");
      if (action) {
        actionResult = action(get(this, "record"), api)
      }
      if (actionResult !== true) {
        api.cancelEditRow();
      }
    }
  }
});
