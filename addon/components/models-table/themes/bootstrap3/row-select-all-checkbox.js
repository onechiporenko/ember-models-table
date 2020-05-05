import layout from '../../../../templates/components/models-table/themes/bootstrap3/row-select-all-checkbox';
import {layout as templateLayout} from '@ember-decorators/component';
import ModelsTableRowSelectAllCheckboxComponent from '../../row-select-all-checkbox';

/**
 * @class Bs3ModelsTableRowSelectAllCheckbox
 * @namespace Components
 * @extends Components.ModelsTableRowSelectAllCheckbox
 */
export default
@templateLayout(layout)
class Bs3ModelsTableRowSelectAllCheckboxComponent extends ModelsTableRowSelectAllCheckboxComponent {
}
