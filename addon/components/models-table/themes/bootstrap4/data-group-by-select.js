import {layout as templateLayout} from '@ember-decorators/component';
import layout from '../../../../templates/components/models-table/themes/bootstrap4/data-group-by-select';
import DefaultDataGroupBySelect from '../../data-group-by-select';

export default
@templateLayout(layout)
class DataGroupBySelectComponent extends DefaultDataGroupBySelect {
}
