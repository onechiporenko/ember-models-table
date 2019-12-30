import {className, layout as templateLayout} from '@ember-decorators/component';
import Component from '@ember/component';
import {action} from '@ember/object';
import {alias} from '@ember/object/computed';
import layout from '../../templates/components/models-table/data-group-by-select';

/**
 * Dropdown to select property for table-rows grouping
 *
 * Also component allows to select sort order for property used for grouping
 *
 * Usage example:
 *
 * ```hbs
 * <ModelsTable
 *   @data={{data}}
 *   @columns={{columns}}
 *   @useDataGrouping={{true}}
 *   @currentGroupingPropertyName="firstName"
 *   @displayGroupedValueAs="column"
 *   @dataGroupProperties={{dataGroupProperties}} as |MT|>
 *   <MT.DataGroupBySelect />
 *   {{! ... }}
 * </ModelsTable>
 * ```
 *
 * Block usage example:
 *
 * ```hbs
 * <ModelsTable
 *   @data={{data}}
 *   @columns={{columns}}
 *   @useDataGrouping={{true}}
 *   @currentGroupingPropertyName="firstName"
 *   @displayGroupedValueAs="column"
 *   @dataGroupProperties={{dataGroupProperties}} as |MT|>
 *   <MT.DataGroupBySelect as |DGBS|>
 *     <label>{{MT.themeInstance.groupByLabelMsg}}</label>
 *     <DGBS.Select />
 *     <button
 *       class={{MT.themeInstance.sortGroupedPropertyBtn}}
 *       onclick={{action DGBS.sort}}>
 *       <i class={{if
 *        (is-equal MT.sortByGroupedFieldDirection "asc")
 *        MT.themeInstance.sortAscIcon
 *        MT.themeInstance.sortDescIcon}}>
 *       </i>
 *     </button>
 *   </MT.DataGroupBySelect>
 * </ModelsTable>
 * ```
 *
 * References to the following actions are yielded:
 *
 * * [sort](Components.ModelsTableDataGroupBySelect.html#event_doSort) - do sort by property name used to group rows
 *
 * @class ModelsTableDataGroupBySelect
 * @namespace Components
 * @extends Ember.Component
 */
export default
@templateLayout(layout)
class DataGroupBySelectComponent extends Component {

  /**
   * @property dataGroupBySelectWrapper
   * @type string
   * @protected
   */
  @className
  @alias('themeInstance.dataGroupBySelectWrapper') dataGroupBySelectWrapper;

  /**
   * Bound from [ModelsTable.currentGroupingPropertyName](Components.ModelsTable.html#property_currentGroupingPropertyName)
   *
   * @property value
   * @type string|number|boolean
   * @default null
   */
  value = null;

  /**
   * Bound from [ModelsTable.themeInstance](Components.ModelsTable.html#property_themeInstance)
   *
   * @property themeInstance
   * @type object
   * @default null
   */
  themeInstance = null;

  /**
   * Bound from [ModelsTable.dataGroupOptions](Components.ModelsTable.html#property_dataGroupOptions)
   *
   * @property options
   * @default null
   * @type SelectOption[]
   */
  options = null;

  /**
   * Bound from [ModelsTable.currentGroupingPropertyName](Components.ModelsTable.html#property_currentGroupingPropertyName)
   *
   * @property currentGroupingPropertyName
   * @type string
   * @default null
   */
  currentGroupingPropertyName = null;

  /**
   * Bound from [ModelsTable.sortByGroupedFieldDirection](Components.ModelsTable.html#property_sortByGroupedFieldDirection)
   *
   * @property sortByGroupedFieldDirection
   * @type string
   * @default null
   */
  sortByGroupedFieldDirection = null;

  /**
   * Closure action [ModelsTable.sort](Components.ModelsTable.html#event_sort)
   *
   * @event sort
   */
  sort = null;

  /**
   * @event doSort
   * @protected
   */
  @action
  doSort() {
    this.sort({propertyName: this.currentGroupingPropertyName});
  }

  /**
   * @event noop
   * @protected
   */
  @action
  noop() {}
}
