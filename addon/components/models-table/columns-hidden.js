import templateOnly from '@ember/component/template-only';

/**
 * Table row used within [models-table/table-body](Components.ModelsTableTableBody.html).
 *
 * Component used when all columns are hidden and no data items are shown. Usually it contains a simple message.
 *
 * Usage example:
 *
 * ```hbs
 * <ModelsTable @data={{this.data}} @columns={{this.columns}} as |MT|>
 *   <MT.Table as |Table|>
 *     <Table.Body as |Body|>
 *       {{#if Body.allColumnsAreHidden}}
 *         <Body.ColumnsHidden as |CH|>
 *           Any message here
 *         </Body.ColumnsHidden>
 *       {{else}}
 *         {{! ... }}
 *       {{/if}}
 *     </Table.Body>
 *     {{! ... }}
 *   </MT.Table>
 *   {{! .... }}
 * </ModelsTable>
 * ```
 *
 * @class ModelsTableColumnsHidden
 * @namespace Components
 * @extends Glimmer.Component
 */
export default templateOnly();
