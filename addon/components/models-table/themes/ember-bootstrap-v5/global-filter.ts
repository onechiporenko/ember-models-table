import { ensureSafeComponent } from '@embroider/util';
import { type ComponentLike } from '@glint/template';

import { type BsButtonSignature } from '../../../../../override-types/ember-bootstrap/bs-button';
import { getBsButton } from '../../../../utils/emt/themes/ebs';
import ModelsTableGlobalFilterComponent from '../../themes/default/global-filter';

export default class GlobalFilter extends ModelsTableGlobalFilterComponent {
  get BsButton(): ComponentLike<BsButtonSignature> {
    return ensureSafeComponent(getBsButton(), this);
  }
}
