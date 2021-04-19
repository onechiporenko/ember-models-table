import Component from '@glimmer/component';

/**
 * Table row shown when no data provided to the ModelsTable. Component used within [models-table/table-body](Components.ModelsTableTableBody.html).
 *
 * This component is a table-row with a single cell. This cell has a `colspan` equal to the shown columns count.
 *
 * Usage example:
 *
 * ```hbs
 * <ModelsTable @data={{data}} @columns={{columns}} as |MT|>
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
 * ```hbs
 * <ModelsTable @data={{data}} @columns={{columns}} as |MT|>
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
 *
 * @class ModelsTableNoData
 * @namespace Components
 * @extends Glimmer.Component
 */
export default class NoDataComponent extends Component {
  /**
   * @property realColumnsCount
   * @type number
   * @protected
   */
  get realColumnsCount() {
    return (
      this.args.columnsCount +
      (this.args.displayGroupedValueAs === 'column' ? 1 : 0)
    );
  }
}
