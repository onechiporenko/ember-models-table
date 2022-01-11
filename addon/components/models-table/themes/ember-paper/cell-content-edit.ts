import ModelsTableCellContentEditComponent from '../../themes/default/cell-content-edit';
import {
  macroCondition,
  dependencySatisfies,
  importSync,
} from '@embroider/macros';
import { ensureSafeComponent } from '@embroider/util';
import { assert } from '@ember/debug';

let PaperInputComponent: unknown;
let hasEmberPaper = false;
if (macroCondition(dependencySatisfies('ember-paper', '*'))) {
  PaperInputComponent = importSync('ember-paper/components/paper-input');
  hasEmberPaper = true;
}

export default class CellContentEdit extends ModelsTableCellContentEditComponent {
  get PaperInput(): unknown {
    assert('ember-paper not found', hasEmberPaper);
    return ensureSafeComponent((PaperInputComponent as any).default, this);
  }
}
