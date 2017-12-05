import Controller from '@ember/controller';

export default Controller.extend({

  actions: {
    onSaveRow(record) {
      record.save();
    },

    onCancelRow(record) {
      record.rollbackAttributes();
    }
  }
});
