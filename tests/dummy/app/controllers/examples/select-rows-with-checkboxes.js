import Ember from 'ember';
import generateContent from '../../utils/c';

const {A, on, getOwner, set} = Ember;

export default Ember.Controller.extend({

  title: 'Common table',
  model: generateContent(20),
  columns: A([
    {
      template: 'custom/checkbox',
      useFilter: false,
      mayBeHidden: false,
      templateForSortCell: 'custom/checkbox-all'
    },
    {
      propertyName: 'id'
    },
    {
      propertyName: 'firstName'
    },
    {
      propertyName: 'lastName'
    },
    {
      propertyName: 'city'
    }
  ]),

  actions: {
    displayDataChanged(settings) {
      console.log(settings.selectedItems);
    }
  },


  // for demo purposes
  c: {},
  onInit: on('init', function() {
    let owner = getOwner(this);
    set(this, 'c', owner.lookup('component:my-table-with-custom-header'));
  })

});