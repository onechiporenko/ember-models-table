import Ember from 'ember';
import generateContent from '../../utils/c';

const {A} = Ember;

export default Ember.Controller.extend({

  title: 'Custom Actions',
  content: generateContent(30),
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
      var content = this.get('content');
      this.set('content', content.without(record));
    }
  }

});