import {layout as templateLayout} from '@ember-decorators/component';
import DefaultDataGroupBySelect from '../../data-group-by-select';
import layout from '../../../../templates/components/models-table/themes/ember-paper/data-group-by-select';
import {alias} from '@ember/object/computed';
import {className} from '@ember-decorators/component';

@templateLayout(layout)
export default class DataGroupBySelectComponent extends DefaultDataGroupBySelect {
  @className
  @alias('themeInstance.dataGroupBySelectWrapper')
  dataGroupBySelectWrapper;
}
