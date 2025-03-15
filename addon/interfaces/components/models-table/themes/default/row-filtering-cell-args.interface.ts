import DefaultTheme from '../../../../../services/emt-themes/default';
import { type ModelsTableDataItem } from '../../../../../types/models-table-data-item.type';
import ModelsTableColumn from '../../../../../utils/emt/emt-column';

export interface RowFilteringCellArgs {
  /**
   * Bound from {@link DefaultTheme.RowFilteringArgs.themeInstance | RowFilteringArgs.themeInstance}
   */
  themeInstance: DefaultTheme;
  /**
   * Current column. One item from {@link Core.ModelsTable.processedColumns | ModelsTable.processedColumns}
   */
  column: ModelsTableColumn;
  /**
   * Bound from {@link DefaultTheme.RowFilteringArgs.data | RowFilteringArgs.data}
   */
  data: ModelsTableDataItem[];
  /**
   * Bound from {@link DefaultTheme.RowFilteringArgs.selectedItems | RowFilteringArgs.selectedItems}
   */
  selectedItems: ModelsTableDataItem[];
  /**
   * Bound from {@link DefaultTheme.RowFilteringArgs.expandedItems | RowFilteringArgs.expandedItems}
   */
  expandedItems: ModelsTableDataItem[];
  /**
   * Bound from {@link DefaultTheme.RowFilteringArgs.expandAllRows | RowFilteringArgs.expandAllRows}
   *
   * @event expandAllRows
   */
  expandAllRows: () => void;
  /**
   * Bound from {@link DefaultTheme.RowFilteringArgs.collapseAllRows | RowFilteringArgs.collapseAllRows}
   *
   * @event collapseAllRows
   */
  collapseAllRows: () => void;
  /**
   * Bound from {@link DefaultTheme.RowFilteringArgs.toggleAllSelection | RowFilteringArgs.toggleAllSelection}
   *
   * @event toggleAllSelection
   */
  toggleAllSelection: () => void;
  /**
   * Bound from {@link DefaultTheme.RowFilteringArgs.changeColumnFilter | RowFilteringArgs.changeColumnFilter}
   *
   * @event changeColumnFilter
   */
  changeColumnFilter: (v: string, column: ModelsTableColumn) => void;
}
