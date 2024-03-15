import Component from '@glimmer/component';
import { action } from '@ember/object';
import { type RowGroupToggleSignature } from '../../../../interfaces/components/models-table/themes/default/row-group-toggle-signature.interface';

/**
 * Component is used to toggle rows group visibility
 *
 * Don't override this component. Use {@link DefaultTheme.RowArgs.groupingRowComponent | RowArgs.groupingRowComponent} (it may extend this one)
 */
export default class RowGroupToggle extends Component<RowGroupToggleSignature> {
  /**
   * @event toggleGroupedRows
   */
  @action
  protected doToggleGroupedRows(e: Event): boolean {
    this.args.toggleGroupedRows(this.args.groupedValue);
    e?.stopPropagation?.();
    return false;
  }

  /**
   * @event toggleGroupedRowsSelection
   */
  @action
  protected doToggleGroupedRowsSelection(e: Event): boolean {
    this.args.toggleGroupedRowsSelection(this.args.groupedValue);
    e?.stopPropagation?.();
    return false;
  }

  /**
   * @event toggleGroupedRowsExpands
   */
  @action
  protected doToggleGroupedRowsExpands(e: Event): boolean {
    this.args.toggleGroupedRowsExpands(this.args.groupedValue);
    e?.stopPropagation?.();
    return false;
  }
}
