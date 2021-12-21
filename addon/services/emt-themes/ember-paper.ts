import { ensureSafeComponent } from '@embroider/util';
import DefaultTheme from './default';
import CellContentEdit from '../../components/models-table/themes/ember-paper/cell-content-edit';
import CellEditToggle from '../../components/models-table/themes/ember-paper/cell-edit-toggle';
import ColumnsDropdown from '../../components/models-table/themes/ember-paper/columns-dropdown';
import DataGroupBySelect from '../../components/models-table/themes/ember-paper/data-group-by-select';
import ExpandAllToggle from '../../components/models-table/themes/ember-paper/expand-all-toggle';
import ExpandToggle from '../../components/models-table/themes/ember-paper/expand-toggle';
import GlobalFilter from '../../components/models-table/themes/ember-paper/global-filter';
import PageSizeSelect from '../../components/models-table/themes/ember-paper/page-size-select';
import PaginationNumeric from '../../components/models-table/themes/ember-paper/pagination-numeric';
import PaginationSimple from '../../components/models-table/themes/ember-paper/pagination-simple';
import RowFilteringCell from '../../components/models-table/themes/ember-paper/row-filtering-cell';
import RowSelectAllCheckbox from '../../components/models-table/themes/ember-paper/row-select-all-checkbox';
import RowSelectCheckbox from '../../components/models-table/themes/ember-paper/row-select-checkbox';
import Select from '../../components/models-table/themes/ember-paper/select';
import Summary from '../../components/models-table/themes/ember-paper/summary';

export default class EmberPaperTheme extends DefaultTheme {
  /**
   * @ember-paper 'models-table/themes/ember-paper/cell-content-edit'
   */
  get cellContentEditComponent(): unknown {
    return ensureSafeComponent(CellContentEdit, this);
  }

  /**
   * @ember-paper 'models-table/themes/ember-paper/cell-edit-toggle'
   */
  get cellEditToggleComponent(): unknown {
    return ensureSafeComponent(CellEditToggle, this);
  }

  /**
   * @ember-paper 'models-table/themes/ember-paper/columns-dropdown'
   */
  get columnsDropdownComponent(): unknown {
    return ensureSafeComponent(ColumnsDropdown, this);
  }

  /**
   * @ember-paper 'models-table/themes/ember-paper/data-group-by-select'
   */
  get dataGroupBySelectComponent(): unknown {
    return ensureSafeComponent(DataGroupBySelect, this);
  }

  /**
   * @ember-paper 'models-table/themes/ember-paper/expand-all-toggle'
   */
  get expandAllToggleComponent(): unknown {
    return ensureSafeComponent(ExpandAllToggle, this);
  }

  /**
   * @ember-paper 'models-table/themes/ember-paper/expand-toggle'
   */
  get expandToggleComponent(): unknown {
    return ensureSafeComponent(ExpandToggle, this);
  }

  /**
   * @ember-paper 'models-table/themes/ember-paper/global-filter'
   */
  get globalFilterComponent(): unknown {
    return ensureSafeComponent(GlobalFilter, this);
  }

  /**
   * @ember-paper 'models-table/themes/ember-paper/page-size-select'
   */
  get pageSizeSelectComponent(): unknown {
    return ensureSafeComponent(PageSizeSelect, this);
  }

  /**
   * @ember-paper 'models-table/themes/ember-paper/pagination-numeric'
   */
  get paginationNumericComponent(): unknown {
    return ensureSafeComponent(PaginationNumeric, this);
  }

  /**
   * @ember-paper 'models-table/themes/ember-paper/pagination-simple'
   */
  get paginationSimpleComponent(): unknown {
    return ensureSafeComponent(PaginationSimple, this);
  }

  /**
   * @ember-paper 'models-table/themes/ember-paper/row-filtering-cell'
   */
  get rowFilteringCellComponent(): unknown {
    return ensureSafeComponent(RowFilteringCell, this);
  }

  /**
   * @ember-paper 'models-table/themes/ember-paper/row-select-all-checkbox'
   */
  get rowSelectAllCheckboxComponent(): unknown {
    return ensureSafeComponent(RowSelectAllCheckbox, this);
  }

  /**
   * @ember-paper 'models-table/themes/ember-paper/row-select-checkbox'
   */
  get rowSelectCheckboxComponent(): unknown {
    return ensureSafeComponent(RowSelectCheckbox, this);
  }

  /**
   * @ember-paper 'models-table/themes/ember-paper/select'
   */
  get selectComponent(): unknown {
    return ensureSafeComponent(Select, this);
  }

  /**
   * @ember-paper 'models-table/themes/ember-paper/summary'
   */
  get summaryComponent(): unknown {
    return ensureSafeComponent(Summary, this);
  }

  table = 'paper-table';

  headerWrapper = 'layout-row layout-align-space-between';

  tfooterInternalWrapper =
    'layout-row layout-align-space-between-center footer-internal-wrapper';

  paginationInternalWrapper = 'layout-row layout-align-space-between-center';

  columnVisibleIcon = 'check_box';

  columnHiddenIcon = 'check_box_outline_blank';

  sortAscIcon = 'arrow_drop_up';

  sortDescIcon = 'arrow_drop_down';

  navFirstIcon = 'first_page';

  navPrevIcon = 'chevron_left';

  navNextIcon = 'chevron_right';

  navLastIcon = 'last_page';

  clearAllFiltersIcon = 'clear';

  filteringCellInternalWrapper = 'layout-row layout-align-space-between-center';

  columnsDropdownWrapper = 'columns-dropdown';

  expandRowIcon = 'expand_more';

  collapseAllRowsIcon = 'expand_less';

  expandAllRowsIcon = 'expand_more';
}
