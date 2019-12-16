import layout from '../../../../templates/components/models-table/themes/ember-paper/row-select-all-checkbox';
import {layout as templateLayout} from '@ember-decorators/component';
import ModelsTableRowSelectAllCheckboxComponent from '../../row-select-all-checkbox';

/**
 * @class EpModelsTableRowSelectAllCheckbox
 * @namespace Components
 * @extends Components.ModelsTableRowSelectAllCheckbox
 */
export default
@templateLayout(layout)
class EpModelsTableRowSelectAllCheckboxComponent extends ModelsTableRowSelectAllCheckboxComponent {
}
