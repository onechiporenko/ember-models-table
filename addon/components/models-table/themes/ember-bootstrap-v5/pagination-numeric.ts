import { ensureSafeComponent } from '@embroider/util';
import ModelsTablePaginationNumericComponent from '../../themes/default/pagination-numeric';
import { getBsButton, getBsForm } from '../../../../utils/emt/themes/ebs';

export default class PaginationNumeric extends ModelsTablePaginationNumericComponent {
  get BsButton(): unknown {
    return ensureSafeComponent(getBsButton(), this);
  }

  get BSForm(): unknown {
    return ensureSafeComponent(getBsForm(), this);
  }
}
