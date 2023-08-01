export interface CellColumnSummaryArgs {
  /**
   * {@link Core.ModelsTable.selectedItems | ModelsTable.selectedItems} mapped by column's {@link Core.ModelsTableColumn.propertyName | propertyName}
   */
  mappedSelectedItems: number[];
  /**
   * {@link Core.ModelsTable.expandedItems | ModelsTable.expandedItems} mapped by column's {@link Core.ModelsTableColumn.propertyName | propertyName}
   */
  mappedExpandedItems: number[];
  /**
   * {@link Core.ModelsTable.data | ModelsTable.data} mapped by column's {@link Core.ModelsTableColumn.propertyName | propertyName}
   */
  mappedData: number[];
}
