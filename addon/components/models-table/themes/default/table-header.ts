import Component from '@glimmer/component';
import { TableHeaderSignature } from '../../../../interfaces/components/models-table/themes/default/table-header-signature.interface';

/**
 * Table header used within {@link DefaultTheme.Table}.
 *
 * Component contains grouped headers (if provided) bound from {@link DefaultTheme.TableArgs.groupedHeaders | TableArgs.groupedHeaders}, row with sorting buttons (usually this row also contains column headers) and row with filter boxes.
 *
 * Usage example:
 *
 * ```html
 * <ModelsTable @data={{this.data}} @columns={{this.columns}} as |MT|>
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
 * ```html
 * <ModelsTable @data={{this.data}} @columns={{this.columns}} as |MT|>
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
 * `TableHeader` yields references to the following contextual components:
 *
 * * {@link DefaultTheme.GroupedHeader | GroupedHeader} - component for groupedHeaders. It should be used for each groupedHeaders item
 * * {@link DefaultTheme.RowSorting | RowSorting} - row with columns titles. Click on every cell will sort table data by selected column
 * * {@link DefaultTheme.RowFiltering | RowFiltering} - row with filter items. Every cell contains input or select-box
 * * {@link DefaultTheme.RowSelectAllCheckbox | SelectAllRowsCheckbox} - checkbox to select or deselect all rows
 * * {@link DefaultTheme.ExpandAllToggle | ExpandAllRowsToggleCheckbox} - buttons to expand and collapse all rows
 *
 * Check own docs for each component to get detailed info.
 */
export default class TableHeader extends Component<TableHeaderSignature> {}
