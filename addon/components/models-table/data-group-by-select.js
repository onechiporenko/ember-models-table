import {layout as templateLayout} from '@ember-decorators/component';
import Component from '@ember/component';
import {action} from '@ember/object';
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
 *       onclick={{action MT.sort}}>
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
 * @class ModelsTableDataGroupBySelect
 * @namespace Components
 * @extends Ember.Component
 */
export default
@templateLayout(layout)
class DataGroupBySelectComponent extends Component {

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
