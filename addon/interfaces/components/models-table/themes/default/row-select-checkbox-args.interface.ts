import DefaultTheme from '../../../../../services/emt-themes/default';
import { type ModelsTableDataItem } from '../../../../../types/models-table-data-item.type';
import { type RowInteractionClb } from '../../../../../types/row-interaction-clb.type';

export interface RowSelectCheckboxArgs {
  /**
   * Bound from {@link DefaultTheme.RowArgs.themeInstance | RowArgs.themeInstance}
   */
  themeInstance: DefaultTheme;
  /**
   * Row index (1 ... row count on the page)
   */
  index: number;

  /**
   * Is current row marked as "checked" or not
   */
  isSelected: boolean;
  /**
   * One item of {@link Core.ModelsTable.data | ModelsTable.data}
   */
  record: ModelsTableDataItem;
  /**
   * Bound from {@link DefaultTheme.RowArgs.clickOnRow | RowArgs.clickOnRow}
   *
   * @event clickOnRow
   */
  clickOnRow: RowInteractionClb;
}
