import {classNames, layout as templateLayout, tagName} from '@ember-decorators/component';
import Component from '@ember/component';
import layout from '../../templates/components/models-table/group-summary-row';
import {intersect} from '@ember/object/computed';

/**
 * @class GroupSummaryRow
 * @namespace Components
 * @extends Ember.Component
 */
export default
@templateLayout(layout)
@classNames('group-summary-row')
@tagName('tr')
class GroupSummaryRowComponent extends Component {
  /**
   * Bound from [ModelsTable.visibleProcessedColumns](Components.ModelsTable.html#property_visibleProcessedColumns)
   *
   * @property visibleProcessedColumns
   * @type Utils.ModelsTableColumn[]
   * @default null
   */
  visibleProcessedColumns = null;

  /**
   * Bound from [ModelsTable.selectedItems](Components.ModelsTable.html#property_selectedItems)
   *
   * @property selectedItems
   * @type object[]
   * @default null
   */
  selectedItems = null;

  /**
   * Bound from [ModelsTable.selectedItems](Components.ModelsTable.html#property_expandedItems)
   *
   * @property expandedItems
   * @type object[]
   * @default null
   */
  expandedItems = null;

  /**
   * Bound from [ModelsTable.groupedItems](Components.ModelsTable.html#property_groupedItems)
   *
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
   * @default null
   * @protected
   */
  @intersect('selectedItems', 'groupedItems')
  selectedGroupedItems;

  /**
   * @property expandedGroupedItems
   * @type object[]
   * @default null
   * @protected
   */
  @intersect('expandedItems', 'groupedItems')
  expandedGroupedItems;

  /**
   * Bound from [ModelsTable.themeInstance](Components.ModelsTable.html#property_themeInstance)
   *
   * @property themeInstance
   * @type object
   * @default null
   */
  themeInstance = null;
}
