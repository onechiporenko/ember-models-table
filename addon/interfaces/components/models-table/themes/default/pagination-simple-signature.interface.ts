import { type WithBoundArgs } from '@glint/template';

import Select from '../../../../../components/models-table/themes/default/select';
import { type PaginationSimpleArgs } from './pagination-simple-args.interface';

export interface PaginationSimpleSignature {
  Element: HTMLDivElement;
  Args: PaginationSimpleArgs;
  Blocks: {
    default: [
      {
        PageNumberSelect: WithBoundArgs<
          typeof Select,
          'id' | 'options' | 'value' | 'type' | 'themeInstance' | 'changeValue'
        >;
        goToPage: (pageNumber: number) => void;
        goToFirst: (e: Event) => boolean;
        goToPrev: (e: Event) => boolean;
        goToNext: (e: Event) => boolean;
        goToLast: (e: Event) => boolean;
        goToBackEnabled: boolean;
        goToForwardEnabled: boolean;
      },
    ];
  };
}
