import { TrackedArray } from 'tracked-built-ins';
import { isArray } from '@ember/array';
import { get } from '@ember/object';
import { isNone } from '@ember/utils';
import betterCompare from './better-compare.function';
import { SortConstants } from '../../constants/sort-constants';

export const chunkBy = <T>(
  collection: T[],
  propertyName: string,
  sortOrder?: string
): TrackedArray<T[]> => {
  const doSort = !isNone(sortOrder);
  const chunks: T[][] = [];
  const values: any[] = [];
  if (!isArray(collection)) {
    return new TrackedArray<T[]>([]);
  }
  collection.forEach((item) => {
    const value = get(item, propertyName as keyof typeof item);
    if (!values.includes(value)) {
      values.push(value);
      chunks.push([]);
    }
    const index = values.indexOf(value);
    chunks[index]?.push(item);
  });
  if (doSort) {
    return new TrackedArray<T[]>(
      values
        .slice()
        .sort((v1, v2) => {
          const result = betterCompare(v1, v2);
          if (result !== 0) {
            return sortOrder === SortConstants.desc ? -1 * result : result;
          }
          return 0;
        })
        .map((v) => chunks[values.indexOf(v)] || [])
    );
  }
  return new TrackedArray<T[]>(chunks);
};
