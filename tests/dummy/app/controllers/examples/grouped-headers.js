import Ember from 'ember';
import generateContent from '../../utils/c';

const {A} = Ember;

export default Ember.Controller.extend({

  title: 'Grouped Headers',
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
    }
  ]),

  groupedHeaders: [
    [
      {title: 'Big Title', colspan: 4}
    ],
    [
      {title: 'Subtitle 1', colspan: 2},
      {title: 'Subtitle 2', colspan: 2}
    ]
  ]

});