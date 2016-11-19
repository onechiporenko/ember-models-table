import Ember from 'ember';

const {A} = Ember;

export default Ember.Controller.extend({

  title: '`routeName` usage example',
  description: 'firstName-cell is a link to the route for model in the row',
  columns: A([
    {
      title: 'ID',
      filteredBy: 'id',
      routeName: 'users.user'
    },
    {
      propertyName: 'firstName',
      routeName: 'users.user',
      title: 'First Name'
    },
    {
      propertyName: 'lastName',
      title: 'Last Name',
      filterWithSelect: true
    },
    {
      propertyName: 'city',
      title: 'City'
    }
  ])

});