import {layout as templateLayout} from '@ember-decorators/component';
import ModelsTableSummaryComponent from '../../summary';
import layout from '../../../../templates/components/models-table/themes/ember-bootstrap-v3/summary';

/**
 * @class Ebs3ModelsTableSummary
 * @namespace Components
 * @extends Components.ModelsTableSummary
 */
export default
@templateLayout(layout)
class Ebs3ModelsTableSummaryComponent extends ModelsTableSummaryComponent {
}
