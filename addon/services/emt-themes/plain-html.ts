import { ensureSafeComponent } from '@embroider/util';
import { type ComponentLike } from '@glint/template';
import { type ColumnsDropdownSignature } from 'ember-models-table/interfaces/components/models-table/themes/default/columns-dropdown-signature.interface';
import { type GlobalFilterSignature } from 'ember-models-table/interfaces/components/models-table/themes/default/global-filter-signature.interface';
import { type RowFilteringCellSignature } from 'ember-models-table/interfaces/components/models-table/themes/default/row-filtering-cell-signature.interface';
import { type SummarySignature } from 'ember-models-table/interfaces/components/models-table/themes/default/summary-signature.interface';

import ColumnsDropdown from '../../components/models-table/themes/plain-html/columns-dropdown';
import GlobalFilter from '../../components/models-table/themes/plain-html/global-filter';
import RowFilteringCell from '../../components/models-table/themes/plain-html/row-filtering-cell';
import Summary from '../../components/models-table/themes/plain-html/summary';
import DefaultTheme from './default';

export default class PlainHtmlTheme extends DefaultTheme {
  /**
   * @default 'models-table/themes/plain-html/columns-dropdown'
   */
  get columnsDropdownComponent(): ComponentLike<ColumnsDropdownSignature> {
    return ensureSafeComponent(ColumnsDropdown, this);
  }

  /**
   * @default 'models-table/themes/plain-html/global-filter'
   */
  get globalFilterComponent(): ComponentLike<GlobalFilterSignature> {
    return ensureSafeComponent(GlobalFilter, this);
  }

  /**
   * @default 'models-table/themes/plain-html/row-filtering-cell'
   */
  get rowFilteringCellComponent(): ComponentLike<RowFilteringCellSignature> {
    return ensureSafeComponent(RowFilteringCell, this);
  }

  /**
   * @default 'models-table/themes/plain-html/summary'
   */
  get summaryComponent(): ComponentLike<SummarySignature> {
    return ensureSafeComponent(Summary, this);
  }

  headerWrapper = 'models-table-header';

  tfooterInternalWrapper = 'models-table-footer';

  paginationInternalWrapper = 'pagination-wrapper';

  currentPageSizeSelectWrapper = 'page-size-select-wrapper';

  columnsDropdownWrapper = 'columns-dropdown';

  clearFilterIcon = 'fa fa-fw fa-times form-control-feedback';

  clearAllFiltersIcon = 'fa fa-fw fa-times';

  sortAscIcon = 'fa fa-fw fa-sort-asc';

  sortDescIcon = 'fa fa-fw fa-sort-desc';

  columnVisibleIcon = 'fa fa-fw fa-check-square-o';

  columnHiddenIcon = 'fa fa-fw fa-square-o';

  navFirstIcon = 'fa fa-fw fa-angle-double-left';

  navPrevIcon = 'fa fa-fw fa-angle-left';

  navNextIcon = 'fa fa-fw fa-angle-right';

  navLastIcon = 'fa fa-fw fa-angle-double-right';

  caretIcon = 'caret';

  expandRowIcon = 'fa fa-fw fa-plus';

  expandAllRowsIcon = 'fa fa-fw fa-plus';

  collapseRowIcon = 'fa fa-fw fa-minus';

  collapseAllRowsIcon = 'fa fa-fw fa-minus';

  selectAllRowsIcon = 'fa fa-fw fa-check-square-o';

  selectSomeRowsIcon = 'fa fa-fw fa-minus-square-o';

  deselectAllRowsIcon = 'fa fa-fw fa-square-o';

  selectRowIcon = 'fa fa-fw fa-check-square-o';

  deselectRowIcon = 'fa fa-fw fa-square-o';
}

declare module '@ember/service' {
  interface Registry {
    'emt-themes/plain-html': PlainHtmlTheme;
  }
}
