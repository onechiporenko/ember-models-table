import { type ComponentLike } from '@glint/template';
import { ensureSafeComponent } from '@embroider/util';
import ModelsTablePaginationNumericComponent from '../../themes/default/pagination-numeric';
import { getBsButton, getBsForm } from '../../../../utils/emt/themes/ebs';
import { type BsButtonSignature } from '../../../../../override-types/ember-bootstrap/bs-button';
import { type BsFormSignature } from '../../../../../override-types/ember-bootstrap/bs-form';

export default class PaginationNumeric extends ModelsTablePaginationNumericComponent {
  get BsButton(): ComponentLike<BsButtonSignature> {
    return ensureSafeComponent(getBsButton(), this);
  }

  get BSForm(): ComponentLike<BsFormSignature> {
    return ensureSafeComponent(getBsForm(), this);
  }
}
