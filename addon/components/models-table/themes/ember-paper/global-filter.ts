import ModelsTableGlobalFilterComponent from '../../themes/default/global-filter';
import {
  macroCondition,
  dependencySatisfies,
  importSync,
} from '@embroider/macros';
import { ensureSafeComponent } from '@embroider/util';
import { assert } from '@ember/debug';

let PaperButtonComponent: unknown;
let PaperInputComponent: unknown;
let PaperIconComponent: unknown;
let hasEmberPaper = false;
if (macroCondition(dependencySatisfies('ember-paper', '*'))) {
  PaperButtonComponent = importSync('ember-paper/components/paper-button');
  PaperInputComponent = importSync('ember-paper/components/paper-input');
  PaperIconComponent = importSync('ember-paper/components/paper-icon');
  hasEmberPaper = true;
}

export default class GlobalFilter extends ModelsTableGlobalFilterComponent {
  get PaperButton(): unknown {
    assert('ember-paper not found', hasEmberPaper);
    return ensureSafeComponent((PaperButtonComponent as any).default, this);
  }

  get PaperInput(): unknown {
    assert('ember-paper not found', hasEmberPaper);
    return ensureSafeComponent((PaperInputComponent as any).default, this);
  }

  get PaperIcon(): unknown {
    assert('ember-paper not found', hasEmberPaper);
    return ensureSafeComponent((PaperIconComponent as any).default, this);
  }
}
