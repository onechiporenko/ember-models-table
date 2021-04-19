import { get } from '@ember/object';

export const shownColumnsBody = (processedColumns, colspanKey) => {
  let skipCount = 0;
  return processedColumns.filter((c, index, columns) => {
    const colspan = get(c, colspanKey);
    const isVisible = c.isVisible;
    const nextHiddenCells = columns
      .slice(index + 1, index + colspan)
      .filter((c) => c.isHidden);
    if (nextHiddenCells.length === colspan - 1 && !isVisible && colspan !== 1) {
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
  });
};
