import { WithBoundArgs, ComponentLike } from '@glint/template';
import { RowFilteringCellArgs } from './row-filtering-cell-args.interface';

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
