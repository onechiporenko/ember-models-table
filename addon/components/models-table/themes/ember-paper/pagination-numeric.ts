import { ensureSafeComponent } from '@embroider/util';
import ModelsTablePaginationNumericComponent from '../../themes/default/pagination-numeric';
import { getPaperButton } from '../../../../utils/emt/themes/ep';

export default class PaginationNumeric extends ModelsTablePaginationNumericComponent {
  get PaperButton(): unknown {
    return ensureSafeComponent(getPaperButton(), this);
  }
}
