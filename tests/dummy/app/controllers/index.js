import Ember from 'ember';

const {set, on} = Ember;

export default Ember.Controller.extend({

  c: {},

  onInit: on('init', function() {
    let cl = this.container.lookup('component-lookup:main');
    let c = cl.lookupFactory('modals-table', this.get('container')).create();
    set(this, 'c', c);
  })

});
