import { ComponentLike } from '@glint/template';
import { ensureSafeComponent } from '@embroider/util';
import ModelsTableColumnsDropdownComponent from '../../themes/default/columns-dropdown';
import { getBsDropdown } from '../../../../utils/emt/themes/ebs';
import { BsDropdownSignature } from '../../../../../override-types/ember-bootstrap/bs-dropdown';

export default class ColumnsDropdown extends ModelsTableColumnsDropdownComponent {
  get BSDropdown(): ComponentLike<BsDropdownSignature> {
    return ensureSafeComponent(getBsDropdown(), this);
  }
}
