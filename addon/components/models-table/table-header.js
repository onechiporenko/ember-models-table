import templateOnly from '@ember/component/template-only';

/**
 * Table header used within [models-table/table](Components.ModelsTableTable.html).
 *
 * Component contains grouped headers (if provided) bound from [ModelsTable.groupedHeaders](Components.ModelsTable.html#property_groupedHeaders), row with sorting buttons (usually this row also contains column headers) and row with filter boxes.
 *
 * Usage example:
 *
 * ```hbs
 * <ModelsTable @data={{data}} @columns={{columns}} as |MT|>
 *   <MT.Table as |Table|>
 *     <Table.Header />
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
 *     <Table.Header as |Header|>
 *       {{#each groupedHeaders as |groupedHeader|}}
 *         <Header.GroupedHeader @groupedHeader={{groupedHeader}} as |GroupedHeader|>
 *           {{#each GroupedHeader.groupedHeader as |cell|}}
 *             <th colspan={{cell.colspan}} rowspan={{cell.rowspan}}>{{cell.title}}</th>
 *           {{/each}}
 *         </Header.GroupedHeader>
 *       {{/each}}
 *       <Header.RowSorting />
 *       <Header.RowFiltering />
 *     </Table.Header>
 *     {{! ... }}
 *   </MT.Table>
 *   {{! .... }}
 * </ModelsTable>
 * ```
 *
 * ModelsTableTableHeader yields references to the following contextual components:
 *
 * * [models-table/grouped-header](Components.ModelsTableGroupedHeader.html) - component for groupedHeaders. It should be used for each groupedHeaders item
 * * [models-table/row-sorting](Components.ModelsTableRowSorting.html) - row with columns titles. Click on every cell will sort table data by selected column
 * * [models-table/row-filtering](Components.ModelsTableRowFiltering.html) - row with filter items. Every cell contains input or select-box
 * * [models-table/select-all-rows-checkbox](Components.ModelsTableSelectAllRowsCheckbox.html) - checkbox to select or deselect all rows
 * * [models-table/expand-all-toggle](Components.ModelsTableExpandAllToggle.html) - buttons to expand and collapse all rows
 *
 * Check own docs for each component to get detailed info.
 *
 * @namespace Components
 * @class ModelsTableTableHeader
 * @extends Glimmer.Component
 */
export default templateOnly();
