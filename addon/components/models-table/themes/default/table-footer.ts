import Component from '@glimmer/component';

import { type TableFooterSignature } from '../../../../interfaces/components/models-table/themes/default/table-footer-signature.interface';

/**
 * Table footer used within {@link DefaultTheme.Table}.
 *
 * By default, it's an empty component. It should be used with a block context:
 *
 * ```html
 * <ModelsTable @data={{this.data}} @columns={{this.columns}} as |MT|>
 *   <MT.Table as |Table|>
 *     <Table.Footer as |Footer|>
 *       {{! ... }}
 *     </Table.Footer>
 *     {{! ... }}
 *   </MT.Table>
 *   {{! .... }}
 * </ModelsTable>
 * ```
 *
 * Block usage example 2:
 *
 * ```html
 * <ModelsTable @data={{this.data}} @columns={{this.columns}} as |MT|>
 *   <MT.Table as |Table|>
 *     <Table.Footer as |Footer|>
 *        <tr>
 *          <td colspan={{if Footer.shouldAddExtraColumn  (inc MT.visibleProcessedColumns.length) MT.visibleProcessedColumns.length}}>
 *            {{! "inc" is a helper from `ember-composable-helpers` }}
 *            Some custom summary for table can be shown in the <code>tfoot</code>
 *          </td>
 *        </tr>
 *      </Table.Footer>
 *     {{! ... }}
 *   </MT.Table>
 *   {{! .... }}
 * </ModelsTable>
 * ```
 *
 * References to the following properties are yielded:
 *
 * * {@link shouldAddExtraColumn} - determines if extra column should be added to the row in the `tfoot`. It happens when rows grouping is used and extra column with group values exists
 */
export default class TableFooter extends Component<TableFooterSignature> {
  /**
   * @default false
   */
  get shouldAddExtraColumn(): boolean {
    return (
      this.args.displayGroupedValueAs === 'column' &&
      this.args.useDataGrouping &&
      !!this.args.visibleProcessedColumns.length
    );
  }
}
