import {layout as templateLayout} from '@ember-decorators/component';
import layout from '../templates/components/group-summary-row';
import GroupSummaryRow from './models-table/group-summary-row';

@templateLayout(layout)
export default class GroupSummaryRowComponent extends GroupSummaryRow {
}
