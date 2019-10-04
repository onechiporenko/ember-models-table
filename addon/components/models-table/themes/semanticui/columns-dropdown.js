import {layout as templateLayout} from '@ember-decorators/component';
import DefaultColumnsDropdown from '../../columns-dropdown';
import layout from '../../../../templates/components/models-table/themes/semanticui/columns-dropdown';

export default
@templateLayout(layout)
class ColumnsDropdownComponent extends DefaultColumnsDropdown {
}
