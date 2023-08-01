import DefaultTheme from 'ember-models-table/services/emt-themes/default';

export interface GlobalFilterArgs {
  /**
   * Bound from {@link Core.ModelsTable.filterString | ModelsTable.filterString}
   */
  value: string;
  /**
   * Bound from {@link Core.ModelsTable.globalFilterUsed | ModelsTable.globalFilterUsed}
   */
  globalFilterUsed: boolean;
  /**
   * Bound from {@link Core.ModelsTable.themeInstance | ModelsTable.themeInstance}
   */
  themeInstance: DefaultTheme;
  /**
   * Bound from {@link Core.ModelsTable.changeGlobalFilter | ModelsTable.changeGlobalFilter}
   *
   * @event changeGlobalFilter
   */
  changeGlobalFilter: (v: string) => void;
}
