import Component from '@glimmer/component';

const sumBy = (collection: number[]): number =>
  collection ? collection.reduce((a, b) => a + b, 0) : 0;

const avgBy = (collection: number[], avg: number): number => {
  const count = collection.length;
  return count ? avg / count : 0;
};

const minBy = (collection: number[]): number | null =>
  collection ? Math.min(...collection) : null;

const maxBy = (collection: number[]): number | null =>
  collection ? Math.max(...collection) : null;

const medianBy = (collection: number[]): number | null => {
  if (!collection.length) {
    return null;
  }
  collection = collection.slice().sort((a, b) => a - b);
  const lowMiddle = Math.floor((collection.length - 1) / 2);
  const highMiddle = Math.ceil((collection.length - 1) / 2);
  return ((collection[lowMiddle] || 0) + (collection[highMiddle] || 0)) / 2;
};

export interface CellColumnSummaryArgs {
  /**
   * [[Core.ModelsTable.selectedItems | ModelsTable.selectedItems]] mapped by column's [[Core.ModelsTableColumn.propertyName | propertyName]]
   */
  mappedSelectedItems: number[];
  /**
   * [[Core.ModelsTable.expandedItems | ModelsTable.expandedItems]] mapped by column's [[Core.ModelsTableColumn.propertyName | propertyName]]
   */
  mappedExpandedItems: number[];
  /**
   * [[Core.ModelsTable.data | ModelsTable.data]] mapped by column's [[Core.ModelsTableColumn.propertyName | propertyName]]
   */
  mappedData: number[];
}

/**
 * Component for table-footer cells. Used as column-summary.
 *
 * It yields several properties:
 *
 * * [[DefaultTheme.CellColumnSummary.minSelected | minSelected]]
 * * [[DefaultTheme.CellColumnSummary.maxSelected | maxSelected]]
 * * [[DefaultTheme.CellColumnSummary.sumSelected | sumSelected]]
 * * [[DefaultTheme.CellColumnSummary.avgSelected | avgSelected]]
 * * [[DefaultTheme.CellColumnSummary.medianSelected | medianSelected]]
 * * [[DefaultTheme.CellColumnSummary.minData | minData]]
 * * [[DefaultTheme.CellColumnSummary.maxData | maxData]]
 * * [[DefaultTheme.CellColumnSummary.sumData | sumData]]
 * * [[DefaultTheme.CellColumnSummary.avgData | avgData]]
 * * [[DefaultTheme.CellColumnSummary.medianData | medianData]]
 *
 * Component should be used only for column with set `propertyName`.
 *
 * Component should be extended.
 */
export default class CellColumnSummary extends Component<CellColumnSummaryArgs> {
  /**
   * Min of mapped `selectedItems`
   */
  get minSelected(): number | null {
    return minBy(this.args.mappedSelectedItems);
  }

  /**
   * Min of mapped `data`
   */
  get minData(): number | null {
    return minBy(this.args.mappedData);
  }

  /**
   * Max of mapped `selectedItems`
   */
  get maxSelected(): number | null {
    return maxBy(this.args.mappedSelectedItems);
  }

  /**
   * Max of mapped `data`
   */
  get maxData(): number | null {
    return maxBy(this.args.mappedData);
  }

  /**
   * Sum of mapped `selectedItems`
   */
  get sumSelected(): number {
    return sumBy(this.args.mappedSelectedItems);
  }

  /**
   * Sum of mapped `data`
   */
  get sumData(): number {
    return sumBy(this.args.mappedData);
  }

  /**
   * Average of mapped `selectedItems`
   */
  get avgSelected(): number {
    return avgBy(this.args.mappedSelectedItems, this.sumSelected);
  }

  /**
   * Average of mapped `data`
   */
  get avgData(): number {
    return avgBy(this.args.mappedData, this.sumData);
  }

  /**
   * Median of mapped `selectedItems`
   */
  get medianSelected(): number | null {
    return medianBy(this.args.mappedSelectedItems);
  }

  /**
   * Median of mapped `data`
   */
  get medianData(): number | null {
    return medianBy(this.args.mappedData);
  }
}
