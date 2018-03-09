import Component from '@ember/component';
import layout from '../../templates/components/models-table/group-summary-row';

/**
 * @class GroupSummaryRow
 * @namespace Components
 * @extends Ember.Component
 */
export default Component.extend({
  layout,
  tagName: 'tr',
  classNames: ['group-summary-row'],

  /**
   * Bound from {{#crossLink "Components.ModelsTable/visibleProcessedColumns:property"}}ModelsTable.visibleProcessedColumns{{/crossLink}}
   *
   * @property visibleProcessedColumns
   * @type ModelsTableColumn[]
   * @default null
   */
  visibleProcessedColumns: null,

  /**
   * @type object[]
   * @property groupedItems
   * @default null
   * @private
   */
  groupedItems: null,

  /**
   * @type object[]
   * @property visibleGroupedItems
   * @default null
   * @private
   */
  visibleGroupedItems: null,

  /**
   * @type object[]
   * @property selectedGroupedItems
   * @default null
   * @private
   */
  selectedGroupedItems: null,

  /**
   * @type object[]
   * @property expandedGroupedItems
   * @default null
   * @private
   */
  expandedGroupedItems: null,

  /**
   * Bound from {{#crossLink "Components.ModelsTable/themeInstance:property"}}ModelsTable.themeInstance{{/crossLink}}
   *
   * @property themeInstance
   * @type object
   * @default null
   */
  themeInstance: null,

  /**
   * Closure action {{#crossLink "Components.ModelsTable/actions.sendAction:method"}}ModelsTable.actions.sendAction{{/crossLink}}
   *
   * @event sendAction
   */
  sendAction: null,
});
