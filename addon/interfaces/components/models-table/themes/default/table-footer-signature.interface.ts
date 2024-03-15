import { type TableFooterArgs } from './table-footer-args.interface';

export interface TableFooterSignature {
  Element: HTMLTableSectionElement;
  Args: TableFooterArgs;
  Blocks: {
    default: [
      {
        shouldAddExtraColumn: boolean;
      },
    ];
  };
}
