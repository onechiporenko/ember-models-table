import { ensureSafeComponent } from '@embroider/util';
import { type ComponentLike } from '@glint/template';

import { type BsButtonSignature } from '../../../../../override-types/ember-bootstrap/bs-button';
import { type BsFormSignature } from '../../../../../override-types/ember-bootstrap/bs-form';
import { getBsButton, getBsForm } from '../../../../utils/emt/themes/ebs';
import ModelsTablePaginationNumericComponent from '../../themes/default/pagination-numeric';

export default class PaginationNumeric extends ModelsTablePaginationNumericComponent {
  get BsButton(): ComponentLike<BsButtonSignature> {
    return ensureSafeComponent(getBsButton(), this);
  }

  get BSForm(): ComponentLike<BsFormSignature> {
    return ensureSafeComponent(getBsForm(), this);
  }
}
