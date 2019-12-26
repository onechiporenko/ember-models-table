import {layout as templateLayout, tagName} from '@ember-decorators/component';
import Component from '@ember/component';
import {computed} from '@ember/object';
import layout from '../../templates/components/models-table/table-footer';

/**
 * Table footer used within [models-table/table](Components.ModelsTableTable.html).
 *
 * By default it's an empty component. It should be used with a block context:
 *
 * ```hbs
 * <ModelsTable @data={{data}} @columns={{columns}} as |MT|>
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
 * <ModelsTable @data={{data}} @columns={{columns}} as |MT|>
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
 * @extends Ember.Component
 * @namespace Components
 */
export default
@templateLayout(layout)
@tagName('tfoot')
class TableFooterComponent extends Component {

  /**
   * @property tagName
   * @type string
   * @default 'tfoot'
   */

  /**
   * Bound from [ModelsTable.data](Components.ModelsTable.html#property_data)
   *
   * @property data
   * @type object
   * @default null
   */
  data = null;

  /**
   * Bound from [ModelsTable.visibleProcessedColumns](Components.ModelsTable.html#property_visibleProcessedColumns)
   *
   * @property visibleProcessedColumns
   * @type Utils.ModelsTableColumn[]
   * @default null
   */
  visibleProcessedColumns = null;

  /**
   * Bound from [ModelsTable.displayGroupedValueAs](Components.ModelsTable.html#property_displayGroupedValueAs)
   *
   * @property displayGroupedValueAs
   * @type string
   * @default null
   */
  displayGroupedValueAs = null;

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
   * @type object[]
   * @default null
   */
  selectedItems = null;

  /**
   * Bound from [ModelsTable.expandedItems](Components.ModelsTable.html#property_expandedItems)
   *
   * @property expandedItems
   * @type object[]
   * @default null
   */
  expandedItems = null;

  /**
   * Bound from [ModelsTable.useDataGrouping](Components.ModelsTable.html#property_useDataGrouping)
   *
   * @property useDataGrouping
   * @type boolean
   * @default null
   */
  useDataGrouping = null;

  /**
   * Closure action [ModelsTable.goToPage](Components.ModelsTable.html#event_goToPage)
   *
   * @event goToPage
   */
  goToPage = null;

  /**
   * Closure action [ModelsTable.clearFilters](Components.ModelsTable.html#event_clearFilters)
   *
   * @event clearFilters
   */
  clearFilters = null;

  /**
   * Closure action [ModelsTable.expandRow](Components.ModelsTable.html#event_expandRow)
   *
   * @event expandRow
   */
  expandRow = null;

  /**
   * Closure action [ModelsTable.collapseRow](Components.ModelsTable.html#event_collapseRow)
   *
   * @event collapseRow
   */
  collapseRow = null;

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
   * @property shouldAddExtraColumn
   * @type boolean
   * @default false
   * @protected
   */
  @computed('displayGroupedValueAs', 'useDataGrouping', 'visibleProcessedColumns.[]')
  get shouldAddExtraColumn () {
    return this.displayGroupedValueAs === 'column' && this.useDataGrouping && !!this.visibleProcessedColumns.length;
  }
}
