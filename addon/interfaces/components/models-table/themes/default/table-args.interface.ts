import { type ComponentLike } from '@glint/template';
import { TrackedArray } from 'tracked-built-ins';

import DefaultTheme from '../../../../../services/emt-themes/default';
import { type ModelsTableDataItem } from '../../../../../types/models-table-data-item.type';
import { type RowInteractionClb } from '../../../../../types/row-interaction-clb.type';
import ModelsTableColumn from '../../../../../utils/emt/emt-column';
import { type ColumnComponents } from '../../../../column-components.interface';
import { type GroupedHeader } from '../../../../grouped-header.interface';
import { type SelectOption } from '../../../../select-option.interface';

export interface TableArgs {
  /**
   * Bound from {@link Core.ModelsTable.noHeaderFilteringAndSorting | ModelsTable.noHeaderFilteringAndSorting}
   */
  noHeaderFilteringAndSorting: boolean;
  /**
   * Bound from {@link Core.ModelsTable.groupedHeaders | ModelsTable.groupedHeaders}
   */
  groupedHeaders?: GroupedHeader[][];
  /**
   * Bound from {@link Core.ModelsTable.visibleContent | ModelsTable.visibleContent}
   */
  visibleContent: TrackedArray<ModelsTableDataItem>;
  /**
   * Bound from {@link Core.ModelsTable.selectedItems | ModelsTable.selectedItems}
   */
  selectedItems: TrackedArray<ModelsTableDataItem>;
  /**
   * Bound from {@link Core.ModelsTable.expandedItems | ModelsTable.expandedItems}
   */
  expandedItems: TrackedArray<ModelsTableDataItem>;
  /**
   * Bound from {@link Core.ModelsTable.expandedRowComponent | ModelsTable.expandedRowComponent}
   */
  expandedRowComponent?: ComponentLike | null;
  /**
   * Bound from {@link Core.ModelsTable.processedColumns | ModelsTable.processedColumns}
   */
  processedColumns: TrackedArray<ModelsTableColumn>;
  /**
   * Bound from {@link Core.ModelsTable.visibleProcessedColumns | ModelsTable.visibleProcessedColumns}
   */
  visibleProcessedColumns: ModelsTableColumn[];
  /**
   * Bound from {@link Core.ModelsTable.useFilteringByColumns | ModelsTable.useFilteringByColumns}
   */
  useFilteringByColumns: boolean;
  /**
   * Bound from {@link Core.ModelsTable.allColumnsAreHidden | ModelsTable.allColumnsAreHidden}
   */
  allColumnsAreHidden: boolean;
  /**
   * Bound from {@link Core.ModelsTable.displayGroupedValueAs | ModelsTable.displayGroupedValueAs}
   */
  displayGroupedValueAs?: string;
  /**
   * Bound from {@link Core.ModelsTable.collapsedGroupValues | ModelsTable.collapsedGroupValues}
   */
  collapsedGroupValues?: TrackedArray<any>;
  /**
   * Bound from {@link Core.ModelsTable.currentGroupingPropertyName | ModelsTable.currentGroupingPropertyName}
   */
  currentGroupingPropertyName?: string;
  /**
   * Bound from {@link Core.ModelsTable.groupingRowComponent | ModelsTable.groupingRowComponent}
   */
  groupingRowComponent?: ComponentLike | null;
  /**
   * Bound from {@link Core.ModelsTable.groupSummaryRowComponent | ModelsTable.groupSummaryRowComponent}
   */
  groupSummaryRowComponent?: ComponentLike | null;
  /**
   * Bound from {@link Core.ModelsTable.dataGroupOptions | ModelsTable.dataGroupOptions}
   */
  dataGroupOptions?: SelectOption[];
  /**
   * Bound from {@link Core.ModelsTable.groupedVisibleContentValuesOrder | ModelsTable.groupedVisibleContentValuesOrder}
   */
  groupedVisibleContentValuesOrder?: string[];
  /**
   * Bound from {@link Core.ModelsTable.groupedVisibleContent | ModelsTable.groupedVisibleContent}
   */
  groupedVisibleContent?: TrackedArray<ModelsTableDataItem[]>;
  /**
   * Bound from {@link Core.ModelsTable.groupedArrangedContent | ModelsTable.groupedArrangedContent}
   */
  groupedArrangedContent?: TrackedArray<ModelsTableDataItem>;
  /**
   * Bound from {@link Core.ModelsTable.groupHeaderCellComponent | ModelsTable.groupHeaderCellComponent}
   */
  groupHeaderCellComponent?: ComponentLike | null;
  /**
   * Bound from {@link Core.ModelsTable.useDataGrouping | ModelsTable.useDataGrouping}
   */
  useDataGrouping: boolean;
  /**
   * Bound from {@link Core.ModelsTable.sortProperties | ModelsTable.sortProperties}
   */
  sortProperties: TrackedArray<string>;
  /**
   * Bound from {@link Core.ModelsTable.toggleGroupedRowsSelection | ModelsTable.toggleGroupedRowsSelection}
   *
   * @event toggleGroupedRowsSelection
   */
  toggleGroupedRowsSelection: (v: string) => void;
  /**
   * Bound from {@link Core.ModelsTable.toggleGroupedRowsExpands | ModelsTable.toggleGroupedRowsExpands}
   *
   * @event toggleGroupedRowsExpands
   */
  toggleGroupedRowsExpands: (v: string) => void;
  /**
   * Bound from {@link Core.ModelsTable.toggleGroupedRows | ModelsTable.toggleGroupedRows}
   *
   * @event toggleGroupedRows
   */
  toggleGroupedRows: (v: string) => void;
  /**
   * Bound from {@link Core.ModelsTable.clickOnRow | ModelsTable.clickOnRow}
   *
   * @event clickOnRow
   */
  clickOnRow: RowInteractionClb;
  /**
   * Bound from {@link Core.ModelsTable.doubleClickOnRow | ModelsTable.doubleClickOnRow}
   *
   * @event doubleClickOnRow
   */
  doubleClickOnRow: RowInteractionClb;
  /**
   * Bound from {@link Core.ModelsTable.hoverOnRow | ModelsTable.hoverOnRow}
   *
   * @event hoverOnRow
   */
  hoverOnRow: RowInteractionClb;
  /**
   * Bound from {@link Core.ModelsTable.outRow | ModelsTable.outRow}
   *
   * @event outRow
   */
  outRow: RowInteractionClb;
  /**
   * Bound from {@link Core.ModelsTable.expandRow | ModelsTable.expandRow}
   *
   * @event expandRow
   */
  expandRow: RowInteractionClb;
  /**
   * Bound from {@link Core.ModelsTable.collapseRow | ModelsTable.collapseRow}
   *
   * @event collapseRow
   */
  collapseRow: RowInteractionClb;
  /**
   * Bound from {@link Core.ModelsTable.data | ModelsTable.data}
   */
  data: TrackedArray<ModelsTableDataItem>;
  /**
   * Bound from {@link Core.ModelsTable.themeInstance | ModelsTable.themeInstance}
   */
  themeInstance: DefaultTheme;
  /**
   * Bound from {@link Core.ModelsTable.columnComponents | ModelsTable.columnComponents}
   */
  columnComponents?: ColumnComponents;
  /**
   * Bound from {@link Core.ModelsTable.expandAllRows | ModelsTable.expandAllRows}
   *
   * @event expandAllRows
   */
  expandAllRows: () => void;
  /**
   * Bound from {@link Core.ModelsTable.collapseAllRows | ModelsTable.collapseAllRows}
   *
   * @event collapseAllRows
   */
  collapseAllRows: () => void;
  /**
   * Bound from {@link Core.ModelsTable.toggleAllSelection | ModelsTable.toggleAllSelection}
   *
   * @event toggleAllSelection
   */
  toggleAllSelection: () => void;
  /**
   * Bound from {@link Core.ModelsTable.changeColumnFilter | ModelsTable.changeColumnFilter}
   *
   * @event changeColumnFilter
   */
  changeColumnFilter: (v: string, column: ModelsTableColumn) => void;
  /**
   * Bound from {@link Core.ModelsTable.sort | ModelsTable.sort}
   *
   * @event sort
   */
  sort: (v: ModelsTableColumn) => void;
}
