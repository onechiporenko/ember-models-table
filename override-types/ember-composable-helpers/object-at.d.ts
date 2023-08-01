import type Helper from '@ember/component/helper';

declare class ObjectAtHelper<T> extends Helper<{
  Args: { Positional: [index: number, array: T[] | undefined] };
  Return: T | undefined;
}> {}
