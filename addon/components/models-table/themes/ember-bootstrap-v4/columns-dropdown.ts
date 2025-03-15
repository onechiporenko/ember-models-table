import { ensureSafeComponent } from '@embroider/util';
import { type ComponentLike } from '@glint/template';

import { type BsDropdownSignature } from '../../../../../override-types/ember-bootstrap/bs-dropdown';
import { getBsDropdown } from '../../../../utils/emt/themes/ebs';
import ModelsTableColumnsDropdownComponent from '../../themes/default/columns-dropdown';

export default class ColumnsDropdown extends ModelsTableColumnsDropdownComponent {
  get BsDropdown(): ComponentLike<BsDropdownSignature> {
    return ensureSafeComponent(getBsDropdown(), this);
  }
}
