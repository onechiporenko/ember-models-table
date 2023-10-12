import { get } from '@ember/object';
import ModelsTableColumn from './emt-column';

export const shownColumnsBody = (
  processedColumns: ModelsTableColumn[],
  colspanKey: 'colspanForSortCell' | 'colspanForFilterCell',
): ModelsTableColumn[] => {
  let skipCount = 0;
  return processedColumns.filter(
    (c: ModelsTableColumn, index: number, columns: ModelsTableColumn[]) => {
      const colspan = get(c, colspanKey) || 1;
      const isVisible = c.isVisible;
      const nextHiddenCells = columns
        .slice(index + 1, index + colspan)
        .filter((c) => c.isHidden);
      if (
        nextHiddenCells.length === colspan - 1 &&
        !isVisible &&
        colspan !== 1
      ) {
        return false;
      }
      if (skipCount) {
        skipCount--;
        return false;
      }
      if (colspan === 1) {
        return isVisible;
      }
      if (colspan > 1) {
        skipCount = colspan - 1;
      }
      return true;
    },
  );
};
