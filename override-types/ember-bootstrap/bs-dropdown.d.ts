import { WithBoundArgs, ComponentLike } from '@glint/template';
import { BsButtonSignature } from './bs-button';
import { BsDropdownMenuSignature } from './bs-dropdown/menu';

export interface BsDropdownSignature {
  Args: any;
  Blocks: {
    default: [
      {
        button: WithBoundArgs<
          ComponentLike<BsButtonSignature>,
          'isOpen' | 'onClick' | 'onKeyDown'
        >;
        menu: WithBoundArgs<
          ComponentLike<BsDropdownMenuSignature>,
          'isOpen' | 'direction' | 'toggleElement'
        >;
      }
    ];
  };
  Element: HTMLDivElement;
}
