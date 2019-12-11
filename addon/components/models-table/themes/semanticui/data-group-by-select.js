import {layout as templateLayout} from '@ember-decorators/component';
import layout from '../../../../templates/components/models-table/themes/semanticui/data-group-by-select';
import ModelsTableDataGroupBySelectComponent from '../../data-group-by-select';

/**
 * @class SuiModelsTableDataGroupBySelect
 * @namespace Components
 * @extends Components.ModelsTableDataGroupBySelect
 */
export default
@templateLayout(layout)
class SuiModelsTableDataGroupBySelectComponent extends ModelsTableDataGroupBySelectComponent {
}
