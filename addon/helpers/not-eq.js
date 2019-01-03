import { helper } from '@ember/component/helper';

export function notEq([v1, v2]/*, hash*/) {
  return v1 !== v2;
}

export default helper(notEq);
