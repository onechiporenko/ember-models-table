import Controller from '@ember/controller';
import { A } from '@ember/array';
import { set } from '@ember/object';
import generateContent from '../../utils/c';

export default Controller.extend({

  title: '`displayDataChangedAction` argument',
  model: generateContent(30),
  actionData: null,
  columns: A([
    {propertyName: 'id'},
    {propertyName: 'firstName'},
    {propertyName: 'lastName'},
    {propertyName: 'city'}
  ]),

  actions: {
    myAction(data) {
      data.filteredContent = [`/* array with filtered records (${data.filteredContent.length}) */`];
      data.selectedItems = [`/* array with selected records (${data.selectedItems.length}) */`];
      set(this, 'actionData', data);
      this.toggleProperty('trigger');
    }
  }

});