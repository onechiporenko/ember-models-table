import { ComponentLike } from '@glint/template';
import ModelsTableColumn from '../../../../../utils/emt/emt-column';
import { ColumnComponents } from '../../../../column-components.interface';
import DefaultTheme from '../../../../../services/emt-themes/default';
import { ModelsTableDataItem } from '../../../../../types/models-table-data-item.type';
import { RowInteractionClb } from '../../../../../types/row-interaction-clb.type';

export interface RowArgs {
  /**
   * Bound from {@link DefaultTheme.TableBodyArgs.visibleProcessedColumns | TableBodyArgs.visibleProcessedColumns}
   */
  visibleProcessedColumns: ModelsTableColumn[];
  /**
   * Bound from {@link DefaultTheme.TableBodyArgs.groupingRowComponent | TableBodyArgs.groupingRowComponent}
   */
  groupingRowComponent?: ComponentLike | null;
  /**
   * Bound from {@link DefaultTheme.TableBodyArgs.groupSummaryRowComponent | TableBodyArgs.groupSummaryRowComponent}
   */
  groupSummaryRowComponent?: ComponentLike | null;
  /**
   * Bound from {@link DefaultTheme.TableBodyArgs.collapsedGroupValues | TableBodyArgs.collapsedGroupValues}
   */
  collapsedGroupValues?: string[];
  /**
   * Bound from {@link DefaultTheme.TableBodyArgs.currentGroupingPropertyName | TableBodyArgs.currentGroupingPropertyName}
   */
  currentGroupingPropertyName?: string;
  /**
   * Bound from {@link DefaultTheme.TableBodyArgs.columnComponents | TableBodyArgs.columnComponents}
   */
  columnComponents: ColumnComponents;
  /**
   * Bound from {@link DefaultTheme.TableBodyArgs.themeInstance | TableBodyArgs.themeInstance}
   */
  themeInstance: DefaultTheme;
  /**
   * Bound from {@link DefaultTheme.TableBodyArgs.selectedItems | TableBodyArgs.selectedItems}
   */
  selectedItems: ModelsTableDataItem[];
  /**
   * Bound from {@link DefaultTheme.TableBodyArgs.expandedItems | TableBodyArgs.expandedItems}
   */
  expandedItems: ModelsTableDataItem[];
  /**
   * Bound from {@link DefaultTheme.TableBodyArgs.useDataGrouping | TableBodyArgs.useDataGrouping}
   */
  useDataGrouping: boolean;
  /**
   * Bound from {@link DefaultTheme.TableBodyArgs.displayGroupedValueAs | TableBodyArgs.displayGroupedValueAs}
   */
  displayGroupedValueAs: string;
  /**
   * Subset of {@link DefaultTheme.TableBodyArgs.groupedVisibleContent | TableBodyArgs.groupedVisibleContent}
   */
  visibleGroupedItems?: ModelsTableDataItem[];
  /**
   * Subset of {@link DefaultTheme.TableBodyArgs.groupedArrangedContent | TableBodyArgs.groupedArrangedContent} with `currentGroupingPropertyName` equal to `groupedValue`
   */
  groupedItems?: ModelsTableDataItem[];
  /**
   * Length of `groupedItems`
   */
  groupedLength?: number;
  /**
   * Value of `currentGroupingPropertyName` for current group
   */
  groupedValue?: string;
  /**
   * One item of {@link Core.ModelsTable.data | ModelsTable.data}
   */
  record: ModelsTableDataItem;
  /**
   * Row index (1 ... rows count on the page)
   */
  index: number;
  /**
   * Bound from {@link DefaultTheme.TableBodyArgs.doubleClickOnRow | TableBodyArgs.doubleClickOnRow}
   *
   * @event doubleClickOnRow
   */
  doubleClickOnRow: RowInteractionClb;
  /**
   * Bound from {@link DefaultTheme.TableBodyArgs.hoverOnRow | TableBodyArgs.hoverOnRow}
   *
   * @event hoverOnRow
   */
  hoverOnRow: RowInteractionClb;
  /**
   * Bound from {@link DefaultTheme.TableBodyArgs.outRow | TableBodyArgs.outRow}
   *
   * @event outRow
   */
  outRow: RowInteractionClb;
  /**
   * Bound from {@link DefaultTheme.TableBodyArgs.expandRow | TableBodyArgs.expandRow}
   *
   * @event expandRow
   */
  expandRow: RowInteractionClb;
  /**
   * Bound from {@link DefaultTheme.TableBodyArgs.collapseRow | TableBodyArgs.collapseRow}
   *
   * @event collapseRow
   */
  collapseRow: RowInteractionClb;
  /**
   * Bound from {@link DefaultTheme.TableBodyArgs.clickOnRow | TableBodyArgs.clickOnRow}
   *
   * @event clickOnRow
   */
  clickOnRow: RowInteractionClb;
  /**
   * Bound from {@link DefaultTheme.TableBodyArgs.expandAllRows | TableBodyArgs.expandAllRows}
   *
   * @event expandAllRows
   */
  expandAllRows: () => void;
  /**
   * Bound from {@link DefaultTheme.TableBodyArgs.collapseAllRows | TableBodyArgs.collapseAllRows}
   *
   * @event collapseAllRows
   */
  collapseAllRows: () => void;
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
