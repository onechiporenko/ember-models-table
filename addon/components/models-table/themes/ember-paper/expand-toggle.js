import layout from '../../../../templates/components/models-table/themes/ember-paper/expand-toggle';
import {layout as templateLayout} from '@ember-decorators/component';
import ModelsTableExpandToggleComponent from '../../expand-toggle';

/**
 * @class EpModelsTableExpandToggle
 * @namespace Components
 * @extends Components.ModelsTableExpandToggle
 */
export default
@templateLayout(layout)
class EpModelsTableExpandToggleComponent extends ModelsTableExpandToggleComponent {
}
