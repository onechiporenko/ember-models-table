import {layout as templateLayout} from '@ember-decorators/component';
import DefaultPaginationNumeric from '../../pagination-numeric';
import layout from '../../../../templates/components/models-table/themes/semanticui/pagination-numeric';

export default
@templateLayout(layout)
class PaginationNumericComponent extends DefaultPaginationNumeric {
}
