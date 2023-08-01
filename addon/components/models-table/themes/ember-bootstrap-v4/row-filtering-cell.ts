import { ComponentLike } from '@glint/template';
import { ensureSafeComponent } from '@embroider/util';
import ModelsTableRowFilteringCellComponent from '../../themes/default/row-filtering-cell';
import { getBsButton } from '../../../../utils/emt/themes/ebs';
import { BsButtonSignature } from '../../../../../override-types/ember-bootstrap/bs-button';

export default class RowFilteringCell extends ModelsTableRowFilteringCellComponent {
  get BsButton(): ComponentLike<BsButtonSignature> {
    return ensureSafeComponent(getBsButton(), this);
  }
}
