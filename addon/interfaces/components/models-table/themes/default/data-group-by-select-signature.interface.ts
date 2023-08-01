import { WithBoundArgs } from '@glint/template';
import { DataGroupBySelectArgs } from 'ember-models-table/interfaces/components/models-table/themes/default/data-group-by-select-args.interface';
import Select from '../../../../../components/models-table/themes/default/select';

export interface DataGroupBySelectSignature {
  Element: HTMLDivElement;
  Args: DataGroupBySelectArgs;
  Blocks: {
    default: [
      {
        Select: WithBoundArgs<
          typeof Select,
          | 'options'
          | 'value'
          | 'themeInstance'
          | 'cssPropertyName'
          | 'changeValue'
        >;
        sort: () => void;
      }
    ];
  };
}
