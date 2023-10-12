import { WithBoundArgs } from '@glint/template';
import { RowFilteringArgs } from './row-filtering-args.interface';
import RowFilteringCell from '../../../../../components/models-table/themes/default/row-filtering-cell';

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
