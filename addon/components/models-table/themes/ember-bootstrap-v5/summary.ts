import { ensureSafeComponent } from '@embroider/util';
import ModelsTableSummaryComponent from '../../themes/default/summary';
import { getBsButton } from '../../../../utils/emt/themes/ebs';

export default class Summary extends ModelsTableSummaryComponent {
  get BsButton(): unknown {
    return ensureSafeComponent(getBsButton(), this);
  }
}
