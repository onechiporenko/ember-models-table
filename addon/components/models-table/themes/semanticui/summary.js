import {layout as templateLayout} from '@ember-decorators/component';
import ModelsTableSummaryComponent from '../../summary';
import layout from '../../../../templates/components/models-table/themes/semanticui/summary';

/**
 * @class SuiModelsTableSummary
 * @namespace Components
 * @extends Components.ModelsTableSummary
 */
export default
@templateLayout(layout)
class SuiModelsTableSummaryComponent extends ModelsTableSummaryComponent {
}
