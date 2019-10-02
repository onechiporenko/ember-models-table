import {layout as templateLayout} from '@ember-decorators/component';
import DefaultRowSortingCell from '../../row-sorting-cell';
import layout from '../../../../templates/components/models-table/themes/ember-paper/row-sorting-cell';

@templateLayout(layout)
export default class RowSortingCellComponent extends DefaultRowSortingCell {
}
