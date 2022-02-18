import { ensureSafeComponent } from '@embroider/util';
import ModelsTableExpandToggleComponent from '../../themes/default/expand-toggle';
import { getPaperButton, getPaperIcon } from '../../../../utils/emt/themes/ep';

export default class ExpandToggle extends ModelsTableExpandToggleComponent {
  get PaperButton(): unknown {
    return ensureSafeComponent(getPaperButton(), this);
  }

  get PaperIcon(): unknown {
    return ensureSafeComponent(getPaperIcon(), this);
  }
}
