import Controller from '@ember/controller';
import { A } from '@ember/array';
import generateContent from '../../utils/c';

export default Controller.extend({

  title: 'Filtering ignore case',
  model: generateContent(10),
  columns: A([
    {
      propertyName: 'id',
      title: 'ID',
      filterPlaceholder: 'Enter id'
    },
    {
      propertyName: 'firstName',
      title: 'First Name',
      filterPlaceholder: 'Enter first name'
    },
    {
      propertyName: 'lastName',
      title: 'Last Name',
      filterPlaceholder: 'Enter last name'
    },
    {
      propertyName: 'city',
      title: 'City',
      filterPlaceholder: 'Enter city'
    }
  ])

});