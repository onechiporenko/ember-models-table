import Ember from 'ember';
import generateContent from '../../utils/c';

const {A} = Ember;

export default Ember.Controller.extend({

  title: 'Custom Column Classes',
  model: generateContent(10),
  columns: A([
    {
      propertyName: 'id',
      title: 'ID',
      className: 'text-right'
    },
    {
      propertyName: 'firstName',
      title: 'First Name',
      className: 'text-success'
    },
    {
      propertyName: 'lastName',
      title: 'Last Name',
      className: 'text-uppercase'
    },
    {
      propertyName: 'city',
      title: 'City',
      className: 'text-center'
    }
  ])

});