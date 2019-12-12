import {layout as templateLayout} from '@ember-decorators/component';
import ModelsTableDataGroupBySelectComponent from '../../data-group-by-select';
import layout from '../../../../templates/components/models-table/themes/ember-paper/data-group-by-select';
import {alias} from '@ember/object/computed';
import {className} from '@ember-decorators/component';

/**
 * @class EpModelsTableDataGroupBySelect
 * @namespace Components
 * @extends Components.ModelsTableDataGroupBySelect
 */
export default
@templateLayout(layout)
class EpModelsTableDataGroupBySelectComponent extends ModelsTableDataGroupBySelectComponent {
  @className
  @alias('themeInstance.dataGroupBySelectWrapper')
  dataGroupBySelectWrapper;
}
