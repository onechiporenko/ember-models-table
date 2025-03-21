import { type WithBoundArgs } from '@glint/template';

import RowGroupToggle from '../../../../../components/models-table/themes/default/row-group-toggle';
import { type RowGroupingArgs } from './row-grouping-args.interface';

export interface RowGroupingSignature {
  Element: HTMLDivElement;
  Args: RowGroupingArgs;
  Blocks: {
    default: [
      {
        RowGroupToggle: WithBoundArgs<
          typeof RowGroupToggle,
          | 'groupedValue'
          | 'groupedLength'
          | 'currentGroupingPropertyName'
          | 'displayGroupedValueAs'
          | 'visibleProcessedColumns'
          | 'groupedItems'
          | 'visibleGroupedItems'
          | 'selectedGroupedItems'
          | 'expandedGroupedItems'
          | 'groupIsCollapsed'
          | 'themeInstance'
          | 'toggleGroupedRowsSelection'
          | 'toggleGroupedRowsExpands'
          | 'toggleGroupedRows'
        >;
      },
    ];
  };
}
