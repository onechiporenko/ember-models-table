import { layout as templateLayout } from '@ember-decorators/component';
import DefaultSummary from '../../summary';
import layout from '../../../../templates/components/models-table/themes/ember-bootstrap-v3/summary';

@templateLayout(layout)
export default class SummaryComponent extends DefaultSummary {}
