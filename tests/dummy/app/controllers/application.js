import { inject as service } from '@ember/service';
import { get } from '@ember/object';
import Controller from '@ember/controller';

export default class ApplicationController extends Controller {
  @service() fw;

  get containerClass() {
    if (get(this, 'fw.isBs3') || get(this, 'fw.isBs4')) {
      return 'container-fluid';
    }
    return 'container';
  }
}
