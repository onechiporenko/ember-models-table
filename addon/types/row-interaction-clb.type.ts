import { ModelsTableDataItem } from '../types/models-table-data-item.type';

export type RowInteractionClb = (
  index: number,
  dataItem: ModelsTableDataItem,
) => void;
