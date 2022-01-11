import ModelsTablePaginationNumericComponent from '../../themes/default/pagination-numeric';
import {
  macroCondition,
  dependencySatisfies,
  importSync,
} from '@embroider/macros';
import { ensureSafeComponent } from '@embroider/util';
import { assert } from '@ember/debug';

let PaperButtonComponent: unknown;
let hasEmberPaper = false;
if (macroCondition(dependencySatisfies('ember-paper', '*'))) {
  PaperButtonComponent = importSync('ember-paper/components/paper-button');
  hasEmberPaper = true;
}

export default class PaginationNumeric extends ModelsTablePaginationNumericComponent {
  get PaperButton(): unknown {
    assert('ember-paper not found', hasEmberPaper);
    return ensureSafeComponent((PaperButtonComponent as any).default, this);
  }
}
