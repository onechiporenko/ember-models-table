import {layout as templateLayout} from '@ember-decorators/component';
import ModelsTableSummaryComponent from '../../summary';
import layout from '../../../../templates/components/models-table/themes/ember-bootstrap-v4/summary';

/**
 * @class Ebs4ModelsTableSummary
 * @namespace Components
 * @extends Components.ModelsTableSummary
 */
export default
@templateLayout(layout)
class Ebs4ModelsTableSummaryComponent extends ModelsTableSummaryComponent {
}
