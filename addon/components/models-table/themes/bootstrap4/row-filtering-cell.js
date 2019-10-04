import {layout as templateLayout} from '@ember-decorators/component';
import DefaultRowFilteringCell from '../../row-filtering-cell';
import layout from '../../../../templates/components/models-table/themes/bootstrap4/row-filtering-cell';

export default
@templateLayout(layout)
class RowFilteringCellComponent extends DefaultRowFilteringCell {
}
