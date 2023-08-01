import { TrackedArray } from 'tracked-built-ins';
import ModelsTableColumn from '../../../../../utils/emt/emt-column';
import { ColumnDropdownOptions } from '../../../../column-dropdown-options.interface';
import DefaultTheme from '../../../../../services/emt-themes/default';
import { ColumnSet } from '../../../../column-set.interface';

export interface ColumnsDropdownArgs {
  /**
   * Bound from {@link Core.ModelsTable.processedColumns | ModelsTable.processedColumns}
   */
  processedColumns: TrackedArray<ModelsTableColumn>;
  /**
   * Bound from {@link Core.ModelsTable.columnDropdownOptions | ModelsTable.columnDropdownOptions}
   */
  columnDropdownOptions: ColumnDropdownOptions;
  /**
   * Bound from {@link Core.ModelsTable.themeInstance | ModelsTable.themeInstance}
   */
  themeInstance: DefaultTheme;
  /**
   * Bound from {@link Core.ModelsTable.showAllColumns | ModelsTable.showAllColumns}
   *
   * @event showAllColumns
   */
  showAllColumns: () => void;
  /**
   * Bound from {@link Core.ModelsTable.hideAllColumns | ModelsTable.hideAllColumns}
   *
   * @event hideAllColumns
   */
  hideAllColumns: () => void;
  /**
   * Bound from {@link Core.ModelsTable.restoreDefaultVisibility | ModelsTable.restoreDefaultVisibility}
   *
   * @event restoreDefaultVisibility
   */
  restoreDefaultVisibility: () => void;
  /**
   * Bound from {@link Core.ModelsTable.toggleColumnSetVisibility | ModelsTable.toggleColumnSetVisibility}
   *
   * @event toggleColumnSetVisibility
   */
  toggleColumnSetVisibility: (v: ColumnSet) => void;
  /**
   * Bound from {@link Core.ModelsTable.toggleColumnVisibility | ModelsTable.toggleColumnVisibility}
   *
   * @event toggleColumnVisibility
   */
  toggleColumnVisibility: (v: ModelsTableColumn) => void;
}
