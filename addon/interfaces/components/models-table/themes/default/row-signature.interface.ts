import { WithBoundArgs } from '@glint/template';
import { RowArgs } from './row-args.interface';
import Cell from '../../../../../components/models-table/themes/default/cell';
import RowGroupToggle from '../../../../../components/models-table/themes/default/row-group-toggle';
import RowSelectCheckbox from '../../../../../components/models-table/themes/default/row-select-checkbox';
import ExpandToggle from '../../../../../components/models-table/themes/default/expand-toggle';

export interface RowSignature {
  Element: HTMLTableRowElement;
  Args: RowArgs;
  Blocks: {
    default: [
      {
        Cell: WithBoundArgs<
          typeof Cell,
          | 'columnComponents'
          | 'record'
          | 'isExpanded'
          | 'isSelected'
          | 'expandRow'
          | 'collapseRow'
          | 'expandAllRows'
          | 'clickOnRow'
          | 'collapseAllRows'
          | 'themeInstance'
          | 'groupedLength'
          | 'isEditRow'
          | 'editRow'
          | 'saveRow'
          | 'cancelEditRow'
        >;
        RowGroupToggle: WithBoundArgs<
          typeof RowGroupToggle,
          | 'currentGroupingPropertyName'
          | 'groupedValue'
          | 'displayGroupedValueAs'
          | 'visibleProcessedColumns'
          | 'groupedLength'
          | 'groupedItems'
          | 'visibleGroupedItems'
          | 'selectedGroupedItems'
          | 'expandedGroupedItems'
          | 'themeInstance'
          | 'toggleGroupedRows'
          | 'toggleGroupedRowsSelection'
          | 'toggleGroupedRowsExpands'
        >;
        RowSelectCheckbox: WithBoundArgs<
          typeof RowSelectCheckbox,
          'record' | 'isSelected' | 'clickOnRow' | 'themeInstance'
        >;
        ExpandToggle: WithBoundArgs<
          typeof ExpandToggle,
          | 'record'
          | 'isExpanded'
          | 'expandRow'
          | 'collapseRow'
          | 'themeInstance'
        >;
        isEditRow: boolean;
        rowspanForFirstCell: number;
        isFirstGroupedRow: boolean;
        shouldShowGroupToggleCell: boolean;
        editRow: () => void;
        saveRow: () => void;
        cancelEditRow: () => void;
      }
    ];
  };
}
