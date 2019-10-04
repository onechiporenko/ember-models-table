import Component from '@ember/component';
import {get} from '@ember/object';
import layout from '../../templates/components/models-table/data-group-by-select';

/**
 * Dropdown to select property for table-rows grouping
 *
 * Also component allows to select sort order for property used for grouping
 *
 * Usage example:
 *
 * ```hbs
 * {{#models-table data=data columns=columns as |mt|}}
 *   {{mt.data-group-by-select}}
 *   {{! ... }}
 * {{/models-table}}
 * ```
 *
 * @class ModelsTableDataGroupBySelect
 * @namespace Components
 * @extends Ember.Component
 */
export default Component.extend({

  layout,

  /**
   * Bound from {{#crossLink "Components.ModelsTable/currentGroupingPropertyName:property"}}ModelsTable.currentGroupingPropertyName{{/crossLink}}
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
   * Bound from {{#crossLink "Components.ModelsTable/dataGroupOptions:property"}}ModelsTable.dataGroupOptions{{/crossLink}}
   *
   * @property options
   * @default null
   * @type object[]
   */
  options: null,

  /**
   * Bound from {{#crossLink "Components.ModelsTable/currentGroupingPropertyName:property"}}ModelsTable.currentGroupingPropertyName{{/crossLink}}
   *
   * @property currentGroupingPropertyName
   * @type string
   * @default null
   */
  currentGroupingPropertyName: null,

  /**
   * Bound from {{#crossLink "Components.ModelsTable/sortByGroupedFieldDirection:property"}}ModelsTable.sortByGroupedFieldDirection{{/crossLink}}
   *
   * @property sortByGroupedFieldDirection
   * @type string
   * @default null
   */
  sortByGroupedFieldDirection: null,

  /**
   * Closure action {{#crossLink "Components.ModelsTable/actions.sendAction:method"}}ModelsTable.actions.sendAction{{/crossLink}}
   *
   * @event sendAction
   */
  sendAction: null,

  /**
   * Closure action {{#crossLink "Components.ModelsTable/actions.sort:method"}}ModelsTable.actions.sort{{/crossLink}}
   *
   * @event sort
   */
  sort: null,

  actions: {
    sort() {
      get(this, 'sort')({propertyName: get(this, 'currentGroupingPropertyName')});
    },

    noop() {}
  }
});
