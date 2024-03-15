import Component from '@glimmer/component';
import { action } from '@ember/object';
import ModelsTableColumn from '../../../../utils/emt/emt-column';
import { type DataGroupBySelectSignature } from '../../../../interfaces/components/models-table/themes/default/data-group-by-select-signature.interface';

/**
 * Dropdown to select property for table-rows grouping
 *
 * Also, component allows to select sort order for property used for grouping
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
 * * {@link doSort | sort} - do sort by property name used to group rows
 */
export default class DataGroupBySelect extends Component<DataGroupBySelectSignature> {
  /**
   * @event doSort
   */
  @action
  doSort(): void {
    this.args.sort(
      new ModelsTableColumn({
        propertyName: this.args.currentGroupingPropertyName,
      }),
    );
  }

  /**
   * @event noop
   */
  @action
  protected noop(): void {
    // do nothing.
  }
}
