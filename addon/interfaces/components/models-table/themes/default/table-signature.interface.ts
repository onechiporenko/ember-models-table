import { ComponentLike } from '@glint/template';
import { TableArgs } from './table-args.interface';
import { TableHeaderSignature } from './table-header-signature.interface';
import { TableBodySignature } from './table-body-signature.interface';
import { TableFooterSignature } from './table-footer-signature.interface';

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
