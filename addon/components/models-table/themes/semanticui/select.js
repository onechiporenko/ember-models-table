import {classNames, classNameBindings, layout as templateLayout} from '@ember-decorators/component';
import ModelsTableSelectComponent from 'ember-models-table/components/models-table/select';
import layout from '../../../../templates/components/models-table/select';

/**
 * @class SuiModelsTableSelect
 * @namespace Components
 * @extends Components.ModelsTableSelect
 */
export default
@templateLayout(layout)
@classNames('ui', 'fluid', 'dropdown')
@classNameBindings('options.length::disabled')
class SuiModelsTableSelectComponent extends ModelsTableSelectComponent {
}
