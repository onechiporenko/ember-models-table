import Component from '@glimmer/component';
import { isArray } from '@ember/array';
import { action } from '@ember/object';
import { type RowExpandSignature } from '../../../../interfaces/components/models-table/themes/default/row-expand-signature.interface';

/**
 * Extra row with additional information for original row. Component used within {@link DefaultTheme.TableBody | TableBody}.
 *
 * Row expand is a table-row with a single cell. This cell has a `colspan` equal to the shown columns count.
 * You should provide an {@link Core.ModelsTable.expandedRowComponent}. It will be rendered inside `ModelsTableRowExpand`.
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
export default class RowExpand extends Component<RowExpandSignature> {
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
