import ModelsTableColumn from 'ember-models-table/utils/emt/emt-column';
import { ModelsTableDataItem } from 'ember-models-table/types/models-table-data-item.type';
import DefaultTheme from 'ember-models-table/services/emt-themes/default';

export interface RowGroupToggleArgs {
  /**
   * Value of `currentGroupingPropertyName` for current group
   */
  groupedValue: string;
  /**
   * Bound from {@link DefaultTheme.RowArgs.currentGroupingPropertyName | RowArgs.currentGroupingPropertyName}
   */
  currentGroupingPropertyName: string;
  /**
   * Same as {@link DefaultTheme.RowArgs.displayGroupedValueAs | RowArgs.displayGroupedValueAs}
   */
  displayGroupedValueAs: string;
  /**
   * Bound from {@link DefaultTheme.RowArgs.visibleProcessedColumns | RowArgs.visibleProcessedColumns}
   */
  visibleProcessedColumns: ModelsTableColumn[];
  /**
   * Length of `groupedItems`
   */
  groupedLength: number;
  /**
   * Bound from {@link DefaultTheme.RowArgs.groupedItems | RowArgs.groupedItems}
   */
  groupedItems: ModelsTableDataItem[];
  /**
   * Bound from {@link DefaultTheme.RowArgs.visibleGroupedItems | RowArgs.visibleGroupedItems}
   */
  visibleGroupedItems: ModelsTableDataItem[];
  /**
   * Bound from {@link DefaultTheme.Row.selectedGroupedItems | Row.selectedGroupedItems}
   */
  selectedGroupedItems: ModelsTableDataItem[];
  /**
   * Bound from {@link DefaultTheme.Row.expandedGroupedItems | Row.expandedGroupedItems}
   */
  expandedGroupedItems: ModelsTableDataItem[];
  /**
   * Bound from {@link DefaultTheme.RowArgs.themeInstance | RowArgs.themeInstance}
   */
  themeInstance: DefaultTheme;
  /**
   * Is current group collapsed
   */
  groupIsCollapsed: boolean;
  /**
   * Bound from {@link DefaultTheme.RowArgs.toggleGroupedRows | RowArgs.toggleGroupedRows}
   *
   * @event toggleGroupedRows
   */
  toggleGroupedRows: (v: string) => boolean;
  /**
   * Bound from {@link DefaultTheme.RowArgs.toggleGroupedRowsSelection | RowArgs.toggleGroupedRowsSelection}
   *
   * @event toggleGroupedRowsSelection
   */
  toggleGroupedRowsSelection: (v: string) => void;
  /**
   * Bound from {@link DefaultTheme.RowArgs.toggleGroupedRowsExpands | RowArgs.toggleGroupedRowsExpands}
   *
   * @event toggleGroupedRowsExpands
   */
  toggleGroupedRowsExpands: (v: string) => void;
}
