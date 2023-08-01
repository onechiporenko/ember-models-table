import ModelsTableColumn from 'ember-models-table/utils/emt/emt-column';

export const NOT_SORTED = -1;

export const isSortedByDefault = (column: ModelsTableColumn): boolean =>
  Number(column.sortPrecedence) > NOT_SORTED;
