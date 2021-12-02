import Component from '@glimmer/component';
import { isArray } from '@ember/array';
import { action } from '@ember/object';
import ModelsTableColumn from '../../../../utils/emt/emt-column';
import DefaultTheme from '../../../../services/emt-themes/default';
import {
  EmberNativeArray,
  ModelsTableDataItem,
  RowInteractionClb,
} from '../../../models-table';

export interface RowExpandArgs {
  /**
   * Row index (1 ... row count on the page)
   */
  index: number;
  /**
   * One item of [[Core.ModelsTable.data | ModelsTable.data]]
   */
  record: ModelsTableDataItem;
  /**
   * Bound from [[DefaultTheme.TableBodyArgs.selectedItems | TableBodyArgs.selectedItems]]
   */
  selectedItems: EmberNativeArray;
  /**
   * Bound from [[DefaultTheme.TableBodyArgs.processedColumns | TableBodyArgs.processedColumns]]
   */
  processedColumns: ModelsTableColumn[];
  /**
   * Bound from [[DefaultTheme.TableBodyArgs.visibleProcessedColumns | TableBodyArgs.visibleProcessedColumns]]
   */
  visibleProcessedColumns: ModelsTableColumn[];
  /**
   * Bound from [[DefaultTheme.TableBodyArgs.themeInstance | TableBodyArgs.themeInstance]]
   */
  themeInstance: DefaultTheme;
  /**
   * Bound from [[DefaultTheme.TableBodyArgs.expandedRowComponent | TableBodyArgs.expandedRowComponent]]
   */
  expandedRowComponent?: Component;
  /**
   * Bound from [[DefaultTheme.TableBodyArgs.clickOnRow | TableBodyArgs.clickOnRow]]
   *
   * @event clickOnRow
   */
  clickOnRow: RowInteractionClb;
}

/**
 * Extra row with additional information for original row. Component used within [[DefaultTheme.TableBody | TableBody]].
 *
 * Row expand is a table-row with a single cell. This cell has a `colspan` equal to the shown columns count.
 * You should provide an [[Core.ModelsTable.expandedRowComponent]]. It will be rendered inside `ModelsTableRowExpand`.
 *
 * Usage example:
 *
 * ```html
 * <ModelsTable @data={{this.data}} @columns={{this.columns}} as |MT|>
 *   <MT.Table as |Table|>
 *     <Table.Body as |Body|>
 *       {{#each MT.visibleContent as |record index|}}
 *         <Body.Row @record={{record}} @index={{index}} />
 *         {{#if (contains record MT.expandedItems)}} {{! `contains` can be imported from `ember-composable-helpers` }}
 *           <Body.RowExpand @record={{record}} @index={{index}} />
 *         {{/if}}
 *       {{/each}}
 *     </Table.Body>
 *     {{! ... }}
 *   </MT.Table>
 *   {{! .... }}
 * </ModelsTable>
 * ```
 */
export default class RowExpand extends Component<RowExpandArgs> {
  protected get indexedClass(): string {
    return `expand-${this.args.index}`;
  }

  protected get isSelected(): boolean {
    return (
      isArray(this.args.selectedItems) &&
      this.args.selectedItems.includes(this.args.record)
    );
  }

  /**
   * @default 0
   */
  protected get cellColspan(): number {
    return Number(this.args.visibleProcessedColumns.length);
  }

  /**
   * @event onClick
   */
  @action
  onClick(): void {
    this.args.clickOnRow(this.args.index, this.args.record);
  }
}
