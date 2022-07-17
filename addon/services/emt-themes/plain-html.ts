import { ensureSafeComponent } from '@embroider/util';
import DefaultTheme from './default';
import ColumnsDropdown from '../../components/models-table/themes/plain-html/columns-dropdown';
import GlobalFilter from '../../components/models-table/themes/plain-html/global-filter';
import RowFilteringCell from '../../components/models-table/themes/plain-html/row-filtering-cell';
import Summary from '../../components/models-table/themes/plain-html/summary';

export default class PlainHtmlTheme extends DefaultTheme {
  /**
   * @default 'models-table/themes/plain-html/columns-dropdown'
   */
  get columnsDropdownComponent(): unknown {
    return ensureSafeComponent(ColumnsDropdown, this);
  }

  /**
   * @default 'models-table/themes/plain-html/global-filter'
   */
  get globalFilterComponent(): unknown {
    return ensureSafeComponent(GlobalFilter, this);
  }

  /**
   * @default 'models-table/themes/plain-html/row-filtering-cell'
   */
  get rowFilteringCellComponent(): unknown {
    return ensureSafeComponent(RowFilteringCell, this);
  }

  /**
   * @default 'models-table/themes/plain-html/summary'
   */
  get summaryComponent(): unknown {
    return ensureSafeComponent(Summary, this);
  }

  headerWrapper = 'models-table-header';

  tfooterInternalWrapper = 'models-table-footer';

  paginationInternalWrapper = 'pagination-wrapper';

  currentPageSizeSelectWrapper = 'page-size-select-wrapper';

  columnsDropdownWrapper = 'columns-dropdown';

  clearFilterIcon = 'fa fa-times form-control-feedback';

  clearAllFiltersIcon = 'fa fa-times';

  sortAscIcon = 'fa fa-sort-asc';

  sortDescIcon = 'fa fa-sort-desc';

  columnVisibleIcon = 'fa fa-check-square-o';

  columnHiddenIcon = 'fa fa-square-o';

  navFirstIcon = 'fa fa-angle-double-left';

  navPrevIcon = 'fa fa-angle-left';

  navNextIcon = 'fa fa-angle-right';

  navLastIcon = 'fa fa-angle-double-right';

  caretIcon = 'caret';

  expandRowIcon = 'fa fa-plus';

  expandAllRowsIcon = 'fa fa-plus';

  collapseRowIcon = 'fa fa-minus';

  collapseAllRowsIcon = 'fa fa-minus';

  selectAllRowsIcon = 'fa fa-check-square-o';

  selectSomeRowsIcon = 'fa fa-minus-square-o';

  deselectAllRowsIcon = 'fa fa-square-o';

  selectRowIcon = 'fa fa-check-square-o';

  deselectRowIcon = 'fa fa-square-o';
}

declare module '@ember/service' {
  interface Registry {
    'emt-themes/plain-html': PlainHtmlTheme;
  }
}
