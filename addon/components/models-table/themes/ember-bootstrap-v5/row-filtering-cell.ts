import { ensureSafeComponent } from '@embroider/util';
import { type ComponentLike } from '@glint/template';

import { type BsButtonSignature } from '../../../../../override-types/ember-bootstrap/bs-button';
import { getBsButton } from '../../../../utils/emt/themes/ebs';
import ModelsTableRowFilteringCellComponent from '../../themes/default/row-filtering-cell';

export default class RowFilteringCell extends ModelsTableRowFilteringCellComponent {
  get BsButton(): ComponentLike<BsButtonSignature> {
    return ensureSafeComponent(getBsButton(), this);
  }
}
