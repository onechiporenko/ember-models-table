import { ensureSafeComponent } from '@embroider/util';
import ModelsTableRowSelectCheckboxComponent from '../../themes/default/row-select-checkbox';
import { getPaperCheckbox } from '../../../../utils/emt/themes/ep';

export default class RowSelectCheckbox extends ModelsTableRowSelectCheckboxComponent {
  get PaperCheckbox(): unknown {
    return ensureSafeComponent(getPaperCheckbox(), this);
  }
}
