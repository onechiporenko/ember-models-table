import { A } from '@ember/array';
import { EmberNativeArray } from '../../components/models-table';

// from https://github.com/emberjs/ember.js/blob/v3.24.2/packages/%40ember/object/lib/computed/reduce_computed_macros.js#L1062
export const intersection = <T>(
  ...arrays: EmberNativeArray[]
): EmberNativeArray => {
  if (!arrays.length) {
    return A<T>([]);
  }
  const results = (arrays.pop() || []).filter((candidate) => {
    for (let i = 0; i < arrays.length; i++) {
      let found = false;
      const array = arrays[i] || [];
      for (let j = 0; j < array.length; j++) {
        if (array[j] === candidate) {
          found = true;
          break;
        }
      }

      if (!found) {
        return false;
      }
    }

    return true;
  });
  return A(results);
};
