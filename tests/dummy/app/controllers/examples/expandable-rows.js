import Ember from 'ember';
import generateContent from '../../utils/c';

const {A} = Ember;

export default Ember.Controller.extend({

  title: 'Expandable Rows',
  model: generateContent(20),
  expandedRowTemplate: 'custom/expanded-row',
  columns: A([
    {
      template: 'components/models-table/expand-row-cell',
      templateForFilterCell: 'components/models-table/expand-all-rows-cell',
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