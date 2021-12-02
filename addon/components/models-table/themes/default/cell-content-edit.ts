import Component from '@glimmer/component';
import ModelsTableColumn from '../../../../utils/emt/emt-column';
import DefaultTheme from '../../../../services/emt-themes/default';
import { ModelsTableDataItem, RowInteractionClb } from '../../../models-table';

export interface CellContentEditArgs {
  /**
   * One item of [[Core.ModelsTable.data | ModelsTable.data]]
   */
  record: ModelsTableDataItem;
  /**
   * Bound from [[DefaultTheme.CellArgs.column | CellArgs.column]]
   */
  column: ModelsTableColumn;
  /**
   * Bound from [[DefaultTheme.CellArgs.index | CellArgs.index]]
   */
  index: number;
  /**
   * Bound from [[DefaultTheme.CellArgs.isEditRow | CellArgs.isEditRow]]
   */
  isEditRow: boolean;
  /**
   * Bound from [[DefaultTheme.CellArgs.isExpanded | CellArgs.isExpanded]]
   */
  isExpanded: boolean;
  /**
   * Bound from [[DefaultTheme.CellArgs.isSelected | CellArgs.isSelected]]
   */
  isSelected: boolean;
  /**
   * Bound from [[DefaultTheme.Cell.isColumnEditable | Cell.isColumnEditable]]
   */
  isColumnEditable: boolean;
  /**
   * Length of `groupedItems`
   */
  groupedLength: number;
  /**
   * Bound from [[DefaultTheme.CellArgs.themeInstance | CellArgs.themeInstance]]
   */
  themeInstance: DefaultTheme;
  /**
   * Bound from [[DefaultTheme.CellArgs.editRow | CellArgs.editRow]]
   *
   * @event editRow
   */
  editRow: () => void;
  /**
   * Bound from [[DefaultTheme.CellArgs.saveRow | CellArgs.saveRow]]
   *
   * @event saveRow
   */
  saveRow: () => void;
  /**
   * Bound from [[DefaultTheme.CellArgs.cancelEditRow | CellArgs.cancelEditRow]]
   *
   * @event cancelEditRow
   */
  cancelEditRow: () => void;
  /**
   * Bound from [[DefaultTheme.CellArgs.expandAllRows | CellArgs.expandAllRows]]
   *
   * @event expandAllRows
   */
  expandAllRows: () => void;
  /**
   * Bound from [[DefaultTheme.CellArgs.collapseAllRows | CellArgs.collapseAllRows]]
   *
   * @event collapseAllRows
   */
  collapseAllRows: () => void;
  /**
   * Bound from [[DefaultTheme.CellArgs.expandRow | CellArgs.expandRow]]
   *
   * @event expandRow
   */
  expandRow: RowInteractionClb;
  /**
   * Bound from [[DefaultTheme.CellArgs.collapseRow | CellArgs.collapseRow]]
   *
   * @event collapseRow
   */
  collapseRow: RowInteractionClb;
  /**
   * Bound from [[DefaultTheme.CellArgs.clickOnRow | CellArgs.clickOnRow]]
   *
   * @event clickOnRow
   */
  clickOnRow: RowInteractionClb;
}

/**
 * Component for cells in the edit-mode.
 *
 * Properties and event-handlers from [models-table/cell](Components.ModelsTableCell.html) are bound here
 */
export default class CellContentEdit extends Component<CellContentEditArgs> {}
