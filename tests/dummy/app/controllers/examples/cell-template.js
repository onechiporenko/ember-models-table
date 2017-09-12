import Controller from '@ember/controller';
import { A } from '@ember/array';
import generateContent from '../../utils/c';

export default Controller.extend({

  title: 'Table with custom template in the cell',
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
      template: 'custom/fullname',
      title: 'Full name'
    }
  ])

});