import {layout as templateLayout} from '@ember-decorators/component';
import SemanticUIRowFilterCell from '../semanticui/row-filtering-cell';
import layout from '../../../../templates/components/models-table/themes/ember-semanticui/row-filtering-cell';

@templateLayout(layout)
export default class RowFilteringCellComponent extends SemanticUIRowFilterCell {
}
