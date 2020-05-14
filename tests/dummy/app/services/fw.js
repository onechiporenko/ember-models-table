import {computed, get} from '@ember/object';
import {getOwner} from '@ember/application';
import Service from '@ember/service';

export default class Fw extends Service {

  @computed()
  get uiFramework() {
    const owner = getOwner(this);
    return get(owner, 'application.uiFramework');
  }

  @computed('uiFramework')
  get isBs3() {
    return window.location.href.includes('/v.3/bs3/') || this.uiFramework === 'bs3';
  }

  @computed('uiFramework')
  get isBs4() {
    return window.location.href.includes('/v.3/bs4/') || this.uiFramework === 'bs4';
  }

  @computed('uiFramework')
  get isPaper() {
    return window.location.href.includes('/v.3/paper/') || this.uiFramework === 'paper';
  }
  @computed('uiFramework')
  get isPlainHtml() {
    return window.location.href.includes('/v.3/plain-html/') || this.uiFramework === 'plain-html';
  }

}
