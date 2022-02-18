import { ensureSafeComponent } from '@embroider/util';
import ModelsTableColumnsDropdownComponent from '../../themes/default/columns-dropdown';
import {
  getPaperButton,
  getPaperDivider,
  getPaperIcon,
  getPaperMenu,
} from '../../../../utils/emt/themes/ep';

export default class ColumnsDropdown extends ModelsTableColumnsDropdownComponent {
  get PaperButton(): unknown {
    return ensureSafeComponent(getPaperButton(), this);
  }

  get PaperDivider(): unknown {
    return ensureSafeComponent(getPaperDivider(), this);
  }

  get PaperMenu(): unknown {
    return ensureSafeComponent(getPaperMenu(), this);
  }

  get PaperIcon(): unknown {
    return ensureSafeComponent(getPaperIcon(), this);
  }
}
