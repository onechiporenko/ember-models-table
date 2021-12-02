import Component from '@glimmer/component';
import { shownColumnsBody } from '../../../../utils/emt/macros';
import ModelsTableColumn, {
  propertyNameToTitle,
} from '../../../../utils/emt/emt-column';
import DefaultTheme from '../../../../services/emt-themes/default';
import { ColumnComponents, EmberNativeArray } from '../../../models-table';

export interface RowSortingArgs {
  /**
   * Bound from [[DefaultTheme.TableHeaderArgs.processedColumns | TableHeaderArgs.processedColumns]]
   */
  processedColumns: ModelsTableColumn[];
  /**
   * Bound from [[DefaultTheme.TableHeaderArgs.visibleProcessedColumns | TableHeaderArgs.visibleProcessedColumns]]
   */
  visibleProcessedColumns: ModelsTableColumn[];
  /**
   * Bound from [[DefaultTheme.TableHeaderArgs.themeInstance | TableHeaderArgs.themeInstance]]
   */
  themeInstance: DefaultTheme;
  /**
   * Bound from [[DefaultTheme.TableHeaderArgs.selectedItems | TableHeaderArgs.selectedItems]]
   */
  selectedItems: EmberNativeArray;
  /**
   * Bound from [[DefaultTheme.TableHeaderArgs.expandedItems | TableHeaderArgs.expandedItems]]
   */
  expandedItems: EmberNativeArray;
  /**
   * Bound from [[DefaultTheme.TableHeaderArgs.useDataGrouping | TableHeaderArgs.useDataGrouping]]
   */
  useDataGrouping: boolean;
  /**
   * Bound from [[DefaultTheme.TableHeaderArgs.displayGroupedValueAs | TableHeaderArgs.displayGroupedValueAs]]
   */
  displayGroupedValueAs: string;
  /**
   * Bound from [[DefaultTheme.TableHeaderArgs.groupHeaderCellComponent | TableHeaderArgs.groupHeaderCellComponent]]
   */
  groupHeaderCellComponent?: Component;
  /**
   * Bound from [[DefaultTheme.TableHeaderArgs.currentGroupingPropertyName | TableHeaderArgs.currentGroupingPropertyName]]
   */
  currentGroupingPropertyName?: string;
  /**
   * Bound from [[DefaultTheme.TableHeaderArgs.columnComponents | TableHeaderArgs.columnComponents]]
   */
  columnComponents?: ColumnComponents;
  /**
   * Bound from [[DefaultTheme.TableHeaderArgs.data | TableHeaderArgs.data]]
   */
  data: EmberNativeArray;
  /**
   * Bound from [[DefaultTheme.TableHeaderArgs.sort | TableHeaderArgs.sort]]
   *
   * @event sort
   */
  sort: (c: ModelsTableColumn) => void;
  /**
   * Bound from [[DefaultTheme.TableHeaderArgs.expandAllRows | TableHeaderArgs.expandAllRows]]
   *
   * @event expandAllRows
   */
  expandAllRows: () => void;
  /**
   * Bound from [[DefaultTheme.TableHeaderArgs.collapseAllRows | TableHeaderArgs.collapseAllRows]]
   *
   * @event collapseAllRows
   */
  collapseAllRows: () => void;
  /**
   * Bound from [[DefaultTheme.TableHeaderArgs.toggleAllSelection | TableHeaderArgs.toggleAllSelection]]
   *
   * @event toggleAllSelection
   */
  toggleAllSelection: () => void;
}

/**
 * Table header item used within [[DefaultTheme.TableHeader | TableHeader]].
 *
 * Component generates tr with column titles in the separated cells. Click by each cell will sort table data by selected field.
 * Check properties [[Core.ModelsTableColumn.disableSorting]] and [[Core.ModelsTableColumn.sortedBy]].
 *
 * Usage example:
 *
 * ```html
 * <ModelsTable @data={{this.data}} @columns={{this.columns}} as |MT|>
 *   <MT.Table as |Table|>
 *     <Table.Header as |Header|>
 *       <Header.RowSorting />
 *       {{! ... }}
 *     </Table.Header>
 *     {{! ... }}
 *   </MT.Table>
 *   {{! .... }}
 * </ModelsTable>
 * ```
 *
 * Usage with a block context:
 *
 * ```html
 * <ModelsTable @data={{this.data}} @columns={{this.columns}} as |MT|>
 *   <MT.Table as |Table|>
 *     <Table.Header as |Header|>
 *       <Header.RowSorting as |RS|>
 *         {{#each MT.visibleProcessedColumns as |column|}}
 *           <td>{{column.columnTitle}}</td>
 *         {{/each}}
 *       </Header.RowSorting>
 *       {{! ... }}
 *     </Table.Header>
 *     {{! ... }}
 *   </MT.Table>
 *   {{! .... }}
 * </ModelsTable>
 * ```
 *
 * ModelsTableRowSorting yields references to the following contextual components:
 *
 * * [[DefaultTheme.RowSortingCell | RowSortingCell]] - component used as sorting row cell. Clicking on it causes column sorting
 *
 * References to the following properties are yielded:
 *
 * * [[shouldAddExtraColumn]] - determines if extra column should be added to the row in the `thead`. It happens when rows grouping is used and extra column with group values exists
 *
 * Check own docs for each component to get detailed info.
 */
export default class RowSorting extends Component<RowSortingArgs> {
  protected get shownColumns(): ModelsTableColumn[] {
    return shownColumnsBody(this.args.processedColumns, 'colspanForSortCell');
  }

  /**
   * @default false
   */
  protected get shouldAddExtraColumn(): boolean {
    return (
      this.args.displayGroupedValueAs === 'column' &&
      this.args.useDataGrouping &&
      !!this.args.visibleProcessedColumns.length
    );
  }

  protected get currentGroupingPropertyNameTitlelized(): string | undefined {
    return propertyNameToTitle(this.args.currentGroupingPropertyName);
  }
}
