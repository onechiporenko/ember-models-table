import { ensureSafeComponent } from '@embroider/util';
import ModelsTableRowFilteringCellComponent from '../../themes/default/row-filtering-cell';
import { getBsButton } from '../../../../utils/emt/themes/ebs';

export default class RowFilteringCell extends ModelsTableRowFilteringCellComponent {
  get BsButton(): unknown {
    return ensureSafeComponent(getBsButton(), this);
  }
}
