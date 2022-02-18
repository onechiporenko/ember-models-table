import { ensureSafeComponent } from '@embroider/util';
import ModelsTableSummaryComponent from '../../themes/default/summary';
import { getPaperButton, getPaperIcon } from '../../../../utils/emt/themes/ep';

export default class Summary extends ModelsTableSummaryComponent {
  get PaperButton(): unknown {
    return ensureSafeComponent(getPaperButton(), this);
  }

  get PaperIcon(): unknown {
    return ensureSafeComponent(getPaperIcon(), this);
  }
}
