import Controller from '@ember/controller';
import { A } from '@ember/array';
import generateContent from '../../utils/c';

export default Controller.extend({

  title: 'Table with custom sort column',
  message: 'Click on `Last Name` triggers sorting by `First Name`',
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
      title: 'Last Name',
      sortedBy: 'firstName'
    },
    {
      propertyName: 'city',
      title: 'City'
    }
  ])

});