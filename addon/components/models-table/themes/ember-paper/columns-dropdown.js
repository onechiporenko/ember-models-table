import {layout as templateLayout} from '@ember-decorators/component';
import {alias} from '@ember/object/computed';
import {className} from '@ember-decorators/component';
import DefaultColumnsDropdown from '../../columns-dropdown';
import layout from '../../../../templates/components/models-table/themes/ember-paper/columns-dropdown';

@templateLayout(layout)
export default class ColumnsDropdownComponent extends DefaultColumnsDropdown {
  @className
  @alias('themeInstance.columnsDropdownWrapper')
  columnsDropdownWrapper;
}
