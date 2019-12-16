import layout from '../../../../templates/components/models-table/themes/semanticui/row-select-all-checkbox';
import {layout as templateLayout} from '@ember-decorators/component';
import ModelsTableRowSelectAllCheckboxComponent from '../../row-select-all-checkbox';

/**
 * @class SuiModelsTableRowSelectAllCheckbox
 * @namespace Components
 * @extends Components.ModelsTableRowSelectAllCheckbox
 */
export default
@templateLayout(layout)
class SuiModelsTableRowSelectAllCheckboxComponent extends ModelsTableRowSelectAllCheckboxComponent {
}
