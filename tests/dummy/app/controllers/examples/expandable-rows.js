import Ember from 'ember';
import generateContent from '../../utils/c';

const {A} = Ember;

export default Ember.Controller.extend({

  title: 'Expandable Rows',
  model: generateContent(20),
  expandedRowComponent: 'expanded-row',
  columns: A([
    {
      component: 'expand-toggle',
      mayBeHidden: false
    },
    {
      propertyName: 'id',
      title: 'ID'
    },
    { propertyName: 'firstName' },
    { propertyName: 'lastName' },
    { propertyName: 'city' }
  ])

});