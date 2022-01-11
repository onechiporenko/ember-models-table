import ModelsTableRowSelectCheckboxComponent from '../../themes/default/row-select-checkbox';
import {
  macroCondition,
  dependencySatisfies,
  importSync,
} from '@embroider/macros';
import { ensureSafeComponent } from '@embroider/util';
import { assert } from '@ember/debug';

let PaperCheckBoxComponent: unknown;
let hasEmberPaper = false;
if (macroCondition(dependencySatisfies('ember-paper', '*'))) {
  PaperCheckBoxComponent = importSync('ember-paper/components/paper-checkbox');
  hasEmberPaper = true;
}

export default class RowSelectCheckbox extends ModelsTableRowSelectCheckboxComponent {
  get PaperCheckbox(): unknown {
    assert('ember-paper not found', hasEmberPaper);
    return ensureSafeComponent((PaperCheckBoxComponent as any).default, this);
  }
}
