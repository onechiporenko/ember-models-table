import { ensureSafeComponent } from '@embroider/util';
import ModelsTablePageSizeSelectComponent from '../../themes/default/page-size-select';
import { getBsForm } from '../../../../utils/emt/themes/ebs';

export default class PageSizeSelect extends ModelsTablePageSizeSelectComponent {
  get BSForm(): unknown {
    return ensureSafeComponent(getBsForm(), this);
  }
}
