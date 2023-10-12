import { ComponentLike } from '@glint/template';
import { SummarySignature } from './summary-signature.interface';
import { PageSizeSelectSignature } from './page-size-select-signature.interface';
import { PaginationNumericSignature } from './pagination-numeric-signature.interface';
import { PaginationSimpleSignature } from './pagination-simple-signature.interface';
import { FooterArgs } from './footer-args.interface';

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
