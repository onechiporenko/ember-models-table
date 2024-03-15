import { type ColumnSet } from '../interfaces/column-set.interface';

export interface ColumnDropdownOptions {
  showAll: boolean;
  hideAll: boolean;
  restoreDefaults: boolean;
  columnSets: ColumnSet[];
}
