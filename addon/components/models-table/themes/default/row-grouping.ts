import { type ComponentLike } from '@glint/template';
import { ensureSafeComponent } from '@embroider/util';
import Component from '@glimmer/component';
import { intersection } from '../../../../utils/emt/array';
import { type RowGroupingSignature } from '../../../../interfaces/components/models-table/themes/default/row-grouping-signature.interface';
import { type RowGroupToggleSignature } from '../../../../interfaces/components/models-table/themes/default/row-group-toggle-signature.interface';
import { type ModelsTableDataItem } from '../../../../types/models-table-data-item.type';

/**
 * Component-row with grouped property value. Used to toggle rows group with needed property value equal to the grouping value.
 *
 * You must not override this component and should use {@link Core.ModelsTable.groupingRowComponent | ModelsTable.groupingRowComponent}.
 *
 * By default {@link DefaultTheme.RowGroupToggle} is used
 */
export default class RowGrouping extends Component<RowGroupingSignature> {
  protected get cellColspan(): number {
    return (
      this.args.visibleProcessedColumns.length +
      (this.args.displayGroupedValueAs === 'row' ? 0 : 1) +
      Number(this.args.additionalColspan || 0)
    );
  }

  protected get selectedGroupedItems(): ModelsTableDataItem[] {
    return intersection(this.args.selectedItems, this.args.groupedItems);
  }

  protected get expandedGroupedItems(): ModelsTableDataItem[] {
    return intersection(this.args.expandedItems, this.args.groupedItems);
  }

  protected get rowGroupToggleComponent():
    | ComponentLike<RowGroupToggleSignature>
    | ComponentLike {
    return this.args.groupingRowComponent
      ? ensureSafeComponent(this.args.groupingRowComponent, this)
      : ensureSafeComponent(
          this.args.themeInstance.rowGroupToggleComponent,
          this,
        );
  }
}
