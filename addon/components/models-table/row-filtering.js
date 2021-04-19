import Component from '@glimmer/component';
import { shownColumnsBody } from '../../utils/emt/macros';

/**
 * Table header item used within [models-table/table-header](Components.ModelsTableTableHeader.html).
 *
 * Component generates tr with filter inputs in the separated cells. Filter for column may be as an input or select. Second one may have predefined set of options or may calculate list of options from table data. Last scenario doesn't work with [models-table-server-paginated](Components.ModelsTableServerPaginated.html). Check properties [disableFiltering](Utils.ModelsTableColumn.html#property_disableFiltering), [filteredBy](Utils.ModelsTableColumn.html#property_filteredBy), [filterFunction](Utils.ModelsTableColumn.html#property_filterFunction), [filterPlaceholder](Utils.ModelsTableColumn.html#property_filterPlaceholder), [filterWithSelect](Utils.ModelsTableColumn.html#property_filterWithSelect), [predefinedFilterOptions](Utils.ModelsTableColumn.html#property_predefinedFilterOptions) for ModelsTableColumn.
 *
 * Usage example:
 *
 * ```hbs
 * <ModelsTable @data={{data}} @columns={{columns}} as |MT|>
 *   <MT.Table as |Table|>
 *     <Table.Header as |Header|>
 *       <Header.RowFiltering>
 *       {{! ... }}
 *     </Table.Header>
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
 *       <Header.RowFiltering as |RF|>
 *         {{#each MT.visibleProcessedColumns as |column|}}
 *           <RF.RowFilteringCell @column={{column}} as |RowFilteringCellContent|>
 *             <RowFilteringCellContent/>
 *           </RF.RowFilteringCell>
 *         {{/each}}
 *       </Header.RowFiltering>
 *       {{! ... }}
 *     </Table.Header>
 *     {{! ... }}
 *   </MT.Table>
 *   {{! .... }}
 * </ModelsTable>
 * ```
 *
 * ModelsTableRowFiltering yields references to the following contextual components:
 *
 * * [models-table/row-filtering-cell](Components.ModelsTableRowFilteringCell.html) - component used as filter row cell. It shows input or select or custom component. Check filter-options for columns
 *
 * Check own docs for each component to get detailed info.
 *
 * References to the following properties are yielded:
 *
 * * [shouldAddExtraColumn](Components.ModelsTableRowFiltering.html#property_shouldAddExtraColumn) - determines if extra column should be added to the row in the `thead`. It happens when rows grouping is used and extra column with group values exists
 *
 * @class ModelsTableRowFiltering
 * @namespace Components
 * @extends Glimmer.Component
 */
export default class RowFilteringComponent extends Component {
  /**
   * @property shownColumns
   * @type object[]
   * @protected
   */
  get shownColumns() {
    return shownColumnsBody(this.args.processedColumns, 'colspanForFilterCell');
  }

  /**
   * @property shouldAddExtraColumn
   * @type boolean
   * @default false
   * @protected
   */
  get shouldAddExtraColumn() {
    return (
      this.args.displayGroupedValueAs === 'column' &&
      this.args.useDataGrouping &&
      !!this.args.visibleProcessedColumns.length
    );
  }
}
