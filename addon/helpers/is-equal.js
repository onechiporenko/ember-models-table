import { helper } from '@ember/component/helper';

export function isEqual([left, right, type]/*, hash*/) {
  if (type === 'number') {
    return Number(left) === Number(right);
  }
  return left === right;
}

export default helper(isEqual);
