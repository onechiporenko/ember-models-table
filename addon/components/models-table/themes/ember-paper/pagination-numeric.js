import {layout as templateLayout} from '@ember-decorators/component';
import ModelsTablePaginationNumericComponent from '../../pagination-numeric';
import layout from '../../../../templates/components/models-table/themes/ember-paper/pagination-numeric';

/**
 * @class EpModelsTablePaginationNumeric
 * @namespace Components
 * @extends Components.ModelsTablePaginationNumeric
 */
export default
@templateLayout(layout)
class EpModelsTablePaginationNumericComponent extends ModelsTablePaginationNumericComponent {
}
