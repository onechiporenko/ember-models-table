import { SummaryArgs } from './summary-args.interface';

export interface SummarySignature {
  Element: HTMLDivElement;
  Args: SummaryArgs;
  Blocks: {
    default: [
      {
        summary: string;
      },
    ];
  };
}
