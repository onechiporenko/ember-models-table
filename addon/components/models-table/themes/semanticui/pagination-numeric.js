import {layout as templateLayout} from '@ember-decorators/component';
import DefaultPaginationNumeric from '../../pagination-numeric';
import layout from '../../../../templates/components/models-table/themes/semanticui/pagination-numeric';

@templateLayout(layout)
export default class PaginationNumericComponent extends DefaultPaginationNumeric {
}
