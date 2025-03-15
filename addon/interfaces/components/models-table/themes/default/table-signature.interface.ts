import { type ComponentLike } from '@glint/template';

import { type TableArgs } from './table-args.interface';
import { type TableBodySignature } from './table-body-signature.interface';
import { type TableFooterSignature } from './table-footer-signature.interface';
import { type TableHeaderSignature } from './table-header-signature.interface';

export interface TableSignature {
  Element: HTMLTableElement;
  Args: TableArgs;
  Blocks: {
    default: [
      {
        Header: ComponentLike<TableHeaderSignature>;
        Body: ComponentLike<TableBodySignature>;
        Footer: ComponentLike<TableFooterSignature>;
      },
    ];
  };
}
