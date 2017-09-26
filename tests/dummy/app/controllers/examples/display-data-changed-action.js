import Controller from '@ember/controller';
import { set, get } from '@ember/object';

export default Controller.extend({

  actionData: null,
  actions: {
    myAction(data) {
      data.filteredContent = [`/* array with filtered records (${get(data, 'filteredContent.length')}) */`];
      data.selectedItems = [`/* array with selected records (${get(data, 'selectedItems.length')}) */`];
      set(this, 'actionData', data);
      this.toggleProperty('trigger');
    }
  }

});