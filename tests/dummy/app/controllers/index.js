import Controller from '@ember/controller';
import {set} from '@ember/object';
import {getOwner} from '@ember/application';

export default class IndexController extends Controller {

  c = null;

  init() {
    let owner = getOwner(this);
    set(this, 'c', owner.lookup('component:models-table'));
    super.init(...arguments);
  }

}
