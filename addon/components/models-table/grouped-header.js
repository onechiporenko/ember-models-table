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
 * {{#models-table data=data columns=columns as |mt|}}
 *   {{#mt.table as |table|}}
 *     {{#table.header as |header|}}
 *       {{#each header.groupedHeaders as |groupedHeader|}}
 *         {{header.grouped-header groupedHeader=groupedHeader}}
 *       {{/each}}
 *       {{! ... }}
 *     {{/table.header}}
 *     {{! ... }}
 *   {{/mt.table}}
 *   {{! .... }}
 * {{/models-table}}
 *
 * @class ModelsTableGroupedHeader
 * @namespace Components
 * @extends Ember.Component
 */
export default Component.extend({
  layout,
  tagName: 'tr',

  /**
   * @type {groupedHeader}
   * @default null
   * @property groupedHeader
   */
  groupedHeader: null,

  /**
   * Bound from {{#crossLink "Components.ModelsTable/themeInstance:property"}}ModelsTable.themeInstance{{/crossLink}}
   *
   * @property themeInstance
   * @default null
   * @type object
   */
  themeInstance: null,

  /**
   * Bound from {{#crossLink "Components.ModelsTable/useDataGrouping:property"}}ModelsTable.useDataGrouping{{/crossLink}}
   *
   * @property useDataGrouping
   * @default null
   * @type boolean
   */
  useDataGrouping: null,

  /**
   * Bound from {{#crossLink "Components.ModelsTable/displayGroupedValueAs:property"}}ModelsTable.displayGroupedValueAs{{/crossLink}}
   *
   * @property displayGroupedValueAs
   * @default null
   * @type string
   */
  displayGroupedValueAs: null

});
