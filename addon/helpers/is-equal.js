import { helper } from '@ember/component/helper';

export function isEqual([left, right]/*, hash*/) {
  return left === right;
}

export default helper(isEqual);
