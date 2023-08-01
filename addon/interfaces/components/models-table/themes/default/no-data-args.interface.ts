import DefaultTheme from 'ember-models-table/services/emt-themes/default';

export interface NoDataArgs {
  /**
   * Bound from {@link DefaultTheme.TableBodyArgs.columnsCount | TableBodyArgs.columnsCount}
   */
  columnsCount: number;
  /**
   * Bound from {@link DefaultTheme.TableBodyArgs.displayGroupedValueAs | TableBodyArgs.displayGroupedValueAs}
   */
  displayGroupedValueAs: string;
  /**
   * Bound from {@link DefaultTheme.TableBodyArgs.themeInstance | TableBodyArgs.themeInstance}
   */
  themeInstance: DefaultTheme;
}
