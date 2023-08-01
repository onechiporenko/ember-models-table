import DefaultTheme from '../../../../../services/emt-themes/default';
import { ModelsTableDataItem } from '../../../../../types/models-table-data-item.type';
import ModelsTableColumn from '../../../../../utils/emt/emt-column';

export interface RowSortingCellArgs {
  /**
   * Bound from {@link DefaultTheme.RowSortingArgs.themeInstance | RowSortingArgs.themeInstance}
   */
  themeInstance: DefaultTheme;
  /**
   * Bound from {@link DefaultTheme.RowSortingArgs.selectedItems | RowSortingArgs.selectedItems}
   */
  selectedItems: ModelsTableDataItem[];
  /**
   * Bound from {@link DefaultTheme.RowSortingArgs.expandedItems | RowSortingArgs.expandedItems}
   */
  expandedItems: ModelsTableDataItem[];
  /**
   * Bound from {@link Core.ModelsTable.sortProperties | ModelsTable.sortProperties}
   */
  sortProperties: string[];
  /**
   * Bound from {@link DefaultTheme.RowSortingArgs.data | RowSortingArgs.data}
   */
  data: ModelsTableDataItem[];
  /**
   * Current column. One item from {@link Core.ModelsTable.processedColumns | ModelsTable.processedColumns}
   */
  column: ModelsTableColumn;
  /**
   * Bound from {@link DefaultTheme.RowSortingArgs.sort | RowSortingArgs.sort}
   *
   * @event sort
   */
  sort: (c: ModelsTableColumn) => void;
  /**
   * Bound from {@link DefaultTheme.RowSortingArgs.expandAllRows | RowSortingArgs.expandAllRows}
   *
   * @event expandAllRows
   */
  expandAllRows: () => void;
  /**
   * Bound from {@link DefaultTheme.RowSortingArgs.collapseAllRows | RowSortingArgs.collapseAllRows}
   *
   * @event collapseAllRows
   */
  collapseAllRows: () => void;
  /**
   * Bound from {@link DefaultTheme.RowSortingArgs.toggleAllSelection | RowSortingArgs.toggleAllSelection}
   *
   * @event toggleAllSelection
   */
  toggleAllSelection: () => void;
}
