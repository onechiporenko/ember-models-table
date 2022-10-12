import Component from '@glimmer/component';
import ModelsTableColumn from '../../../../utils/emt/emt-column';
import { ColumnComponents } from '../../../models-table';
import DefaultTheme from '../../../../services/emt-themes/default';

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
   * Bound from {@link DefaultTheme.TableHeaderArgs.columnComponents | TableHeaderArgs.columnComponents}
   */
  columnComponents?: ColumnComponents;
  /**
   * Bound from {@link DefaultTheme.TableHeaderArgs.themeInstance | TableHeaderArgs.themeInstance}
   */
  themeInstance: DefaultTheme;
}

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
export default class GroupedHeader extends Component<GroupedHeaderArgs> {
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
