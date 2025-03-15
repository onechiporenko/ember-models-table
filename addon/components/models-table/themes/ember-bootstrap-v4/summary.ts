import { ensureSafeComponent } from '@embroider/util';
import { type ComponentLike } from '@glint/template';

import { type BsButtonSignature } from '../../../../../override-types/ember-bootstrap/bs-button';
import { type BsFormSignature } from '../../../../../override-types/ember-bootstrap/bs-form';
import { getBsButton, getBsForm } from '../../../../utils/emt/themes/ebs';
import ModelsTableSummaryComponent from '../../themes/default/summary';

export default class Summary extends ModelsTableSummaryComponent {
  get BsForm(): ComponentLike<BsFormSignature> {
    return ensureSafeComponent(getBsForm(), this);
  }

  get BsButton(): ComponentLike<BsButtonSignature> {
    return ensureSafeComponent(getBsButton(), this);
  }
}
