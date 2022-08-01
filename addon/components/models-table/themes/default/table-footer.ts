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
   * Bound from [[DefaultTheme.TableArgs.visibleProcessedColumns | TableArgs.visibleProcessedColumns]]
   */
  visibleProcessedColumns: ModelsTableColumn[];
  /**
   * Bound from [[DefaultTheme.TableArgs.displayGroupedValueAs | TableArgs.displayGroupedValueAs]]
   */
  displayGroupedValueAs: string;
  /**
   * Bound from [[DefaultTheme.TableArgs.useDataGrouping | TableArgs.useDataGrouping]]
   */
  useDataGrouping: boolean;
  /**
   * Bound from [[DefaultTheme.TableArgs.themeInstance | TableArgs.themeInstance]]
   */
  themeInstance: DefaultTheme;
  /**
   * Bound from [[DefaultTheme.TableArgs.data | TableArgs.data]]
   */
  data: ModelsTableDataItem[];
  /**
   * Bound from [[DefaultTheme.TableArgs.columnComponents | TableArgs.columnComponents]]
   */
  columnComponents?: ColumnComponents;
  /**
   * Bound from [[DefaultTheme.TableArgs.selectedItems | TableArgs.selectedItems]]
   */
  selectedItems: ModelsTableDataItem[];
  /**
   * Bound from [[DefaultTheme.TableArgs.expandedItems | TableArgs.expandedItems]]
   */
  expandedItems: ModelsTableDataItem[];
  /**
   * Bound from [[DefaultTheme.TableArgs.expandRow | TableArgs.expandRow]]
   *
   * @event expandRow
   */
  expandRow: RowInteractionClb;
  /**
   * Bound from [[DefaultTheme.TableArgs.collapseRow | TableArgs.collapseRow]]
   *
   * @event collapseRow
   */
  collapseRow: RowInteractionClb;
  /**
   * Bound from [[DefaultTheme.TableArgs.expandAllRows | TableArgs.expandAllRows]]
   *
   * @event expandAllRows
   */
  expandAllRows: () => void;
  /**
   * Bound from [[DefaultTheme.TableArgs.collapseAllRows | TableArgs.collapseAllRows]]
   *
   * @event collapseAllRows
   */
  collapseAllRows: () => void;
}

/**
 * Table footer used within [[DefaultTheme.Table]].
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
 * * [[shouldAddExtraColumn]] - determines if extra column should be added to the row in the `tfoot`. It happens when rows grouping is used and extra column with group values exists
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
