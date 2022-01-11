import ModelsTableRowFilteringCellComponent from '../../themes/default/row-filtering-cell';
import {
  macroCondition,
  dependencySatisfies,
  importSync,
} from '@embroider/macros';
import { ensureSafeComponent } from '@embroider/util';
import { assert } from '@ember/debug';

let BSButtonComponent: unknown;
let hasEmberBootstrap = false;
if (macroCondition(dependencySatisfies('ember-bootstrap', '>=4.*'))) {
  BSButtonComponent = importSync('ember-bootstrap/components/bs-button');
  hasEmberBootstrap = true;
}
export default class RowFilteringCell extends ModelsTableRowFilteringCellComponent {
  get BSButton(): unknown {
    assert('ember-bootstrap v4 not found', hasEmberBootstrap);
    return ensureSafeComponent((BSButtonComponent as any).default, this);
  }
}
