import {layout as templateLayout} from '@ember-decorators/component';
import layout from '../../../../templates/components/models-table/themes/semanticui/global-filter';
import ModelsTableGlobalFilterComponent from '../../global-filter';

/**
 * @class SuiModelsTableGlobalFilter
 * @namespace Components
 * @extends Components.ModelsTableGlobalFilter
 */
export default
@templateLayout(layout)
class SuiModelsTableGlobalFilterComponent extends ModelsTableGlobalFilterComponent {
}
