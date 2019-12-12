import {layout as templateLayout} from '@ember-decorators/component';
import {alias} from '@ember/object/computed';
import {className} from '@ember-decorators/component';
import ModelsTableColumnsDropdownComponent from '../../columns-dropdown';
import layout from '../../../../templates/components/models-table/themes/ember-paper/columns-dropdown';

/**
 * @class EpModelsTableColumnsDropdown
 * @namespace Components
 * @extends Components.ModelsTableColumnsDropdown
 */
export default
@templateLayout(layout)
class EpModelsTableColumnsDropdownComponent extends ModelsTableColumnsDropdownComponent {

  /**
   * @property columnsDropdownWrapper
   * @type string
   * @protected
   */
  @className
  @alias('themeInstance.columnsDropdownWrapper')
  columnsDropdownWrapper;
}
