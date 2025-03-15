import { type WithBoundArgs } from '@glint/template';

import RowFilteringCell from '../../../../../components/models-table/themes/default/row-filtering-cell';
import { type RowFilteringArgs } from './row-filtering-args.interface';

export interface RowFilteringSignature {
  Element: HTMLTableRowElement;
  Args: RowFilteringArgs;
  Blocks: {
    default: [
      {
        RowFilteringCell: WithBoundArgs<
          typeof RowFilteringCell,
          | 'themeInstance'
          | 'data'
          | 'selectedItems'
          | 'expandedItems'
          | 'expandAllRows'
          | 'collapseAllRows'
          | 'toggleAllSelection'
          | 'changeColumnFilter'
        >;
        shouldAddExtraColumn: boolean;
      },
    ];
  };
}
