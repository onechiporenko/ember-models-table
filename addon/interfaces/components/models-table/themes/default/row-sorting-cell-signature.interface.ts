import { type ComponentLike, type WithBoundArgs } from '@glint/template';

import { type RowSortingCellArgs } from './row-sorting-cell-args.interface';

export interface RowSortingCellSignature {
  Element: HTMLTableCellElement;
  Args: RowSortingCellArgs;
  Blocks: {
    default: [
      | WithBoundArgs<
          ComponentLike<any>,
          | 'column'
          | 'selectedItems'
          | 'expandedItems'
          | 'data'
          | 'themeInstance'
          | 'expandAllRows'
          | 'toggleAllSelection'
          | 'collapseAllRows'
          | 'sortingIndex'
          | 'sortColumn'
        >
      | {
          sortColumn: () => boolean;
        },
    ];
  };
}
