import Controller from '@ember/controller';
import {inject as service} from '@ember/service';
import {computed} from '@ember/object';

export default class CommonTableController extends Controller {

  @service () fw;

  @computed('fw.{isPaper,isBs3,isBs4}')
  get settingsComponentName() {
    if (this.fw.isPaper) {
      return 'common-table-settings-paper';
    }
    if (this.fw.isBs3) {
      return 'common-table-settings-bs3';
    }
    if (this.fw.isBs4) {
      return 'common-table-settings-bs4';
    }
    return 'common-table-settings-plain-html';
  }

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
