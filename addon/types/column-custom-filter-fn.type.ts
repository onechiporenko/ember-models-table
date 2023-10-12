import { ModelsTableDataItem } from './models-table-data-item.type';

export type ColumnCustomFilterFn = (
  val: string,
  filterVal: string,
  row: ModelsTableDataItem,
) => boolean;
