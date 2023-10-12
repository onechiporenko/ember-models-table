import { ComponentLike } from '@glint/template';
import { BsDropdownMenuItemSignature } from './menu/item';
import { BsDropdownMenuDividerSignature } from './menu/divider';

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
