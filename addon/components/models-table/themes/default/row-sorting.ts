import Component from '@glimmer/component';
import { shownColumnsBody } from '../../../../utils/emt/shown-columns-body.function';
import ModelsTableColumn, {
  propertyNameToTitle,
} from '../../../../utils/emt/emt-column';
import { RowSortingSignature } from '../../../../interfaces/components/models-table/themes/default/row-sorting-signature.interface';

/**
 * Table header item used within {@link DefaultTheme.TableHeader | TableHeader}.
 *
 * Component generates tr with column titles in the separated cells. Click by each cell will sort table data by selected field.
 * Check properties {@link Core.ModelsTableColumn.disableSorting} and {@link Core.ModelsTableColumn.sortedBy}.
 *
 * Usage example:
 *
 * ```html
 * <ModelsTable @data={{this.data}} @columns={{this.columns}} as |MT|>
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
 * ```html
 * <ModelsTable @data={{this.data}} @columns={{this.columns}} as |MT|>
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
 * * {@link DefaultTheme.RowSortingCell | RowSortingCell} - component used as sorting row cell. Clicking on it causes column sorting
 *
 * References to the following properties are yielded:
 *
 * * {@link shouldAddExtraColumn} - determines if extra column should be added to the row in the `thead`. It happens when rows grouping is used and extra column with group values exists
 *
 * Check own docs for each component to get detailed info.
 */
export default class RowSorting extends Component<RowSortingSignature> {
  protected get shownColumns(): ModelsTableColumn[] {
    return shownColumnsBody(this.args.processedColumns, 'colspanForSortCell');
  }

  /**
   * @default false
   */
  protected get shouldAddExtraColumn(): boolean {
    return (
      this.args.displayGroupedValueAs === 'column' &&
      this.args.useDataGrouping &&
      !!this.args.visibleProcessedColumns.length
    );
  }

  protected get currentGroupingPropertyNameTitlelized(): string | undefined {
    return propertyNameToTitle(this.args.currentGroupingPropertyName);
  }
}
