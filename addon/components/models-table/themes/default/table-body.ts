import Component from '@glimmer/component';
import { TableBodySignature } from '../../../../interfaces/components/models-table/themes/default/table-body-signature.interface';

/**
 * Table body used within {@link DefaultTheme.Table}.
 *
 * Component contains rows for each record, row expands (if provided) and components for situations with missing data or when all columns are hidden.
 *
 Usage example:
 *
 * ```html
 * <ModelsTable @data={{this.data}} @columns={{this.columns}} as |MT|>
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
 * ```html
 * <ModelsTable @data={{this.data}} @columns={{this.columns}} as |MT|>
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
 * `TableBody` yields references to the following contextual components:
 *
 * * {@link DefaultTheme.ColumnsHidden | ColumnsHidden} - component used when all columns are hidden and no data items are shown. Usually it contains a simple message
 * * {@link DefaultTheme.Row | Row} - component represents each table-body row with a single record.
 * * {@link DefaultTheme.RowExpand | RowExpand} - component with extra data shown when selected row is expanded
 * * {@link DefaultTheme.RowGrouping | RowGrouping} - component with grouped property value. Used to toggle row group
 * * {@link DefaultTheme.NoData | NoData} - component used when no data provided to the table. Usually it contains a simple message
 *
 * Check own docs for each component to get detailed info.
 */
export default class TableBody extends Component<TableBodySignature> {}
