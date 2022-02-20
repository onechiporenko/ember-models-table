import { ensureSafeComponent } from '@embroider/util';
import ModelsTablePaginationSimpleComponent from '../../themes/default/pagination-simple';
import { getBsButton, getBsForm } from '../../../../utils/emt/themes/ebs';

export default class PaginationSimple extends ModelsTablePaginationSimpleComponent {
  get BsButton(): unknown {
    return ensureSafeComponent(getBsButton(), this);
  }

  get BSForm(): unknown {
    return ensureSafeComponent(getBsForm(), this);
  }
}
