import Component from '@glimmer/component';
import { intersection } from '../../utils/emt/array';

/**
 * Component-row with grouped property value. Used to toggle rows group with needed property value equal to the grouping value
 *
 * You must not override this component and should use [groupingRowComponent](Components.ModelsTable.html#property_groupingRowComponent)
 *
 * By default [row-group-toggle](Components.ModelsTableRowGroupToggle.html) is used
 *
 * @namespace Components
 * @class ModelsTableRowGrouping
 * @extends Glimmer.Component
 */
export default class RowGroupingComponent extends Component {
  /**
   * @property cellColspan
   * @type number
   * @default null
   * @protected
   */
  get cellColspan() {
    return (
      this.args.visibleProcessedColumns.length +
      (this.args.displayGroupedValueAs === 'row' ? 0 : 1) +
      Number(this.args.additionalColspan || 0)
    );
  }

  /**
   * @property selectedGroupedItems
   * @type object[]
   * @default []
   * @protected
   */
  get selectedGroupedItems() {
    return intersection(this.args.selectedItems, this.args.groupedItems);
  }

  /**
   * @property expandedGroupedItems
   * @type object[]
   * @default []
   * @protected
   */
  get expandedGroupedItems() {
    return intersection(this.args.expandedItems, this.args.groupedItems);
  }
}
