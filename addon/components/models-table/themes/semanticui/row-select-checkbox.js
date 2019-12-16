import layout from '../../../../templates/components/models-table/themes/semanticui/row-select-checkbox';
import {layout as templateLayout} from '@ember-decorators/component';
import ModelsTableRowSelectCheckboxComponent from '../../row-select-checkbox';

/**
 * @class SuiModelsTableRowSelectCheckbox
 * @namespace Components
 * @extends Components.ModelsTableRowSelectCheckbox
 */
export default
@templateLayout(layout)
class SuiModelsTableRowSelectCheckboxComponent extends ModelsTableRowSelectCheckboxComponent {
}
