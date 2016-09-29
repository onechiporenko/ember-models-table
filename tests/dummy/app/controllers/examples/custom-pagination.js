import Ember from 'ember';
import generateContent from '../../utils/c';

const {A} = Ember;

export default Ember.Controller.extend({

  title: 'Custom pagination',
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
    }
  ])

});