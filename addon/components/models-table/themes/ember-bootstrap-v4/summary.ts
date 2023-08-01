import { ComponentLike } from '@glint/template';
import { ensureSafeComponent } from '@embroider/util';
import ModelsTableSummaryComponent from '../../themes/default/summary';
import { getBsButton, getBsForm } from '../../../../utils/emt/themes/ebs';
import { BsFormSignature } from '../../../../../override-types/ember-bootstrap/bs-form';
import { BsButtonSignature } from '../../../../../override-types/ember-bootstrap/bs-button';

export default class Summary extends ModelsTableSummaryComponent {
  get BsForm(): ComponentLike<BsFormSignature> {
    return ensureSafeComponent(getBsForm(), this);
  }

  get BsButton(): ComponentLike<BsButtonSignature> {
    return ensureSafeComponent(getBsButton(), this);
  }
}
