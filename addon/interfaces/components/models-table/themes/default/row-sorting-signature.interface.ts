import { WithBoundArgs } from '@glint/template';
import { RowSortingArgs } from './row-sorting-args.interface';
import RowSortingCell from '../../../../../components/models-table/themes/default/row-sorting-cell';

export interface RowSortingSignature {
  Element: HTMLTableRowElement;
  Args: RowSortingArgs;
  Blocks: {
    default: [
      {
        RowSortingCell: WithBoundArgs<
          typeof RowSortingCell,
          | 'themeInstance'
          | 'selectedItems'
          | 'expandedItems'
          | 'sortProperties'
          | 'sort'
          | 'data'
          | 'expandAllRows'
          | 'collapseAllRows'
          | 'toggleAllSelection'
        >;
        shouldAddExtraColumn: boolean;
      }
    ];
  };
}
