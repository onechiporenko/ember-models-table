import { ensureSafeComponent } from '@embroider/util';
import { type ComponentLike } from '@glint/template';

import { type BsButtonSignature } from '../../../../../override-types/ember-bootstrap/bs-button';
import { type BsFormSignature } from '../../../../../override-types/ember-bootstrap/bs-form';
import { getBsButton, getBsForm } from '../../../../utils/emt/themes/ebs';
import ModelsTablePaginationSimpleComponent from '../../themes/default/pagination-simple';

export default class PaginationSimple extends ModelsTablePaginationSimpleComponent {
  get BsButton(): ComponentLike<BsButtonSignature> {
    return ensureSafeComponent(getBsButton(), this);
  }

  get BsForm(): ComponentLike<BsFormSignature> {
    return ensureSafeComponent(getBsForm(), this);
  }
}
