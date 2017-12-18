import Controller from '@ember/controller';

export default Controller.extend({

  actions: {
    onSaveRow(param) {
      return param.record.save();
    },

    onCancelRow( { record } ) {
      record.rollbackAttributes();
      return true;
    }
  }
});
