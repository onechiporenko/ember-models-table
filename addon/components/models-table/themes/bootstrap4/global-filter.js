import {layout as templateLayout} from '@ember-decorators/component';
import layout from '../../../../templates/components/models-table/themes/bootstrap4/global-filter';
import DefaultGlobalFilter from '../../global-filter';

@templateLayout(layout)
export default class GlobalFilterComponent extends DefaultGlobalFilter {
}
