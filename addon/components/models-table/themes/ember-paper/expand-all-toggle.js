import layout from '../../../../templates/components/models-table/themes/ember-paper/expand-all-toggle';
import {layout as templateLayout} from '@ember-decorators/component';
import ModelsTableExpandAllToggleComponent from '../../expand-all-toggle';

/**
 * @class EpModelsTableExpandAllToggle
 * @namespace Components
 * @extends Components.ModelsTableExpandAllToggle
 */
export default
@templateLayout(layout)
class EpModelsTableExpandAllToggleComponent extends ModelsTableExpandAllToggleComponent {
}
