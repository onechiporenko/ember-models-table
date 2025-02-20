import { type RowActionPayload } from '../../../../../components/models-table/themes/default/cell-edit-toggle';
import DefaultTheme from '../../../../../services/emt-themes/default';
import { type ModelsTableDataItem } from '../../../../../types/models-table-data-item.type';

export interface CellEditToggleArgs {
  /**
   * Bound from {@link DefaultTheme.CellArgs.themeInstance | CellArgs.themeInstance}
   */
  themeInstance: DefaultTheme;
  /**
   * One item of {@link Core.ModelsTable.data | ModelsTable.data}
   */
  record: ModelsTableDataItem;
  /**
   * Bound from {@link DefaultTheme.CellArgs.isEditRow | CellArgs.isEditRow}
   */
  isEditRow: boolean;
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
   * Action-handler bound in the {@link Core.ModelsTableArgs.columnComponents | columnComponents}-hash.
   *
   * It's called when edited row is started to save ("Save"-button is clicked)
   *
   * @event onSaveRow
   */
  onSaveRow: (payload: RowActionPayload) => boolean;
  /**
   * Action-handler bound in the {@link Core.ModelsTableArgs.columnComponents | columnComponents}-hash.
   *
   * It's called when edit row is started ("Edit"-button is clicked)
   *
   * @event onEditRow
   */
  onEditRow: (payload: RowActionPayload) => boolean;
  /**
   * Action-handler bound in the {@link Core.ModelsTableArgs.columnComponents | columnComponents}-hash.
   *
   * It's called when edit row is canceled ("Cancel"-button is clicked)
   *
   * @event onCancelRow
   */
  onCancelRow: (payload: RowActionPayload) => boolean;
}
