import { type WithBoundArgs } from '@glint/template';
import { type PaginationNumericArgs } from './pagination-numeric-args.interface';
import Select from '../../../../../components/models-table/themes/default/select';
import { type PaginationNumericOption } from '../../../../../interfaces/pagination-numeric-option.interface';

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
