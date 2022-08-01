import Component from '@glimmer/component';
import { action } from '@ember/object';
import DefaultTheme from '../../../../services/emt-themes/default';
import ModelsTableColumn from '../../../../utils/emt/emt-column';
import { SelectOption } from '../../../models-table';

export interface DataGroupBySelectArgs {
  /**
   * Bound from [[Core.ModelsTable.currentGroupingPropertyName | ModelsTable.currentGroupingPropertyName]]
   */
  value: string;
  /**
   * Bound from [[Core.ModelsTable.currentGroupingPropertyName | ModelsTable.currentGroupingPropertyName]]
   */
  currentGroupingPropertyName: string;
  /**
   * Bound from [[Core.ModelsTable.themeInstance | ModelsTable.themeInstance]]
   */
  themeInstance: DefaultTheme;
  /**
   * Bound from [[Core.ModelsTable.dataGroupOptions | ModelsTable.dataGroupOptions]]
   */
  options: SelectOption[];
  /**
   * Bound from [[Core.ModelsTable.sortByGroupedFieldDirection | ModelsTable.sortByGroupedFieldDirection]]
   */
  sortByGroupedFieldDirection: string;
  /**
   * Bound from [[Core.ModelsTable.sortByGroupedFieldDirection | ModelsTableDataGroupBySelect.DataGroupBySelect.doSort]]
   *
   * @event sort
   */
  sort: (v: ModelsTableColumn) => void;
  /**
   * Bound from [[Core.ModelsTable.changeGroupingPropertyName | ModelsTable.changeGroupingPropertyName]]
   *
   * @event changeGroupingPropertyName
   */
  changeGroupingPropertyName: (v: string) => void;
}

/**
 * Dropdown to select property for table-rows grouping
 *
 * Also component allows to select sort order for property used for grouping
 *
 * Usage example:
 *
 * ```html
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
 * ```html
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
 *       {{on "click" DGBS.sort}}>
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
 * * [[doSort | sort]] - do sort by property name used to group rows
 */
export default class DataGroupBySelect extends Component<DataGroupBySelectArgs> {
  /**
   * @event doSort
   */
  @action
  doSort(): void {
    this.args.sort(
      new ModelsTableColumn({
        propertyName: this.args.currentGroupingPropertyName,
      })
    );
  }
}
