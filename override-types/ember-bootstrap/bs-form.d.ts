import { ComponentLike } from '@glint/template';
import { BsFormElementSignature } from './bs-form/element';

export interface BsFormSignature {
  Args: any;
  Blocks: {
    default: [
      {
        element: ComponentLike<BsFormElementSignature>;
      }
    ];
  };
  Element: HTMLFormElement;
}
