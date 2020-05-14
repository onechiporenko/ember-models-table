import {attribute, className, layout as templateLayout, tagName} from '@ember-decorators/component';
import Component from '@ember/component';
import {action, computed, set} from '@ember/object';
import {alias, readOnly} from '@ember/object/computed';
import layout from '../../templates/components/models-table/row-filtering-cell';

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
 * @extends Ember.Component
 */
export default
@templateLayout(layout)
@tagName('th')
class RowFilteringCellComponent extends Component {

  /**
   * @property tagName
   * @type string
   * @default 'th'
   */

  /**
   * @property themeTheadCellClass
   * @type string
   * @protected
   */
  @className
  @alias('themeInstance.theadCell') themeTheadCellClass;

  /**
   * @property columnClassName
   * @type string
   * @protected
   */
  @className
  @alias('column.className') columnClassName;

  /**
   * @property colspan
   * @type number
   * @protected
   */
  @attribute
  @readOnly('column.realColspanForFilterCell') colspan;

  /**
   * @property filteringClassName
   * @type string
   * @protected
   */
  @className
  @computed('column.useFilter', 'themeInstance.theadCellNoFiltering')
  get filteringClassName () {
    return this.column.useFilter ? '' : this.themeInstance.theadCellNoFiltering;
  }

  /**
   * Bound from [ModelsTable.themeInstance](Components.ModelsTable.html#property_themeInstance)
   *
   * @property themeInstance
   * @type object
   * @default null
   */
  themeInstance = null;

  /**
   * @property column
   * @default null
   * @type Utils.ModelsTableColumn
   */
  column = null;

  /**
   * Bound from [ModelsTable.selectedItems](Components.ModelsTable.html#property_selectedItems)
   *
   * @property selectedItems
   * @default null
   * @type object[]
   */
  selectedItems = null;

  /**
   * Bound from [ModelsTable.expandedItems](Components.ModelsTable.html#property_expandedItems)
   *
   * @property expandedItems
   * @default null
   * @type object[]
   */
  expandedItems = null;

  /**
   * Closure action [ModelsTable.expandAllRows](Components.ModelsTable.html#event_expandAllRows)
   *
   * @event expandAllRows
   */
  expandAllRows = null;

  /**
   * Closure action [ModelsTable.collapseAllRows](Components.ModelsTable.html#event_collapseAllRows)
   *
   * @event collapseAllRows
   */
  collapseAllRows = null;

  /**
   * Closure action [ModelsTable.toggleAllSelection](Components.ModelsTable.html#event_toggleAllSelection)
   *
   * @event toggleAllSelection
   */
  toggleAllSelection = null;

  /**
   * @property inputId
   * @type string
   * @protected
   */
  @computed('elementId')
  get inputId() {
    return `${this.elementId}-column-filter`;
  }

  /**
   * @event noop
   * @protected
   */
  @action
  noop(e) {
    e.stopPropagation();
  }

  /**
   * @event updateColumnFilterString
   * @param {Event} e
   * @protected
   */
  @action
  updateColumnFilterString(e) {
    if (e) {
      e.stopPropagation();
    }
    set(this, 'column.filterString', e.target.value);
    return false;
  }

  /**
   * @event clearFilter
   * @param {Event} e
   * @protected
   */
  @action
  clearFilter(e) {
    if (e) {
      e.stopPropagation();
    }
    set(this, 'column.filterString', '');
    return false;
  }
}
