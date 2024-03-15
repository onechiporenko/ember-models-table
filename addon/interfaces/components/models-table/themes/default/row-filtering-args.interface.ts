import ModelsTableColumn from 'ember-models-table/utils/emt/emt-column';
import DefaultTheme from 'ember-models-table/services/emt-themes/default';
import { type ColumnComponents } from 'ember-models-table/interfaces/column-components.interface';
import { type ModelsTableDataItem } from 'ember-models-table/types/models-table-data-item.type';

export interface RowFilteringArgs {
  /**
   * Bound from {@link DefaultTheme.TableHeaderArgs.processedColumns | ModelsTableTableHeader.processedColumns}
   */
  processedColumns: ModelsTableColumn[];
  /**
   * Bound from {@link DefaultTheme.TableHeaderArgs.visibleProcessedColumns | ModelsTableTableHeader.visibleProcessedColumns}
   */
  visibleProcessedColumns: ModelsTableColumn[];
  /**
   * Bound from {@link DefaultTheme.TableHeaderArgs.themeInstance | ModelsTableTableHeader.themeInstance}
   */
  themeInstance: DefaultTheme;
  /**
   * Bound from {@link DefaultTheme.TableHeaderArgs.selectedItems | ModelsTableTableHeader.selectedItems}
   */
  selectedItems: any[];
  /**
   * Bound from {@link DefaultTheme.TableHeaderArgs.expandedItems | ModelsTableTableHeader.expandedItems}
   */
  expandedItems: any[];
  /**
   * Bound from {@link DefaultTheme.TableHeaderArgs.useDataGrouping | ModelsTableTableHeader.useDataGrouping}
   */
  useDataGrouping: boolean;
  /**
   * Bound from {@link DefaultTheme.TableHeaderArgs.displayGroupedValueAs | ModelsTableTableHeader.displayGroupedValueAs}
   */
  displayGroupedValueAs: string;
  /**
   * Bound from {@link DefaultTheme.TableHeaderArgs.columnComponents | ModelsTableTableHeader.columnComponents}
   */
  columnComponents?: ColumnComponents;
  /**
   * Bound from {@link DefaultTheme.TableHeaderArgs.data | ModelsTableTableHeader.data}
   */
  data: ModelsTableDataItem[];
  /**
   * Bound from {@link DefaultTheme.TableHeaderArgs.expandAllRows | ModelsTableTableHeader.expandAllRows}
   *
   * @event expandAllRows
   */
  expandAllRows: () => void;
  /**
   * Bound from {@link DefaultTheme.TableHeaderArgs.collapseAllRows | ModelsTableTableHeader.collapseAllRows}
   *
   * @event collapseAllRows
   */
  collapseAllRows: () => void;
  /**
   * Bound from {@link DefaultTheme.TableHeaderArgs.toggleAllSelection | ModelsTableTableHeader.toggleAllSelection}
   *
   * @event toggleAllSelection
   */
  toggleAllSelection: () => void;
  /**
   * Bound from {@link DefaultTheme.TableHeaderArgs.changeColumnFilter | ModelsTableTableHeader.changeColumnFilter}
   *
   * @event changeColumnFilter
   */
  changeColumnFilter: (v: string, column: ModelsTableColumn) => void;
}
