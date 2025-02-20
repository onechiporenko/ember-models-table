import { ensureSafeComponent } from '@embroider/util';
import { type ComponentLike } from '@glint/template';

import { type BsFormSignature } from '../../../../../override-types/ember-bootstrap/bs-form';
import { getBsForm } from '../../../../utils/emt/themes/ebs';
import ModelsTablePageSizeSelectComponent from '../../themes/default/page-size-select';

export default class PageSizeSelect extends ModelsTablePageSizeSelectComponent {
  get BSForm(): ComponentLike<BsFormSignature> {
    return ensureSafeComponent(getBsForm(), this);
  }
}
