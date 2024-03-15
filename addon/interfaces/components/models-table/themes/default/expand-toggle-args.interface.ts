import DefaultTheme from '../../../../../services/emt-themes/default';
import { type ModelsTableDataItem } from '../../../../../types/models-table-data-item.type';
import { type RowInteractionClb } from '../../../../../types/row-interaction-clb.type';

export interface ExpandToggleArgs {
  /**
   * Bound from {@link DefaultTheme.RowArgs.themeInstance | RowArgs.themeInstance}
   */
  themeInstance: DefaultTheme;
  /**
   * Row index (1 ... row count on the page)
   */
  index: number;
  /**
   * One item of {@link Core.ModelsTable.data | ModelsTable.data}
   */
  record: ModelsTableDataItem;
  /**
   * Bound from {@link DefaultTheme.Row.isExpanded | Row.isExpanded}
   */
  isExpanded: boolean;
  /**
   * Bound from {@link DefaultTheme.RowArgs.collapseRow | RowArgs.collapseRow}
   *
   * @event collapseRow
   */
  collapseRow: RowInteractionClb;
  /**
   * Bound from {@link DefaultTheme.RowArgs.expandRow | RowArgs.expandRow}
   *
   * @event expandRow
   */
  expandRow: RowInteractionClb;
}
