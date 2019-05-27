import {layout as templateLayout, tagName} from '@ember-decorators/component';
import Component from '@ember/component';
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
 * @class ModelsTableTableFooter
 * @extends Ember.Component
 * @namespace Components
 */
@templateLayout(layout)
@tagName('tfoot')
export default class TableFooterComponent extends Component {
  /**
   * Bound from {{#crossLink "Components.ModelsTable/data:property"}}ModelsTable.data{{/crossLink}}
   *
   * @property data
   * @type object
   * @default null
   */
  data = null;

  /**
   * Bound from {{#crossLink "Components.ModelsTable/visibleProcessedColumns:property"}}ModelsTable.visibleProcessedColumns{{/crossLink}}
   *
   * @property visibleProcessedColumns
   * @type ModelsTableColumn[]
   * @default null
   */
  visibleProcessedColumns = null;

  /**
   * Bound from {{#crossLink "Components.ModelsTable/themeInstance:property"}}ModelsTable.themeInstance{{/crossLink}}
   *
   * @property themeInstance
   * @type object
   * @default null
   */
  themeInstance = null;

  /**
   * Bound from {{#crossLink "Components.ModelsTable/selectedItems:property"}}ModelsTable.selectedItems{{/crossLink}}
   *
   * @property selectedItems
   * @type object[]
   * @default null
   */
  selectedItems = null;

  /**
   * Bound from {{#crossLink "Components.ModelsTable/expandedItems:property"}}ModelsTable.expandedItems{{/crossLink}}
   *
   * @property expandedItems
   * @type object[]
   * @default null
   */
  expandedItems = null;

  /**
   * Closure action {{#crossLink "Components.ModelsTable/actions.goToPage:method"}}ModelsTable.actions.goToPage{{/crossLink}}
   *
   * @event goToPage
   */
  goToPage = null;

  /**
   * Closure action {{#crossLink "Components.ModelsTable/actions.clearFilters:method"}}ModelsTable.actions.clearFilters{{/crossLink}}
   *
   * @event clearFilters
   */
  clearFilters = null;

  /**
   * Closure action {{#crossLink "Components.ModelsTable/actions.expandRow:method"}}ModelsTable.actions.expandRow{{/crossLink}}
   *
   * @event expandRow
   */
  expandRow = null;

  /**
   * Closure action {{#crossLink "Components.ModelsTable/actions.collapseRow:method"}}ModelsTable.actions.collapseRow{{/crossLink}}
   *
   * @event collapseRow
   */
  collapseRow = null;

  /**
   * Closure action {{#crossLink "Components.ModelsTable/actions.expandAllRows:method"}}ModelsTable.actions.expandAllRows{{/crossLink}}
   *
   * @event expandAllRows
   */
  expandAllRows = null;

  /**
   * Closure action {{#crossLink "Components.ModelsTable/actions.collapseAllRows:method"}}ModelsTable.actions.collapseAllRows{{/crossLink}}
   *
   * @event collapseAllRows
   */
  collapseAllRows = null;
}
