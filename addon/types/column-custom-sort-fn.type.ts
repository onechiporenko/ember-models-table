export type ColumnCustomSortFn = (
  val1: string | number | boolean,
  val2: string | number | boolean,
  direction?: string,
) => number;
