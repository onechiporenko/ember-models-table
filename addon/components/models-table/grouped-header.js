import Ember from 'ember';
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
export default Ember.Component.extend({
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
  themeInstance: null
});
