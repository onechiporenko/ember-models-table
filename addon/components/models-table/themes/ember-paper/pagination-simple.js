import {layout as templateLayout} from '@ember-decorators/component';
import ModelsTablePaginationSimpleComponent from '../../pagination-simple';
import layout from '../../../../templates/components/models-table/themes/ember-paper/pagination-simple';

/**
 * @class EpModelsTablePaginationSimple
 * @namespace Components
 * @extends Components.ModelsTablePaginationSimple
 */
export default
@templateLayout(layout)
class EpModelsTablePaginationSimpleComponent extends ModelsTablePaginationSimpleComponent {
}
