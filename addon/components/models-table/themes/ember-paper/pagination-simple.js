import {layout as templateLayout} from '@ember-decorators/component';
import DefaultPaginationSimple from '../../pagination-simple';
import layout from '../../../../templates/components/models-table/themes/ember-paper/pagination-simple';

@templateLayout(layout)
export default class PaginationSimpleComponent extends DefaultPaginationSimple {
}
