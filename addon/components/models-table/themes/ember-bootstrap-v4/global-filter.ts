import { ComponentLike } from '@glint/template';
import { ensureSafeComponent } from '@embroider/util';
import ModelsTableGlobalFilterComponent from '../../themes/default/global-filter';
import { getBsButton } from '../../../../utils/emt/themes/ebs';
import { BsButtonSignature } from '../../../../../override-types/ember-bootstrap/bs-button';

export default class GlobalFilter extends ModelsTableGlobalFilterComponent {
  get BsButton(): ComponentLike<BsButtonSignature> {
    return ensureSafeComponent(getBsButton(), this);
  }
}
