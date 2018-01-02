import Controller from '@ember/controller';
import {set} from '@ember/object';
import {getOwner} from '@ember/application';

export default Controller.extend({

  c: null,

  init() {
    let owner = getOwner(this);
    set(this, 'c', owner.lookup('component:models-table'));
    this._super(...arguments);
  }

});
