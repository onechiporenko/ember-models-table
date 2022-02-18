import { ensureSafeComponent } from '@embroider/util';
import ModelsTableCellContentEditComponent from '../../themes/default/cell-content-edit';
import { getPaperInput } from '../../../../utils/emt/themes/ep';

export default class CellContentEdit extends ModelsTableCellContentEditComponent {
  get PaperInput(): unknown {
    return ensureSafeComponent(getPaperInput(), this);
  }
}
