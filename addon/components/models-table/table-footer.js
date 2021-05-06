import Component from '@glimmer/component';

/**
 * Table footer used within [models-table/table](Components.ModelsTableTable.html).
 *
 * By default it's an empty component. It should be used with a block context:
 *
 * ```hbs
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
 * ```hbs
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
 * * [shouldAddExtraColumn](Components.ModelsTableTableFooter.html#property_shouldAddExtraColumn) - determines if extra column should be added to the row in the `tfoot`. It happens when rows grouping is used and extra column with group values exists
 *
 * @class ModelsTableTableFooter
 * @extends Glimmer.Component
 * @namespace Components
 */
export default class TableFooterComponent extends Component {
  /**
   * @property shouldAddExtraColumn
   * @type boolean
   * @default false
   * @protected
   */
  get shouldAddExtraColumn() {
    return (
      this.args.displayGroupedValueAs === 'column' &&
      this.useDataGrouping &&
      !!this.visibleProcessedColumns.length
    );
  }
}
