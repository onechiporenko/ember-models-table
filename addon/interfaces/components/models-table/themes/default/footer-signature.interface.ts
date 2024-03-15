import { type ComponentLike } from '@glint/template';
import { type SummarySignature } from './summary-signature.interface';
import { type PageSizeSelectSignature } from './page-size-select-signature.interface';
import { type PaginationNumericSignature } from './pagination-numeric-signature.interface';
import { type PaginationSimpleSignature } from './pagination-simple-signature.interface';
import { type FooterArgs } from './footer-args.interface';

export interface FooterSignature {
  Element: HTMLDivElement;
  Args: FooterArgs;
  Blocks: {
    default: [
      {
        Summary: ComponentLike<SummarySignature>;
        PageSizeSelect: ComponentLike<PageSizeSelectSignature>;
        PaginationNumeric: ComponentLike<PaginationNumericSignature>;
        PaginationSimple: ComponentLike<PaginationSimpleSignature>;
      },
    ];
  };
}
