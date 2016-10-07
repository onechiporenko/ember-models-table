import Ember from 'ember';

const {set, on, getOwner} = Ember;

export default Ember.Controller.extend({

  c: {},

  onInit: on('init', function() {
    let owner = getOwner(this);
    set(this, 'c', owner.lookup('component:models-table'));
  })

});
