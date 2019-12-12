import {layout as templateLayout} from '@ember-decorators/component';
import ModelsTablePageSizeSelectComponent from '../../page-size-select';
import layout from '../../../../templates/components/models-table/themes/ember-paper/page-size-select';

/**
 * @class EpModelsTablePageSizeSelect
 * @namespace Components
 * @extends Components.ModelsTablePageSizeSelect
 */
export default
@templateLayout(layout)
class EpModelsTablePageSizeSelectComponent extends ModelsTablePageSizeSelectComponent {
}
