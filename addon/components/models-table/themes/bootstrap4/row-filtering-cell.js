import {layout as templateLayout} from '@ember-decorators/component';
import ModelsTableRowFilteringCellComponent from '../../row-filtering-cell';
import layout from '../../../../templates/components/models-table/themes/bootstrap4/row-filtering-cell';

/**
 * @class Bs4ModelsTableRowFilteringCell
 * @namespace Components
 * @extends Components.ModelsTableRowFilteringCell
 */
export default
@templateLayout(layout)
class Bs4ModelsTableRowFilteringCellComponent extends ModelsTableRowFilteringCellComponent {
}
