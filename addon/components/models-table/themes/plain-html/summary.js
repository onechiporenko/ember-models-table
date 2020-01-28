import {layout as templateLayout} from '@ember-decorators/component';
import ModelsTableSummaryComponent from '../../summary';
import layout from '../../../../templates/components/models-table/themes/plain-html/summary';

/**
 * @class PlainHtmlModelsTableSummary
 * @namespace Components
 * @extends Components.ModelsTableSummary
 */
export default
@templateLayout(layout)
class PlainHtmlModelsTableSummaryComponent extends ModelsTableSummaryComponent {
}
