import { ComponentLike } from '@glint/template';
import { ensureSafeComponent } from '@embroider/util';
import ModelsTableDataGroupBySelectComponent from '../../themes/default/data-group-by-select';
import { getBsButton, getBsForm } from '../../../../utils/emt/themes/ebs';
import { BsFormSignature } from '../../../../../override-types/ember-bootstrap/bs-form';
import { BsButtonSignature } from '../../../../../override-types/ember-bootstrap/bs-button';

export default class DataGroupBySelect extends ModelsTableDataGroupBySelectComponent {
  get BSForm(): ComponentLike<BsFormSignature> {
    return ensureSafeComponent(getBsForm(), this);
  }

  get BsButton(): ComponentLike<BsButtonSignature> {
    return ensureSafeComponent(getBsButton(), this);
  }
}
