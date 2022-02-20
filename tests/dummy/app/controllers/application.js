import { ensureSafeComponent } from '@embroider/util';
import { inject as service } from '@ember/service';
import Controller from '@ember/controller';
import {
  getPaperContent,
  getPaperToolbar,
} from 'ember-models-table/utils/emt/themes/ep';

export default class ApplicationController extends Controller {
  get PaperContent() {
    return ensureSafeComponent(getPaperContent(), this);
  }

  get PaperToolbar() {
    return ensureSafeComponent(getPaperToolbar(), this);
  }

  @service() fw;

  get containerClass() {
    if (this.fw.isBs5 || this.fw.isBs4) {
      return 'container-fluid';
    }
    return 'container';
  }
}
