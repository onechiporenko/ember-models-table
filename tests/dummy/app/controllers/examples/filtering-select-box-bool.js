import Controller from '@ember/controller';
import { A } from '@ember/array';
import generateContent from '../../utils/c';

export default Controller.extend({

  title: 'Filtering with select-box (by boolean values)',
  model: generateContent(10),
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
      propertyName: 'rand',
      filterWithSelect: true
    }
  ])

});