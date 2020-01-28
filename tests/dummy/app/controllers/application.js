import {inject as service} from '@ember/service';
import {computed, get} from '@ember/object';
import Controller from '@ember/controller';

export default class ApplicationController extends Controller {

  @service() fw;

  @computed('fw.{isBs3,isBs4,isSemanticUI,isPlainHtml}')
  get containerClass() {
    if (get(this, 'fw.isBs3') || get(this, 'fw.isBs4')) {
      return 'container-fluid';
    }
    if (get(this, 'fw.isSemanticUI')) {
      return 'ui container';
    }
    return 'container';
  }

}
