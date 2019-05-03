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
 * {{#models-table data=data columns=columns as |mt|}}
 *   {{#mt.table as |table|}}
 *     {{#table.body as |body|}}
 *       {{#if body.allColumnsAreHidden}}
 *         {{#body.columns-hidden as |ch|}}
 *             Any message here
 *         {{/body.columns-hidden}}
 *       {{else}}
 *         {{! ... }}
 *       {{/if}}
 *     {{/table.header}}
 *     {{! ... }}
 *   {{/mt.table}}
 *   {{! .... }}
 * {{/models-table}}
 * ```
 *
 * @class ModelsTableColumnsHidden
 * @namespace Components
 * @extends Ember.Component
 */
export default class ColumnsHiddenComponent extends Component {

  layout = layout;

  tagName = 'tr';

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
