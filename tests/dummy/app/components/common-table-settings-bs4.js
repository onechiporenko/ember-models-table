import Component from '@ember/component';
import layout from '../templates/components/common-table-settings-bs3';
import {layout as templateLayout} from '@ember-decorators/component';

export default
@templateLayout(layout)
class CommonTableSettingsBs4Component extends Component {
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
