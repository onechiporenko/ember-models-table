import {className, layout as templateLayout, tagName} from '@ember-decorators/component';
import Component from '@ember/component';
import {computed} from '@ember/object';
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

  /**
   * @property tagName
   * @type string
   * @default 'tr'
   */

  /**
   * @property themeGroupingRowClass
   * @type string
   * @protected
   */
  @className
  @alias('themeInstance.groupingRow') themeGroupingRowClass;

  /**
   * @property groupedValue
   * @type *
   * @default null
   */
  groupedValue = null;

  /**
   * Determines if rows group is collapsed (bound from the parent component template)
   *
   * @property groupIsCollapsed
   * @type boolean
   * @default null
   */
  groupIsCollapsed = null;

  /**
   * Rows count in the rows group
   *
   * @property groupedLength
   * @type number
   * @default null
   */
  groupedLength = null;

  /**
   * @property cellColspan
   * @type number
   * @default null
   * @protected
   */
  @computed('displayGroupedValueAs', 'visibleProcessedColumns.length', 'additionalColspan')
  get cellColspan() {
    return this.visibleProcessedColumns.length + (this.displayGroupedValueAs === 'row' ? 0 : 1) + Number(this.additionalColspan);
  }

  /**
   * Extra colspan used in the internal `td`. Useful in cases with block scope usage when some extra columns are in the table (not only `columns`)
   *
   * @property additionalColspan
   * @type number
   * @default 0
   */
  additionalColspan = 0;

  /**
   * @property groupedItems
   * @type object[]
   * @default null
   */
  groupedItems = null;

  /**
   * @property visibleGroupedItems
   * @type object[]
   * @default null
   */
  visibleGroupedItems = null;

  /**
   * @property selectedGroupedItems
   * @type object[]
   * @default []
   * @protected
   */
  @intersect('selectedItems', 'groupedItems')
  selectedGroupedItems;

  /**
   * @property expandedGroupedItems
   * @type object[]
   * @default []
   * @protected
   */
  @intersect('expandedItems', 'groupedItems')
  expandedGroupedItems;

  /**
   * Bound from [ModelsTable.currentGroupingPropertyName](Components.ModelsTable.html#property_currentGroupingPropertyName)
   *
   * @property currentGroupingPropertyName
   * @type string
   * @default null
   */
  currentGroupingPropertyName = null;

  /**
   * Bound from [ModelsTable.visibleProcessedColumns](Components.ModelsTable.html#property_visibleProcessedColumns)
   *
   * @property visibleProcessedColumns
   * @type Utils.ModelsTableColumn[]
   * @default null
   */
  visibleProcessedColumns = null;

  /**
   * Closure action [ModelsTable.toggleGroupedRows](Components.ModelsTable.html#event_toggleGroupedRows)
   *
   * @event toggleGroupedRows
   */
  toggleGroupedRows = null;

  /**
   * Bound from [ModelsTable.displayGroupedValueAs](Components.ModelsTable.html#property_displayGroupedValueAs)
   *
   * @property displayGroupedValueAs
   * @type string
   * @default null
   */
  displayGroupedValueAs = null;

  /**
   * Bound from [ModelsTable.groupingRowComponent](Components.ModelsTable.html#property_groupingRowComponent)
   *
   * @property groupingRowComponent
   * @type string
   * @default null
   */
  groupingRowComponent = null;

  /**
   * Bound from [ModelsTable.themeInstance](Components.ModelsTable.html#property_themeInstance)
   *
   * @property themeInstance
   * @type object
   * @default null
   */
  themeInstance = null;

  /**
   * Closure action [ModelsTable.toggleGroupedRowsSelection](Components.ModelsTable.html#event_toggleGroupedRowsSelection)
   *
   * @event toggleGroupedRowsSelection
   */
  toggleGroupedRowsSelection = null;

  /**
   * Closure action [ModelsTable.toggleGroupedRowsExpands](Components.ModelsTable.html#event_toggleGroupedRowsExpands)
   *
   * @event toggleGroupedRowsExpands
   */
  toggleGroupedRowsExpands = null;
}
