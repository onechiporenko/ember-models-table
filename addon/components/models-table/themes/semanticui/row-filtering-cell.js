import {layout as templateLayout} from '@ember-decorators/component';
import ModelsTableRowFilteringCellComponent from '../../row-filtering-cell';
import layout from '../../../../templates/components/models-table/themes/semanticui/row-filtering-cell';

/**
 * @class SuiModelsTableRowFilteringCell
 * @namespace Components
 * @extends Components.ModelsTableRowFilteringCell
 */
export default
@templateLayout(layout)
class SuiModelsTableRowFilteringCellComponent extends ModelsTableRowFilteringCellComponent {
}
