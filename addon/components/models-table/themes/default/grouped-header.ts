import Component from '@glimmer/component';
import { GroupedHeaderSignature } from '../../../../interfaces/components/models-table/themes/default/grouped-header-signature.interface';

/**
 * Table header item used within {@link DefaultTheme.TableHeader | TableHeader}.
 *
 * Each `grouped-header` should represent one item from {@link Core.ModelsTable.groupedHeaders | ModelsTable.groupedHeaders}.
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
 * ```html
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
 */
export default class GroupedHeader extends Component<GroupedHeaderSignature> {
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
}
