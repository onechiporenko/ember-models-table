import { ensureSafeComponent } from '@embroider/util';
import ModelsTableGlobalFilterComponent from '../../themes/default/global-filter';
import { getBsButton } from '../../../../utils/emt/themes/ebs';

export default class GlobalFilter extends ModelsTableGlobalFilterComponent {
  get BsButton(): unknown {
    return ensureSafeComponent(getBsButton(), this);
  }
}
