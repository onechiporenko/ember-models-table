import {layout as templateLayout} from '@ember-decorators/component';
import ModelsTableGlobalFilterComponent from '../../global-filter';
import layout from '../../../../templates/components/models-table/themes/plain-html/global-filter';

/**
 * @class PlainHtmlModelsTableGlobalFilter
 * @namespace Components
 * @extends Components.ModelsTableGlobalFilter
 */
export default
@templateLayout(layout)
class PlainHtmlModelsTableGlobalFilterComponent extends ModelsTableGlobalFilterComponent {
}
