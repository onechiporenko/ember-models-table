import Ember from 'ember';
import generateContent from '../../utils/c';

const { A } = Ember;

export default Ember.Controller.extend({

  title: 'Column sets',
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
      propertyName: 'age',
      title: 'Age'
    }
  ]),
  columnSets: [
    {
      label: 'Only Name',
      showColumns: ['firstName', 'lastName']
    },
    {
      label: 'Random',
      showColumns(columns) {
        columns.forEach((column) => {
          column.set('isHidden', Math.random() > 0.5);
        });
        this._sendColumnsVisibilityChangedAction();
      }
    },
    {
      label: 'Add Name',
      showColumns: ['firstName', 'lastName'],
      hideOtherColumns: false
    },
    {
      label: 'Toggle Name',
      showColumns: ['firstName', 'lastName'],
      toggleSet: true
    }
  ]

});
