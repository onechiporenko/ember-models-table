import Controller from '@ember/controller';
import { A } from '@ember/array';
import generateContent from '../../utils/c';

export default Controller.extend({

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