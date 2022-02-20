import { ensureSafeComponent } from '@embroider/util';
import ModelsTableCellEditToggleComponent from '../../themes/default/cell-edit-toggle';
import { getPaperButton } from '../../../../utils/emt/themes/ep';

export default class CellEditToggle extends ModelsTableCellEditToggleComponent {
  get PaperButton(): unknown {
    return ensureSafeComponent(getPaperButton(), this);
  }
}
