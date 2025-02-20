import { type ComponentLike } from '@glint/template';

import DefaultTheme from '../../../../../services/emt-themes/default';
import { type ModelsTableDataItem } from '../../../../../types/models-table-data-item.type';
import ModelsTableColumn from '../../../../../utils/emt/emt-column';
import { type ColumnComponents } from '../../../../column-components.interface';
import { type GroupedHeader } from '../../../../grouped-header.interface';

export interface TableHeaderArgs {
  /**
   * Bound from {@link DefaultTheme.TableArgs.noHeaderFilteringAndSorting | TableArgs.noHeaderFilteringAndSorting}
   */
  noHeaderFilteringAndSorting: boolean;
  /**
   * Bound from {@link DefaultTheme.TableArgs.groupedHeaders | TableArgs.groupedHeaders}
   */
  groupedHeaders?: GroupedHeader[][];
  /**
   * Bound from {@link DefaultTheme.TableArgs.processedColumns | TableArgs.processedColumns}
   */
  processedColumns: ModelsTableColumn[];
  /**
   * Bound from {@link DefaultTheme.TableArgs.visibleProcessedColumns | TableArgs.visibleProcessedColumns}
   */
  visibleProcessedColumns: ModelsTableColumn[];
  /**
   * Bound from {@link DefaultTheme.TableArgs.useFilteringByColumns | TableArgs.useFilteringByColumns}
   */
  useFilteringByColumns: boolean;
  /**
   * Bound from {@link DefaultTheme.TableArgs.themeInstance | TableArgs.themeInstance}
   */
  themeInstance: DefaultTheme;
  /**
   * Bound from {@link DefaultTheme.TableArgs.data | TableArgs.data}
   */
  data: ModelsTableDataItem[];
  /**
   * Bound from {@link DefaultTheme.TableArgs.columnComponents | TableArgs.columnComponents}
   */
  columnComponents?: ColumnComponents;
  /**
   * Bound from {@link DefaultTheme.TableArgs.selectedItems | TableArgs.selectedItems}
   */
  selectedItems: ModelsTableDataItem[];
  /**
   * Bound from {@link DefaultTheme.TableArgs.expandedItems | TableArgs.expandedItems}
   */
  expandedItems: ModelsTableDataItem[];
  /**
   * Bound from {@link Core.ModelsTable.sortProperties | ModelsTable.sortProperties}
   */
  sortProperties: string[];
  /**
   * Bound from {@link DefaultTheme.TableArgs.groupHeaderCellComponent | TableArgs.groupHeaderCellComponent}
   */
  groupHeaderCellComponent?: ComponentLike | null;
  /**
   * Bound from {@link DefaultTheme.TableArgs.useDataGrouping | TableArgs.useDataGrouping}
   */
  useDataGrouping: boolean;
  /**
   * Bound from {@link DefaultTheme.TableArgs.displayGroupedValueAs | TableArgs.displayGroupedValueAs}
   */
  displayGroupedValueAs: string;
  /**
   * Bound from {@link DefaultTheme.TableArgs.currentGroupingPropertyName | TableArgs.currentGroupingPropertyName}
   */
  currentGroupingPropertyName?: string;
  /**
   * Bound from {@link DefaultTheme.TableArgs.sort | TableArgs.sort}
   *
   * @event sort
   */
  sort: (c: ModelsTableColumn) => void;
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
  /**
   * Bound from {@link DefaultTheme.TableArgs.toggleAllSelection | TableArgs.toggleAllSelection}
   *
   * @event toggleAllSelection
   */
  toggleAllSelection: () => void;
  /**
   * Bound from {@link DefaultTheme.TableArgs.changeColumnFilter | TableArgs.changeColumnFilter}
   *
   * @event changeColumnFilter
   */
  changeColumnFilter: (v: string, column: ModelsTableColumn) => void;
}
