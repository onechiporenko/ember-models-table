import { inject as service } from '@ember/service';
import Controller from '@ember/controller';

export default class ApplicationController extends Controller {
  @service() fw;

  get containerClass() {
    if (this.fw.isBs5 || this.fw.isBs4) {
      return 'container-fluid';
    }
    return 'container';
  }
}
