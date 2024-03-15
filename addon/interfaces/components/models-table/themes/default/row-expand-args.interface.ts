import { type ComponentLike } from '@glint/template';
import { type ModelsTableDataItem } from '../../../../../types/models-table-data-item.type';
import ModelsTableColumn from '../../../../../utils/emt/emt-column';
import DefaultTheme from '../../../../../services/emt-themes/default';
import { type RowInteractionClb } from '../../../../../types/row-interaction-clb.type';

export interface RowExpandArgs {
  /**
   * Row index (1 ... row count on the page)
   */
  index: number;
  /**
   * One item of {@link Core.ModelsTable.data | ModelsTable.data}
   */
  record: ModelsTableDataItem;
  /**
   * Bound from {@link DefaultTheme.TableBodyArgs.selectedItems | TableBodyArgs.selectedItems}
   */
  selectedItems: ModelsTableDataItem[];
  /**
   * Bound from {@link DefaultTheme.TableBodyArgs.processedColumns | TableBodyArgs.processedColumns}
   */
  processedColumns: ModelsTableColumn[];
  /**
   * Bound from {@link DefaultTheme.TableBodyArgs.visibleProcessedColumns | TableBodyArgs.visibleProcessedColumns}
   */
  visibleProcessedColumns: ModelsTableColumn[];
  /**
   * Bound from {@link DefaultTheme.TableBodyArgs.themeInstance | TableBodyArgs.themeInstance}
   */
  themeInstance: DefaultTheme;
  /**
   * Bound from {@link DefaultTheme.TableBodyArgs.expandedRowComponent | TableBodyArgs.expandedRowComponent}
   */
  expandedRowComponent?: ComponentLike | null;
  /**
   * Bound from {@link DefaultTheme.TableBodyArgs.clickOnRow | TableBodyArgs.clickOnRow}
   *
   * @event clickOnRow
   */
  clickOnRow: RowInteractionClb;
}
