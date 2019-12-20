import {layout as templateLayout, tagName} from '@ember-decorators/component';
import Component from '@ember/component';
import layout from '../../templates/components/models-table/grouped-header';

/**
 * Table header item used within [models-table/table-header](Components.ModelsTableTableHeader.html).
 *
 * Each `grouped-header` should represent one item from [ModelsTable.groupedHeaders](Components.ModelsTable.html#property_groupedHeaders).
 *
 * Usage example:
 *
 * ```js
 * const groupedHeaders = [
 *   [{title: 'BigTitle', colspan: 5}],
 *   [{title: 'SubTitle1', colspan: 2}, {title: 'SubTitle2', colspan: 3}]
 * ];
 * ```
 *
 * ```hbs
 * <ModelsTable
 *   @columns={{columns}}
 *   @data={{data}} as |MT|>
 *   <MT.Table as |Table|>
 *     <Table.Header as |Header|>
 *       {{#each groupedHeaders as |groupedHeader|}}
 *         <Header.GroupedHeader @groupedHeader={{groupedHeader}} as |GroupedHeader|>
 *           {{#each GroupedHeader.groupedHeader as |cell|}}
 *             <th colspan={{cell.colspan}} rowspan={{cell.rowspan}}>{{cell.title}}</th>
 *           {{/each}}
 *         </Header.GroupedHeader>
 *       {{/each}}
 *     </Table.Header>
 *   </MT.Table>
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
   * @property tagName
   * @type string
   * @default 'tr'
   */

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
