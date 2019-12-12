import {layout as templateLayout, tagName} from '@ember-decorators/component';
import Component from '@ember/component';
import {computed} from '@ember/object';
import layout from '../../templates/components/models-table/no-data';

/**
 * Table row shown when no data provided to the ModelsTable. Component used within [models-table/table-body](Components.ModelsTableTableBody.html).
 *
 * This component is a table-row with a single cell. This cell has a `colspan` equal to the shown columns count.
 *
 * Usage example:
 *
 * ```hbs
 * <ModelsTable @data={{data}} @columns={{columns}} as |MT|>
 *   <MT.Table as |Table|>
 *     <Table.Body as |Body|>
 *       {{#if Body.visibleContent.length}}
 *         {{! ... }}
 *       {{else}}
 *         <Body.NoData />
 *       {{/if}}
 *     </Table.Body>
 *     {{! ... }}
 *   </MT.Table>
 *   {{! .... }}
 * </ModelsTable>
 * ```
 *
 * Usage with a block context:
 *
 * ```hbs
 * <ModelsTable @data={{data}} @columns={{columns}} as |MT|>
 *   <MT.Table as |Table|>
 *     <Table.Body as |Body|>
 *       {{#if Body.visibleContent.length}}
 *         {{! ... }}
 *       {{else}}
 *         <Body.NoData as |ND|>
 *           Any message here
 *         </Body.NoData>
 *       {{/if}}
 *     </table.Body>
 *     {{! ... }}
 *   </MT.Table>
 *   {{! .... }}
 * </ModelsTable>
 * ```
 *
 * @class ModelsTableNoData
 * @namespace Components
 * @extends Ember.Component
 */
export default
@templateLayout(layout)
@tagName('tr')
class NoDataComponent extends Component {

  /**
   * @property realColumnsCount
   * @type number
   * @protected
   */
  @computed('columnsCount')
  get realColumnsCount() {
    return this.columnsCount + (this.displayGroupedValueAs === 'column' ? 1 : 0);
  }

  /**
   * Equal to [ModelsTable.visibleProcessedColumns](Components.ModelsTable.html#property_visibleProcessedColumns).length
   *
   * @property columnsCount
   * @type number
   * @default null
   */
  columnsCount = null;

  /**
   * Bound from [ModelsTable.themeInstance](Components.ModelsTable.html#property_themeInstance)
   *
   * @property themeInstance
   * @type object
   * @default null
   */
  themeInstance = null;
}
