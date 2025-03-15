import { type WithBoundArgs } from '@glint/template';

import ColumnsHidden from '../../../../../components/models-table/themes/default/columns-hidden';
import NoData from '../../../../../components/models-table/themes/default/no-data';
import Row from '../../../../../components/models-table/themes/default/row';
import RowExpand from '../../../../../components/models-table/themes/default/row-expand';
import RowGrouping from '../../../../../components/models-table/themes/default/row-grouping';
import { type TableBodyArgs } from './table-body-args.interface';

export interface TableBodySignature {
  Element: HTMLTableSectionElement;
  Args: TableBodyArgs;
  Blocks: {
    default: [
      {
        ColumnsHidden: WithBoundArgs<
          typeof ColumnsHidden,
          'columnsCount' | 'themeInstance'
        >;
        Row: WithBoundArgs<
          typeof Row,
          | 'visibleProcessedColumns'
          | 'groupingRowComponent'
          | 'collapsedGroupValues'
          | 'currentGroupingPropertyName'
          | 'columnComponents'
          | 'clickOnRow'
          | 'doubleClickOnRow'
          | 'hoverOnRow'
          | 'outRow'
          | 'expandRow'
          | 'collapseRow'
          | 'expandAllRows'
          | 'collapseAllRows'
          | 'themeInstance'
          | 'selectedItems'
          | 'expandedItems'
          | 'displayGroupedValueAs'
          | 'toggleGroupedRows'
          | 'toggleGroupedRowsSelection'
          | 'toggleGroupedRowsExpands'
          | 'useDataGrouping'
        >;
        RowExpand: WithBoundArgs<
          typeof RowExpand,
          | 'expandedRowComponent'
          | 'selectedItems'
          | 'processedColumns'
          | 'visibleProcessedColumns'
          | 'clickOnRow'
          | 'themeInstance'
        >;
        NoData: WithBoundArgs<
          typeof NoData,
          'columnsCount' | 'displayGroupedValueAs' | 'themeInstance'
        >;
        RowGrouping: WithBoundArgs<
          typeof RowGrouping,
          | 'groupingRowComponent'
          | 'currentGroupingPropertyName'
          | 'visibleProcessedColumns'
          | 'toggleGroupedRows'
          | 'displayGroupedValueAs'
          | 'columnComponents'
          | 'selectedItems'
          | 'expandedItems'
          | 'toggleGroupedRowsSelection'
          | 'toggleGroupedRowsExpands'
          | 'themeInstance'
        >;
      },
    ];
  };
}
