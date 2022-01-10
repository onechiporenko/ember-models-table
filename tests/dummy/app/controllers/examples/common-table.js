import { ensureSafeComponent } from '@embroider/util';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import ExampleController from './example';
import CommonTableSettingsBs3Component from '../../components/common-table-settings-bs3';
import CommonTableSettingsBs4Component from '../../components/common-table-settings-bs4';
import CommonTableSettingsPaperComponent from '../../components/common-table-settings-paper';
import CommonTableSettingsPlainHtmlComponent from '../../components/common-table-settings-plain-html';

export default class CommonTableController extends ExampleController {
  @service() fw;

  get settingsComponentName() {
    if (this.fw.isPaper) {
      return ensureSafeComponent(CommonTableSettingsPaperComponent, this);
    }
    if (this.fw.isBs3) {
      return ensureSafeComponent(CommonTableSettingsBs3Component, this);
    }
    if (this.fw.isBs4) {
      return ensureSafeComponent(CommonTableSettingsBs4Component, this);
    }
    return ensureSafeComponent(CommonTableSettingsPlainHtmlComponent, this);
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

  @action
  onDisplayDataChanged(displayData) {
    this.currentPageNumber = displayData.currentPageNumber;
  }
}
