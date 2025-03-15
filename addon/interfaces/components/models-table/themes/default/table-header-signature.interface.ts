import { type WithBoundArgs } from '@glint/template';
import { type TableHeaderArgs } from 'ember-models-table/interfaces/components/models-table/themes/default/table-header-args.interface';

import ExpandAllRowsToggleCheckbox from '../../../../../components/models-table/themes/default/expand-all-toggle';
import GroupedHeader from '../../../../../components/models-table/themes/default/grouped-header';
import RowFiltering from '../../../../../components/models-table/themes/default/row-filtering';
import SelectAllRowsCheckbox from '../../../../../components/models-table/themes/default/row-select-all-checkbox';
import RowSorting from '../../../../../components/models-table/themes/default/row-sorting';

export interface TableHeaderSignature {
  Element: HTMLTableSectionElement;
  Args: TableHeaderArgs;
  Blocks: {
    default: [
      {
        RowSorting: WithBoundArgs<
          typeof RowSorting,
          | 'processedColumns'
          | 'visibleProcessedColumns'
          | 'themeInstance'
          | 'selectedItems'
          | 'expandedItems'
          | 'sortProperties'
          | 'useDataGrouping'
          | 'displayGroupedValueAs'
          | 'groupHeaderCellComponent'
          | 'currentGroupingPropertyName'
          | 'columnComponents'
          | 'sort'
          | 'data'
          | 'expandAllRows'
          | 'collapseAllRows'
          | 'toggleAllSelection'
        >;
        RowFiltering: WithBoundArgs<
          typeof RowFiltering,
          | 'processedColumns'
          | 'visibleProcessedColumns'
          | 'themeInstance'
          | 'selectedItems'
          | 'expandedItems'
          | 'useDataGrouping'
          | 'displayGroupedValueAs'
          | 'columnComponents'
          | 'data'
          | 'expandAllRows'
          | 'collapseAllRows'
          | 'toggleAllSelection'
          | 'changeColumnFilter'
        >;
        GroupedHeader: WithBoundArgs<
          typeof GroupedHeader,
          | 'useDataGrouping'
          | 'displayGroupedValueAs'
          | 'visibleProcessedColumns'
          | 'columnComponents'
          | 'themeInstance'
        >;
        SelectAllRowsCheckbox: WithBoundArgs<
          typeof SelectAllRowsCheckbox,
          'themeInstance' | 'toggleAllSelection' | 'selectedItems' | 'data'
        >;
        ExpandAllRowsToggleCheckbox: WithBoundArgs<
          typeof ExpandAllRowsToggleCheckbox,
          'themeInstance' | 'expandAllRows' | 'collapseAllRows'
        >;
      },
    ];
  };
}
