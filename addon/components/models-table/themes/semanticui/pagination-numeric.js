import {layout as templateLayout} from '@ember-decorators/component';
import ModelsTablePaginationNumericComponent from '../../pagination-numeric';
import layout from '../../../../templates/components/models-table/themes/semanticui/pagination-numeric';

/**
 * @class SuiModelsTablePaginationNumeric
 * @namespace Components
 * @extends Components.ModelsTablePaginationNumeric
 */
export default
@templateLayout(layout)
class SuiModelsTablePaginationNumericComponent extends ModelsTablePaginationNumericComponent {
}
