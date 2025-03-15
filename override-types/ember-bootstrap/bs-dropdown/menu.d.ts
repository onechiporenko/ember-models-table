import { ComponentLike } from '@glint/template';

import { BsDropdownMenuDividerSignature } from './menu/divider';
import { BsDropdownMenuItemSignature } from './menu/item';

export interface BsDropdownMenuSignature {
  Element: HTMLDivElement;
  Args: any;
  Blocks: {
    default: [
      {
        item: ComponentLike<BsDropdownMenuItemSignature>;
        divider: ComponentLike<BsDropdownMenuDividerSignature>;
      },
    ];
  };
}
