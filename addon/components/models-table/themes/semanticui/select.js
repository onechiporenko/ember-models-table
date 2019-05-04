import {classNames, layout as templateLayout} from '@ember-decorators/component';
import DefaultSelect from 'ember-models-table/components/models-table/select';
import layout from '../../../../templates/components/models-table/select';

@templateLayout(layout)
@classNames('ui', 'fluid', 'dropdown')
export default class SelectComponent extends DefaultSelect {
}
