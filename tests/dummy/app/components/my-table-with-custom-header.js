import Ember from 'ember';
import ModelsTable from 'ember-models-table/components/models-table';

const {get, set, A} = Ember;

export default ModelsTable.extend({

  actions: {
    toggleAllSelection() {
      let selectedItems = get(this, '_selectedItems');
      let data = get(this, 'data');
      if(selectedItems.length === data.length) {
        get(this, '_selectedItems').clear();
      }
      else {
        set(this, '_selectedItems', A(data.slice()));
      }
      this.userInteractionObserver();
    }
  }

});
