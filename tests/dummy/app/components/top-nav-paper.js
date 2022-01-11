import Component from '@glimmer/component';
import {
  macroCondition,
  dependencySatisfies,
  importSync,
} from '@embroider/macros';
import { ensureSafeComponent } from '@embroider/util';
import { assert } from '@ember/debug';

let PaperToolbarComponent;
let PaperMenuComponent;
let PaperButtonComponent;
let PaperIconComponent;
let hasEmberPaper = false;
if (macroCondition(dependencySatisfies('ember-paper', '*'))) {
  PaperToolbarComponent = importSync('ember-paper/components/paper-toolbar');
  PaperMenuComponent = importSync('ember-paper/components/paper-menu');
  PaperButtonComponent = importSync('ember-paper/components/paper-button');
  PaperIconComponent = importSync('ember-paper/components/paper-icon');
  hasEmberPaper = true;
}

export default class TopNavBS4 extends Component {
  get PaperToolbar() {
    assert('ember-paper not found', hasEmberPaper);
    return ensureSafeComponent(PaperToolbarComponent.default, this);
  }

  get PaperMenu() {
    assert('ember-paper not found', hasEmberPaper);
    return ensureSafeComponent(PaperMenuComponent.default, this);
  }

  get PaperButton() {
    assert('ember-paper not found', hasEmberPaper);
    return ensureSafeComponent(PaperButtonComponent.default, this);
  }

  get PaperIcon() {
    assert('ember-paper not found', hasEmberPaper);
    return ensureSafeComponent(PaperIconComponent.default, this);
  }
}
