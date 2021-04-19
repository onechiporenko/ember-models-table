import Component from '@glimmer/component';
import { isArray } from '@ember/array';
import { action } from '@ember/object';

/**
 * Extra row with additional information for original row. Component used within [models-table/table-body](Components.ModelsTableTableBody.html).
 *
 * Row expand is a table-row with a single cell. This cell has a `colspan` equal to the shown columns count. You should provide an [ModelsTable.expandedRowComponent](Components.ModelsTable.html#property_expandedRowComponent). It will be rendered inside ModelsTableRowExpand.
 *
 * Usage example:
 *
 * ```hbs
 * <ModelsTable @data={{data}} @columns={{columns}} as |MT|>
 *   <MT.Table as |Table|>
 *     <Table.Body as |Body|>
 *       {{#each MT.visibleContent as |record index|}}
 *         <Body.Row @record={{record}} @index={{index}} />
 *         {{#if (contains record MT.expandedItems)}} {{! contains can be imported from `ember-composable-helpers` }}
 *           <Body.RowExpand @record={{record}} @index={{index}} />
 *         {{/if}}
 *       {{/each}}
 *     </Table.Body>
 *     {{! ... }}
 *   </MT.Table>
 *   {{! .... }}
 * </ModelsTable>
 * ```
 *
 * @class ModelsTableRowExpand
 * @namespace Components
 * @extends Glimmer.Component
 */
export default class RowExpandComponent extends Component {
  /**
   * @property indexedClass
   * @type string
   * @protected
   */
  get indexedClass() {
    return `expand-${this.args.index}`;
  }

  /**
   * @property isSelected
   * @type boolean
   * @protected
   */
  get isSelected() {
    return (
      isArray(this.args.selectedItems) &&
      this.args.selectedItems.includes(this.args.record)
    );
  }

  /**
   * @protected
   * @property cellColspan
   * @default 0
   * @type number
   */
  get cellColspan() {
    return (
      Number(this.args.additionalColspan || 0) +
      Number(this.args.visibleProcessedColumns.length)
    );
  }

  @action
  onClick() {
    this.args.clickOnRow(this.args.index, this.args.record);
  }
}
