import {layout as templateLayout} from '@ember-decorators/component';
import ModelsTablePaginationSimpleComponent from '../../pagination-simple';
import layout from '../../../../templates/components/models-table/themes/semanticui/pagination-simple';

/**
 * @class SuiModelsTablePaginationSimple
 * @namespace Components
 * @extends Components.ModelsTablePaginationSimple
 */
export default
@templateLayout(layout)
class SuiModelsTablePaginationSimpleComponent extends ModelsTablePaginationSimpleComponent {
}
