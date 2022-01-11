import {
  macroCondition,
  dependencySatisfies,
  importSync,
} from '@embroider/macros';
import { ensureSafeComponent } from '@embroider/util';
import { assert } from '@ember/debug';
import ModelsTableDataGroupBySelectComponent from '../../themes/default/data-group-by-select';

let BSFormComponent: unknown;
let BSButtonComponent: unknown;
let hasEmberBootstrap = false;
if (macroCondition(dependencySatisfies('ember-bootstrap', '3.*'))) {
  BSFormComponent = importSync('ember-bootstrap/components/bs-form');
  BSButtonComponent = importSync('ember-bootstrap/components/bs-button');
  hasEmberBootstrap = true;
}

export default class DataGroupBySelect extends ModelsTableDataGroupBySelectComponent {
  get BSForm(): unknown {
    assert('ember-bootstrap v3 not found', hasEmberBootstrap);
    return ensureSafeComponent((BSFormComponent as any).default, this);
  }

  get BSButton(): unknown {
    assert('ember-bootstrap v3 not found', hasEmberBootstrap);
    return ensureSafeComponent((BSButtonComponent as any).default, this);
  }
}
