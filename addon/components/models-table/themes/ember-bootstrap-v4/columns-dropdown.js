import { layout as templateLayout } from '@ember-decorators/component';
import DefaultColumnsDropdown from '../../columns-dropdown';
import layout from '../../../../templates/components/models-table/themes/ember-bootstrap-v4/columns-dropdown';

@templateLayout(layout)
export default class ColumnsDropdownComponent extends DefaultColumnsDropdown {}
