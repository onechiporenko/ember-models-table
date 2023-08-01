import { ComponentLike } from '@glint/template';
import { ensureSafeComponent } from '@embroider/util';
import ModelsTableSummaryComponent from '../../themes/default/summary';
import { getBsButton } from '../../../../utils/emt/themes/ebs';
import { BsButtonSignature } from '../../../../../override-types/ember-bootstrap/bs-button';

export default class Summary extends ModelsTableSummaryComponent {
  get BsButton(): ComponentLike<BsButtonSignature> {
    return ensureSafeComponent(getBsButton(), this);
  }
}
