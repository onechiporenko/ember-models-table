import {layout as templateLayout} from '@ember-decorators/component';
import ModelsTableRowSortingCellComponent from '../../row-sorting-cell';
import layout from '../../../../templates/components/models-table/themes/ember-paper/row-sorting-cell';

/**
 * @class EpModelsTableRowSortingCell
 * @namespace Components
 * @extends Components.ModelsTableRowSortingCell
 */
export default
@templateLayout(layout)
class EpModelsTableRowSortingCellComponent extends ModelsTableRowSortingCellComponent {
}
