import { ensureSafeComponent } from '@embroider/util';
import ModelsTablePaginationSimpleComponent from '../../themes/default/pagination-simple';
import { getPaperButton, getPaperIcon } from '../../../../utils/emt/themes/ep';

export default class PaginationSimple extends ModelsTablePaginationSimpleComponent {
  get PaperButton(): unknown {
    return ensureSafeComponent(getPaperButton(), this);
  }

  get PaperIcon(): unknown {
    return ensureSafeComponent(getPaperIcon(), this);
  }
}
