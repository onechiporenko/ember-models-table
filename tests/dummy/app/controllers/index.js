import Controller from '@ember/controller';
import { set } from '@ember/object';
import { on } from '@ember/object/evented';
import { getOwner } from '@ember/application';

export default Controller.extend({

  c: {},

  onInit: on('init', function() {
    let owner = getOwner(this);
    set(this, 'c', owner.lookup('component:models-table'));
  })

});
