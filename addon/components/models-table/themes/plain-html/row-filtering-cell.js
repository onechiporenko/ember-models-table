import {layout as templateLayout} from '@ember-decorators/component';
import DefaultRowFilteringCellComponent from '../../row-filtering-cell';
import layout from '../../../../templates/components/models-table/themes/plain-html/row-filtering-cell';

/**
 * @class PlainHtmlModelsTableRowFilteringCell
 * @namespace Components
 * @extends Components.ModelsTableRowFilteringCell
 */
export default
@templateLayout(layout)
class PlainHtmlModelsTableRowFilteringCellComponent extends DefaultRowFilteringCellComponent {
}
