import DefaultTheme from '../../../../../services/emt-themes/default';

export interface ColumnsHiddenArgs {
  /**
   * Bound from {@link DefaultTheme.TableBodyArgs.columnsCount | TableBodyArgs.columnsCount}
   */
  columnsCount: number;
  /**
   * Bound from {@link DefaultTheme.TableBodyArgs.themeInstance | TableBodyArgs.themeInstance}
   */
  themeInstance: DefaultTheme;
}
