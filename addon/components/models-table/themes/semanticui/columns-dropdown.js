import {layout as templateLayout} from '@ember-decorators/component';
import ModelsTableColumnsDropdownComponent from '../../columns-dropdown';
import layout from '../../../../templates/components/models-table/themes/semanticui/columns-dropdown';

/**
 * @class SuiModelsTableColumnsDropdown
 * @namespace Components
 * @extends Components.ModelsTableColumnsDropdown
 */
export default
@templateLayout(layout)
class SuiModelsTableColumnsDropdownComponent extends ModelsTableColumnsDropdownComponent {
}
