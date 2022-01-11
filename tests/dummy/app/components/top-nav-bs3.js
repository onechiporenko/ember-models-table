import Component from '@glimmer/component';
import {
  macroCondition,
  dependencySatisfies,
  importSync,
} from '@embroider/macros';
import { ensureSafeComponent } from '@embroider/util';
import { assert } from '@ember/debug';

let BSNavbarComponent;
let hasEmberBootstrap = false;
if (macroCondition(dependencySatisfies('ember-bootstrap', '3.*'))) {
  BSNavbarComponent = importSync('ember-bootstrap/components/bs-navbar');
  hasEmberBootstrap = true;
}

export default class TopNavBS3 extends Component {
  get BsNavbar() {
    assert('ember-bootstrap v3 not found', hasEmberBootstrap);
    return ensureSafeComponent(BSNavbarComponent.default, this);
  }
}
