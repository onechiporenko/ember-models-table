import { type ComponentLike } from '@glint/template';
import { TrackedArray } from 'tracked-built-ins';

import DefaultTheme from '../../../../../services/emt-themes/default';
import { type ModelsTableDataItem } from '../../../../../types/models-table-data-item.type';
import { type RowInteractionClb } from '../../../../../types/row-interaction-clb.type';
import ModelsTableColumn from '../../../../../utils/emt/emt-column';
import { type ColumnComponents } from '../../../../column-components.interface';
import { type SelectOption } from '../../../../select-option.interface';

export interface TableBodyArgs {
  /**
   * Bound from `DefaultTheme.TableArgs.processedColumns.length`
   */
  columnsCount: number;
  /**
   * Bound from {@link DefaultTheme.TableArgs.visibleContent | TableArgs.visibleContent}
   */
  visibleContent: TrackedArray<ModelsTableDataItem>;
  /**
   * Bound from {@link DefaultTheme.TableArgs.processedColumns | TableArgs.processedColumns}
   */
  processedColumns: ModelsTableColumn[];
  /**
   * Bound from {@link DefaultTheme.TableArgs.selectedItems | TableArgs.selectedItems}
   */
  selectedItems: ModelsTableDataItem[];
  /**
   * Bound from {@link DefaultTheme.TableArgs.expandedItems | TableArgs.expandedItems}
   */
  expandedItems: ModelsTableDataItem[];
  /**
   * Bound from {@link DefaultTheme.TableArgs.useDataGrouping | TableArgs.useDataGrouping}
   */
  useDataGrouping: boolean;
  /**
   * Bound from {@link DefaultTheme.TableArgs.groupingRowComponent | TableArgs.groupingRowComponent}
   */
  groupingRowComponent?: ComponentLike | null;
  /**
   * Bound from {@link DefaultTheme.TableArgs.groupSummaryRowComponent | TableArgs.groupSummaryRowComponent}
   */
  groupSummaryRowComponent?: ComponentLike | null;
  /**
   * Bound from {@link DefaultTheme.TableArgs.visibleProcessedColumns | TableArgs.visibleProcessedColumns}
   */
  visibleProcessedColumns: ModelsTableColumn[];
  /**
   * Bound from {@link DefaultTheme.TableArgs.allColumnsAreHidden | TableArgs.allColumnsAreHidden}
   */
  allColumnsAreHidden: boolean;
  /**
   * Bound from {@link DefaultTheme.TableArgs.themeInstance | TableArgs.themeInstance}
   */
  themeInstance: DefaultTheme;
  /**
   * Bound from {@link DefaultTheme.TableArgs.data | TableArgs.data}
   */
  data: any[];
  /**
   * Bound from {@link DefaultTheme.TableArgs.columnComponents | TableArgs.columnComponents}
   */
  columnComponents?: ColumnComponents;
  /**
   * Bound from {@link DefaultTheme.TableArgs.expandedRowComponent | TableArgs.expandedRowComponent}
   */
  expandedRowComponent?: ComponentLike | null;
  /**
   * Bound from {@link DefaultTheme.TableArgs.collapsedGroupValues | TableArgs.collapsedGroupValues}
   */
  collapsedGroupValues?: string[];
  /**
   * Bound from {@link DefaultTheme.TableArgs.currentGroupingPropertyName | TableArgs.currentGroupingPropertyName}
   */
  currentGroupingPropertyName?: string;
  /**
   * Bound from {@link DefaultTheme.TableArgs.dataGroupOptions | TableArgs.dataGroupOptions}
   */
  dataGroupOptions?: SelectOption[];
  /**
   * Bound from {@link DefaultTheme.TableArgs.groupedVisibleContentValuesOrder | TableArgs.groupedVisibleContentValuesOrder}
   */
  groupedVisibleContentValuesOrder?: string[];
  /**
   * Bound from {@link DefaultTheme.TableArgs.groupedVisibleContent | TableArgs.groupedVisibleContent}
   */
  groupedVisibleContent?: ModelsTableDataItem[][];
  /**
   * Bound from {@link DefaultTheme.TableArgs.groupedArrangedContent | TableArgs.groupedArrangedContent}
   */
  groupedArrangedContent?: ModelsTableDataItem[];
  /**
   * Bound from {@link DefaultTheme.TableArgs.displayGroupedValueAs | TableArgs.displayGroupedValueAs}
   */
  displayGroupedValueAs: string;
  /**
   * Bound from {@link DefaultTheme.TableArgs.toggleGroupedRows | TableArgs.toggleGroupedRows}
   *
   * @event toggleGroupedRows
   */
  toggleGroupedRows: (v: string) => void;
  /**
   * Bound from {@link DefaultTheme.TableArgs.toggleGroupedRowsSelection | TableArgs.toggleGroupedRowsSelection}
   *
   * @event toggleGroupedRowsSelection
   */
  toggleGroupedRowsSelection: (v: string) => void;
  /**
   * Bound from {@link DefaultTheme.TableArgs.toggleGroupedRowsExpands | TableArgs.toggleGroupedRowsExpands}
   *
   * @event toggleGroupedRowsExpands
   */
  toggleGroupedRowsExpands: (v: string) => void;
  /**
   * Bound from {@link DefaultTheme.TableArgs.doubleClickOnRow | TableArgs.doubleClickOnRow}
   *
   * @event doubleClickOnRow
   */
  doubleClickOnRow: RowInteractionClb;
  /**
   * Bound from {@link DefaultTheme.TableArgs.hoverOnRow | TableArgs.hoverOnRow}
   *
   * @event hoverOnRow
   */
  hoverOnRow: RowInteractionClb;
  /**
   * Bound from {@link DefaultTheme.TableArgs.outRow | TableArgs.outRow}
   *
   * @event outRow
   */
  outRow: RowInteractionClb;
  /**
   * Bound from {@link DefaultTheme.TableArgs.expandRow | TableArgs.expandRow}
   *
   * @event expandRow
   */
  expandRow: RowInteractionClb;
  /**
   * Bound from {@link DefaultTheme.TableArgs.collapseRow | TableArgs.collapseRow}
   *
   * @event collapseRow
   */
  collapseRow: RowInteractionClb;
  /**
   * Bound from {@link DefaultTheme.TableArgs.clickOnRow | TableArgs.clickOnRow}
   *
   * @event clickOnRow
   */
  clickOnRow: RowInteractionClb;
  /**
   * Bound from {@link DefaultTheme.TableArgs.expandAllRows | TableArgs.expandAllRows}
   *
   * @event expandAllRows
   */
  expandAllRows: () => void;
  /**
   * Bound from {@link DefaultTheme.TableArgs.collapseAllRows | TableArgs.collapseAllRows}
   *
   * @event collapseAllRows
   */
  collapseAllRows: () => void;
}
