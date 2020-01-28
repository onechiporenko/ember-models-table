import {layout as templateLayout} from '@ember-decorators/component';
import ModelsTableColumnsDropdownComponent from '../../columns-dropdown';
import layout from '../../../../templates/components/models-table/themes/plain-html/columns-dropdown';

/**
 * @class PlainHtmlModelsTableColumnsDropdown
 * @namespace Components
 * @extends Components.ModelsTableColumnsDropdown
 */
export default
@templateLayout(layout)
class PlainHtmlModelsTableColumnsDropdownComponent extends ModelsTableColumnsDropdownComponent {
}
