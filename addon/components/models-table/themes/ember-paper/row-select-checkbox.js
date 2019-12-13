import layout from '../../../../templates/components/models-table/themes/ember-paper/row-select-checkbox';
import {layout as templateLayout} from '@ember-decorators/component';
import ModelsTableRowSelectCheckboxComponent from '../../row-select-checkbox';

/**
 * @class EpModelsTableRowSelectCheckbox
 * @namespace Components
 * @extends Components.ModelsTableRowSelectCheckbox
 */
export default
@templateLayout(layout)
class EpModelsTableRowSelectCheckboxComponent extends ModelsTableRowSelectCheckboxComponent {
}
