import { ensureSafeComponent } from '@embroider/util';
import { type ComponentLike } from '@glint/template';

import { type BsButtonSignature } from '../../../../../override-types/ember-bootstrap/bs-button';
import { type BsFormSignature } from '../../../../../override-types/ember-bootstrap/bs-form';
import { getBsButton, getBsForm } from '../../../../utils/emt/themes/ebs';
import ModelsTableDataGroupBySelectComponent from '../../themes/default/data-group-by-select';

export default class DataGroupBySelect extends ModelsTableDataGroupBySelectComponent {
  get BsForm(): ComponentLike<BsFormSignature> {
    return ensureSafeComponent(getBsForm(), this);
  }

  get BsButton(): ComponentLike<BsButtonSignature> {
    return ensureSafeComponent(getBsButton(), this);
  }
}
