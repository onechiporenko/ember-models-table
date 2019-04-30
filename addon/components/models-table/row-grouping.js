import Component from '@ember/component';
import {computed, get} from '@ember/object';
import layout from '../../templates/components/models-table/row-grouping';

/**
 * Component-row with grouped property value. Used to toggle rows group with needed property value equal to the grouping value
 *
 * You must not override this component and should use [groupingRowComponent](Components.ModelsTable.html#property_groupingRowComponent)
 *
 * By default [row-group-toggle](Components.ModelsTableRowGroupToggle.html) is used
 *
 * @namespace Components
 * @class ModelsTableRowGrouping
 * @extends Ember.Component
 */
export default Component.extend({
  layout,
  tagName: 'tr',

  classNameBindings: ['themeInstance.groupingRow'],

  /**
   * @property groupedValue
   * @type *
   * @default null
   */
  groupedValue: null,

  /**
   * Determines if rows group is collapsed (bound from the parent component template)
   *
   * @type boolean
   * @default null
   * @property groupIsCollapsed
   */
  groupIsCollapsed: null,

  /**
   * Rows count in the rows group
   *
   * @type number
   * @default null
   * @property groupedLength
   */
  groupedLength: null,

  /**
   * @property cellColspan
   * @type number
   * @default null
   * @private
   * @readonly
   */
  cellColspan: computed('displayGroupedValueAs', 'visibleProcessedColumns.length', function () {
    return get(this, 'visibleProcessedColumns.length') + (get(this, 'displayGroupedValueAs') === 'row' ? 0 : 1);
  }).readOnly(),

  /**
   * @type object[]
   * @property groupedItems
   * @default null
   */
  groupedItems: null,

  /**
   * @type object[]
   * @property visibleGroupedItems
   * @default null
   */
  visibleGroupedItems: null,

  /**
   * @type object[]
   * @property selectedGroupedItems
   * @default null
   */
  selectedGroupedItems: null,

  /**
   * @type object[]
   * @property expandedGroupedItems
   * @default null
   */
  expandedGroupedItems: null,

  /**
   * Bound from {{#crossLink "Components.ModelsTable/currentGroupingPropertyName:property"}}ModelsTable.currentGroupingPropertyName{{/crossLink}}
   *
   * @property currentGroupingPropertyName
   * @type string
   * @default null
   */
  currentGroupingPropertyName: null,

  /**
   * Bound from {{#crossLink "Components.ModelsTable/visibleProcessedColumns:property"}}ModelsTable.visibleProcessedColumns{{/crossLink}}
   *
   * @property visibleProcessedColumns
   * @type ModelsTableColumn[]
   * @default null
   */
  visibleProcessedColumns: null,

  /**
   * Closure action {{#crossLink "Components.ModelsTable/actions.toggleGroupedRows:method"}}ModelsTable.actions.toggleGroupedRows{{/crossLink}}
   *
   * @event toggleGroupedRows
   */
  toggleGroupedRows: null,

  /**
   * Bound from {{#crossLink "Components.ModelsTable/displayGroupedValueAs:property"}}ModelsTable.displayGroupedValueAs{{/crossLink}}
   *
   * @property displayGroupedValueAs
   * @type string
   * @default null
   */
  displayGroupedValueAs: null,

  /**
   * Bound from {{#crossLink "Components.ModelsTable/groupingRowComponent:property"}}ModelsTable.groupingRowComponent{{/crossLink}}
   *
   * @type string
   * @default null
   * @property groupingRowComponent
   */
  groupingRowComponent: null,

  /**
   * Bound from {{#crossLink "Components.ModelsTable/themeInstance:property"}}ModelsTable.themeInstance{{/crossLink}}
   *
   * @property themeInstance
   * @type object
   * @default null
   */
  themeInstance: null,

  /**
   * Closure action {{#crossLink "Components.ModelsTable/actions.toggleGroupedRowsSelection:method"}}ModelsTable.actions.toggleGroupedRowsSelection{{/crossLink}}
   *
   * @event toggleGroupedRowsSelection
   */
  toggleGroupedRowsSelection: null,

  /**
   * Closure action {{#crossLink "Components.ModelsTable/actions.toggleGroupedRowsExpands:method"}}ModelsTable.actions.toggleGroupedRowsExpands{{/crossLink}}
   *
   * @event toggleGroupedRowsExpands
   */
  toggleGroupedRowsExpands: null

});
