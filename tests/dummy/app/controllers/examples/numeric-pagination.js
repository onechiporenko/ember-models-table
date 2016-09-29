import Ember from 'ember';
import generateContent from '../../utils/c';

const {A, set} = Ember;

export default Ember.Controller.extend({

  title: 'Table with numeric navigation',
  model: A(Array.prototype.concat(generateContent(30), generateContent(30), generateContent(30), generateContent(30))).map((item, index) => {set(item, 'id', index + 1); return item;}),
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