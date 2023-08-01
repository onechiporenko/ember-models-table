export interface ColumnSet {
  label: string;
  showColumns: string[] | ((...args: unknown[]) => boolean);
  hideOtherColumns: boolean;
  toggleSet: boolean;
}
