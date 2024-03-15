import Component from '@glimmer/component';
import ModelsTableColumn from '../../../../utils/emt/emt-column';
import { shownColumnsBody } from '../../../../utils/emt/shown-columns-body.function';
import { type RowFilteringSignature } from '../../../../interfaces/components/models-table/themes/default/row-filtering-signature.interface';

/**
 * Table header item used within {@link DefaultTheme.TableHeader | TableHeader}.
 *
 * Component generates tr with filter inputs in the separated cells. Filter for column may be as an input or select. Second one may have predefined set of options or may calculate list of options from table data. Last scenario doesn't work with {@link Core.ModelsTableServerPaginated}. Check properties {@link Core.ModelsTableColumn.disableFiltering}, {@link Core.ModelsTableColumn.filteredBy}, {@link Core.ModelsTableColumn.filterFunction}, {@link Core.ModelsTableColumn.filterPlaceholder}, {@link Core.ModelsTableColumn.filterWithSelect}, {@link Core.ModelsTableColumn.predefinedFilterOptions}.
 *
 * Usage example:
 *
 * ```html
 * <ModelsTable @data={{this.data}} @columns={{this.columns}} as |MT|>
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
 * ```html
 * <ModelsTable @data={{this.data}} @columns={{this.columns}} as |MT|>
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
 * * {@link DefaultTheme.RowFilteringCell | RowFilteringCell} - component used as filter row cell. It shows input or select or custom component. Check filter-options for columns
 *
 * Check own docs for each component to get detailed info.
 *
 * References to the following properties are yielded:
 *
 * * {@link shouldAddExtraColumn} - determines if extra column should be added to the row in the `thead`. It happens when rows grouping is used and extra column with group values exists
 */
export default class RowFiltering extends Component<RowFilteringSignature> {
  protected get shownColumns(): ModelsTableColumn[] {
    return shownColumnsBody(this.args.processedColumns, 'colspanForFilterCell');
  }

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
