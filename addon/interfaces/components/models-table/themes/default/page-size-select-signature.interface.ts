import { WithBoundArgs } from '@glint/template';
import { PageSizeSelectArgs } from './page-size-select-args.interface';
import Select from '../../../../../components/models-table/themes/default/select';

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
