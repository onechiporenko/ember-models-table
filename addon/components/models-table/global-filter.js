import Ember from 'ember';
import layout from '../../templates/components/models-table/global-filter';

/**
 * Global filter element used within [models-table](Components.ModelsTable.html).
 *
 * Its value is used for all data-items and for each columns `propertyName`.
 *
 * Usage example:
 *
 * ```hbs
 * {{#models-table data=data columns=columns as |mt|}}
 *   {{mt.global-filter}}
 *   {{! .... }}
 * {{/models-table}}
 * ```
 *
 * @namespace Components
 * @class ModelsTableGlobalFilter
 * @extends Ember.Component
 */
export default Ember.Component.extend({
  layout,

  /**
   * Bound from {{#crossLink "Components.ModelsTable/filterString:property"}}ModelsTable.filterString{{/crossLink}}
   *
   * @property value
   * @type string
   * @default null
   */
  value: null,

  /**
   * Bound from {{#crossLink "Components.ModelsTable/themeInstance:property"}}ModelsTable.themeInstance{{/crossLink}}
   *
   * @property themeInstance
   * @type object
   * @default null
   */
  themeInstance: null,

  /**
   * Bound from {{#crossLink "Components.ModelsTable/globalFilterUsed:property"}}ModelsTable.globalFilterUsed{{/crossLink}}
   *
   * @property globalFilterUsed
   * @type boolean
   * @default null
   */
  globalFilterUsed: null,

  /**
   * Bound from {{#crossLink "Components.ModelsTable/messages:property"}}ModelsTable.messages{{/crossLink}}
   *
   * @property messages
   * @type object
   * @default null
   */
  messages: null,

  /**
   * Closure action {{#crossLink "Components.ModelsTable/actions.sendAction:method"}}ModelsTable.actions.sendAction{{/crossLink}}
   *
   * @event sendAction
   */
  sendAction: null
});
