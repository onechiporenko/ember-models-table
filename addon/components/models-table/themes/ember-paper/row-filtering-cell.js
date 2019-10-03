import {layout as templateLayout} from '@ember-decorators/component';
import DefaultRowFilteringCell from '../../row-filtering-cell';
import layout from '../../../../templates/components/models-table/themes/ember-paper/row-filtering-cell';

@templateLayout(layout)
export default class RowFilteringCellComponent extends DefaultRowFilteringCell {
}
