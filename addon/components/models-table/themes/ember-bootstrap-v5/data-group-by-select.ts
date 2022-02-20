import { ensureSafeComponent } from '@embroider/util';
import ModelsTableDataGroupBySelectComponent from '../../themes/default/data-group-by-select';
import { getBsButton, getBsForm } from '../../../../utils/emt/themes/ebs';

export default class DataGroupBySelect extends ModelsTableDataGroupBySelectComponent {
  get BSForm(): unknown {
    return ensureSafeComponent(getBsForm(), this);
  }

  get BsButton(): unknown {
    return ensureSafeComponent(getBsButton(), this);
  }
}
