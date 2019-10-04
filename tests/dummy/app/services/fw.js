import {computed, get} from '@ember/object';
import {getOwner} from '@ember/application';
import Service from '@ember/service';

export default class Fw extends Service {

  @computed()
  get isBs3() {
    const owner = getOwner(this);
    const uiFramework = get(owner, 'application.uiFramework');
    return window.location.href.includes('/v.3/bs3/') || uiFramework === 'bs3';
  }

  @computed()
  get isBs4() {
    const owner = getOwner(this);
    const uiFramework = get(owner, 'application.uiFramework');
    return window.location.href.includes('/v.3/bs4/') || uiFramework === 'bs4';
  }

  @computed()
  get isSemanticUI() {
    const owner = getOwner(this);
    const uiFramework = get(owner, 'application.uiFramework');
    return window.location.href.includes('/v.3/semantic/') || uiFramework === 'semantic-ui';
  }

  @computed()
  get isPaper() {
    const owner = getOwner(this);
    const uiFramework = get(owner, 'application.uiFramework');
    return window.location.href.includes('/v.3/paper/') || uiFramework === 'paper';
  }

}
