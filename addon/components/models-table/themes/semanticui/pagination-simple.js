import {layout as templateLayout} from '@ember-decorators/component';
import DefaultPaginationSimple from '../../pagination-simple';
import layout from '../../../../templates/components/models-table/themes/semanticui/pagination-simple';

export default
@templateLayout(layout)
class PaginationSimpleComponent extends DefaultPaginationSimple {
}
