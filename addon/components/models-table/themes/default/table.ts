import Component from '@glimmer/component';
import { TableSignature } from '../../../../interfaces/components/models-table/themes/default/table-signature.interface';

/**
 * Table with data used within {@link Core.ModelsTable | ModelsTable}.
 *
 * Usage example:
 *
 * ```html
 * <ModelsTable @data={{this.data}} @columns={{this.columns}} as |MT|>
 *   <MT.Table />
 *   {{! ... }}
 * </ModelsTable>
 * ```
 *
 * Usage example with a block context:
 *
 * ```html
 * <ModelsTable @data={{this.data}} @columns={{this.columns}} as |MT|>
 *   <MT.Table as |Table|>
 *     <Table.Header />
 *     <Table.Body />
 *     <Table.Footer />
 *   </MT.Table>
 * </ModelsTable>
 * ```
 *
 * ModelsTableTable yields references to the following contextual components:
 *
 * * {@link DefaultTheme.TableHeader | Header} - table header. Component contains several rows like grouped headers, row with sorting buttons (usually with column titles) and row with filters for each column
 * * {@link DefaultTheme.TableBody | Body} - table body with data. Component contains current page with a subset or rows
 * * {@link DefaultTheme.TableFooter | Footer} - table footer. It's empty by default
 *
 * Check own docs for each component to get detailed info.
 */
export default class Table extends Component<TableSignature> {
  /**
   * @default false
   */
  protected get showTableFooter(): boolean {
    return this.args.visibleProcessedColumns.some(
      (pc) => !!pc.componentForFooterCell,
    );
  }
}
