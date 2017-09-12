import Controller from '@ember/controller';
import { A } from '@ember/array';
import { set } from '@ember/object';
import generateContent from '../../utils/c';

export default Controller.extend({

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