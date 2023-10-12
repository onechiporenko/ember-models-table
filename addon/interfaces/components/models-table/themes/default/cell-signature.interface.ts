import { ComponentLike } from '@glint/template';
import { CellArgs } from './cell-args.interface';
import { ModelsTableDataItem } from '../../../../../types/models-table-data-item.type';
import ModelsTableColumn from '../../../../../utils/emt/emt-column';
import { RowInteractionClb } from '../../../../../types/row-interaction-clb.type';
import DefaultTheme from '../../../../../services/emt-themes/default';
import { CellContentEditSignature } from 'ember-models-table/interfaces/components/models-table/themes/default/cell-content-edit-signature.interface';
import { CellContentDisplaySignature } from 'ember-models-table/interfaces/components/models-table/themes/default/cell-content-display-signature.interface';

export interface CellSignature {
  Element: HTMLTableCellElement;
  Args: CellArgs;
  Blocks: {
    default: [
      {
        record: ModelsTableDataItem;
        index: number;
        column: ModelsTableColumn;
        componentToRender:
          | ComponentLike<CellContentEditSignature>
          | ComponentLike<CellContentDisplaySignature>
          | ComponentLike
          | null;
        groupedLength?: number;
        expandRow: RowInteractionClb;
        collapseRow: RowInteractionClb;
        expandAllRows: () => void;
        collapseAllRows: () => void;
        editRow: RowInteractionClb;
        cancelEditRow: () => void;
        themeInstance: DefaultTheme;
        clickOnRow: RowInteractionClb;
        isExpanded: boolean;
        isSelected: boolean;
        isEditRow: boolean;
        saveRow: RowInteractionClb;
        isColumnEditable: boolean;
      },
    ];
  };
}
