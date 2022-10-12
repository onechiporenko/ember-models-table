import Component from '@glimmer/component';
import ModelsTableColumn from '../../../../utils/emt/emt-column';
import DefaultTheme from '../../../../services/emt-themes/default';
import {
  ColumnComponents,
  ModelsTableDataItem,
  RowInteractionClb,
} from '../../../models-table';

export interface TableFooterArgs {
  /**
   * Bound from {@link DefaultTheme.TableArgs.visibleProcessedColumns | TableArgs.visibleProcessedColumns}
   */
  visibleProcessedColumns: ModelsTableColumn[];
  /**
   * Bound from {@link DefaultTheme.TableArgs.displayGroupedValueAs | TableArgs.displayGroupedValueAs}
   */
  displayGroupedValueAs: string;
  /**
   * Bound from {@link DefaultTheme.TableArgs.useDataGrouping | TableArgs.useDataGrouping}
   */
  useDataGrouping: boolean;
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

/**
 * Table footer used within {@link DefaultTheme.Table}.
 *
 * By default it's an empty component. It should be used with a block context:
 *
 * ```html
 * <ModelsTable @data={{this.data}} @columns={{this.columns}} as |MT|>
 *   <MT.Table as |Table|>
 *     <Table.Footer as |Footer|>
 *       {{! ... }}
 *     </Table.Footer>
 *     {{! ... }}
 *   </MT.Table>
 *   {{! .... }}
 * </ModelsTable>
 * ```
 *
 * Block usage example 2:
 *
 * ```html
 * <ModelsTable @data={{this.data}} @columns={{this.columns}} as |MT|>
 *   <MT.Table as |Table|>
 *     <Table.Footer as |Footer|>
 *        <tr>
 *          <td colspan={{if Footer.shouldAddExtraColumn  (inc MT.visibleProcessedColumns.length) MT.visibleProcessedColumns.length}}>
 *            {{! "inc" is a helper from `ember-composable-helpers` }}
 *            Some custom summary for table can be shown in the <code>tfoot</code>
 *          </td>
 *        </tr>
 *      </Table.Footer>
 *     {{! ... }}
 *   </MT.Table>
 *   {{! .... }}
 * </ModelsTable>
 * ```
 *
 * References to the following properties are yielded:
 *
 * * {@link shouldAddExtraColumn} - determines if extra column should be added to the row in the `tfoot`. It happens when rows grouping is used and extra column with group values exists
 */
export default class TableFooter extends Component<TableFooterArgs> {
  /**
   * @default false
   */
  get shouldAddExtraColumn(): boolean {
    return (
      this.args.displayGroupedValueAs === 'column' &&
      this.args.useDataGrouping &&
      !!this.args.visibleProcessedColumns.length
    );
  }
}
