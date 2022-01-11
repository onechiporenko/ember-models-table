import { action } from '@ember/object';
import Component from '@glimmer/component';
import {
  macroCondition,
  dependencySatisfies,
  importSync,
} from '@embroider/macros';
import { ensureSafeComponent } from '@embroider/util';
import { assert } from '@ember/debug';

let PaperTabsComponent;
let hasEmberPaper = false;
if (macroCondition(dependencySatisfies('ember-paper', '*'))) {
  PaperTabsComponent = importSync('ember-paper/components/paper-tabs');
  hasEmberPaper = true;
}

export default class ExamplesNavPaper extends Component {
  @action
  noop() {
    // do nothing.
  }

  get PaperTabs() {
    assert('ember-paper not found', hasEmberPaper);
    return ensureSafeComponent(PaperTabsComponent.default, this);
  }
}
