import Controller from '@ember/controller';
import { A } from '@ember/array';
import generateContent from '../../utils/c';

export default Controller.extend({

  title: 'Filtering with select-box',
  model: generateContent(10),
  columns: A([
    {
      propertyName: 'id',
      title: 'ID'
    },
    {
      propertyName: 'firstName',
      title: 'First Name',
      filterWithSelect: true
    },
    {
      propertyName: 'lastName',
      title: 'Last Name',
      filterWithSelect: true,
      predefinedFilterOptions: [
        'Smith',
        'Brown'
      ]
    },
    {
      propertyName: 'city',
      title: 'City'
    }
  ])

});