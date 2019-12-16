import layout from '../../../../templates/components/models-table/themes/ember-paper/cell-content-edit';
import {layout as templateLayout} from '@ember-decorators/component';
import ModelsTableCellContentEditComponent from '../../cell-content-edit';

/**
 * @class EpModelsTableCellContentEdit
 * @namespace Components
 * @extends Components.ModelsTableCellContentEdit
 */
export default
@templateLayout(layout)
class EpModelsTableCellContentEditComponent extends ModelsTableCellContentEditComponent {

}
