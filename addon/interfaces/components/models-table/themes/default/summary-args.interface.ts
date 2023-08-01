import DefaultTheme from 'ember-models-table/services/emt-themes/default';

export interface SummaryArgs {
  /**
   * Bound from {@link Core.ModelsTable.themeInstance | ModelsTable.themeInstance}
   */
  themeInstance: DefaultTheme;
  /**
   * Bound from {@link Core.ModelsTable.firstIndex | ModelsTable.firstIndex}
   */
  firstIndex: number;
  /**
   * Bound from {@link Core.ModelsTable.lastIndex | ModelsTable.lastIndex}
   */
  lastIndex: number;
  /**
   * Bound from {@link Core.ModelsTable.arrangedContentLength | ModelsTable.arrangedContentLength}
   */
  recordsCount: number;
  /**
   * Bound from {@link Core.ModelsTable.anyFilterUsed | ModelsTable.anyFilterUsed}
   */
  anyFilterUsed: boolean;
  /**
   * Bound from {@link Core.ModelsTable.useNumericPagination | ModelsTable.useNumericPagination}
   */
  useNumericPagination: boolean;
  /**
   * Bound from {@link Core.ModelsTable.clearFilters | ModelsTable.clearFilters}
   *
   * @event clearFilters
   */
  clearFilters: () => void;
}
