import { ensureSafeComponent } from '@embroider/util';
import ModelsTableExpandAllToggleComponent from '../../themes/default/expand-all-toggle';
import { getPaperButton, getPaperIcon } from '../../../../utils/emt/themes/ep';

export default class ExpandAllToggle extends ModelsTableExpandAllToggleComponent {
  get PaperButton(): unknown {
    return ensureSafeComponent(getPaperButton(), this);
  }

  get PaperIcon(): unknown {
    return ensureSafeComponent(getPaperIcon(), this);
  }
}
