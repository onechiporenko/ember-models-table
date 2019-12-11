import {layout as templateLayout} from '@ember-decorators/component';
import DefaultRowFilteringCellComponent from '../../row-filtering-cell';
import layout from '../../../../templates/components/models-table/themes/ember-bootstrap-v3/row-filtering-cell';

/**
 * @class Ebs3ModelsTableRowFilteringCell
 * @namespace Components
 * @extends Components.ModelsTableRowFilteringCell
 */
export default
@templateLayout(layout)
class Ebs3ModelsTableRowFilteringCellComponent extends DefaultRowFilteringCellComponent {
}
