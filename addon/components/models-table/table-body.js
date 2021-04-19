import templateOnly from '@ember/component/template-only';

/**
 * Table body used within [models-table/table](Components.ModelsTableTable.html).
 *
 * Component contains rows for each record, row expands (if provided) and components for situations with missing data or when all columns are hidden.
 *
 Usage example:
 *
 * ```hbs
 * <ModelsTable @data={{data}} @columns={{columns}} as |MT|>
 *   <MT.Table as |Table|>
 *     <Table.Body>
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
 *       {{#if MT.allColumnsAreHidden}}
 *         <Body.ColumnsHidden />
 *       {{else}}
 *         {{#if MT.visibleContent.length}}
 *           {{#each MT.visibleContent as |record index|}}
 *             <Body.Row @record={{record}} @index={{index}} />
 *             {{#if (contains record MT.expandedItems)}} {{! contains can be imported from `ember-composable-helpers` }}
 *               <Body.RowExpand @record={{record}} @index={{index}} />
 *             {{/if}}
 *           {{/each}}
 *         {{else}}
 *           <Body.NoData />
 *         {{/if}}
 *       {{/if}}
 *     </Table.Body>
 *     {{! ... }}
 *   </MT.Table>
 *   {{! .... }}
 * </ModelsTable>
 * ```
 *
 * ModelsTableTableHeader yields references to the following contextual components:
 *
 * * [models-table/columns-hidden](Components.ModelsTableColumnsHidden.html) - component used when all columns are hidden and no data items are shown. Usually it contains a simple message
 * * [models-table/row](Components.ModelsTableRow.html) - component represents each table-body row with a single record.
 * * [models-table/row-expand](Components.ModelsTableRowExpand.html) - component with extra data shown when selected row is expanded
 * * [models-table/row-grouping](Components.ModelsTableRowGrouping.html) - component with grouped property value. Used to toggle row group
 * * [models-table/no-data](Components.ModelsTableNoData.html) - component used when no data provided to the table. Usually it contains a simple message
 *
 * Check own docs for each component to get detailed info.

 *
 * @namespace Components
 * @class ModelsTableTableBody
 * @extends Glimmer.Component
 */
export default templateOnly();
