import ModelsTableColumn from 'ember-models-table/utils/emt/emt-column';
import { type ColumnComponents } from 'ember-models-table/interfaces/column-components.interface';
import DefaultTheme from 'ember-models-table/services/emt-themes/default';
import { type GroupedHeader } from 'ember-models-table/interfaces/grouped-header.interface';

export interface GroupedHeaderArgs {
  /**
   * Bound from {@link DefaultTheme.TableHeaderArgs.useDataGrouping | TableHeaderArgs.useDataGrouping}
   */
  useDataGrouping: boolean;
  /**
   * Bound from {@link DefaultTheme.TableHeaderArgs.displayGroupedValueAs | TableHeaderArgs.displayGroupedValueAs}
   */
  displayGroupedValueAs: string;
  /**
   * Bound from {@link DefaultTheme.TableHeaderArgs.visibleProcessedColumns | TableHeaderArgs.visibleProcessedColumns}
   */
  visibleProcessedColumns: ModelsTableColumn[];

  /**
   * One item bound from {@link DefaultTheme.TableArgs.groupedHeaders | TableArgs.groupedHeaders}
   */
  groupedHeader: GroupedHeader[];
  /**
   * Bound from {@link DefaultTheme.TableHeaderArgs.columnComponents | TableHeaderArgs.columnComponents}
   */
  columnComponents?: ColumnComponents;
  /**
   * Bound from {@link DefaultTheme.TableHeaderArgs.themeInstance | TableHeaderArgs.themeInstance}
   */
  themeInstance: DefaultTheme;
}
