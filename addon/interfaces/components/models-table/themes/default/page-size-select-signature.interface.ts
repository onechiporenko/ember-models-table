import { type WithBoundArgs } from '@glint/template';

import Select from '../../../../../components/models-table/themes/default/select';
import { type PageSizeSelectArgs } from './page-size-select-args.interface';

export interface PageSizeSelectSignature {
  Element: HTMLDivElement;
  Args: PageSizeSelectArgs;
  Blocks: {
    default: [
      {
        Select: WithBoundArgs<
          typeof Select,
          | 'id'
          | 'options'
          | 'value'
          | 'type'
          | 'themeInstance'
          | 'cssPropertyName'
          | 'changeValue'
        >;
      },
    ];
  };
}
