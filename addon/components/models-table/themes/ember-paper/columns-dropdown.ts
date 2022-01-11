import ModelsTableColumnsDropdownComponent from '../../themes/default/columns-dropdown';
import {
  macroCondition,
  dependencySatisfies,
  importSync,
} from '@embroider/macros';
import { ensureSafeComponent } from '@embroider/util';
import { assert } from '@ember/debug';

let PaperButtonComponent: unknown;
let PaperMenuComponent: unknown;
let PaperIconComponent: unknown;
let PaperDividerComponent: unknown;
let hasEmberPaper = false;
if (macroCondition(dependencySatisfies('ember-paper', '*'))) {
  PaperButtonComponent = importSync('ember-paper/components/paper-button');
  PaperMenuComponent = importSync('ember-paper/components/paper-menu');
  PaperIconComponent = importSync('ember-paper/components/paper-icon');
  PaperDividerComponent = importSync('ember-paper/components/paper-divider');
  hasEmberPaper = true;
}

export default class ColumnsDropdown extends ModelsTableColumnsDropdownComponent {
  get PaperButton(): unknown {
    assert('ember-paper not found', hasEmberPaper);
    return ensureSafeComponent((PaperButtonComponent as any).default, this);
  }

  get PaperMenu(): unknown {
    assert('ember-paper not found', hasEmberPaper);
    return ensureSafeComponent((PaperMenuComponent as any).default, this);
  }

  get PaperIcon(): unknown {
    assert('ember-paper not found', hasEmberPaper);
    return ensureSafeComponent((PaperIconComponent as any).default, this);
  }

  get PaperDivider(): unknown {
    assert('ember-paper not found', hasEmberPaper);
    return ensureSafeComponent((PaperDividerComponent as any).default, this);
  }
}
