import layout from '../../../../templates/components/models-table/themes/semanticui/expand-all-toggle';
import {layout as templateLayout} from '@ember-decorators/component';
import ModelsTableExpandAllToggleComponent from '../../expand-all-toggle';

/**
 * @class SuiModelsTableExpandAllToggle
 * @namespace Components
 * @extends Components.ModelsTableExpandAllToggle
 */
export default
@templateLayout(layout)
class SuiModelsTableExpandAllToggleComponent extends ModelsTableExpandAllToggleComponent {
}
