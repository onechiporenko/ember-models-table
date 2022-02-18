import { ensureSafeComponent } from '@embroider/util';
import ModelsTableGlobalFilterComponent from '../../themes/default/global-filter';
import {
  getPaperButton,
  getPaperIcon,
  getPaperInput,
} from '../../../../utils/emt/themes/ep';

export default class GlobalFilter extends ModelsTableGlobalFilterComponent {
  get PaperButton(): unknown {
    return ensureSafeComponent(getPaperButton(), this);
  }

  get PaperIcon(): unknown {
    return ensureSafeComponent(getPaperIcon(), this);
  }

  get PaperInput(): unknown {
    return ensureSafeComponent(getPaperInput(), this);
  }
}
