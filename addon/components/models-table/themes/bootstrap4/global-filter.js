import {layout as templateLayout} from '@ember-decorators/component';
import layout from '../../../../templates/components/models-table/themes/bootstrap4/global-filter';
import ModelsTableGlobalFilterComponent from '../../global-filter';

/**
 * @class Bs4ModelsTableGlobalFilter
 * @namespace Components
 * @extends Components.ModelsTableGlobalFilter
 */
export default
@templateLayout(layout)
class Bs4ModelsTableGlobalFilterComponent extends ModelsTableGlobalFilterComponent {
}
