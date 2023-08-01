import { ColumnComponents } from '../../../../column-components.interface';
import ModelsTableColumn from '../../../../../utils/emt/emt-column';
import { ModelsTableDataItem } from '../../../../../types/models-table-data-item.type';
import DefaultTheme from '../../../../../services/emt-themes/default';
import { RowInteractionClb } from '../../../../../types/row-interaction-clb.type';

export interface CellArgs {
  /**
   * Bound from {@link DefaultTheme.RowArgs.columnComponents | RowArgs.columnComponents}
   */
  columnComponents?: ColumnComponents;
  /**
   * Current column. One item from {@link DefaultTheme.RowArgs.visibleProcessedColumns | RowArgs.visibleProcessedColumns}
   */
  column: ModelsTableColumn;
  /**
   * One item of {@link Core.ModelsTable.data | ModelsTable.data}
   */
  record: ModelsTableDataItem;
  /**
   * Bound from {@link DefaultTheme.RowArgs.index | RowArgs.index}
   */
  index: number;
  /**
   * Bound from {@link DefaultTheme.Row.isExpanded | Row.isExpanded}
   */
  isExpanded: boolean;
  /**
   * Bound from {@link DefaultTheme.Row.isSelected | Row.isSelected}
   */
  isSelected: boolean;
  /**
   * Bound from {@link DefaultTheme.RowArgs.themeInstance | RowArgs.themeInstance}
   */
  themeInstance: DefaultTheme;
  /**
   * Length of `groupedItems`
   */
  groupedLength?: number;
  /**
   * Bound from {@link DefaultTheme.Row.isEditRow | Row.isEditRow}
   */
  isEditRow: boolean;
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
  /**
   * Bound from {@link DefaultTheme.RowArgs.expandAllRows | RowArgs.expandAllRows}
   *
   * @event expandAllRows
   */
  expandAllRows: () => void;
  /**
   * Bound from {@link DefaultTheme.RowArgs.collapseAllRows | RowArgs.collapseAllRows}
   *
   * @event collapseAllRows
   */
  collapseAllRows: () => void;
  /**
   * Bound from {@link DefaultTheme.RowArgs.clickOnRow | RowArgs.clickOnRow}
   *
   * @event clickOnRow
   */
  clickOnRow: RowInteractionClb;
  /**
   * Bound from {@link DefaultTheme.Row.editRow | Row.editRow}
   *
   * @event editRow
   */
  editRow: () => void;
  /**
   * Bound from {@link DefaultTheme.Row.saveRow | Row.saveRow}
   *
   * @event saveRow
   */
  saveRow: () => void;
  /**
   * Bound from {@link DefaultTheme.Row.cancelEditRow | Row.cancelEditRow}
   *
   * @event cancelEditRow
   */
  cancelEditRow: () => void;
}
