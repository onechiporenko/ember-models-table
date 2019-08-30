import {computed} from '@ember/object';
import Service from '@ember/service';

export default class Fw extends Service {

  @computed()
  get isBs3() {
    return window.location.href.includes('/v.3/bs3/');
  }

  @computed()
  get isBs4() {
    return window.location.href.includes('/v.3/bs4/');
  }

  @computed()
  get isSemanticUI() {
    return window.location.href.includes('/v.3/semantic/') || window.location.href.includes('localhost');
  }

}
