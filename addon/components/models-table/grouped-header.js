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
   * @type groupedHeader
   * @default null
   */
  groupedHeader = null;

  /**
   * Bound from {{#crossLink "Components.ModelsTable/themeInstance:property"}}ModelsTable.themeInstance{{/crossLink}}
   *
   * @default null
   * @type object
   */
  themeInstance = null;

  /**
   * Bound from {{#crossLink "Components.ModelsTable/useDataGrouping:property"}}ModelsTable.useDataGrouping{{/crossLink}}
   *
   * @default null
   */
  useDataGrouping = null;

  /**
   * Bound from {{#crossLink "Components.ModelsTable/displayGroupedValueAs:property"}}ModelsTable.displayGroupedValueAs{{/crossLink}}
   *
   * @default null
   * @type string
   */
  displayGroupedValueAs = null;
}
