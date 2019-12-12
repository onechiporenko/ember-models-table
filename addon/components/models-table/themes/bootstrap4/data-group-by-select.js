import {layout as templateLayout} from '@ember-decorators/component';
import layout from '../../../../templates/components/models-table/themes/bootstrap4/data-group-by-select';
import ModelsTableDataGroupBySelectComponent from '../../data-group-by-select';

/**
 * @class Bs4ModelsTableDataGroupBySelect
 * @extends Components.ModelsTableDataGroupBySelect
 * @namespace Components
 */
export default
@templateLayout(layout)
class Bs4ModelsTableDataGroupBySelectComponent extends ModelsTableDataGroupBySelectComponent {
}
