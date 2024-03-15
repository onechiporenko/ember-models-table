import { type ComponentLike } from '@glint/template';
import { ensureSafeComponent } from '@embroider/util';
import ModelsTableColumnsDropdownComponent from '../../themes/default/columns-dropdown';
import { getBsDropdown } from '../../../../utils/emt/themes/ebs';
import { type BsDropdownSignature } from '../../../../../override-types/ember-bootstrap/bs-dropdown';

export default class ColumnsDropdown extends ModelsTableColumnsDropdownComponent {
  get BsDropdown(): ComponentLike<BsDropdownSignature> {
    return ensureSafeComponent(getBsDropdown(), this);
  }
}
