import type Helper from '@ember/component/helper';

declare class FilterByHelper<T> extends Helper<{
  Args: {
    Positional: [
      fieldName: string | undefined,
      fieldValue: unknown | ((...args: never[]) => unknown),
      array?: T[],
    ];
  };
  Return: T[];
}> {}
