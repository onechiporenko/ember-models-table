import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';

import ExampleController from './example';

export default class CommonTableController extends ExampleController {
  @service() fw;

  get settingsComponent() {
    if (this.fw.isBs4) {
      return 'common-table-settings-bs4';
    }
    return 'common-table-settings-plain-html';
  }

  @tracked showComponentFooter = true;
  @tracked showColumnsDropdown = true;
  @tracked useFilteringByColumns = true;
  @tracked showGlobalFilter = true;
  @tracked useNumericPagination = false;
  @tracked doFilteringByHiddenColumns = false;
  @tracked filteringIgnoreCase = false;
  @tracked multipleColumnsSorting = true;

  @tracked showPageSize = true;
  @tracked collapseNumPaginationForPagesCount = 1;
  @tracked showCurrentPageNumberSelect = true;

  @tracked currentPageNumber = 4;
}
