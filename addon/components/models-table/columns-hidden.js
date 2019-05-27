import {layout as templateLayout, tagName} from '@ember-decorators/component';
import Component from '@ember/component';
import layout from '../../templates/components/models-table/columns-hidden';

/**
 * Table row used within [models-table/table-body](Components.ModelsTableTableBody.html).
 *
 * Component used when all columns are hidden and no data items are shown. Usually it contains a simple message.
 *
 * Usage example:
 *
 * ```hbs
 * <ModelsTable @data={{data}} @columns={{columns}} as |MT|>
 *   <MT.Table as |Table|>
 *     <Table.Body as |Body|>
 *       {{#if Body.allColumnsAreHidden}}
 *         <Body.ColumnsHidden as |CH|>
 *           Any message here
 *         </Body.ColumnsHidden>
 *       {{else}}
 *         {{! ... }}
 *       {{/if}}
 *     </Table.Body>
 *     {{! ... }}
 *   </MT.Table>
 *   {{! .... }}
 * </ModelsTable>
 * ```
 *
 * @class ModelsTableColumnsHidden
 * @namespace Components
 * @extends Ember.Component
 */
@templateLayout(layout)
@tagName('tr')
export default class ColumnsHiddenComponent extends Component {
  /**
   * Bound from {{#crossLink "Components.ModelsTableTable/columnsCount:property"}}ModelsTable.columnsCount{{/crossLink}}
   *
   * @property columnsCount
   * @type number
   * @default null
   */
  columnsCount = null;

  /**
   * Bound from {{#crossLink "Components.ModelsTable/themeInstance:property"}}ModelsTable.themeInstance{{/crossLink}}
   *
   * @property themeInstance
   * @type object
   * @default null
   */
  themeInstance = null;
}
