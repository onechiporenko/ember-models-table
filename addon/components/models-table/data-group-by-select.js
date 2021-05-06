import Component from '@glimmer/component';
import { action } from '@ember/object';

/**
 * Dropdown to select property for table-rows grouping
 *
 * Also component allows to select sort order for property used for grouping
 *
 * Usage example:
 *
 * ```hbs
 * <ModelsTable
 *   @data={{this.data}}
 *   @columns={{this.columns}}
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
 *   @data={{this.data}}
 *   @columns={{this.columns}}
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
 * @extends Glimmer.Component
 */
export default class DataGroupBySelectComponent extends Component {
  /**
   * @event doSort
   * @protected
   */
  @action
  doSort() {
    this.args.sort({ propertyName: this.args.currentGroupingPropertyName });
  }

  /**
   * @event doChangeGroupingPropertyName
   * @param {string} newValue
   * @protected
   */
  @action
  doChangeGroupingPropertyName(newValue) {
    this.args.changeGroupingPropertyName(newValue);
  }
}
