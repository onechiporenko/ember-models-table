import Controller from '@ember/controller';
import { A } from '@ember/array';
import { get, set } from '@ember/object';
import generateContent from '../../utils/c';

export default Controller.extend({

  title: 'Add/Remove column',
  description: 'Column "Last Name" is not just shown/hidden. It is removed or added to the columns-array and table detects this changes.',
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
      propertyName: 'city',
      title: 'City'
    }
  ]),
  column: {
    propertyName: 'lastName',
    title: 'Last Name'
  },

  columnAdded: false,

  actions: {

    toggleColumn () {
      var columnAdded = get(this, 'columnAdded');
      var columns = get(this, 'columns');
      var column = get(this, 'column');
      if(columnAdded) {
        // remove column
        columns = A(columns).filter(c=>c.propertyName !== column.propertyName);
      }
      else {
        // add column
        columns.pushObject(column);
      }
      set(this, 'columns', A(columns));
      set(this, 'columnAdded', !columnAdded);
    }
  }

});