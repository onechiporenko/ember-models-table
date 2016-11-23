import Ember from 'ember';
import generateContent from '../../utils/c';

const {A, set} = Ember;

export default Ember.Controller.extend({

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