import { ColumnCustomFilterFn } from '../types/column-custom-filter-fn.type';

/*
 * Default filter-function used in the filter by columns
 *
 * @param {string} cellValue value in the table cell
 * @param {string} filterString needed substring
 * @return boolean
 */
export const defaultFilter: ColumnCustomFilterFn = (
  cellValue: string,
  filterString: string
): boolean => cellValue.includes(filterString);
