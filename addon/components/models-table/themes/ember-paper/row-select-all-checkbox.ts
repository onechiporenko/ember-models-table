import { ensureSafeComponent } from '@embroider/util';
import ModelsTableRowSelectAllCheckboxComponent from '../../themes/default/row-select-all-checkbox';
import { getPaperCheckbox } from '../../../../utils/emt/themes/ep';

export default class RowSelectAllCheckbox extends ModelsTableRowSelectAllCheckboxComponent {
  get PaperCheckbox(): unknown {
    return ensureSafeComponent(getPaperCheckbox(), this);
  }
}
