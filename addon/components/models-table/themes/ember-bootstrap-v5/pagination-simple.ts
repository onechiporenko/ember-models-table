import { ComponentLike } from '@glint/template';
import { ensureSafeComponent } from '@embroider/util';
import ModelsTablePaginationSimpleComponent from '../../themes/default/pagination-simple';
import { getBsButton, getBsForm } from '../../../../utils/emt/themes/ebs';
import { BsButtonSignature } from '../../../../../override-types/ember-bootstrap/bs-button';
import { BsFormSignature } from '../../../../../override-types/ember-bootstrap/bs-form';

export default class PaginationSimple extends ModelsTablePaginationSimpleComponent {
  get BsButton(): ComponentLike<BsButtonSignature> {
    return ensureSafeComponent(getBsButton(), this);
  }

  get BsForm(): ComponentLike<BsFormSignature> {
    return ensureSafeComponent(getBsForm(), this);
  }
}
