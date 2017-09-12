import Controller from '@ember/controller';
import { A } from '@ember/array';
import { on } from '@ember/object/evented';
import { getOwner } from '@ember/application';
import { set } from '@ember/object';
import { warn } from '@ember/debug';
import generateContent from '../../utils/c';

export default Controller.extend({

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
      warn(settings.selectedItems);
    }
  },


  // for demo purposes
  c: {},
  onInit: on('init', function() {
    let owner = getOwner(this);
    set(this, 'c', owner.lookup('component:my-table-with-custom-header'));
  })

});