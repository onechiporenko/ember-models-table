import {layout as templateLayout} from '@ember-decorators/component';
import SuiModelsTableRowFilteringCellComponent from '../semanticui/row-filtering-cell';
import layout from '../../../../templates/components/models-table/themes/ember-semanticui/row-filtering-cell';

/**
 * @class EsuiModelsTableRowFilteringCell
 * @namespace Components
 * @extends Components.SuiModelsTableRowFilteringCell
 */
export default
@templateLayout(layout)
class EsuiModelsTableRowFilteringCellComponent extends SuiModelsTableRowFilteringCellComponent {
}
