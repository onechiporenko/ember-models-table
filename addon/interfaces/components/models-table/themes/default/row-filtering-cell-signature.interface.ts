import { type ComponentLike, type WithBoundArgs } from '@glint/template';

import { type RowFilteringCellArgs } from './row-filtering-cell-args.interface';

export interface RowFilteringCellSignature {
  Element: HTMLTableCellElement;
  Args: RowFilteringCellArgs;
  Blocks: {
    default: [
      | WithBoundArgs<
          ComponentLike<any>,
          | 'column'
          | 'data'
          | 'selectedItems'
          | 'expandedItems'
          | 'themeInstance'
          | 'expandAllRows'
          | 'collapseAllRows'
          | 'toggleAllSelection'
          | 'changeColumnFilter'
          | 'clearColumnFilter'
        >
      | {
          changeColumnFilter: (e: Event | number | string) => boolean;
          clearColumnFilter: (e: Event) => boolean;
        },
    ];
  };
}
