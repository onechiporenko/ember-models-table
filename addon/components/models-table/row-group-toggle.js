import Component from '@glimmer/component';
import { action } from '@ember/object';

/**
 * Component is used to toggle rows group visibility
 *
 * Don't override this component. Use [groupingRowComponent](Components.ModelsTable.html#property_groupingRowComponent) (it may extend this one)
 *
 * @namespace Components
 * @class ModelsTableRowGroupToggle
 * @extends Glimmer.Component
 */
export default class RowGroupToggleComponent extends Component {
  /**
   * Calls passed `toggleGroupedRows`
   *
   * @event toggleGroupedRows
   */
  @action
  doToggleGroupedRows(e) {
    this.args.toggleGroupedRows(this.args.groupedValue);
    e?.stopPropagation?.();
    return false;
  }

  /**
   * Calls passed `toggleGroupedRowsSelection`
   *
   * @event toggleGroupedRowsSelection
   */
  @action
  doToggleGroupedRowsSelection(e) {
    this.args.toggleGroupedRowsSelection(this.args.groupedValue);
    e?.stopPropagation?.();
    return false;
  }

  /**
   * Calls passed `toggleGroupedRowsExpands`
   *
   * @event toggleGroupedRowsExpands
   */
  @action
  doToggleGroupedRowsExpands(e) {
    this.args.toggleGroupedRowsExpands(this.args.groupedValue);
    e?.stopPropagation?.();
    return false;
  }
}
