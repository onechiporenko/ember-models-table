import Controller from '@ember/controller';

export default Controller.extend({

  actions: {
    deleteRecord (record) {
      record.destroyRecord();
    }
  }

});
