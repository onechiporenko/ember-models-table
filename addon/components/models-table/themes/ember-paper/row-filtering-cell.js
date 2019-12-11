import {layout as templateLayout} from '@ember-decorators/component';
import ModelsTableRowFilteringCellComponent from '../../row-filtering-cell';
import layout from '../../../../templates/components/models-table/themes/ember-paper/row-filtering-cell';

/**
 * @class EpModelsTableRowFilteringCell
 * @namespace Components
 * @extends Components.ModelsTableRowFilteringCell
 */
export default
@templateLayout(layout)
class EpModelsTableRowFilteringCellComponent extends ModelsTableRowFilteringCellComponent {
}
