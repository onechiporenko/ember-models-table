import { ComponentLike } from '@glint/template';
import { ensureSafeComponent } from '@embroider/util';
import ModelsTablePaginationNumericComponent from '../../themes/default/pagination-numeric';
import { getBsButton, getBsForm } from '../../../../utils/emt/themes/ebs';
import { BsButtonSignature } from '../../../../../override-types/ember-bootstrap/bs-button';
import { BsFormSignature } from '../../../../../override-types/ember-bootstrap/bs-form';

export default class PaginationNumeric extends ModelsTablePaginationNumericComponent {
  get BsButton(): ComponentLike<BsButtonSignature> {
    return ensureSafeComponent(getBsButton(), this);
  }

  get BSForm(): ComponentLike<BsFormSignature> {
    return ensureSafeComponent(getBsForm(), this);
  }
}
