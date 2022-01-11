import { inject as service } from '@ember/service';
import Controller from '@ember/controller';
import {
  macroCondition,
  dependencySatisfies,
  importSync,
} from '@embroider/macros';
import { ensureSafeComponent } from '@embroider/util';
import { assert } from '@ember/debug';

let PaperContentComponent;
let PaperToolbarComponent;
let hasEmberPaper = false;
if (macroCondition(dependencySatisfies('ember-paper', '*'))) {
  PaperContentComponent = importSync('ember-paper/components/paper-content');
  PaperToolbarComponent = importSync('ember-paper/components/paper-toolbar');
  hasEmberPaper = true;
}

export default class ApplicationController extends Controller {
  @service() fw;

  get containerClass() {
    if (this.fw.isBs3 || this.fw.isBs4) {
      return 'container-fluid';
    }
    return 'container';
  }

  get PaperContent() {
    assert('ember-paper not found', hasEmberPaper);
    return ensureSafeComponent(PaperContentComponent.default, this);
  }

  get PaperToolbar() {
    assert('ember-paper not found', hasEmberPaper);
    return ensureSafeComponent(PaperToolbarComponent.default, this);
  }
}
