import {attribute, className, layout as templateLayout, tagName} from '@ember-decorators/component';
import Component from '@ember/component';
import {get} from '@ember/object';
import {alias, readOnly} from '@ember/object/computed';
import layout from '../../templates/components/models-table/row-sorting-cell';

/**
 * Sort-row cell used within [models-table/row-sorting](Components.ModelsTableRowSorting.html).
 *
 * ```hbs
 * <ModelsTable @data={{data}} @columns={{columns}} as |MT|>
 *   <MT.Table as |Table|>
 *     <Table.Header as |Header|>
 *       <Header.RowSorting as |RS|>
 *         {{#each RS.visibleProcessedColumns as |column|}}
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
 *
 * @namespace Components
 * @class ModelsTableRowSortingCell
 * @extends Ember.Component
 */
export default
@templateLayout(layout)
@tagName('th')
class RowSortingCellComponent extends Component {

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
  @readOnly('column.realColspanForSortCell') colspan;

  click() {
    if (get(this.column, 'useSorting')) {
      this.sort(this.column);
    }
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
   * Bound from [ModelsTable.data](Components.ModelsTable.html#property_data)
   *
   * @property data
   * @default null
   * @type object[]
   */
  data = null;

  /**
   * Closure action [ModelsTable.sort](Components.ModelsTable.html#event_sort)
   *
   * @event sort
   */
  sort = null;

  /**
   * @property column
   * @default null
   * @type Utils.ModelsTableColumn
   */
  column = null;

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
}
