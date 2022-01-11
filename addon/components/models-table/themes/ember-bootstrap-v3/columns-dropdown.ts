import {
  macroCondition,
  dependencySatisfies,
  importSync,
} from '@embroider/macros';
import { ensureSafeComponent } from '@embroider/util';
import { assert } from '@ember/debug';
import ModelsTableColumnsDropdownComponent from '../../themes/default/columns-dropdown';

let DropDownComponent: unknown;
let hasEmberBootstrap = false;
if (macroCondition(dependencySatisfies('ember-bootstrap', '3.*'))) {
  DropDownComponent = importSync('ember-bootstrap/components/bs-dropdown');
  hasEmberBootstrap = true;
}

export default class ColumnsDropdown extends ModelsTableColumnsDropdownComponent {
  get BSDropDown(): unknown {
    assert('ember-bootstrap v3 not found', hasEmberBootstrap);
    return ensureSafeComponent((DropDownComponent as any).default, this);
  }
}
