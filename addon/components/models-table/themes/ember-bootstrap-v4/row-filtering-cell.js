import {layout as templateLayout} from '@ember-decorators/component';
import ModelsTableRowFilteringCellComponent from '../../row-filtering-cell';
import layout from '../../../../templates/components/models-table/themes/ember-bootstrap-v4/row-filtering-cell';

/**
 * @class Ebs4ModelsTableRowFilteringCell
 * @namespace Components
 * @extends Components.ModelsTableRowFilteringCell
 */
export default
@templateLayout(layout)
class Ebs4ModelsTableRowFilteringCellComponent extends ModelsTableRowFilteringCellComponent {
}
