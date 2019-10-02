import Component from '@ember/component';
import layout from '../templates/components/common-table-settings-paper';
import {layout as templateLayout} from '@ember-decorators/component';

@templateLayout(layout)
export default class CommonTableSettingsBs4Component extends Component {
  showComponentFooter = true;
  showColumnsDropdown = true;
  useFilteringByColumns = true;
  showGlobalFilter = true;
  useNumericPagination = false;
  doFilteringByHiddenColumns = false;
  filteringIgnoreCase = false;
  multipleColumnsSorting = true;
  showPageSize = true;
  collapseNumPaginationForPagesCount = 1;
  showCurrentPageNumberSelect = true;
}
