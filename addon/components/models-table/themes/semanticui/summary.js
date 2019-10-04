import {layout as templateLayout} from '@ember-decorators/component';
import DefaultSummary from '../../summary';
import layout from '../../../../templates/components/models-table/themes/semanticui/summary';

export default
@templateLayout(layout)
class SummaryComponent extends DefaultSummary {
}
