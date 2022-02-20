import { ensureSafeComponent } from '@embroider/util';
import ModelsTableDataGroupBySelectComponent from '../../themes/default/data-group-by-select';
import { getPaperButton, getPaperIcon } from '../../../../utils/emt/themes/ep';

export default class DataGroupBySelect extends ModelsTableDataGroupBySelectComponent {
  get PaperButton(): unknown {
    return ensureSafeComponent(getPaperButton(), this);
  }

  get PaperIcon(): unknown {
    return ensureSafeComponent(getPaperIcon(), this);
  }
}
