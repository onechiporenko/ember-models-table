import Component from '@glimmer/component';
import { action } from '@ember/object';

/**
 * Sort-row cell used within [models-table/row-sorting](Components.ModelsTableRowSorting.html).
 *
 * ```hbs
 * <ModelsTable @data={{data}} @columns={{columns}} as |MT|>
 *   <MT.Table as |Table|>
 *     <Table.Header as |Header|>
 *       <Header.RowSorting as |RS|>
 *         {{#each MT.visibleProcessedColumns as |column|}}
 *           <RS.RowSortingCell @column={{column}} />
 *         {{/each}}
 *       </Header.RowSorting>
 *       {{! ... }}
 *     </Table.Header>
 *     {{! ... }}
 *   </MT.Table>
 *   {{! .... }}
 * </ModelsTable>
 * ```
 * If `column.componentForSortCell` is provided it is yielded with next properties and actions:
 *
 * * [column](Component.ModelsTableCellContentDisplay.html#property_column)
 * * [selectedItems](Component.ModelsTableCellContentDisplay.html#property_selectedItems)
 * * [expandedItems](Component.ModelsTableCellContentDisplay.html#property_expandedItems)
 * * [data](Component.ModelsTableCellContentDisplay.html#property_data)
 * * [themeInstance](Component.ModelsTableCellContentDisplay.html#property_themeInstance)
 * * [expandAllRows](Component.ModelsTableCellContentDisplay.html#event_expandAllRows)
 * * [collapseAllRows](Component.ModelsTableCellContentDisplay.html#event_collapseAllRows)
 *
 * ```hbs
 * <ModelsTable @data={{data}} @columns={{columns}} as |MT|>
 *   <MT.Table as |Table|>
 *     <Table.Header as |Header|>
 *       <Header.RowSorting as |RS|>
 *         {{#each MT.visibleProcessedColumns as |column|}}
 *           <RS.RowSortingCell @column={{column}} as |RowSortingCellContent|>
 *             <RowSortingCellContent/>
 *           </RS.RowSortingCell>
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
 * @namespace Components
 * @class ModelsTableRowSortingCell
 * @extends Glimmer.Component
 */
export default class RowSortingCellComponent extends Component {
  @action
  onClick() {
    if (this.args.column.useSorting) {
      this.args.sort(this.args.column);
    }
    return false;
  }
}
