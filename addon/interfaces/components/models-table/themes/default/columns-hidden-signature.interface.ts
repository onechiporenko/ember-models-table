import DefaultTheme from '../../../../../services/emt-themes/default';
import { type ColumnsHiddenArgs } from './columns-hidden-args.interface';

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
