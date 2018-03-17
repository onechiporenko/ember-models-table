import {computed, get} from '@ember/object';

/**
 * @param {string} colspanKey
 * @returns {Ember.computed}
 */
export function shownColumns(colspanKey) {
  return computed(`processedColumns.@each.{isVisible,${colspanKey}}`, function () {
    let skipCount = 0;
    return get(this, 'processedColumns').filter((c, index, columns) => {
      const colspan = get(c, colspanKey);
      const isVisible = get(c, 'isVisible');
      const nextHiddenCells = columns.slice(index + 1, index + colspan).filter(c => get(c, 'isHidden'));
      if (get(nextHiddenCells, 'length') === colspan - 1 && !isVisible && colspan !== 1) {
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
  }).readOnly();
}
