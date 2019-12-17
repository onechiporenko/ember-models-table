import {className, classNames, layout as templateLayout, tagName} from '@ember-decorators/component';
import Component from '@ember/component';
import {computed} from '@ember/object';
import {isArray} from '@ember/array';
import layout from '../../templates/components/models-table/row-expand';

/**
 * Extra row with additional information for original row. Component used within [models-table/table-body](Components.ModelsTableTableBody.html).
 *
 * Row expand is a table-row with a single cell. This cell has a `colspan` equal to the shown columns count. You should provide an [ModelsTable.expandedRowComponent](Components.ModelsTable.html#property_expandedRowComponent). It will be rendered inside ModelsTableRowExpand.
 *
 * Usage example:
 *
 * ```hbs
 * <ModelsTable @data={{data}} @columns={{columns}} as |MT|>
 *   <MT.Table as |Table|>
 *     <Table.Body as |Body|>
 *       {{#each Body.visibleContent as |record index|}}
 *         <Body.Row @record={{record}} @index={{index}} />
 *         {{#if (exists-in Body.expandedItems record)}}
 *           <Body.RowExpand @record={{record}} @index={{index}} />
 *         {{/if}}
 *       {{/each}}
 *     </Table.Body>
 *     {{! ... }}
 *   </MT.Table>
 *   {{! .... }}
 * </ModelsTable>
 * ```
 *
 * @class ModelsTableRowExpand
 * @namespace Components
 * @extends Ember.Component
 */
export default
@templateLayout(layout)
@tagName('tr')
@classNames('expand-row')
class RowExpandComponent extends Component {

  /**
   * @property tagName
   * @type string
   * @default 'tr'
   */

  /**
   * @property indexedClass
   * @type string
   * @protected
   */
  @className
  @computed('index')
  get indexedClass() {
    return `expand-${this.index}`;
  }

  /**
   * @property isSelected
   * @type boolean
   * @protected
   */
  @className('selected-expand')
  @computed('selectedItems.[]', 'record')
  get isSelected() {
    return isArray(this.selectedItems) && this.selectedItems.includes(this.record);
  }

  /**
   * Row's index
   *
   * @property index
   * @type number
   * @default null
   */
  index = null;

  /**
   * One of the [data](Components.ModelsTable.html#property_data)
   *
   * @property record
   * @type object
   * @default null
   */
  record = null;

  /**
   * Bound from [ModelsTable.expandedRowComponent](Components.ModelsTable.html#property_expandedRowComponent)
   *
   * @property expandedRowComponent
   * @default null
   */
  expandedRowComponent = null;

  /**
   * Bound from [ModelsTable.visibleProcessedColumns](Components.ModelsTable.html#property_visibleProcessedColumns)
   *
   * @property visibleProcessedColumns
   * @type Utils.ModelsTableColumn[]
   * @default null
   */
  visibleProcessedColumns = null;

  /**
   * Closure action [ModelsTable.clickOnRow](Components.ModelsTable.html#event_clickOnRow)
   *
   * @event clickOnRow
   */
  clickOnRow = null;

  /**
   * Bound from [ModelsTable.themeInstance](Components.ModelsTable.html#property_themeInstance)
   *
   * @property themeInstance
   * @type object
   * @default null
   */
  themeInstance = null;

  click() {
    this.clickOnRow(this.index, this.record);
  }
}
