import { ensureSafeComponent } from '@embroider/util';
import ModelsTableRowFilteringCellComponent from '../../themes/default/row-filtering-cell';
import {
  getPaperButton,
  getPaperIcon,
  getPaperInput,
} from '../../../../utils/emt/themes/ep';

export default class RowFilteringCell extends ModelsTableRowFilteringCellComponent {
  get PaperButton(): unknown {
    return ensureSafeComponent(getPaperButton(), this);
  }

  get PaperIcon(): unknown {
    return ensureSafeComponent(getPaperIcon(), this);
  }

  get PaperInput(): unknown {
    return ensureSafeComponent(getPaperInput(), this);
  }
}
