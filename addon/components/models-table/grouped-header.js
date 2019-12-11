import {layout as templateLayout, tagName} from '@ember-decorators/component';
import Component from '@ember/component';
import layout from '../../templates/components/models-table/grouped-header';

/**
 * Table header item used within [models-table/table-header](Components.ModelsTableTableHeader.html).
 *
 * Each `grouped-header` should represents one item from [ModelsTable.groupedHeaders](Components.ModelsTable.html#property_groupedHeaders).
 *
 * Usage example:
 *
 * ```hbs
 * <ModelsTable @data={{data}} @columns={{columns}} as |MT|>
 *   <MT.Table as |Table|>
 *     <Table.Header as |Header|>
 *       {{#each Header.GroupedHeaders as |GroupedHeader|}}
 *         <GroupedHeader @groupedHeader={{groupedHeader}} />
 *       {{/each}}
 *       {{! ... }}
 *     </Table.Header>
 *     {{! ... }}
 *   </MT.Table>
 *   {{! .... }}
 * </ModelsTable>
 * ```
 *
 * @class ModelsTableGroupedHeader
 * @namespace Components
 * @extends Ember.Component
 */
export default
@templateLayout(layout)
@tagName('tr')
class GroupedHeaderComponent extends Component {

  /**
   * One of the [ModelsTable.groupedHeaders](Components.ModelsTable.html#property_groupedHeaders)
   *
   * @property groupedHeader
   * @type GroupedHeader[]
   * @default null
   */
  groupedHeader = null;

  /**
   * Bound from [ModelsTable.themeInstance](Components.ModelsTable.html#property_themeInstance)
   *
   * @property themeInstance
   * @default null
   * @type object
   */
  themeInstance = null;

  /**
   * Bound from [ModelsTable.useDataGrouping](Components.ModelsTable.html#property_useDataGrouping)
   *
   * @property useDataGrouping
   * @type boolean
   * @default null
   */
  useDataGrouping = null;

  /**
   * Bound from [ModelsTable.displayGroupedValueAs](Components.ModelsTable.html#property_displayGroupedValueAs)
   *
   * @property displayGroupedValueAs
   * @default null
   * @type string
   */
  displayGroupedValueAs = null;
}
