import { type CellColumnSummaryArgs } from './cell-column-summary-args.interface';

export interface CellColumnSummarySignature {
  Element: HTMLTableCellElement;
  Args: CellColumnSummaryArgs;
  Blocks: {
    default: [
      {
        minSelected: number | null;
        maxSelected: number | null;
        sumSelected: number;
        avgSelected: number;
        medianSelected: number | null;
        minData: number | null;
        maxData: number | null;
        sumData: number;
        avgData: number;
        medianData: number | null;
      },
    ];
  };
}
