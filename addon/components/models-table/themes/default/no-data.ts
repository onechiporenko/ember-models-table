import Component from '@glimmer/component';
import DefaultTheme from '../../../../services/emt-themes/default';

export interface NoDataArgs {
  /**
   * Bound from {@link DefaultTheme.TableBodyArgs.columnsCount | TableBodyArgs.columnsCount}
   */
  columnsCount: number;
  /**
   * Bound from {@link DefaultTheme.TableBodyArgs.displayGroupedValueAs | TableBodyArgs.displayGroupedValueAs}
   */
  displayGroupedValueAs: string;
  /**
   * Bound from {@link DefaultTheme.TableBodyArgs.themeInstance | TableBodyArgs.themeInstance}
   */
  themeInstance: DefaultTheme;
}

/**
 * Table row shown when no data provided to the ModelsTable. Component used within {@link DefaultTheme.TableBody | TableBody}.
 *
 * This component is a table-row with a single cell. This cell has a `colspan` equal to the shown columns count.
 *
 * Usage example:
 *
 * ```html
 * <ModelsTable @data={{this.data}} @columns={{this.columns}} as |MT|>
 *   <MT.Table as |Table|>
 *     <Table.Body as |Body|>
 *       {{#if Body.visibleContent.length}}
 *         {{! ... }}
 *       {{else}}
 *         <Body.NoData />
 *       {{/if}}
 *     </Table.Body>
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
 *     <Table.Body as |Body|>
 *       {{#if Body.visibleContent.length}}
 *         {{! ... }}
 *       {{else}}
 *         <Body.NoData as |ND|>
 *           Any message here
 *         </Body.NoData>
 *       {{/if}}
 *     </table.Body>
 *     {{! ... }}
 *   </MT.Table>
 *   {{! .... }}
 * </ModelsTable>
 * ```
 */
export default class NoData extends Component<NoDataArgs> {
  protected get realColumnsCount(): number {
    return (
      this.args.columnsCount +
      (this.args.displayGroupedValueAs === 'column' ? 1 : 0)
    );
  }
}
