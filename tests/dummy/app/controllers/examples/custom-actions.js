import Ember from 'ember';
import generateContent from '../../utils/c';

const {A} = Ember;

export default Ember.Controller.extend({

  title: 'Custom Actions',
  model: generateContent(30),
  columns: A([
    {
      propertyName: 'id',
      title: 'ID'
    },
    {
      propertyName: 'firstName',
      title: 'First Name'
    },
    {
      propertyName: 'lastName',
      title: 'Last Name'
    },
    {
      propertyName: 'city',
      title: 'City'
    },
    {
      title: 'Delete',
      template: 'custom/delete'
    }
  ]),

  actions: {
    deleteRecord (record) {
      var model = this.get('model');
      this.set('model', model.without(record));
    }
  }

});