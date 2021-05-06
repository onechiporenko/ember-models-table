import Component from '@glimmer/component';

/**
 * Table header item used within [models-table/table-header](Components.ModelsTableTableHeader.html).
 *
 * Each `grouped-header` should represent one item from [ModelsTable.groupedHeaders](Components.ModelsTable.html#property_groupedHeaders).
 *
 * Usage example:
 *
 * ```js
 * const groupedHeaders = [
 *   [{title: 'BigTitle', colspan: 5}],
 *   [{title: 'SubTitle1', colspan: 2}, {title: 'SubTitle2', colspan: 3}]
 * ];
 * ```
 *
 * ```hbs
 * <ModelsTable
 *   @columns={{this.columns}}
 *   @data={{this.data}} as |MT|>
 *   <MT.Table as |Table|>
 *     <Table.Header as |Header|>
 *       {{#each groupedHeaders as |groupedHeader|}}
 *         <Header.GroupedHeader @groupedHeader={{groupedHeader}} as |GroupedHeader|>
 *           {{#each GroupedHeader.groupedHeader as |cell|}}
 *             <th colspan={{cell.colspan}} rowspan={{cell.rowspan}}>{{cell.title}}</th>
 *           {{/each}}
 *         </Header.GroupedHeader>
 *       {{/each}}
 *     </Table.Header>
 *   </MT.Table>
 * </ModelsTable>
 * ```
 *
 * @class ModelsTableGroupedHeader
 * @namespace Components
 * @extends Glimmer.Component
 */
export default class GroupedHeaderComponent extends Component {
  /**
   * @property shouldAddExtraColumn
   * @type boolean
   * @default false
   * @protected
   */
  get shouldAddExtraColumn() {
    return (
      this.args.displayGroupedValueAs === 'column' &&
      this.args.useDataGrouping &&
      !!this.args.visibleProcessedColumns.length
    );
  }
}
