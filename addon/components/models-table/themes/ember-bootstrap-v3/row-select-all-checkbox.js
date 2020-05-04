import layout from '../../../../templates/components/models-table/themes/ember-bootstrap-v3/row-select-all-checkbox';
import {layout as templateLayout} from '@ember-decorators/component';
import ModelsTableRowSelectAllCheckboxComponent from '../../row-select-all-checkbox';

/**
 * @class Ebs3ModelsTableRowSelectAllCheckbox
 * @namespace Components
 * @extends Components.ModelsTableRowSelectAllCheckbox
 */
export default
@templateLayout(layout)
class Ebs3ModelsTableRowSelectAllCheckboxComponent extends ModelsTableRowSelectAllCheckboxComponent {
}
