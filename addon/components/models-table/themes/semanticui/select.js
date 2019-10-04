import {classNames, classNameBindings, layout as templateLayout} from '@ember-decorators/component';
import DefaultSelect from 'ember-models-table/components/models-table/select';
import layout from '../../../../templates/components/models-table/select';

export default
@templateLayout(layout)
@classNames('ui', 'fluid', 'dropdown')
@classNameBindings('options.length::disabled')
class SelectComponent extends DefaultSelect {
}
