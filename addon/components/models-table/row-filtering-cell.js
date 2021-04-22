import Component from '@glimmer/component';
import { guidFor } from '@ember/object/internals';
import { action } from '@ember/object';

/**
 * Filter-row cell used within [models-table/row-filtering](Components.ModelsTableRowFiltering.html).
 *
 * ```hbs
 * <ModelsTable @data={{data}} @columns={{columns}} as |MT|>
 *   <MT.Table as |Table|>
 *     <Table.Header as |Header|>
 *       <Header.RowFiltering as |RF|>
 *         {{#each MT.visibleProcessedColumns as |column|}}
 *           <RF.RowFilteringCell @column={{column}} />
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
 * If `column.componentForFilterCell` is provided it is yielded with next properties and actions:
 *
 * * [column](Component.ModelsTableCellContentDisplay.html#property_column)
 * * [selectedItems](Component.ModelsTableCellContentDisplay.html#property_selectedItems)
 * * [expandedItems](Component.ModelsTableCellContentDisplay.html#property_expandedItems)
 * * [data](Component.ModelsTableCellContentDisplay.html#property_data)
 * * [themeInstance](Component.ModelsTableCellContentDisplay.html#property_themeInstance)
 * * [expandAllRows](Component.ModelsTableCellContentDisplay.html#event_expandAllRows)
 * * [collapseAllRows](Component.ModelsTableCellContentDisplay.html#event_collapseAllRows)
 * * [toggleAllSelection](Component.ModelsTableCellContentDisplay.html#event_toggleAllSelection)
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
 * @namespace Components
 * @class ModelsTableRowFilteringCell
 * @extends Glimmer.Component
 */
export default class RowFilteringCellComponent extends Component {
  elementId = guidFor(this);

  /**
   * @property filteringClassName
   * @type string
   * @protected
   */
  get filteringClassName() {
    return this.args.column.useFilter
      ? ''
      : this.args.themeInstance.theadCellNoFiltering;
  }

  /**
   * @property inputId
   * @type string
   * @protected
   */
  get inputId() {
    return `${this.elementId}-column-filter`;
  }

  /**
   * @event noop
   * @protected
   */
  @action
  noop(e) {
    e?.stopPropagation();
  }

  /**
   * @event updateColumnFilterString
   * @param {Event} e
   * @protected
   */
  @action
  updateColumnFilterString(e) {
    this.args.changeColumnFilter(
      e.target ? e.target.value : e,
      this.args.column
    );
    return false;
  }

  /**
   * @event clearFilter
   * @param {Event} e
   * @protected
   */
  @action
  clearFilter(e) {
    e?.stopPropagation();
    this.args.changeColumnFilter('', this.args.column);
    return false;
  }
}
