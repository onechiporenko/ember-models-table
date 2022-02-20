import { ensureSafeComponent } from '@embroider/util';
import ModelsTableRowSortingCellComponent from '../../themes/default/row-sorting-cell';
import { getPaperIcon } from '../../../../utils/emt/themes/ep';

export default class RowSortingCell extends ModelsTableRowSortingCellComponent {
  get PaperIcon(): unknown {
    return ensureSafeComponent(getPaperIcon(), this);
  }
}
