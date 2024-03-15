import { type WithBoundArgs, type ComponentLike } from '@glint/template';
import { type RowExpandArgs } from 'ember-models-table/interfaces/components/models-table/themes/default/row-expand-args.interface';

export interface RowExpandSignature {
  Element: HTMLTableRowElement;
  Args: RowExpandArgs;
  Blocks: {
    default: [
      WithBoundArgs<
        ComponentLike<any>,
        | 'record'
        | 'visibleProcessedColumns'
        | 'index'
        | 'clickOnRow'
        | 'themeInstance'
      >?,
    ];
  };
}
