import Controller from '@ember/controller';
import { A } from '@ember/array';
import generateContent from '../../utils/c';

export default Controller.extend({

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
      component: 'delete-row'
    }
  ]),

  actions: {
    deleteRecord (record) {
      var model = this.get('model');
      this.set('model', model.without(record));
    }
  }

});