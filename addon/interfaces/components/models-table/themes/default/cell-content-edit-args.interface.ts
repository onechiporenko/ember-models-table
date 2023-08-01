import ModelsTableColumn from '../../../../../utils/emt/emt-column';
import DefaultTheme from '../../../../../services/emt-themes/default';
import { ModelsTableDataItem } from '../../../../../types/models-table-data-item.type';
import { RowInteractionClb } from '../../../../../types/row-interaction-clb.type';

export interface CellContentEditArgs {
  /**
   * One item of {@link Core.ModelsTable.data | ModelsTable.data}
   */
  record: ModelsTableDataItem;
  /**
   * Bound from {@link DefaultTheme.CellArgs.column | CellArgs.column}
   */
  column: ModelsTableColumn;
  /**
   * Bound from {@link DefaultTheme.CellArgs.index | CellArgs.index}
   */
  index: number;
  /**
   * Bound from {@link DefaultTheme.CellArgs.isEditRow | CellArgs.isEditRow}
   */
  isEditRow: boolean;
  /**
   * Bound from {@link DefaultTheme.CellArgs.isExpanded | CellArgs.isExpanded}
   */
  isExpanded: boolean;
  /**
   * Bound from {@link DefaultTheme.CellArgs.isSelected | CellArgs.isSelected}
   */
  isSelected: boolean;
  /**
   * Bound from {@link DefaultTheme.Cell.isColumnEditable | Cell.isColumnEditable}
   */
  isColumnEditable: boolean;
  /**
   * Length of `groupedItems`
   */
  groupedLength?: number;
  /**
   * Bound from {@link DefaultTheme.CellArgs.themeInstance | CellArgs.themeInstance}
   */
  themeInstance: DefaultTheme;
  /**
   * Bound from {@link DefaultTheme.CellArgs.editRow | CellArgs.editRow}
   *
   * @event editRow
   */
  editRow: () => void;
  /**
   * Bound from {@link DefaultTheme.CellArgs.saveRow | CellArgs.saveRow}
   *
   * @event saveRow
   */
  saveRow: () => void;
  /**
   * Bound from {@link DefaultTheme.CellArgs.cancelEditRow | CellArgs.cancelEditRow}
   *
   * @event cancelEditRow
   */
  cancelEditRow: () => void;
  /**
   * Bound from {@link DefaultTheme.CellArgs.expandAllRows | CellArgs.expandAllRows}
   *
   * @event expandAllRows
   */
  expandAllRows: () => void;
  /**
   * Bound from {@link DefaultTheme.CellArgs.collapseAllRows | CellArgs.collapseAllRows}
   *
   * @event collapseAllRows
   */
  collapseAllRows: () => void;
  /**
   * Bound from {@link DefaultTheme.CellArgs.expandRow | CellArgs.expandRow}
   *
   * @event expandRow
   */
  expandRow: RowInteractionClb;
  /**
   * Bound from {@link DefaultTheme.CellArgs.collapseRow | CellArgs.collapseRow}
   *
   * @event collapseRow
   */
  collapseRow: RowInteractionClb;
  /**
   * Bound from {@link DefaultTheme.CellArgs.clickOnRow | CellArgs.clickOnRow}
   *
   * @event clickOnRow
   */
  clickOnRow: RowInteractionClb;
}
