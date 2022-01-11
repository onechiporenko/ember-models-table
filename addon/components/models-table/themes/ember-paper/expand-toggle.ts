import ModelsTableExpandToggleComponent from '../../themes/default/expand-toggle';
import {
  macroCondition,
  dependencySatisfies,
  importSync,
} from '@embroider/macros';
import { ensureSafeComponent } from '@embroider/util';
import { assert } from '@ember/debug';

let PaperButtonComponent: unknown;
let PaperIconComponent: unknown;
let hasEmberPaper = false;
if (macroCondition(dependencySatisfies('ember-paper', '*'))) {
  PaperButtonComponent = importSync('ember-paper/components/paper-button');
  PaperIconComponent = importSync('ember-paper/components/paper-icon');
  hasEmberPaper = true;
}

export default class ExpandToggle extends ModelsTableExpandToggleComponent {
  get PaperButton(): unknown {
    assert('ember-paper not found', hasEmberPaper);
    return ensureSafeComponent((PaperButtonComponent as any).default, this);
  }

  get PaperIcon(): unknown {
    assert('ember-paper not found', hasEmberPaper);
    return ensureSafeComponent((PaperIconComponent as any).default, this);
  }
}
