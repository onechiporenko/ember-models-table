import Component from '@glimmer/component';
import { shownColumnsBody } from '../../utils/emt/macros';
import { propertyNameToTitle } from '../../utils/emt/column';

/**
 * Table header item used within [models-table/table-header](Components.ModelsTableTableHeader.html).
 *
 * Component generates tr with column titles in the separated cells. Click by each cell will sort table data by selected field. Check properties [disableSorting](Utils.ModelsTableColumn.html#property_disableSorting), [sortedBy](Utils.ModelsTableColumn.html#property_sortedBy) for ModelsTableColumn.
 *
 * Usage example:
 *
 * ```hbs
 * <ModelsTable @data={{data}} @columns={{columns}} as |MT|>
 *   <MT.Table as |Table|>
 *     <Table.Header as |Header|>
 *       <Header.RowSorting />
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
 *       <Header.RowSorting as |RS|>
 *         {{#each MT.visibleProcessedColumns as |column|}}
 *           <td>{{column.columnTitle}}</td>
 *         {{/each}}
 *       </Header.RowSorting>
 *       {{! ... }}
 *     </Table.Header>
 *     {{! ... }}
 *   </MT.Table>
 *   {{! .... }}
 * </ModelsTable>
 * ```
 *
 * ModelsTableRowSorting yields references to the following contextual components:
 *
 * * [models-table/row-sorting-cell](Components.ModelsTableRowSortingCell.html) - component used as sorting row cell. Clicking on it causes column sorting
 *
 * References to the following properties are yielded:
 *
 * * [shouldAddExtraColumn](Components.ModelsTableRowSorting.html#property_shouldAddExtraColumn) - determines if extra column should be added to the row in the `thead`. It happens when rows grouping is used and extra column with group values exists
 *
 * Check own docs for each component to get detailed info.
 *
 * @namespace Components
 * @class ModelsTableRowSorting
 * @extends Glimmer.Component
 */
export default class RowSortingComponent extends Component {
  /**
   * @property shownColumns
   * @type Utils.ModelsTableColumn[]
   * @protected
   */
  get shownColumns() {
    return shownColumnsBody(this.args.processedColumns, 'colspanForSortCell');
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

  /**
   * @property currentGroupingPropertyNameTitlelized
   * @type string
   * @protected
   */
  get currentGroupingPropertyNameTitlelized() {
    return propertyNameToTitle(this.args.currentGroupingPropertyName);
  }
}
