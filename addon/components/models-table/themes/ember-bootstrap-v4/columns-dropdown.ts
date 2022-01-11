import ModelsTableColumnsDropdownComponent from '../../themes/default/columns-dropdown';
import {
  macroCondition,
  dependencySatisfies,
  importSync,
} from '@embroider/macros';
import { ensureSafeComponent } from '@embroider/util';
import { assert } from '@ember/debug';

let DropDownComponent: unknown;
let hasEmberBootstrap = false;
if (macroCondition(dependencySatisfies('ember-bootstrap', '>=4.*'))) {
  DropDownComponent = importSync('ember-bootstrap/components/bs-dropdown');
  hasEmberBootstrap = true;
}

export default class ColumnsDropdown extends ModelsTableColumnsDropdownComponent {
  get BSDropDown(): unknown {
    assert('ember-bootstrap v4 not found', hasEmberBootstrap);
    return ensureSafeComponent((DropDownComponent as any).default, this);
  }
}
