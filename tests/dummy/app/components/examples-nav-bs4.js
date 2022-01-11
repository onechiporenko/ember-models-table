import Component from '@glimmer/component';
import {
  macroCondition,
  dependencySatisfies,
  importSync,
} from '@embroider/macros';
import { ensureSafeComponent } from '@embroider/util';
import { assert } from '@ember/debug';

let BSNavComponent;
let hasEmberBootstrap = false;
if (macroCondition(dependencySatisfies('ember-bootstrap', '>=4.*'))) {
  BSNavComponent = importSync('ember-bootstrap/components/bs-nav');
  hasEmberBootstrap = true;
}

export default class TopNavBS4 extends Component {
  get BsNav() {
    assert('ember-bootstrap v4 not found', hasEmberBootstrap);
    return ensureSafeComponent(BSNavComponent.default, this);
  }
}
