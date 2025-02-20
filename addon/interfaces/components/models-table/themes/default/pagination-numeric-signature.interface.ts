import { type WithBoundArgs } from '@glint/template';

import Select from '../../../../../components/models-table/themes/default/select';
import { type PaginationNumericOption } from '../../../../../interfaces/pagination-numeric-option.interface';
import { type PaginationNumericArgs } from './pagination-numeric-args.interface';

export interface PaginationNumericSignature {
  Element: HTMLDivElement;
  Args: PaginationNumericArgs;
  Blocks: {
    default: [
      {
        PageNumberSelect: WithBoundArgs<
          typeof Select,
          'id' | 'options' | 'value' | 'type' | 'themeInstance' | 'changeValue'
        >;
        visiblePageNumbers: PaginationNumericOption[];
      },
    ];
  };
}
