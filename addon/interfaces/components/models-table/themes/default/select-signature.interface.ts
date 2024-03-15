import { type SelectArgs } from './select-args.interface';

export interface SelectSignature {
  Element: HTMLSelectElement;
  Args: SelectArgs;
  Blocks: {
    default: [];
  };
}
