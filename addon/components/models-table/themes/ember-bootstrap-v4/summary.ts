import { ensureSafeComponent } from '@embroider/util';
import ModelsTableSummaryComponent from '../../themes/default/summary';
import { getBsButton, getBsForm } from '../../../../utils/emt/themes/ebs';

export default class Summary extends ModelsTableSummaryComponent {
  get BsForm(): unknown {
    return ensureSafeComponent(getBsForm(), this);
  }

  get BsButton(): unknown {
    return ensureSafeComponent(getBsButton(), this);
  }
}
