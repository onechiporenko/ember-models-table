import { type ComponentLike } from '@glint/template';
import ModelsTableColumn from '../../../../../utils/emt/emt-column';
import { type ColumnComponents } from '../../../../../interfaces/column-components.interface';
import { type ModelsTableDataItem } from '../../../../../types/models-table-data-item.type';
import DefaultTheme from '../../../../../services/emt-themes/default';

export interface RowGroupingArgs {
  /**
   * Bound from {@link DefaultTheme.TableBodyArgs.groupingRowComponent | TableBodyArgs.groupingRowComponent}
   */
  groupingRowComponent?: ComponentLike | null;
  /**
   * Bound from {@link DefaultTheme.TableBodyArgs.currentGroupingPropertyName | TableBodyArgs.currentGroupingPropertyName}
   */
  currentGroupingPropertyName?: string;
  /**
   * Bound from {@link DefaultTheme.TableBodyArgs.visibleProcessedColumns | TableBodyArgs.visibleProcessedColumns}
   */
  visibleProcessedColumns: ModelsTableColumn[];
  /**
   * Bound from {@link DefaultTheme.TableBodyArgs.displayGroupedValueAs | TableBodyArgs.displayGroupedValueAs}
   */
  displayGroupedValueAs: string;
  /**
   * Bound from {@link DefaultTheme.TableBodyArgs.columnComponents | TableBodyArgs.columnComponents}
   */
  columnComponents: ColumnComponents;
  /**
   * Bound from {@link DefaultTheme.TableBodyArgs.selectedItems | TableBodyArgs.selectedItems}
   */
  selectedItems: ModelsTableDataItem[];
  /**
   * Bound from {@link DefaultTheme.TableBodyArgs.expandedItems | TableBodyArgs.expandedItems}
   */
  expandedItems: ModelsTableDataItem[];
  /**
   * Subset of {@link DefaultTheme.TableBodyArgs.groupedArrangedContent | TableBodyArgs.groupedArrangedContent} with `currentGroupingPropertyName` equal to `groupedValue`
   */
  groupedItems?: ModelsTableDataItem[];
  /**
   * Bound from {@link DefaultTheme.TableBodyArgs.themeInstance | TableBodyArgs.themeInstance}
   */
  themeInstance: DefaultTheme;
  /**
   * Additional colspan needed in some cases. Value is set in the parent component's template
   */
  additionalColspan?: number;
  /**
   * Length of `groupedItems`
   */
  groupedLength?: number;
  /**
   * Subset of {@link DefaultTheme.TableBodyArgs.groupedVisibleContent | TableBodyArgs.groupedVisibleContent}
   */
  visibleGroupedItems?: ModelsTableDataItem[];
  /**
   * `true` if group with `groupedValue` is collapsed
   */
  groupIsCollapsed?: boolean;
  /**
   * Value of `currentGroupingPropertyName` for current group
   */
  groupedValue?: string;
  /**
   * Bound from {@link DefaultTheme.TableBodyArgs.toggleGroupedRows | TableBodyArgs.toggleGroupedRows}
   *
   * @event toggleGroupedRows
   */
  toggleGroupedRows: (v: string) => void;
  /**
   * Bound from {@link DefaultTheme.TableBodyArgs.toggleGroupedRowsSelection | TableBodyArgs.toggleGroupedRowsSelection}
   *
   * @event toggleGroupedRowsSelection
   */
  toggleGroupedRowsSelection: (v: string) => void;
  /**
   * Bound from {@link DefaultTheme.TableBodyArgs.toggleGroupedRowsExpands | TableBodyArgs.toggleGroupedRowsExpands}
   *
   * @event toggleGroupedRowsExpands
   */
  toggleGroupedRowsExpands: (v: string) => void;
}
