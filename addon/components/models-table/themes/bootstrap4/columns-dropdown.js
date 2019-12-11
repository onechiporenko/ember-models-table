import {layout as templateLayout} from '@ember-decorators/component';
import ModelsTableColumnsDropdownComponent from '../../columns-dropdown';
import layout from '../../../../templates/components/models-table/themes/bootstrap4/columns-dropdown';

/**
 * @class Bs4ModelsTableColumnsDropdown
 * @extends Components.ModelsTableColumnsDropdown
 * @namespace Components
 */
export default
@templateLayout(layout)
class Bs4ModelsTableColumnsDropdownComponent extends ModelsTableColumnsDropdownComponent {
}
