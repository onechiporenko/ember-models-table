import layout from '../../../../templates/components/models-table/themes/semanticui/cell-content-edit';
import {action} from '@ember/object';
import {layout as templateLayout} from '@ember-decorators/component';
import ModelsTableCellContentEditComponent from '../../cell-content-edit';

/**
 * @class SuiModelsTableCellContentEdit
 * @namespace Components
 * @extends Components.ModelsTableCellContentEdit
 */
export default @templateLayout(layout)
class SuiModelsTableCellContentEditComponent extends ModelsTableCellContentEditComponent {
  @action
  noop() {
  }
}
