import {layout as templateLayout} from '@ember-decorators/component';
import ModelsTableSummaryComponent from '../../summary';
import layout from '../../../../templates/components/models-table/themes/ember-paper/summary';

/**
 * @class EpModelsTableSummary
 * @namespace Components
 * @extends Components.ModelsTableSummary
 */
export default
@templateLayout(layout)
class EpModelsTableSummaryComponent extends ModelsTableSummaryComponent {

}
