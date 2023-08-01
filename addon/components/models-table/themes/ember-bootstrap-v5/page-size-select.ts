import { ComponentLike } from '@glint/template';
import { ensureSafeComponent } from '@embroider/util';
import ModelsTablePageSizeSelectComponent from '../../themes/default/page-size-select';
import { getBsForm } from '../../../../utils/emt/themes/ebs';
import { BsFormSignature } from '../../../../../override-types/ember-bootstrap/bs-form';

export default class PageSizeSelect extends ModelsTablePageSizeSelectComponent {
  get BSForm(): ComponentLike<BsFormSignature> {
    return ensureSafeComponent(getBsForm(), this);
  }
}
