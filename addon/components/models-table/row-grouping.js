import {className, layout as templateLayout, tagName} from '@ember-decorators/component';
import Component from '@ember/component';
import {computed, get} from '@ember/object';
import {alias, intersect} from '@ember/object/computed';
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
export default
@templateLayout(layout)
@tagName('tr')
class RowGroupingComponent extends Component {

  @className
  @alias('themeInstance.groupingRow') themeGroupingRowClass;

  /**
   * @type *
   * @default null
   */
  groupedValue = null;

  /**
   * Determines if rows group is collapsed (bound from the parent component template)
   *
   * @default null
   */
  groupIsCollapsed = null;

  /**
   * Rows count in the rows group
   *
   * @type number
   * @default null
   */
  groupedLength = null;

  /**
   * @type number
   * @default null
   * @private
   * @readonly
   */
  @computed('displayGroupedValueAs', 'visibleProcessedColumns.length')
  get cellColspan() {
    return get(this, 'visibleProcessedColumns.length') + (this.displayGroupedValueAs === 'row' ? 0 : 1);
  }

  /**
   * @type object[]
   * @default null
   */
  groupedItems = null;

  /**
   * @type object[]
   * @default null
   */
  visibleGroupedItems = null;

  /**
   * @type object[]
   * @default null
   */
  @intersect('selectedItems', 'groupedItems')
  selectedGroupedItems;

  /**
   * @type object[]
   * @default null
   */
  @intersect('expandedItems', 'groupedItems')
  expandedGroupedItems;

  /**
   * Bound from {{#crossLink "Components.ModelsTable/currentGroupingPropertyName:property"}}ModelsTable.currentGroupingPropertyName{{/crossLink}}
   *
   * @type string
   * @default null
   */
  currentGroupingPropertyName = null;

  /**
   * Bound from {{#crossLink "Components.ModelsTable/visibleProcessedColumns:property"}}ModelsTable.visibleProcessedColumns{{/crossLink}}
   *
   * @type ModelsTableColumn[]
   * @default null
   */
  visibleProcessedColumns = null;

  /**
   * Closure action {{#crossLink "Components.ModelsTable/actions.toggleGroupedRows:method"}}ModelsTable.actions.toggleGroupedRows{{/crossLink}}
   *
   * @event toggleGroupedRows
   */
  toggleGroupedRows = null;

  /**
   * Bound from {{#crossLink "Components.ModelsTable/displayGroupedValueAs:property"}}ModelsTable.displayGroupedValueAs{{/crossLink}}
   *
   * @type string
   * @default null
   */
  displayGroupedValueAs = null;

  /**
   * Bound from {{#crossLink "Components.ModelsTable/groupingRowComponent:property"}}ModelsTable.groupingRowComponent{{/crossLink}}
   *
   * @type string
   * @default null
   */
  groupingRowComponent = null;

  /**
   * Bound from {{#crossLink "Components.ModelsTable/themeInstance:property"}}ModelsTable.themeInstance{{/crossLink}}
   *
   * @type object
   * @default null
   */
  themeInstance = null;

  /**
   * Closure action {{#crossLink "Components.ModelsTable/actions.toggleGroupedRowsSelection:method"}}ModelsTable.actions.toggleGroupedRowsSelection{{/crossLink}}
   *
   * @event toggleGroupedRowsSelection
   */
  toggleGroupedRowsSelection = null;

  /**
   * Closure action {{#crossLink "Components.ModelsTable/actions.toggleGroupedRowsExpands:method"}}ModelsTable.actions.toggleGroupedRowsExpands{{/crossLink}}
   *
   * @event toggleGroupedRowsExpands
   */
  toggleGroupedRowsExpands = null;
}
