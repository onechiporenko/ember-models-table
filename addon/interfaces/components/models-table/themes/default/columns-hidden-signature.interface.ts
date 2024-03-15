import { type ColumnsHiddenArgs } from './columns-hidden-args.interface';
import DefaultTheme from '../../../../../services/emt-themes/default';

export interface ColumnsHiddenSignature {
  Element: HTMLDivElement;
  Args: ColumnsHiddenArgs;
  Blocks: {
    default: [
      {
        columnsCount: number;
        themeInstance: DefaultTheme;
      },
    ];
  };
}
