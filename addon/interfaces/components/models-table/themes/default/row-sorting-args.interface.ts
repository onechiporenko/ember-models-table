import { type ComponentLike } from '@glint/template';
import ModelsTableColumn from '../../../../../utils/emt/emt-column';
import DefaultTheme from '../../../../../services/emt-themes/default';
import { type ColumnComponents } from '../../../..//column-components.interface';
import { type ModelsTableDataItem } from '../../../../../types/models-table-data-item.type';

export interface RowSortingArgs {
  /**
   * Bound from {@link DefaultTheme.TableHeaderArgs.processedColumns | TableHeaderArgs.processedColumns}
   */
  processedColumns: ModelsTableColumn[];
  /**
   * Bound from {@link DefaultTheme.TableHeaderArgs.visibleProcessedColumns | TableHeaderArgs.visibleProcessedColumns}
   */
  visibleProcessedColumns: ModelsTableColumn[];
  /**
   * Bound from {@link DefaultTheme.TableHeaderArgs.themeInstance | TableHeaderArgs.themeInstance}
   */
  themeInstance: DefaultTheme;
  /**
   * Bound from {@link DefaultTheme.TableHeaderArgs.selectedItems | TableHeaderArgs.selectedItems}
   */
  selectedItems: any[];
  /**
   * Bound from {@link DefaultTheme.TableHeaderArgs.expandedItems | TableHeaderArgs.expandedItems}
   */
  expandedItems: any[];
  /**
   * Bound from {@link Core.ModelsTable.sortProperties | ModelsTable.sortProperties}
   */
  sortProperties: string[];
  /**
   * Bound from {@link DefaultTheme.TableHeaderArgs.useDataGrouping | TableHeaderArgs.useDataGrouping}
   */
  useDataGrouping: boolean;
  /**
   * Bound from {@link DefaultTheme.TableHeaderArgs.displayGroupedValueAs | TableHeaderArgs.displayGroupedValueAs}
   */
  displayGroupedValueAs: string;
  /**
   * Bound from {@link DefaultTheme.TableHeaderArgs.groupHeaderCellComponent | TableHeaderArgs.groupHeaderCellComponent}
   */
  groupHeaderCellComponent?: ComponentLike<any> | null;
  /**
   * Bound from {@link DefaultTheme.TableHeaderArgs.currentGroupingPropertyName | TableHeaderArgs.currentGroupingPropertyName}
   */
  currentGroupingPropertyName?: string;
  /**
   * Bound from {@link DefaultTheme.TableHeaderArgs.columnComponents | TableHeaderArgs.columnComponents}
   */
  columnComponents?: ColumnComponents;
  /**
   * Bound from {@link DefaultTheme.TableHeaderArgs.data | TableHeaderArgs.data}
   */
  data: ModelsTableDataItem[];
  /**
   * Bound from {@link DefaultTheme.TableHeaderArgs.sort | TableHeaderArgs.sort}
   *
   * @event sort
   */
  sort: (c: ModelsTableColumn) => void;
  /**
   * Bound from {@link DefaultTheme.TableHeaderArgs.expandAllRows | TableHeaderArgs.expandAllRows}
   *
   * @event expandAllRows
   */
  expandAllRows: () => void;
  /**
   * Bound from {@link DefaultTheme.TableHeaderArgs.collapseAllRows | TableHeaderArgs.collapseAllRows}
   *
   * @event collapseAllRows
   */
  collapseAllRows: () => void;
  /**
   * Bound from {@link DefaultTheme.TableHeaderArgs.toggleAllSelection | TableHeaderArgs.toggleAllSelection}
   *
   * @event toggleAllSelection
   */
  toggleAllSelection: () => void;
}
