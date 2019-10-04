import {layout as templateLayout} from '@ember-decorators/component';
import layout from '../../../../templates/components/models-table/themes/semanticui/global-filter';
import DefaultGlobalFilter from '../../global-filter';

export default
@templateLayout(layout)
class GlobalFilterComponent extends DefaultGlobalFilter {
}
